import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Zap, Satellite, CloudRain, LineChart, Quote, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    name: "Machakos Smart Farms Alliance",
    location: "Machakos County, Kenya",
    members: "620 farmers",
    challenge: "Erratic rainfall causing 35% crop failure rate, over-application of fertilizers wasting KES 15,000/season, and no early warning for pest outbreaks.",
    solution: "Deployed satellite monitoring with AI-powered advisory, weather-indexed alerts, and precision input recommendations via SMS.",
    results: [
      { metric: "Crop failure rate", before: "35%", after: "12%", improvement: "-66%" },
      { metric: "Fertilizer costs", before: "KES 18,000", after: "KES 12,500", improvement: "-31%" },
      { metric: "Pest losses", before: "22%", after: "7%", improvement: "-68%" },
      { metric: "Yield per acre", before: "8 bags", after: "14 bags", improvement: "+75%" },
    ],
    testimonial: "The SMS alerts told me exactly when to plant and when the rains would fail. I was the only one in my village who harvested well last season.",
    author: "Catherine Mutua, Maize Farmer",
  },
  {
    name: "Bungoma Precision Agriculture Pilot",
    location: "Bungoma County, Kenya",
    participants: "380 sugarcane farmers",
    challenge: "Uniform input application despite variable soil conditions, delayed disease detection, and inability to predict optimal harvest timing.",
    solution: "Variable rate application maps from satellite analysis, AI disease detection from phone photos, and harvest optimization based on sugar content prediction.",
    results: [
      { metric: "Input efficiency", before: "Uniform", after: "Zone-based", improvement: "+25% savings" },
      { metric: "Disease response", before: "4 weeks", after: "3 days", improvement: "-89%" },
      { metric: "Sugar content", before: "11.2%", after: "13.8%", improvement: "+23%" },
      { metric: "Revenue per ton", before: "KES 4,800", after: "KES 6,200", improvement: "+29%" },
    ],
    testimonial: "I used to spray the whole field the same way. Now the app shows me exactly which zones need what. My costs are down and my cane is premium grade.",
    author: "Bernard Wanyama, Sugarcane Farmer",
  },
];

const FarmIntelligence = () => {
  const [farmSize, setFarmSize] = useState([5]);
  const [currentYield, setCurrentYield] = useState([8]);
  const [inputCost, setInputCost] = useState([15000]);

  // ROI Calculator
  const yieldImprovement = 0.40; // 40% yield improvement
  const inputSavings = 0.25; // 25% input cost reduction
  const pricePerBag = 3500;
  const subscriptionCost = farmSize[0] * 500; // KES 500 per acre per season

  const currentRevenue = farmSize[0] * currentYield[0] * pricePerBag;
  const currentProfit = currentRevenue - inputCost[0];
  
  const newYield = currentYield[0] * (1 + yieldImprovement);
  const newInputCost = inputCost[0] * (1 - inputSavings);
  const newRevenue = farmSize[0] * newYield * pricePerBag;
  const newProfit = newRevenue - newInputCost - subscriptionCost;
  
  const profitIncrease = newProfit - currentProfit;
  const roiPercent = ((profitIncrease / currentProfit) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
              Farm Intelligence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 max-w-4xl">
            Data-driven decisions for precision agriculture
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            AI-powered analytics combining satellite imagery, weather data, and on-ground sensors to optimize every farming decision. Save 25% on inputs while boosting yields.
          </p>
          
          {/* <div className="flex flex-wrap gap-4">
            <Button variant="heroPrimary" size="lg">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              See Demo
            </Button>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12">
            Complete Intelligence Platform
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Satellite,
                title: "Satellite Crop Monitoring",
                description: "Weekly satellite passes analyze crop health, detect stress zones, and identify pest/disease hotspots before visible symptoms appear. Coverage for any farm size."
              },
              {
                icon: CloudRain,
                title: "Weather Risk Advisories",
                description: "Hyper-local 10-day forecasts with planting windows, frost alerts, and drought warnings. Season-long predictions help plan crop selection and timing."
              },
              {
                icon: LineChart,
                title: "Yield Prediction Models",
                description: "AI models trained on local data predict harvest volumes 8 weeks ahead with 85% accuracy. Optimize storage, logistics, and sales timing."
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

      {/* How It Works */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12 text-center">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Register Your Farm", description: "Map your field boundaries using GPS or satellite imagery" },
              { step: "02", title: "Connect Data Sources", description: "Link weather stations, sensors, or use our satellite monitoring" },
              { step: "03", title: "Receive Insights", description: "Get SMS/app alerts with actionable recommendations" },
              { step: "04", title: "Track Results", description: "Monitor improvements and optimize season after season" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4 text-center">
              ROI Calculator
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Calculate your potential savings and yield improvements with Farm Intelligence
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-foreground font-medium">Farm Size</label>
                    <span className="text-primary font-semibold">{farmSize[0]} acres</span>
                  </div>
                  <Slider
                    value={farmSize}
                    onValueChange={setFarmSize}
                    min={1}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-foreground font-medium">Current Yield per Acre</label>
                    <span className="text-primary font-semibold">{currentYield[0]} bags</span>
                  </div>
                  <Slider
                    value={currentYield}
                    onValueChange={setCurrentYield}
                    min={4}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-foreground font-medium">Current Input Costs (per season)</label>
                    <span className="text-primary font-semibold">KES {inputCost[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={inputCost}
                    onValueChange={setInputCost}
                    min={5000}
                    max={50000}
                    step={1000}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="bg-secondary/50 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-6">Your Projected Results</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Profit</span>
                    <span className="text-foreground font-medium">KES {currentProfit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">New Yield per Acre</span>
                    <span className="text-primary font-medium">{newYield.toFixed(1)} bags</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">New Input Costs</span>
                    <span className="text-primary font-medium">KES {newInputCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subscription Cost</span>
                    <span className="text-muted-foreground">- KES {subscriptionCost.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-semibold">New Seasonal Profit</span>
                    <span className="text-2xl text-primary font-bold">KES {newProfit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Profit Increase</span>
                    <span className="text-primary font-semibold">+{roiPercent}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Farmers achieving breakthrough results with data-driven decision making.
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
            Ready to farm smarter?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Start your free 30-day trial and see the difference data-driven farming makes.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <Button variant="heroPrimary" size="lg">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              Talk to an Expert
            </Button>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FarmIntelligence;
