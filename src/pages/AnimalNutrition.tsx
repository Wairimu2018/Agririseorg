import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
// import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Pill, 
  Egg, 
  MilkOff, 
  Shield, 
  Microscope, 
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Truck,
  Award,
  Clock,
  Leaf
} from "lucide-react";

const productCategories = [
  {
    icon: Egg,
    title: "Poultry Nutrition",
    description: "Complete feed supplements, vitamins, and minerals for broilers, layers, and hatcheries",
    products: [
      "Layer performance boosters",
      "Broiler growth enhancers",
      "Hatchery supplements",
      "Calcium & phosphorus premixes"
    ]
  },
  {
    icon: MilkOff,
    title: "Dairy Nutrition",
    description: "Specialized supplements to optimize milk production, quality, and cow health",
    products: [
      "Milk yield enhancers",
      "Reproductive health supplements",
      "Mineral licks & blocks",
      "Calf starter feeds"
    ]
  },
  {
    icon: Pill,
    title: "Veterinary Medicines",
    description: "Quality-assured pharmaceuticals for prevention and treatment of common livestock diseases",
    products: [
      "Antibiotics & antimicrobials",
      "Dewormers & antiparasitics",
      "Vaccines & immunoboosters",
      "Wound care & antiseptics"
    ]
  },
  {
    icon: HeartPulse,
    title: "Health Supplements",
    description: "Probiotics, enzymes, and organic supplements for optimal gut health and immunity",
    products: [
      "Probiotics & prebiotics",
      "Liver tonics",
      "Stress relievers",
      "Toxin binders"
    ]
  }
];

const features = [
  {
    icon: Microscope,
    title: "Quality Tested",
    description: "All products undergo rigorous quality testing to ensure safety and efficacy"
  },
  {
    icon: Award,
    title: "Certified Products",
    description: "We source only from licensed manufacturers with proper certifications"
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    description: "Fast and reliable delivery to farms across the region"
  },
  {
    icon: Clock,
    title: "Expert Support",
    description: "Access to veterinary consultants for product recommendations"
  }
];

const whyChooseUs = [
  "Competitive pricing with bulk discounts for commercial farms",
  "Cold chain logistics for temperature-sensitive products",
  "Genuine products sourced directly from manufacturers",
  "Technical support from qualified veterinary professionals",
  "Flexible payment options including credit for registered farms",
  "Regular updates on new products and best practices"
];

const targetSegments = [
  {
    title: "Smallholder Farmers",
    description: "Affordable starter packs and essential supplies for 1-10 animals",
    icon: Leaf,
    features: ["Starter nutrition kits", "Basic medicine packs", "Usage guides in local languages"]
  },
  {
    title: "Commercial Operations",
    description: "Bulk supplies, custom formulations, and dedicated account management",
    icon: Shield,
    features: ["Bulk pricing & contracts", "Custom feed formulations", "On-site veterinary support"]
  }
];

const AnimalNutrition = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Pill className="w-4 h-4" />
              Animal Nutrition & Health
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Premium Nutrition &
              <span className="text-primary"> Healthcare Products</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complete range of supplements, medicines, and nutrition products for poultry and dairy operations. 
              Quality-assured products delivered to your farm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">Browse Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/contact">Consult an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of nutrition and healthcare products for poultry and dairy livestock
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-3">
                    {category.products.map((product, pIndex) => (
                      <li key={pIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {product}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solutions for Every Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored product packages and services for farmers of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {targetSegments.map((segment, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <segment.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{segment.title}</CardTitle>
                  <CardDescription>{segment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {segment.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Products?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the unique challenges faced by poultry and dairy farmers. 
                Our products are carefully selected and quality-tested to deliver real results for your operation.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request a Consultation</h3>
              <p className="text-muted-foreground mb-8">
                Not sure which products are right for your animals? Our veterinary experts 
                can assess your needs and recommend the optimal nutrition and healthcare program.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-foreground">
                  <HeartPulse className="w-5 h-5 text-primary" />
                  <span>Free health assessment for new customers</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Microscope className="w-5 h-5 text-primary" />
                  <span>Custom nutrition plans based on your livestock</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Ongoing support and product optimization</span>
                </div>
              </div>
              <Button size="lg" className="w-full mt-8" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Optimize Your Livestock Nutrition?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss your requirements and get access to premium 
              nutrition and healthcare products at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Contact Sales Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/smart-dairy">Explore Smart Dairy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
export default AnimalNutrition;