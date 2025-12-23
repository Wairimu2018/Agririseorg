// import { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import Layout from '@/components/Layout';
// import ConsultationForm from '@/components/ConsultationForm';
// import { 
//   Leaf, 
//   Recycle, 
//   Sun, 
//   Droplets, 
//   TreePine, 
//   Wind,
//   ShieldCheck,
//   TrendingDown,
//   Heart,
//   Globe,
//   CheckCircle,
//   ArrowRight,
//   BarChart3
// } from 'lucide-react';

// const SustainableAgTech = () => {
//   const solutions = [
//     {
//       icon: <Recycle className="w-6 h-6 text-primary" />,
//       title: "Carbon Footprint Tracking",
//       description: "Monitor and reduce your farm's carbon emissions with precision tracking and actionable insights"
//     },
//     {
//       icon: <Droplets className="w-6 h-6 text-primary" />,
//       title: "Water Conservation",
//       description: "Advanced irrigation systems that reduce water usage by up to 50% while maintaining crop health"
//     },
//     {
//       icon: <TreePine className="w-6 h-6 text-primary" />,
//       title: "Biodiversity Enhancement",
//       description: "Promote ecosystem health with integrated pest management and pollinator-friendly practices"
//     },
//     {
//       icon: <Wind className="w-6 h-6 text-primary" />,
//       title: "Renewable Energy",
//       description: "Solar and wind power solutions designed specifically for agricultural operations"
//     },
//     {
//       icon: <ShieldCheck className="w-6 h-6 text-primary" />,
//       title: "Organic Certification",
//       description: "Digital tools to maintain organic standards and streamline certification processes"
//     },
//     {
//       icon: <Heart className="w-6 h-6 text-primary" />,
//       title: "Soil Health Restoration",
//       description: "Regenerative practices that improve soil structure, fertility, and long-term productivity"
//     }
//   ];

//   const impactMetrics = [
//     { 
//       label: "CO2 Reduction", 
//       value: "40%", 
//       description: "Average carbon footprint reduction achieved by our partner farms",
//       color: "bg-primary"
//     },
//     { 
//       label: "Water Saved", 
//       value: "2.5M", 
//       description: "Gallons of water conserved annually across all implementations",
//       color: "bg-earth"
//     },
//     { 
//       label: "Energy Generated", 
//       value: "15MW", 
//       description: "Clean energy produced by on-farm renewable installations",
//       color: "bg-harvest"
//     },
//     { 
//       label: "Certified Farms", 
//       value: "500+", 
//       description: "Farms successfully achieving organic and sustainable certifications",
//       color: "bg-primary"
//     }
//   ];

//   const benefits = [
//     "Reduce operating costs through efficient resource management",
//     "Access premium markets and sustainability certifications",
//     "Improve long-term soil health and farm productivity",
//     "Meet consumer demand for sustainable products",
//     "Qualify for government sustainability incentives",
//     "Build resilience against climate change impacts"
//   ];

//   const certifications = [
//     { name: "USDA Organic", progress: 95 },
//     { name: "Rainforest Alliance", progress: 88 },
//     { name: "Fair Trade", progress: 92 },
//     { name: "Carbon Neutral", progress: 85 }
//   ];

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-r from-primary/10 to-earth/10">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <Badge variant="outline" className="mb-4 text-primary border-primary">
//                 Sustainable Agriculture
//               </Badge>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//                 Sustainable
//                 <span className="block text-primary">AgTech Solutions</span>
//               </h1>
//               <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
//                 Build a more sustainable and profitable farming operation with our eco-friendly 
//                 technology solutions. Reduce environmental impact while maximizing productivity 
//                 and profitability for future generations.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
//                       Start Sustainability Journey
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Start Your Sustainability Journey</DialogTitle>
//                     </DialogHeader>
//                     <ConsultationForm />
//                   </DialogContent>
//                 </Dialog>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" size="lg">
//                       Download Impact Report
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Get Impact Report</DialogTitle>
//                     </DialogHeader>
//                     <ConsultationForm />
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Solutions Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Comprehensive Sustainability Solutions
//               </h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Integrated technologies that help you farm more sustainably while maintaining profitability
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {solutions.map((solution, index) => (
//                 <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
//                   <CardHeader>
//                     <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-earth/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                       {solution.icon}
//                     </div>
//                     <CardTitle className="text-xl">{solution.title}</CardTitle>
//                     <CardDescription>{solution.description}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Impact Metrics Section */}
//         <section className="py-20 bg-muted/30">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Measurable Environmental Impact
//               </h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Real results from farms implementing our sustainable agriculture technologies
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {impactMetrics.map((metric, index) => (
//                 <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
//                   <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
//                   <div className="text-lg font-semibold text-primary mb-2">{metric.label}</div>
//                   <div className="text-sm text-muted-foreground">{metric.description}</div>
//                   <div className={`w-full h-1 ${metric.color} rounded-full mt-4`}></div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Certifications Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//                   Certification Support
//                 </h2>
//                 <p className="text-lg text-muted-foreground mb-8">
//                   Our platform helps you achieve and maintain various sustainability certifications, 
//                   opening doors to premium markets and better pricing for your products.
//                 </p>
//                 <div className="space-y-6">
//                   {certifications.map((cert, index) => (
//                     <div key={index} className="space-y-2">
//                       <div className="flex justify-between items-center">
//                         <span className="font-medium text-foreground">{cert.name}</span>
//                         <span className="text-sm text-muted-foreground">{cert.progress}% Complete</span>
//                       </div>
//                       <Progress value={cert.progress} className="h-2" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <Card className="p-8 bg-gradient-to-br from-primary/5 to-earth/5">
//                   <div className="text-center">
//                     <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
//                     <h3 className="text-2xl font-bold text-foreground mb-4">Global Impact</h3>
//                     <p className="text-muted-foreground mb-6">
//                       Join a worldwide network of sustainable farmers making a positive impact on the planet
//                     </p>
//                     <div className="grid grid-cols-2 gap-4 text-center">
//                       <div className="p-4 bg-background rounded-lg">
//                         <div className="text-2xl font-bold text-primary">50+</div>
//                         <div className="text-sm text-muted-foreground">Countries</div>
//                       </div>
//                       <div className="p-4 bg-background rounded-lg">
//                         <div className="text-2xl font-bold text-earth">10K+</div>
//                         <div className="text-sm text-muted-foreground">Farms</div>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section className="py-20 bg-muted/30">
//           <div className="container mx-auto px-4">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="relative">
//                 <Card className="p-8">
//                   <div className="text-center">
//                     <TrendingDown className="w-16 h-16 text-primary mx-auto mb-4" />
//                     <h3 className="text-2xl font-bold text-foreground mb-4">Cost Reduction</h3>
//                     <p className="text-muted-foreground mb-6">
//                       Sustainable practices often lead to significant cost savings through improved efficiency
//                     </p>
//                     <div className="space-y-3">
//                       <div className="flex justify-between items-center">
//                         <span className="text-sm">Energy Costs</span>
//                         <span className="text-primary font-semibold">-35%</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-sm">Water Usage</span>
//                         <span className="text-primary font-semibold">-45%</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-sm">Chemical Inputs</span>
//                         <span className="text-primary font-semibold">-30%</span>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </div>
              
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//                   Why Choose Sustainable AgTech?
//                 </h2>
//                 <p className="text-lg text-muted-foreground mb-8">
//                   Sustainable agriculture isn't just good for the environment – it's good for your 
//                   business. Our solutions help you build a more resilient and profitable operation.
//                 </p>
//                 <div className="space-y-4">
//                   {benefits.map((benefit, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
//                       <span className="text-muted-foreground">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <Button 
//                   className="mt-8" 
//                   size="lg"
//                   onClick={() => window.open("https://wa.me/254701234567?text=Hi! I am interested in learning more about your Sustainable AgTech Solutions. Could you provide more details about implementation and pricing?", "_blank")}
//                 >
//                   Get Started Today
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-primary/10 to-earth/10">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-3xl mx-auto">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Ready to Farm for the Future?
//               </h2>
//               <p className="text-lg text-muted-foreground mb-8">
//                 Start your sustainability journey today and join thousands of farmers who are 
//                 building more profitable and environmentally responsible operations.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
//                       Begin Sustainability Assessment
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Begin Your Assessment</DialogTitle>
//                     </DialogHeader>
//                     <ConsultationForm />
//                   </DialogContent>
//                 </Dialog>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" size="lg">
//                       Download Guide
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>Get Your Guide</DialogTitle>
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

// export default SustainableAgTech;