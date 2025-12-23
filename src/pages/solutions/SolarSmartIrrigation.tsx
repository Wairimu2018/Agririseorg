// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { ArrowLeft, Sun, Droplets, Battery, TrendingDown } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import ConsultationForm from '@/components/ConsultationForm';
// import solarIrrigationImage from '@/assets/solar-irrigation.jpg';

// const SolarSmartIrrigation = () => {
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
//             <Badge className="mb-4 bg-harvest/10 text-harvest border-harvest/20">
//               Solar Technology
//             </Badge>
//             <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               Solar Smart Irrigation
//             </h1>
//             <p className="text-lg text-muted-foreground mb-8">
//               Harness the power of the sun to create sustainable, cost-effective irrigation systems that reduce energy costs by 80% while optimizing water usage for maximum crop yield.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <div className="flex items-center space-x-2">
//                 <TrendingDown className="w-5 h-5 text-harvest" />
//                 <span className="text-sm font-medium">80% Energy Savings</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Droplets className="w-5 h-5 text-primary" />
//                 <span className="text-sm font-medium">40% Water Conservation</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Sun className="w-5 h-5 text-harvest" />
//                 <span className="text-sm font-medium">Zero Carbon Footprint</span>
//               </div>
//             </div>
//           </div>
//           <div className="relative">
//             <img 
//               src={solarIrrigationImage} 
//               alt="Solar Smart Irrigation System" 
//               className="w-full h-96 object-cover rounded-xl shadow-lg"
//             />
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           <Card>
//             <CardHeader>
//               <Sun className="w-8 h-8 text-harvest mb-2" />
//               <CardTitle>Solar Panel Integration</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 High-efficiency solar panels designed specifically for agricultural environments, with weather-resistant construction and optimal positioning systems.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <Droplets className="w-8 h-8 text-primary mb-2" />
//               <CardTitle>Smart Water Management</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 AI-powered water distribution systems that monitor soil moisture, weather conditions, and crop needs to deliver precise irrigation scheduling.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <Battery className="w-8 h-8 text-earth mb-2" />
//               <CardTitle>Energy Storage</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Advanced battery storage systems ensure continuous operation even during cloudy days or nighttime irrigation cycles.
//               </CardDescription>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="text-center">
//           <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
//             <DialogTrigger asChild>
//               <Button 
//                 size="lg" 
//                 className="bg-gradient-to-r from-harvest to-primary"
//               >
//                 Request Consultation
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>Request Solar Smart Irrigation Consultation</DialogTitle>
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

// export default SolarSmartIrrigation;