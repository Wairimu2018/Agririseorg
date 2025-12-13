import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Sun, Battery, Droplets, Thermometer, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    name: "Meru Irrigation Scheme",
    location: "Meru County, Kenya",
    members: "650 farmers",
    challenge: "Expensive diesel pumping costing KES 80,000/month, unreliable fuel supply, and limited irrigation hours reducing crop yields.",
    solution: "Installed 45kW solar pump system with smart controllers, drip irrigation network, and mobile monitoring for 200 acres of horticultural crops.",
    results: [
      { metric: "Energy cost", before: "KES 80,000/mo", after: "KES 0/mo", improvement: "-100%" },
      { metric: "Irrigation hours", before: "4 hrs/day", after: "10 hrs/day", improvement: "+150%" },
      { metric: "Crop yield", before: "12 tons/acre", after: "28 tons/acre", improvement: "+133%" },
      { metric: "Payback period", before: "N/A", after: "18 months", improvement: "✓" },
    ],
    testimonial: "We used to spend more on diesel than we earned from crops. Now the sun does the work for free and our yields have more than doubled.",
    author: "James Kirimi, Scheme Chairman",
  },
  {
    name: "Kisumu Fish Farmers",
    location: "Kisumu County, Kenya",
    members: "85 farmers",
    challenge: "No cold storage for harvested fish, forcing farmers to sell immediately at low prices. 25% post-harvest losses due to spoilage.",
    solution: "Deployed 10 solar-powered cold rooms with pay-as-you-go financing, enabling farmers to store fish and sell at optimal market prices.",
    results: [
      { metric: "Post-harvest loss", before: "25%", after: "3%", improvement: "-88%" },
      { metric: "Selling price", before: "KES 250/kg", after: "KES 380/kg", improvement: "+52%" },
      { metric: "Storage capacity", before: "0 kg", after: "2,000 kg", improvement: "∞" },
      { metric: "Monthly savings", before: "N/A", after: "KES 45,000", improvement: "New" },
    ],
    testimonial: "Before, I had to sell the same day or watch my fish rot. Now I store them and wait for the best prices. It changed everything.",
    author: "Otieno Nyawade, Fish Farmer",
  },
];

const SolarAgriTech = () => {
  const [acreage, setAcreage] = useState(5);
  const [dieselCost, setDieselCost] = useState(15000);
  const [pumpHours, setPumpHours] = useState(4);

  // ROI calculations
  const systemCost = acreage * 120000;
  const monthlySavings = dieselCost;
  const annualSavings = monthlySavings * 12;
  const additionalYield = acreage * 16 * 35000; // 16 extra tons at 35k per ton
  const totalAnnualBenefit = annualSavings + additionalYield;
  const paybackMonths = Math.round(systemCost / (totalAnnualBenefit / 12));
  const fiveYearROI = Math.round(((totalAnnualBenefit * 5 - systemCost) / systemCost) * 100);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <Sun className="w-7 h-7 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
              Solar Agri-Tech
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 max-w-4xl">
            Harvest the sun to power your farm's future
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Solar-powered irrigation and cold storage that eliminates energy costs, extends operating hours, and unlocks new market opportunities. Pay-as-you-go financing available.
          </p>
          
          {/* <div className="flex flex-wrap gap-4"> */}
            {/* <Button variant="heroPrimary" size="lg">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              Schedule Site Visit
            </Button> */}
          {/* </div> */}
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12">
            Complete Solar Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Solar Irrigation Systems",
                description: "High-efficiency solar pumps with smart controllers that optimize water delivery based on soil moisture, weather forecasts, and crop requirements."
              },
              {
                icon: Thermometer,
                title: "Off-Grid Cold Storage",
                description: "Solar-powered cold rooms and walk-in coolers that maintain precise temperatures for produce, dairy, fish, and meat without grid connection."
              },
              {
                icon: Battery,
                title: "Pay-As-You-Go Financing",
                description: "Affordable payment plans spread the cost over 24-36 months. Start saving immediately while paying less than your current diesel costs."
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
              Calculate Your Savings
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              See how solar can eliminate your energy costs and boost productivity
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <Label className="text-foreground mb-4 block">Farm Size: {acreage} acres</Label>
                  <Slider
                    value={[acreage]}
                    onValueChange={(v) => setAcreage(v[0])}
                    min={1}
                    max={50}
                    step={1}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label className="text-foreground mb-4 block">Monthly Diesel Cost: KES {dieselCost.toLocaleString()}</Label>
                  <Slider
                    value={[dieselCost]}
                    onValueChange={(v) => setDieselCost(v[0])}
                    min={5000}
                    max={100000}
                    step={5000}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label className="text-foreground mb-4 block">Current Pump Hours: {pumpHours} hrs/day</Label>
                  <Slider
                    value={[pumpHours]}
                    onValueChange={(v) => setPumpHours(v[0])}
                    min={2}
                    max={8}
                    step={1}
                    className="mt-2"
                  />
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-secondary/50 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-6">Projected Impact</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">System Cost</span>
                    <span className="text-foreground font-semibold">KES {systemCost.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Annual Energy Savings</span>
                    <span className="text-primary font-semibold">KES {annualSavings.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Pump Hours</span>
                    <div className="text-right">
                      <span className="text-muted-foreground line-through mr-2">{pumpHours} hrs</span>
                      <span className="text-primary font-semibold">10+ hrs/day</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Payback Period</span>
                    <span className="text-primary font-semibold">{paybackMonths} months</span>
                  </div>
                  
                  <div className="pt-4">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm mb-2">5-Year Return on Investment</p>
                      <p className="text-3xl font-serif font-bold text-primary">
                        {fiveYearROI}%
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Total savings: KES {(totalAnnualBenefit * 5).toLocaleString()}
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
            Real results from farmers and cooperatives using Solar Agri-Tech solutions
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
      {/* <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Ready to go solar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join over 1,500 farmers who have eliminated energy costs and boosted productivity with solar.
          </p>
          <Button variant="heroPrimary" size="lg">
            Request Site Assessment
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default SolarAgriTech;
