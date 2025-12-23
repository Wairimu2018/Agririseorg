// import { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import Layout from '@/components/Layout';
// import ConsultationForm from '@/components/ConsultationForm';
// import { 
//   Brain, 
//   BarChart3, 
//   Eye, 
//   TrendingUp, 
//   Zap, 
//   Target,
//   LineChart,
//   PieChart,
//   Activity,
//   Cpu,
//   CheckCircle,
//   ArrowRight,
//   Satellite,
//   CloudRain,
//   Leaf,
//   MapPin,
//   Globe,
//   AlertTriangle
// } from 'lucide-react';

// const AIDataAnalytics = () => {
//   const capabilities = [
//     {
//       icon: <Satellite className="w-6 h-6 text-primary" />,
//       title: "Satellite Imagery Analytics",
//       description: "Monitor fields from space with high-resolution satellite data for comprehensive crop insights"
//     },
//     {
//       icon: <Eye className="w-6 h-6 text-primary" />,
//       title: "Crop Health Monitoring",
//       description: "Real-time assessment of crop stress, disease detection, and growth stage analysis"
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6 text-primary" />,
//       title: "Yield Prediction",
//       description: "ML-powered yield estimation and harvest date forecasting with 95% accuracy"
//     },
//     {
//       icon: <CloudRain className="w-6 h-6 text-primary" />,
//       title: "Weather Integration",
//       description: "Real-time weather data and extreme event alerts for proactive farm management"
//     },
//     {
//       icon: <Brain className="w-6 h-6 text-primary" />,
//       title: "Machine Learning Models",
//       description: "Advanced algorithms trained on millions of agricultural data points"
//     },
//     {
//       icon: <Zap className="w-6 h-6 text-primary" />,
//       title: "Real-time Processing",
//       description: "Instant analysis and alerts for time-sensitive farming decisions"
//     }
//   ];

//   const fieldWiseFeatures = [
//     {
//       icon: <Globe className="w-8 h-8 text-primary" />,
//       title: "Monitor Fields From Space",
//       description: "Get accurate insights from satellite imagery, machine learning predictive models, and weather data to make the right decisions at the right time.",
//       highlights: ["Multi-spectral imagery analysis", "NDVI vegetation indices", "Temporal change detection"]
//     },
//     {
//       icon: <Leaf className="w-8 h-8 text-primary" />,
//       title: "Crop Health Intelligence",
//       description: "Advanced remote sensing technology detects crop stress, nutrient deficiencies, and disease outbreaks before they're visible to the naked eye.",
//       highlights: ["Early stress detection", "Nutrient deficiency mapping", "Disease outbreak alerts"]
//     },
//     {
//       icon: <MapPin className="w-8 h-8 text-primary" />,
//       title: "Geo-Tagged Farm Management",
//       description: "Unified farmer databases with geo-tagged farms enable precise field-level monitoring and state-wide agricultural insights.",
//       highlights: ["Field boundary mapping", "Zone-based analytics", "Historical comparison"]
//     },
//     {
//       icon: <AlertTriangle className="w-8 h-8 text-primary" />,
//       title: "Extreme Events & Alerts",
//       description: "Receive real-time alerts for weather extremes, pest invasions, and market conditions with automated impact assessment.",
//       highlights: ["Weather event alerts", "Crop loss assessment", "Risk mitigation guidance"]
//     }
//   ];

//   const useCases = [
//     {
//       title: "Yield Prediction & Harvest Planning",
//       description: "Receive inputs on estimated yield and harvest dates powered by satellite analytics and ML models",
//       features: ["Satellite-based crop monitoring", "Weather correlation modeling", "Harvest date estimation", "Market planning optimization"]
//     },
//     {
//       title: "Crop Health & Disease Detection",
//       description: "Monitor crop health and stress levels across your entire farm using remote sensing technology",
//       features: ["Multi-spectral image analysis", "Early warning systems", "Treatment recommendations", "Spread prevention strategies"]
//     },
//     {
//       title: "Insurance & Risk Assessment",
//       description: "Make informed investments with climate and farm analytics for accurate risk assessment and crop loss monitoring",
//       features: ["Crop sown & harvested tracking", "Remote sensing loss assessment", "Farm productivity data", "Yield estimation reports"]
//     }
//   ];

//   const metrics = [
//     { label: "Prediction Accuracy", value: "95%", icon: <Target className="w-6 h-6 text-primary" /> },
//     { label: "Cost Reduction", value: "30%", icon: <TrendingUp className="w-6 h-6 text-earth" /> },
//     { label: "Satellite Data Points", value: "50M+", icon: <Satellite className="w-6 h-6 text-harvest" /> },
//     { label: "Alert Response", value: "<1hr", icon: <Zap className="w-6 h-6 text-primary" /> }
//   ];

//   const benefits = [
//     "Monitor crop health across state-wide regions using satellite imagery",
//     "Receive recommendations on suitable seeds and optimal sowing windows",
//     "Get agronomy and input recommendations for better crop growth",
//     "Receive alerts and advisory for enhanced crop protection",
//     "Access market linkage and price forecasts for better revenue planning",
//     "Automated crop loss assessment via advanced remote sensing"
//   ];

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-pulse"></div>
//             <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/50 rounded-full"></div>
//             <div className="absolute top-40 right-40 w-16 h-16 bg-primary/20 rounded-lg rotate-45"></div>
//           </div>
//           <div className="container mx-auto px-4 relative z-10">
//             <div className="max-w-4xl mx-auto text-center">
//               <Badge variant="outline" className="mb-4 text-primary border-primary">
//                 Powered by fieldWISE Technology
//               </Badge>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//                 AI & Satellite
//                 <span className="block text-primary">Analytics Platform</span>
//               </h1>
//               <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
//                 Transform your farming with satellite imagery, machine learning predictive models, 
//                 and real-time weather data. Monitor fields from space and make data-driven 
//                 decisions at the right time.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
//                       <Satellite className="mr-2 w-5 h-5" />
//                       Start Satellite Monitoring
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Start Satellite Monitoring</DialogTitle>
//                     </DialogHeader>
//                     <ConsultationForm />
//                   </DialogContent>
//                 </Dialog>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" size="lg">
//                       Watch Demo
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

//         {/* fieldWISE Technology Section */}
//         <section className="py-20 bg-muted/30">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <Badge variant="secondary" className="mb-4">
//                 fieldWISE Integration
//               </Badge>
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Transforming Farms with Space Technology
//               </h2>
//               <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//                 Our platform integrates cutting-edge satellite imagery and AI to revolutionize 
//                 agriculture with sustainability, financial inclusion, and enhanced food security.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {fieldWiseFeatures.map((feature, index) => (
//                 <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-l-4 border-l-primary">
//                   <CardHeader>
//                     <div className="flex items-start gap-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
//                         <CardDescription className="text-base">{feature.description}</CardDescription>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-2">
//                       {feature.highlights.map((highlight, idx) => (
//                         <Badge key={idx} variant="secondary" className="text-xs">
//                           {highlight}
//                         </Badge>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Capabilities Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 AI-Powered Capabilities
//               </h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Advanced artificial intelligence and satellite technology designed for modern agriculture
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {capabilities.map((capability, index) => (
//                 <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
//                   <CardHeader>
//                     <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                       {capability.icon}
//                     </div>
//                     <CardTitle className="text-xl">{capability.title}</CardTitle>
//                     <CardDescription>{capability.description}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Use Cases Section */}
//         <section className="py-20 bg-muted/30">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Real-World Applications
//               </h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 See how satellite analytics and AI solve critical agricultural challenges
//               </p>
//             </div>

//             <Tabs defaultValue="yield" className="max-w-4xl mx-auto">
//               <TabsList className="grid w-full grid-cols-3">
//                 <TabsTrigger value="yield">Yield Prediction</TabsTrigger>
//                 <TabsTrigger value="health">Crop Health</TabsTrigger>
//                 <TabsTrigger value="insurance">Risk Assessment</TabsTrigger>
//               </TabsList>
              
//               {useCases.map((useCase, index) => (
//                 <TabsContent key={index} value={index === 0 ? "yield" : index === 1 ? "health" : "insurance"}>
//                   <Card className="border-t-4 border-t-primary">
//                     <CardHeader>
//                       <CardTitle className="text-2xl flex items-center gap-2">
//                         {index === 0 && <TrendingUp className="w-6 h-6 text-primary" />}
//                         {index === 1 && <Leaf className="w-6 h-6 text-primary" />}
//                         {index === 2 && <AlertTriangle className="w-6 h-6 text-primary" />}
//                         {useCase.title}
//                       </CardTitle>
//                       <CardDescription className="text-lg">{useCase.description}</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {useCase.features.map((feature, idx) => (
//                           <div key={idx} className="flex items-center gap-3">
//                             <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
//                             <span className="text-muted-foreground">{feature}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </TabsContent>
//               ))}
//             </Tabs>
//           </div>
//         </section>

//         {/* Metrics Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Proven Performance
//               </h2>
//               <p className="text-lg text-muted-foreground">
//                 Real results from farms using our satellite analytics platform
//               </p>
//             </div>
            
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
//               {metrics.map((metric, index) => (
//                 <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
//                   <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-3">
//                     {metric.icon}
//                   </div>
//                   <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
//                   <div className="text-sm text-muted-foreground">{metric.label}</div>
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
//                 <Badge variant="secondary" className="mb-4">
//                   Farmer-Focused Solutions
//                 </Badge>
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//                   Intelligence That Delivers
//                 </h2>
//                 <p className="text-lg text-muted-foreground mb-8">
//                   Our intuitive platform offers advisory and services to boost farm productivity 
//                   and maximize farmer revenue through satellite-powered insights.
//                 </p>
//                 <div className="space-y-4">
//                   {benefits.map((benefit, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
//                       <span className="text-muted-foreground">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <Button className="mt-8" size="lg">
//                   Start Free Trial
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </Button>
//               </div>
              
//               <div className="relative">
//                 <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
//                   <div className="text-center">
//                     <Satellite className="w-16 h-16 text-primary mx-auto mb-4" />
//                     <h3 className="text-2xl font-bold text-foreground mb-4">Real-Time Satellite Dashboard</h3>
//                     <p className="text-muted-foreground mb-6">
//                       Monitor all your fields from space with an intuitive interface showing 
//                       crop health, weather alerts, and yield predictions.
//                     </p>
//                     <div className="grid grid-cols-3 gap-4 text-center">
//                       <div>
//                         <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
//                         <div className="text-sm text-muted-foreground">Satellite View</div>
//                       </div>
//                       <div>
//                         <Leaf className="w-8 h-8 text-earth mx-auto mb-2" />
//                         <div className="text-sm text-muted-foreground">Crop Health</div>
//                       </div>
//                       <div>
//                         <TrendingUp className="w-8 h-8 text-harvest mx-auto mb-2" />
//                         <div className="text-sm text-muted-foreground">Yield Forecast</div>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-3xl mx-auto">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Ready to Monitor Your Fields From Space?
//               </h2>
//               <p className="text-lg text-muted-foreground mb-8">
//                 Join thousands of farmers leveraging satellite imagery and AI analytics to 
//                 increase yields, reduce risks, and make smarter farming decisions.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
//                       <Satellite className="mr-2 w-5 h-5" />
//                       Start Satellite Monitoring
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Start Satellite Monitoring</DialogTitle>
//                     </DialogHeader>
//                     <ConsultationForm />
//                   </DialogContent>
//                 </Dialog>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" size="lg">
//                       Book Consultation
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Book a Consultation</DialogTitle>
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

// export default AIDataAnalytics;
