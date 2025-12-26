import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import hydroponicsGreenmatter from "@/assets/hydroponicsgreenmatter.jpeg";
import hydroponicsSystems from "@/assets/hydroponicssystems.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Droplets, 
  Truck, 
  Leaf, 
  Package, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  Users,
  TrendingUp,
  Shield,
  Recycle
} from "lucide-react";

const serviceFeatures = [
  {
    icon: Calendar,
    title: "365-Day Availability",
    description: "Fresh green fodder delivered consistently throughout the year, regardless of season or weather conditions"
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    description: "Convenient scheduled delivery to your farm, eliminating transportation hassles and storage concerns"
  },
  {
    icon: Shield,
    title: "Chemical-Free Production",
    description: "Controlled environment cultivation free from pesticides, herbicides, and soil-borne diseases"
  },
  {
    icon: Recycle,
    title: "Carbon-Neutral Process",
    description: "Sustainable production methods with minimal environmental footprint and water conservation"
  }
];

const productFeatures = [
  {
    icon: Package,
    title: "Complete Hydroponic Kits",
    description: "Ready-to-use systems for on-farm fodder production, available in various capacities"
  },
  {
    icon: Factory,
    title: "Commercial Systems",
    description: "Industrial-scale hydroponic setups for large dairy and poultry operations"
  },
  {
    icon: Leaf,
    title: "Premium Seeds & Nutrients",
    description: "High-quality seeds and nutrient solutions optimized for fodder growth"
  },
  {
    icon: Users,
    title: "Training & Support",
    description: "Comprehensive training programs and ongoing technical support for system operators"
  }
];

const packages = [
  {
    name: "Smallholder Package",
    target: "1-10 Animals",
    // image: hydroponicsGreenmatter,
    features: [
      "10-20 kg daily fodder capacity",
      "Weekly delivery subscription",
      "Mobile app ordering",
      "Basic nutrition guidance"
    ],
    highlight: false
  },
  {
    name: "Medium Farm Package",
    target: "10-50 Animals",
    features: [
      "50-100 kg daily fodder capacity",
      "Bi-weekly delivery or DIY kit option",
      "Dedicated account manager",
      "Nutrition optimization support"
    ],
    highlight: true
  },
  {
    name: "Commercial Package",
    target: "50+ Animals",
    features: [
      "Custom capacity hydroponic systems",
      "On-site installation & training",
      "24/7 technical support",
      "Integration with farm management"
    ],
    highlight: false
  }
];

const benefits = [
  { metric: "40%", label: "Increase in milk yield" },
  { metric: "30%", label: "Reduction in feed costs" },
  { metric: "90%", label: "Less water usage" },
  { metric: "7 Days", label: "Seed to harvest cycle" }
];

const HydroponicsFodder = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Droplets className="w-4 h-4" />
              Hydroponics Green Fodder
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Fresh, Nutritious Fodder
              <span className="text-primary"> 365 Days a Year</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your livestock nutrition with our hydroponics green fodder solutions. 
              Whether you prefer convenient delivery or on-farm production, we have the perfect solution for your dairy and poultry operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">Subscribe to Delivery</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/contact">Explore Kits & Systems</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {benefit.metric}
                </div>
                <div className="text-muted-foreground">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fodder as a Service */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Truck className="w-4 h-4" />
                Service Model
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Fodder Delivery Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We bring fresh, chemical-free green fodder directly to your farm. 
                No infrastructure investment, no production hassles – just consistent, 
                high-quality nutrition for your livestock.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
              <div className="space-y-6">
                {[
                  "Register your farm and livestock details",
                  "Choose your delivery frequency and quantity",
                  "Receive fresh fodder at your doorstep",
                  "Track orders via mobile app"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fodder as a Product */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">System Specifications</h3>
              <div className="space-y-4">
                {[
                  { label: "Daily Capacity", value: "10kg - 1000kg+" },
                  { label: "Growing Cycle", value: "7 days seed to harvest" },
                  { label: "Water Usage", value: "90% less than traditional" },
                  { label: "Space Required", value: "1/10th of conventional farming" },
                  { label: "Power", value: "Solar-compatible options available" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-semibold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Package className="w-4 h-4" />
                Product Model
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hydroponic Systems & Kits
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take control of your fodder production with our range of hydroponic systems. 
                From compact units for smallholder farmers to commercial-scale installations, 
                we provide everything you need for on-farm production.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {productFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solutions for Every Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a smallholder farmer or running a commercial operation, 
              we have tailored packages to meet your fodder needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.highlight ? 'border-primary shadow-lg scale-105' : 'border-border/50'}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground">{pkg.target}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.highlight ? "default" : "outline"} asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Impact of Hydroponics Fodder
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Farmers using our hydroponics fodder solutions report significant improvements 
              in milk production, meat quality, and overall animal health. The nutrient-dense 
              green fodder enhances digestion and reduces the need for expensive concentrates.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Your Hydroponics Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HydroponicsFodder;