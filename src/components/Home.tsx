// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Cpu, 
//   Smartphone, 
//   Gauge, 
//   Brain, 
//   Leaf, 
//   ArrowRight,
//   Sun
// } from 'lucide-react';

// const Solutions = () => {
//   const navigate = useNavigate();
//   const solutions = [
//     {
//       icon: <Sun className="w-8 h-8 text-harvest" />,
//       title: "Solar Smart Irrigation",
//       description: "Solar-powered irrigation systems with AI-driven water management, reducing energy costs by 80% while optimizing crop hydration.",
//       features: ["Solar panel integration", "Smart water sensors", "Weather-based scheduling"],
//       color: "from-harvest to-primary"
//     },
//     {
//       icon: <Gauge className="w-8 h-8 text-primary" />,
//       title: "Precision Farming Tools",
//       description: "Advanced sensors and IoT devices for real-time monitoring of soil conditions, weather patterns, and crop health.",
//       features: ["Soil moisture sensors", "Weather monitoring", "GPS-guided equipment"],
//       color: "from-primary to-primary-light"
//     },
//     {
//       icon: <Smartphone className="w-8 h-8 text-accent-foreground" />,
//       title: "Farm Management Software",
//       description: "Comprehensive platform to manage operations, track resources, and optimize farm productivity from anywhere.",
//       features: ["Resource planning", "Inventory management", "Mobile accessibility"],
//       color: "from-accent-foreground to-primary"
//     },
//     {
//       icon: <Cpu className="w-8 h-8 text-earth" />,
//       title: "Soil & Weather Monitoring",
//       description: "24/7 environmental monitoring with predictive analytics to help you make informed farming decisions.",
//       features: ["Real-time alerts", "Historical data", "Predictive insights"],
//       color: "from-earth to-harvest"
//     },
//     {
//       icon: <Brain className="w-8 h-8 text-primary-light" />,
//       title: "AI & Data Analytics",
//       description: "Machine learning algorithms that analyze your farm data to provide actionable insights and recommendations.",
//       features: ["Yield prediction", "Disease detection", "Optimization algorithms"],
//       color: "from-primary-light to-sky"
//     },
//     {
//       icon: <Leaf className="w-8 h-8 text-primary" />,
//       title: "Sustainable AgTech",
//       description: "Eco-friendly solutions that reduce environmental impact while maximizing productivity and profitability.",
//       features: ["Carbon footprint tracking", "Water conservation", "Organic farming support"],
//       color: "from-primary to-accent-foreground"
//     }
//   ];

//   return (
//     <section className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
//             Our Solutions
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             Smart Technology for
//             <span className="block text-primary">Modern Agriculture</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Discover our comprehensive suite of agricultural technology solutions designed to help farmers 
//             increase productivity, reduce costs, and build sustainable operations.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {solutions.map((solution, index) => (
//             <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
//               <CardHeader>
//                 <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                   {solution.icon}
//                 </div>
//                 <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
//                   {solution.title}
//                 </CardTitle>
//                 <CardDescription className="text-muted-foreground">
//                   {solution.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 mb-6">
//                   {solution.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-muted-foreground">
//                       <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
//                   onClick={() => {
//                     const routeMap: Record<string, string> = {
//                       'Solar Smart Irrigation': '/solutions/solar-smart-irrigation',
//                       'Precision Farming Tools': '/solutions/precision-farming',
//                       'Farm Management Software': '/solutions/farm-management',
//                       'Soil & Weather Monitoring': '/solutions/soil-weather-monitoring',
//                       'AI & Data Analytics': '/solutions/ai-data-analytics',
//                       'Sustainable AgTech': '/solutions/sustainable-agtech'
//                     };
//                     const route = routeMap[solution.title];
//                     if (route) {
//                       navigate(route);
//                     }
//                   }}
//                 >
//                   Learn More
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center">
//           <Button 
//             size="lg" 
//             className="bg-gradient-to-r from-primary to-primary-light shadow-lg"
//             onClick={() => navigate('/solutions')}
//           >
//             Explore All Solutions
//             <ArrowRight className="ml-2 w-5 h-5" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Milk,
  Egg,
  Sun,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------
 TYPES
-------------------------------------------------------------------*/
type ValueChainSolution = {
  icon: React.ElementType;
  tag: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  link: string | null;
  features: string[];
};

/* ------------------------------------------------------------------
 DATA
-------------------------------------------------------------------*/
const valueChainSolutions: ValueChainSolution[] = [
  {
    icon: Milk,
    tag: "Smart Dairy",
    title: "Dairy Value Chain",
    problem: "Low yields, poor cold chain, fragmented markets",
    solution:
      "End-to-end dairy optimization from feed management to market access",
    impact: "3x milk yield improvement",
    link: "/solutions/smart-dairy",
    features: [
      "AI-powered feed optimization",
      "IoT-enabled cold chain monitoring",
      "Direct farmer-to-processor linkages",
    ],
  },
  {
    icon: Egg,
    tag: "Smart Poultry",
    title: "Poultry Value Chain",
    problem: "High mortality, inconsistent quality, limited market reach",
    solution:
      "Precision poultry management with integrated supply chain",
    impact: "40% reduction in mortality",
    link: "/solutions/smart-poultry",
    features: [
      "Climate-controlled housing systems",
      "Disease early warning alerts",
      "Aggregated market access platform",
    ],
  },
  {
    icon: Sun,
    tag: "Solar Agri-Tech",
    title: "Clean Energy Solutions",
    problem:
      "Expensive diesel, unreliable grid, high operational costs",
    solution:
      "Solar-powered irrigation and cold storage infrastructure",
    impact: "80% energy cost reduction",
    link: "/solutions/solar-agri-tech",
    features: [
      "Solar pump installations",
      "Off-grid cold storage units",
      "Pay-as-you-go financing",
    ],
  },
  {
    icon: Users,
    tag: "Youth in Agri",
    title: "Next-Gen Farmers",
    problem:
      "Aging farmer population, youth unemployment, knowledge gap",
    solution:
      "Training, financing, and ecosystem support for young agripreneurs",
    impact: "2,500+ youth trained",
    link: null,
    features: [
      "Practical skills bootcamps",
      "Startup incubation support",
      "Access to land and inputs",
    ],
  },
  {
    icon: TrendingUp,
    tag: "Market Linkage",
    title: "Market Access Platform",
    problem:
      "Price volatility, middlemen, post-harvest losses",
    solution:
      "Direct-to-buyer platform with quality assurance and logistics",
    impact: "35% higher farm-gate prices",
    link: null,
    features: [
      "Real-time price discovery",
      "Quality grading & certification",
      "Logistics coordination",
    ],
  },
  {
    icon: Zap,
    tag: "Precision Farming",
    title: "Data-Driven Decisions",
    problem:
      "Guesswork farming, weather risks, input inefficiency",
    solution:
      "AI analytics for smarter, data-backed farming decisions",
    impact: "25% input cost savings",
    link: null,
    features: [
      "Satellite crop monitoring",
      "Weather risk advisories",
      "Yield prediction models",
    ],
  },
];

/* ------------------------------------------------------------------
 COMPONENT
-------------------------------------------------------------------*/
const Solutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="solutions" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
            Value Chain Solutions
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 leading-tight">
            Solving bottlenecks across the agricultural value chain
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            We don’t just build technology for its own sake. We work alongside
            farmers, producers, and value-chain players to unlock value at every
            step — from production to market. By addressing real bottlenecks, we
            help increase incomes, reduce waste, and build resilient food
            systems.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueChainSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="group bg-secondary/30 rounded-2xl p-8 border border-border/30 hover:border-primary/40 hover:bg-secondary/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Tag & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                    {solution.tag}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>

                {/* Problem */}
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="text-destructive/80 font-medium">
                    Problem:
                  </span>{" "}
                  {solution.problem}
                </p>

                {/* Solution */}
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {solution.solution}
                </p>

                {/* Impact */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg mb-5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">
                    {solution.impact}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {solution.link ? (
                  <Link to={solution.link}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary group/btn"
                    >
                      Explore solution
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary"
                    disabled
                  >
                    Coming soon
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to transform your agricultural operations? Our solutions work
            together to create compounding impact across your value chain.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-light shadow-lg"
            onClick={() => navigate("/solutions")}
          >
            Explore All Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
