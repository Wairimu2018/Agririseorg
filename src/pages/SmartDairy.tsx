import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Milk, TrendingUp, Thermometer, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    name: "Kiambu Dairy Cooperative",
    location: "Kiambu County, Kenya",
    members: "450 farmers",
    challenge: "Low milk yields averaging 5L/day, high feed costs, and 30% milk spoilage due to poor cold chain infrastructure.",
    solution: "Implemented AI-powered feed optimization, IoT milk monitoring, and solar cold storage units across 12 collection points.",
    results: [
      { metric: "Milk yield", before: "5L/day", after: "14L/day", improvement: "+180%" },
      { metric: "Feed costs", before: "KES 280/day", after: "KES 195/day", improvement: "-30%" },
      { metric: "Spoilage rate", before: "30%", after: "4%", improvement: "-87%" },
      { metric: "Farmer income", before: "KES 12,000/mo", after: "KES 38,000/mo", improvement: "+217%" },
    ],
    testimonial: "Before AgriRise, we were struggling to make ends meet. Now, my children are in good schools and I've expanded my herd from 3 to 8 cows.",
    author: "Mary Wanjiku, Dairy Farmer",
  },
  {
    name: "Nyandarua Milk Processors",
    location: "Nyandarua County, Kenya",
    members: "1,200 farmers",
    challenge: "Fragmented supply chain with multiple middlemen, inconsistent milk quality, and limited market access beyond local buyers.",
    solution: "Deployed direct farmer-to-processor digital platform, quality testing at collection points, and integrated logistics coordination.",
    results: [
      { metric: "Farm-gate price", before: "KES 28/L", after: "KES 42/L", improvement: "+50%" },
      { metric: "Quality grade A", before: "45%", after: "89%", improvement: "+98%" },
      { metric: "Payment time", before: "45 days", after: "7 days", improvement: "-84%" },
      { metric: "Market reach", before: "Local", after: "3 counties", improvement: "3x" },
    ],
    testimonial: "The direct linkage to processors changed everything. We now get fair prices and weekly payments instead of waiting months.",
    author: "John Mwangi, Cooperative Chairman",
  },
];

const SmartDairy = () => {
  const [herdSize, setHerdSize] = useState(10);
  const [currentYield, setCurrentYield] = useState(8);
  const [feedCost, setFeedCost] = useState(250);

  // ROI calculations
  const projectedYield = Math.round(currentYield * 2.2);
  const projectedFeedCost = Math.round(feedCost * 0.7);
  const currentMonthlyRevenue = herdSize * currentYield * 30 * 35;
  const projectedMonthlyRevenue = herdSize * projectedYield * 30 * 42;
  const currentMonthlyCost = herdSize * feedCost * 30;
  const projectedMonthlyCost = herdSize * projectedFeedCost * 30;
  const currentProfit = currentMonthlyRevenue - currentMonthlyCost;
  const projectedProfit = projectedMonthlyRevenue - projectedMonthlyCost;
  const additionalIncome = projectedProfit - currentProfit;
  const roi = Math.round((additionalIncome / (herdSize * 15000)) * 100);

  return (
    <main className="min-h-screen bg-background">
      <Navigation/>
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <Milk className="w-7 h-7 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
              Smart Dairy
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 max-w-4xl">
            Transform your dairy operation with precision technology
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            End-to-end dairy value chain optimization — from feed management to cold chain to market access. Increase yields by 3x while reducing costs.
          </p>
          
          {/* <div className="flex flex-wrap gap-4">
            <Button variant="heroPrimary" size="lg">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              Schedule Demo
            </Button> */}
          {/* </div> */}
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12">
            Complete Dairy Solution
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "AI Feed Optimization",
                description: "Machine learning algorithms analyze your herd data, local feed prices, and nutritional requirements to create optimal feeding schedules that maximize milk yield while minimizing costs."
              },
              {
                icon: Thermometer,
                title: "Cold Chain Monitoring",
                description: "IoT sensors track milk temperature from collection to delivery. Real-time alerts prevent spoilage and ensure quality standards are maintained throughout the supply chain."
              },
              {
                icon: Users,
                title: "Market Linkage Platform",
                description: "Direct digital connections between farmers and processors eliminate middlemen, ensure fair pricing, and provide transparent, fast payments within 7 days."
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4 text-center">
              Calculate Your ROI
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              See how Smart Dairy can transform your operation's profitability
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <Label className="text-foreground mb-4 block">Herd Size: {herdSize} cows</Label>
                  <Slider
                    value={[herdSize]}
                    onValueChange={(v) => setHerdSize(v[0])}
                    min={1}
                    max={100}
                    step={1}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label className="text-foreground mb-4 block">Current Yield: {currentYield} L/day per cow</Label>
                  <Slider
                    value={[currentYield]}
                    onValueChange={(v) => setCurrentYield(v[0])}
                    min={2}
                    max={20}
                    step={1}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label className="text-foreground mb-4 block">Daily Feed Cost: KES {feedCost} per cow</Label>
                  <Slider
                    value={[feedCost]}
                    onValueChange={(v) => setFeedCost(v[0])}
                    min={100}
                    max={500}
                    step={10}
                    className="mt-2"
                  />
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-secondary/50 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-6">Projected Impact</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Milk Yield</span>
                    <div className="text-right">
                      <span className="text-muted-foreground line-through mr-2">{currentYield}L</span>
                      <span className="text-primary font-semibold">{projectedYield}L/day</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Feed Cost</span>
                    <div className="text-right">
                      <span className="text-muted-foreground line-through mr-2">KES {feedCost}</span>
                      <span className="text-primary font-semibold">KES {projectedFeedCost}/day</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Monthly Profit</span>
                    <div className="text-right">
                      <span className="text-muted-foreground line-through mr-2">KES {currentProfit.toLocaleString()}</span>
                      <span className="text-primary font-semibold">KES {projectedProfit.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm mb-2">Additional Monthly Income</p>
                      <p className="text-3xl font-serif font-bold text-primary">
                        +KES {additionalIncome.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {roi}% ROI in first year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Real results from farmers and cooperatives using Smart Dairy solutions
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">{study.name}</h3>
                    <p className="text-sm text-muted-foreground">{study.location} • {study.members}</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-destructive/80 mb-2">Challenge</p>
                  <p className="text-muted-foreground text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-primary mb-2">Solution</p>
                  <p className="text-muted-foreground text-sm">{study.solution}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.metric} className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">{result.metric}</p>
                      <p className="text-sm">
                        <span className="text-muted-foreground line-through mr-1">{result.before}</span>
                        <span className="text-foreground font-medium">{result.after}</span>
                      </p>
                      <p className="text-xs text-primary font-semibold">{result.improvement}</p>
                    </div>
                  ))}
                </div>
                
                <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground text-sm">
                  "{study.testimonial}"
                  <footer className="mt-2 not-italic font-medium text-foreground">— {study.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Ready to transform your dairy operation?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join over 5,000 farmers already using Smart Dairy to increase yields and boost income.
          </p>
          {/* <Button variant="heroPrimary" size="lg">
            Get Started Today
            <ArrowRight className="w-4 h-4" />
          </Button> */}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SmartDairy;
