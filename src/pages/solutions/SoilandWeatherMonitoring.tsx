// import { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import Layout from '@/components/Layout';
// import ConsultationForm from '@/components/ConsultationForm';
// import { 
//   Gauge, 
//   CloudRain, 
//   Thermometer, 
//   BarChart3, 
//   Bell, 
//   Smartphone,
//   Wifi,
//   Calendar,
//   TrendingUp,
//   MapPin,
//   CheckCircle
// } from 'lucide-react';

// const SoilWeatherMonitoring = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const features = [
//     {
//       icon: <Gauge className="w-6 h-6 text-primary" />,
//       title: "Soil Moisture Sensors",
//       description: "Real-time monitoring of soil moisture levels at multiple depths"
//     },
//     {
//       icon: <Thermometer className="w-6 h-6 text-primary" />,
//       title: "Temperature Tracking",
//       description: "Continuous soil and air temperature monitoring with precision sensors"
//     },
//     {
//       icon: <CloudRain className="w-6 h-6 text-primary" />,
//       title: "Weather Station Integration",
//       description: "Complete weather data including rainfall, humidity, wind speed and direction"
//     },
//     {
//       icon: <Bell className="w-6 h-6 text-primary" />,
//       title: "Smart Alerts",
//       description: "Instant notifications for critical conditions and anomalies"
//     },
//     {
//       icon: <BarChart3 className="w-6 h-6 text-primary" />,
//       title: "Historical Analytics",
//       description: "Long-term data analysis and trend identification"
//     },
//     {
//       icon: <Smartphone className="w-6 h-6 text-primary" />,
//       title: "Mobile Dashboard",
//       description: "Access all monitoring data from your smartphone or tablet"
//     }
//   ];

//   const benefits = [
//     "Reduce water usage by up to 40% with precise irrigation timing",
//     "Prevent crop stress through early detection of adverse conditions",
//     "Optimize fertilizer application based on soil nutrient levels",
//     "Improve crop yields with data-driven farming decisions",
//     "Monitor multiple fields remotely from a single dashboard",
//     "Receive weather forecasts specific to your farm location"
//   ];

//   const specifications = [
//     { label: "Sensor Range", value: "0-50cm depth (customizable)" },
//     { label: "Data Transmission", value: "LoRaWAN, WiFi, Cellular" },
//     { label: "Battery Life", value: "Up to 5 years (solar rechargeable)" },
//     { label: "Weather Parameters", value: "12+ environmental factors" },
//     { label: "Update Frequency", value: "Every 15 minutes (configurable)" },
//     { label: "Data Storage", value: "Cloud-based with 10-year retention" }
//   ];

//   return (
//     <Layout>
//       <div className="bg-gradient-to-b from-background to-muted/30">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-r from-primary/10 to-earth/10">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <Badge variant="outline" className="mb-4 text-primary border-primary">
//                 Environmental Monitoring
//               </Badge>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//                 Soil & Weather
//                 <span className="block text-primary">Monitoring System</span>
//               </h1>
//               <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
//                 Make informed farming decisions with our comprehensive 24/7 environmental monitoring 
//                 solution. Track soil conditions, weather patterns, and environmental factors that 
//                 directly impact your crop performance.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
//                   <DialogTrigger asChild>
//                     <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
//                       Start Free Trial
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Start Your Free Trial</DialogTitle>
//                     </DialogHeader>
//                     <ConsultationForm onClose={() => setIsFormOpen(false)} />
//                   </DialogContent>
//                 </Dialog>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" size="lg">
//                       View Live Demo
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Schedule a Live Demo</DialogTitle>
//                     </DialogHeader>
//                     <ConsultationForm />
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Advanced Monitoring Features
//               </h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Our sensors provide real-time data on all the environmental factors that matter to your crops
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {features.map((feature, index) => (
//                 <Card key={index} className="text-center hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-earth/20 rounded-xl flex items-center justify-center mb-4">
//                       {feature.icon}
//                     </div>
//                     <CardTitle className="text-xl">{feature.title}</CardTitle>
//                     <CardDescription>{feature.description}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section className="py-20 bg-muted/30">
//           <div className="container mx-auto px-4">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//                   Data-Driven Results
//                 </h2>
//                 <p className="text-lg text-muted-foreground mb-8">
//                   Transform your farming operations with actionable insights from continuous 
//                   environmental monitoring. Our system helps you optimize every aspect of 
//                   crop production.
//                 </p>
//                 <div className="space-y-4">
//                   {benefits.map((benefit, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
//                       <span className="text-muted-foreground">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <Card className="text-center p-6">
//                   <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
//                   <div className="text-2xl font-bold text-foreground">40%</div>
//                   <div className="text-sm text-muted-foreground">Water Savings</div>
//                 </Card>
//                 <Card className="text-center p-6">
//                   <MapPin className="w-8 h-8 text-earth mx-auto mb-3" />
//                   <div className="text-2xl font-bold text-foreground">25%</div>
//                   <div className="text-sm text-muted-foreground">Yield Increase</div>
//                 </Card>
//                 <Card className="text-center p-6">
//                   <Calendar className="w-8 h-8 text-harvest mx-auto mb-3" />
//                   <div className="text-2xl font-bold text-foreground">24/7</div>
//                   <div className="text-sm text-muted-foreground">Monitoring</div>
//                 </Card>
//                 <Card className="text-center p-6">
//                   <Wifi className="w-8 h-8 text-primary mx-auto mb-3" />
//                   <div className="text-2xl font-bold text-foreground">99.9%</div>
//                   <div className="text-sm text-muted-foreground">Uptime</div>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Specifications Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                   Technical Specifications
//                 </h2>
//                 <p className="text-lg text-muted-foreground">
//                   Professional-grade sensors designed for harsh agricultural environments
//                 </p>
//               </div>
              
//               <Card>
//                 <CardContent className="p-8">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {specifications.map((spec, index) => (
//                       <div key={index} className="flex justify-between items-center py-3">
//                         <span className="font-medium text-foreground">{spec.label}</span>
//                         <span className="text-muted-foreground">{spec.value}</span>
//                         {index < specifications.length - 1 && <Separator className="mt-3" />}
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-primary/10 to-earth/10">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-3xl mx-auto">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Ready to Monitor Your Farm?
//               </h2>
//               <p className="text-lg text-muted-foreground mb-8">
//                 Start with a free trial and see how environmental monitoring can transform 
//                 your farming operations. No long-term commitment required.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
//                       Start Free Trial
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Start Your Free Trial</DialogTitle>
//                     </DialogHeader>
//                     <ConsultationForm />
//                   </DialogContent>
//                 </Dialog>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" size="lg">
//                       Schedule Demo
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Schedule a Demo</DialogTitle>
//                     </DialogHeader>
//                     <ConsultationForm />
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Layout>
//   );
// };

// export default SoilWeatherMonitoring;