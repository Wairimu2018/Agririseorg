// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import Layout from '@/components/Layout';
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
//   ArrowRight
// } from 'lucide-react';

// const AIDataAnalytics = () => {
//   const capabilities = [
//     {
//       icon: <Brain className="w-6 h-6 text-primary" />,
//       title: "Machine Learning Models",
//       description: "Advanced algorithms trained on millions of agricultural data points"
//     },
//     {
//       icon: <Eye className="w-6 h-6 text-primary" />,
//       title: "Computer Vision",
//       description: "Automated crop health assessment and disease detection from imagery"
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6 text-primary" />,
//       title: "Predictive Analytics",
//       description: "Forecast yields, weather impacts, and optimal harvest timing"
//     },
//     {
//       icon: <Target className="w-6 h-6 text-primary" />,
//       title: "Precision Recommendations",
//       description: "Field-specific advice for fertilization, irrigation, and pest control"
//     },
//     {
//       icon: <BarChart3 className="w-6 h-6 text-primary" />,
//       title: "Data Integration",
//       description: "Combine sensor data, weather, soil tests, and satellite imagery"
//     },
//     {
//       icon: <Zap className="w-6 h-6 text-primary" />,
//       title: "Real-time Processing",
//       description: "Instant analysis and alerts for time-sensitive farming decisions"
//     }
//   ];

//   const useCases = [
//     {
//       title: "Yield Prediction",
//       description: "Predict harvest yields with 95% accuracy up to 30 days in advance",
//       features: ["Historical yield analysis", "Weather correlation modeling", "Crop stage monitoring", "Market planning optimization"]
//     },
//     {
//       title: "Disease Detection",
//       description: "Identify crop diseases and pests before they become visible to the naked eye",
//       features: ["Computer vision analysis", "Early warning systems", "Treatment recommendations", "Spread prevention strategies"]
//     },
//     {
//       title: "Resource Optimization",
//       description: "Maximize efficiency of water, fertilizer, and energy usage across your farm",
//       features: ["Input cost reduction", "Environmental impact assessment", "ROI optimization", "Sustainability metrics"]
//     }
//   ];

//   const metrics = [
//     { label: "Accuracy Rate", value: "95%", icon: <Target className="w-6 h-6 text-primary" /> },
//     { label: "Cost Reduction", value: "30%", icon: <TrendingUp className="w-6 h-6 text-earth" /> },
//     { label: "Data Points", value: "10M+", icon: <BarChart3 className="w-6 h-6 text-harvest" /> },
//     { label: "Processing Speed", value: "<1s", icon: <Zap className="w-6 h-6 text-primary" /> }
//   ];

//   const benefits = [
//     "Increase crop yields by up to 25% through optimized farming practices",
//     "Reduce input costs by 30% with precise resource allocation",
//     "Detect diseases 2-3 weeks earlier than traditional methods",
//     "Minimize crop losses with predictive weather impact modeling",
//     "Automate decision-making for routine farming operations",
//     "Generate detailed reports for compliance and certification"
//   ];

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <Badge variant="outline" className="mb-4 text-primary border-primary">
//                 Artificial Intelligence
//               </Badge>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//                 AI & Data
//                 <span className="block text-primary">Analytics Platform</span>
//               </h1>
//               <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
//                 Harness the power of artificial intelligence and machine learning to transform 
//                 your farm data into actionable insights. Make smarter decisions with predictive 
//                 analytics and automated recommendations.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
//                   Try AI Analytics
//                 </Button>
//                 <Button variant="outline" size="lg">
//                   Watch Demo
//                 </Button>
//               </div>
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
//                 Advanced artificial intelligence tools designed specifically for modern agriculture
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
//                 See how our AI solutions solve common agricultural challenges
//               </p>
//             </div>

//             <Tabs defaultValue="yield" className="max-w-4xl mx-auto">
//               <TabsList className="grid w-full grid-cols-3">
//                 <TabsTrigger value="yield">Yield Prediction</TabsTrigger>
//                 <TabsTrigger value="disease">Disease Detection</TabsTrigger>
//                 <TabsTrigger value="optimization">Resource Optimization</TabsTrigger>
//               </TabsList>
              
//               {useCases.map((useCase, index) => (
//                 <TabsContent key={index} value={index === 0 ? "yield" : index === 1 ? "disease" : "optimization"}>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-2xl">{useCase.title}</CardTitle>
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
//                 Real results from farms using our AI analytics platform
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
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//                   Intelligence That Delivers
//                 </h2>
//                 <p className="text-lg text-muted-foreground mb-8">
//                   Our AI platform doesn't just analyze data – it provides actionable insights 
//                   that directly impact your bottom line and farming efficiency.
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
//                 <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
//                   <div className="text-center">
//                     <Activity className="w-16 h-16 text-primary mx-auto mb-4" />
//                     <h3 className="text-2xl font-bold text-foreground mb-4">Real-Time Dashboard</h3>
//                     <p className="text-muted-foreground mb-6">
//                       Monitor all your AI insights and recommendations from a single, intuitive interface
//                     </p>
//                     <div className="grid grid-cols-3 gap-4 text-center">
//                       <div>
//                         <LineChart className="w-8 h-8 text-primary mx-auto mb-2" />
//                         <div className="text-sm text-muted-foreground">Trends</div>
//                       </div>
//                       <div>
//                         <PieChart className="w-8 h-8 text-earth mx-auto mb-2" />
//                         <div className="text-sm text-muted-foreground">Analytics</div>
//                       </div>
//                       <div>
//                         <Cpu className="w-8 h-8 text-harvest mx-auto mb-2" />
//                         <div className="text-sm text-muted-foreground">AI Insights</div>
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
//                 Ready to Unlock Your Farm's Potential?
//               </h2>
//               <p className="text-lg text-muted-foreground mb-8">
//                 Join thousands of farmers who are already using AI to increase yields, 
//                 reduce costs, and make smarter farming decisions.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
//                   Start AI Analysis
//                 </Button>
//                 <Button variant="outline" size="lg">
//                   Book Consultation
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Layout>
//   );
// };

// export default AIDataAnalytics;