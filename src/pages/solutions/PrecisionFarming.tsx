// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { ArrowLeft, Gauge, Satellite, MapPin, Activity, Plane, Target, Map, Bug } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import ConsultationForm from '@/components/ConsultationForm';
// import precisionFarmingImage from '@/assets/precision-farming.jpg';

// const PrecisionFarming = () => {
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
//             <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
//               Precision Technology
//             </Badge>
//             <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               Precision Farming Tools
//             </h1>
//             <p className="text-lg text-muted-foreground mb-8">
//               Transform your farming with cutting-edge precision agriculture technology. Our comprehensive suite includes drone imaging, variable rate applications, soil mapping, and predictive analytics to maximize yields while minimizing costs and environmental impact.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <div className="flex items-center space-x-2">
//                 <Activity className="w-5 h-5 text-primary" />
//                 <span className="text-sm font-medium">Real-time Monitoring</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Satellite className="w-5 h-5 text-earth" />
//                 <span className="text-sm font-medium">GPS Accuracy</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="w-5 h-5 text-harvest" />
//                 <span className="text-sm font-medium">Field Mapping</span>
//               </div>
//             </div>
//           </div>
//           <div className="relative">
//             <img 
//               src={precisionFarmingImage} 
//               alt="Precision Farming Tools" 
//               className="w-full h-96 object-cover rounded-xl shadow-lg"
//             />
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           <Card className="group hover:shadow-lg transition-all duration-300">
//             <CardHeader>
//               <Plane className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
//               <CardTitle>NDVI & Crop Health Imaging</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Advanced drone technology captures Normalized Difference Vegetation Index (NDVI) data for early detection of crop stress, pest damage, and nutrient deficiencies before they're visible to the naked eye.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card className="group hover:shadow-lg transition-all duration-300">
//             <CardHeader>
//               <Target className="w-8 h-8 text-earth mb-2 group-hover:scale-110 transition-transform" />
//               <CardTitle>Variable Rate Technology</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Smart application systems that precisely deliver water, fertilizers, and pesticides based on real-time field variability data from GPS and IoT sensors, reducing waste and maximizing efficiency.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card className="group hover:shadow-lg transition-all duration-300">
//             <CardHeader>
//               <Map className="w-8 h-8 text-harvest mb-2 group-hover:scale-110 transition-transform" />
//               <CardTitle>Nutrient Mapping & Soil Analysis</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Combines detailed soil test data with GPS technology to create precise nutrient management zones, providing customized fertilizer recommendations for each area of your field.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card className="group hover:shadow-lg transition-all duration-300">
//             <CardHeader>
//               <Bug className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
//               <CardTitle>Pest & Disease Prediction</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 AI-powered prediction models combined with our mobile scouting app help identify potential pest and disease threats before they impact your crops, enabling proactive treatment strategies.
//               </CardDescription>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="bg-muted/50 rounded-xl p-8 mb-16">
//           <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Complete Precision Agriculture System</h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h4 className="text-lg font-semibold text-foreground mb-4">Smart Monitoring & Analysis</h4>
//               <ul className="space-y-3">
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
//                   <span className="text-muted-foreground">Real-time soil moisture and nutrient monitoring across field zones</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
//                   <span className="text-muted-foreground">Weather stations tracking temperature, humidity, and precipitation patterns</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
//                   <span className="text-muted-foreground">GPS-guided equipment for precise field operations and reduced overlap</span>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-foreground mb-4">Advanced Applications</h4>
//               <ul className="space-y-3">
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-earth rounded-full mt-2"></div>
//                   <span className="text-muted-foreground">Drone-based crop health imaging and stress detection</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-earth rounded-full mt-2"></div>
//                   <span className="text-muted-foreground">Variable rate application of inputs based on field data</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-earth rounded-full mt-2"></div>
//                   <span className="text-muted-foreground">Mobile app for pest scouting and disease identification</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
//             <DialogTrigger asChild>
//               <Button 
//                 size="lg" 
//                 className="bg-gradient-to-r from-primary to-earth"
//               >
//                 Request Consultation
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>Request Precision Farming Consultation</DialogTitle>
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

// export default PrecisionFarming;