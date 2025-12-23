// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { ArrowLeft, Smartphone, Calendar, BarChart3 } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import ConsultationForm from '@/components/ConsultationForm';

// const FarmManagement = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       <Navigation />
      
//       <div className="container mx-auto px-4 py-8 flex-1">
//         <Link to="/solutions" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Solutions
//         </Link>

//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <div>
//             <Badge className="mb-4 bg-earth/10 text-earth border-earth/20">
//               Management Software
//             </Badge>
//             <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               Farm Management Software
//             </h1>
//             <p className="text-lg text-muted-foreground mb-8">
//               Comprehensive digital platform that centralizes all farm operations, from resource planning to inventory management, accessible from anywhere via mobile and web applications.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <div className="flex items-center space-x-2">
//                 <Calendar className="w-5 h-5 text-primary" />
//                 <span className="text-sm font-medium">Resource Planning</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <BarChart3 className="w-5 h-5 text-earth" />
//                 <span className="text-sm font-medium">Analytics Dashboard</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Smartphone className="w-5 h-5 text-harvest" />
//                 <span className="text-sm font-medium">Mobile Access</span>
//               </div>
//             </div>
//           </div>
//           <div className="relative bg-gradient-to-br from-primary/10 to-earth/10 rounded-xl p-8">
//             <div className="space-y-4">
//               <div className="bg-background rounded-lg p-4 shadow-sm">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm font-medium text-foreground">Field Analytics</span>
//                   <BarChart3 className="w-4 h-4 text-primary" />
//                 </div>
//                 <div className="w-full bg-muted rounded-full h-2">
//                   <div className="bg-primary h-2 rounded-full w-3/4"></div>
//                 </div>
//               </div>
//               <div className="bg-background rounded-lg p-4 shadow-sm">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm font-medium text-foreground">Inventory Status</span>
//                   <Calendar className="w-4 h-4 text-earth" />
//                 </div>
//                 <div className="text-xs text-muted-foreground">92% stocked</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           <Card>
//             <CardHeader>
//               <Calendar className="w-8 h-8 text-primary mb-2" />
//               <CardTitle>Resource Planning</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Plan and schedule all farm activities, from planting to harvest, with automated reminders and resource allocation.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <BarChart3 className="w-8 h-8 text-earth mb-2" />
//               <CardTitle>Inventory Management</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Track seeds, fertilizers, equipment, and supplies with automated reordering and cost optimization features.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <Smartphone className="w-8 h-8 text-harvest mb-2" />
//               <CardTitle>Mobile Accessibility</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Access your farm data and control systems from anywhere with our mobile app, even in remote field locations.
//               </CardDescription>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="text-center">
//           <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
//             <DialogTrigger asChild>
//               <Button size="lg" className="bg-gradient-to-r from-earth to-harvest">
//                 Request Demo
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>Request Farm Management Demo</DialogTitle>
//               </DialogHeader>
//               <ConsultationForm onClose={() => setIsFormOpen(false)} />
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default FarmManagement;