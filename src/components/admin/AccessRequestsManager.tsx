import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, UserPlus, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface AccessRequest {
  id: string;
  user_id: string;
  email: string;
  full_name: string;
  reason: string | null;
  status: string;
  created_at: string;
}

const AccessRequestsManager = () => {
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [confirmAction, setConfirmAction] = useState<{ id: string; action: 'approve' | 'reject' } | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from('admin_access_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching requests:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch access requests.',
        variant: 'destructive'
      });
    } else {
      setRequests(data || []);
    }
    setLoading(false);
  };

  const handleAction = async () => {
    if (!confirmAction) return;
    
    const { id, action } = confirmAction;
    setProcessingId(id);
    
    const request = requests.find(r => r.id === id);
    if (!request) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      // Update the request status
      const { error: updateError } = await supabase
        .from('admin_access_requests')
        .update({
          status: action === 'approve' ? 'approved' : 'rejected',
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString()
        })
        .eq('id', id);

      if (updateError) {
        throw updateError;
      }

      // If approved, add admin role
      if (action === 'approve') {
        const { error: roleError } = await supabase
          .from('user_roles')
          .insert({
            user_id: request.user_id,
            role: 'admin'
          });

        if (roleError) {
          // Rollback status update if role creation fails
          await supabase
            .from('admin_access_requests')
            .update({ status: 'pending', reviewed_by: null, reviewed_at: null })
            .eq('id', id);
          throw roleError;
        }
      }

      toast({
        title: action === 'approve' ? 'Access Granted' : 'Request Rejected',
        description: action === 'approve' 
          ? `${request.full_name} now has admin access.`
          : `Access request from ${request.full_name} has been rejected.`
      });

      fetchRequests();
    } catch (error: any) {
      console.error('Error processing request:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to process request.',
        variant: 'destructive'
      });
    } finally {
      setProcessingId(null);
      setConfirmAction(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'approved':
        return <Badge className="bg-green-500">Approved</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const pendingRequests = requests.filter(r => r.status === 'pending');
  const processedRequests = requests.filter(r => r.status !== 'pending');

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            Access Requests
            {pendingRequests.length > 0 && (
              <Badge variant="destructive">{pendingRequests.length} pending</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {requests.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No access requests yet.
            </p>
          ) : (
            <div className="space-y-6">
              {/* Pending Requests */}
              {pendingRequests.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Pending Requests</h3>
                  <div className="space-y-3">
                    {pendingRequests.map((request) => (
                      <div 
                        key={request.id} 
                        className="p-4 border border-border rounded-lg bg-card"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-foreground">{request.full_name}</span>
                              {getStatusBadge(request.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">{request.email}</p>
                            {request.reason && (
                              <p className="text-sm text-muted-foreground mt-2 italic">
                                "{request.reason}"
                              </p>
                            )}
                            <p className="text-xs text-muted-foreground mt-2">
                              Requested: {formatDate(request.created_at)}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => setConfirmAction({ id: request.id, action: 'approve' })}
                              disabled={processingId === request.id}
                            >
                              {processingId === request.id ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <>
                                  <Check className="w-4 h-4 mr-1" />
                                  Approve
                                </>
                              )}
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => setConfirmAction({ id: request.id, action: 'reject' })}
                              disabled={processingId === request.id}
                            >
                              <X className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Processed Requests */}
              {processedRequests.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Previous Requests</h3>
                  <div className="space-y-2">
                    {processedRequests.map((request) => (
                      <div 
                        key={request.id} 
                        className="p-3 border border-border/50 rounded-lg bg-muted/30"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground">{request.full_name}</span>
                              {getStatusBadge(request.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">{request.email}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(request.created_at)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <AlertDialog open={!!confirmAction} onOpenChange={() => setConfirmAction(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {confirmAction?.action === 'approve' ? 'Approve Access?' : 'Reject Request?'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {confirmAction?.action === 'approve'
                ? 'This will grant admin privileges to this user. They will be able to manage posts and content.'
                : 'This will reject the access request. The user will not be granted admin privileges.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleAction}
              className={confirmAction?.action === 'reject' ? 'bg-destructive text-destructive-foreground' : ''}
            >
              {confirmAction?.action === 'approve' ? 'Approve' : 'Reject'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AccessRequestsManager;
