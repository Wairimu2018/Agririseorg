import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, TrendingUp, Store, Truck, Shield, Quote, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    name: "Meru Horticulture Collective",
    location: "Meru County, Kenya",
    members: "850 farmers",
    challenge: "Multiple middlemen taking 40% margins, inconsistent quality leading to buyer rejection, and 25% post-harvest losses due to poor timing.",
    solution: "Direct-to-supermarket platform with quality grading at collection points, cold logistics coordination, and digital payment integration.",
    results: [
      { metric: "Farm-gate price", before: "KES 18/kg", after: "KES 32/kg", improvement: "+78%" },
      { metric: "Buyer network", before: "3 local", after: "12 regional", improvement: "4x" },
      { metric: "Post-harvest loss", before: "25%", after: "8%", improvement: "-68%" },
      { metric: "Payment speed", before: "60 days", after: "5 days", improvement: "-92%" },
    ],
    testimonial: "We used to throw away tomatoes because they couldn't sell fast enough. Now we have more buyers than we can supply.",
    author: "Joseph Murungi, Farmer Collective Chair",
  },
  {
    name: "Trans-Nzoia Grain Traders",
    location: "Trans-Nzoia County, Kenya",
    participants: "1,500 smallholders",
    challenge: "Price exploitation during harvest glut, lack of storage forcing immediate sales, and no access to commodity exchange markets.",
    solution: "Warehouse receipt system with mobile price alerts, aggregation for bulk sales to millers, and commodity exchange linkage.",
    results: [
      { metric: "Selling price", before: "KES 2,800/bag", after: "KES 4,200/bag", improvement: "+50%" },
      { metric: "Storage access", before: "12%", after: "85%", improvement: "+608%" },
      { metric: "Bulk sales", before: "Individual", after: "Aggregated", improvement: "2,000 MT" },
      { metric: "Market info access", before: "15%", after: "92%", improvement: "+513%" },
    ],
    testimonial: "The warehouse receipt lets me store my maize and sell when prices are good. Last season I earned KES 140,000 more than my neighbors.",
    author: "Peter Wafula, Grain Farmer",
  },
];

const MarketLinkage = () => {
  const [produceVolume, setProduceVolume] = useState([500]);
  const [currentPrice, setCurrentPrice] = useState([20]);
  const [lossRate, setLossRate] = useState([25]);

  // ROI Calculator
  const priceImprovement = 0.35; // 35% better prices
  const lossReduction = 0.68; // 68% reduction in losses
  const platformFee = 0.05; // 5% platform fee

  const currentRevenue = produceVolume[0] * currentPrice[0] * (1 - lossRate[0] / 100);
  const newPrice = currentPrice[0] * (1 + priceImprovement);
  const newLossRate = lossRate[0] * (1 - lossReduction);
  const grossRevenue = produceVolume[0] * newPrice * (1 - newLossRate / 100);
  const platformCost = grossRevenue * platformFee;
  const newRevenue = grossRevenue - platformCost;
  const revenueIncrease = newRevenue - currentRevenue;
  const roiPercent = ((revenueIncrease / currentRevenue) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
              Market Linkage
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 max-w-4xl">
            Connect directly to premium buyers and unlock fair prices
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Our digital marketplace eliminates middlemen, provides real-time pricing, and coordinates logistics — delivering 35% higher farm-gate prices on average.
          </p>
          
          {/* <div className="flex flex-wrap gap-4">
            <Button variant="heroPrimary" size="lg">
              Join Marketplace
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              Become a Buyer
            </Button>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12">
            Complete Market Access Platform
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Price Discovery",
                description: "Access live market prices across multiple buyers and locations. SMS and app alerts notify you when prices hit your target, so you sell at the right time."
              },
              {
                icon: Shield,
                title: "Quality Grading & Certification",
                description: "Standardized quality assessment at collection points with digital certificates. Premium grades unlock access to export markets and higher-paying buyers."
              },
              {
                icon: Truck,
                title: "Logistics Coordination",
                description: "Aggregated transport reduces per-unit costs by 40%. Cold chain for perishables and scheduled pickup ensures your produce reaches buyers fresh."
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-secondary/30 rounded-xl p-8 border border-border/30">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4 text-center">
              Revenue Calculator
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              See how much more you could earn with direct market access
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-foreground font-medium">Monthly Produce Volume</label>
                    <span className="text-primary font-semibold">{produceVolume[0]} kg</span>
                  </div>
                  <Slider
                    value={produceVolume}
                    onValueChange={setProduceVolume}
                    min={100}
                    max={5000}
                    step={100}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-foreground font-medium">Current Price per kg</label>
                    <span className="text-primary font-semibold">KES {currentPrice[0]}</span>
                  </div>
                  <Slider
                    value={currentPrice}
                    onValueChange={setCurrentPrice}
                    min={10}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-foreground font-medium">Current Loss Rate</label>
                    <span className="text-primary font-semibold">{lossRate[0]}%</span>
                  </div>
                  <Slider
                    value={lossRate}
                    onValueChange={setLossRate}
                    min={5}
                    max={40}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="bg-secondary/50 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-6">Your Projected Results</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Monthly Revenue</span>
                    <span className="text-foreground font-medium">KES {currentRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">New Price (after improvement)</span>
                    <span className="text-primary font-medium">KES {newPrice.toFixed(0)}/kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">New Loss Rate</span>
                    <span className="text-primary font-medium">{newLossRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Fee (5%)</span>
                    <span className="text-muted-foreground">- KES {platformCost.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-semibold">New Monthly Revenue</span>
                    <span className="text-2xl text-primary font-bold">KES {newRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Revenue Increase</span>
                    <span className="text-primary font-semibold">+{roiPercent}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Farmer groups achieving breakthrough results through direct market access.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-secondary/30 rounded-2xl p-8 border border-border/30">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{study.name}</h3>
                  <p className="text-primary font-medium">{study.location} • {study.members || study.participants}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-foreground">{study.solution}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.metric} className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{result.metric}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-semibold text-foreground">{result.after}</span>
                        <span className="text-sm text-primary font-medium">{result.improvement}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">from {result.before}</p>
                    </div>
                  ))}
                </div>
                
                <blockquote className="border-l-2 border-primary pl-4">
                  <Quote className="w-5 h-5 text-primary/50 mb-2" />
                  <p className="text-foreground italic mb-2">"{study.testimonial}"</p>
                  <cite className="text-sm text-muted-foreground not-italic">— {study.author}</cite>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            Ready to access better markets?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join thousands of farmers already earning 35% more through our direct market platform.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <Button variant="heroPrimary" size="lg">
              Register as Farmer
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              Register as Buyer
            </Button>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketLinkage;
