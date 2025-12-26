import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Egg, Thermometer, Bell, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClimateSystems from "@/assets/ClimateControl.png";
import sensors from "@/assets/Sensors.png";
import Analytics from "@/assets/Analytics-PNG-File.png";

const caseStudies = [
  {
    name: "Kakamega Poultry Farmers",
    location: "Kakamega County, Kenya",
    members: "320 farmers",
    challenge: "40% chick mortality rate, disease outbreaks causing devastating losses, and limited access to quality day-old chicks and feed.",
    solution: "Deployed climate-controlled brooding systems, disease early warning via IoT sensors, and established direct supply linkages for inputs.",
    results: [
      { metric: "Mortality rate", before: "40%", after: "8%", improvement: "-80%" },
      { metric: "Growth rate", before: "42 days", after: "35 days", improvement: "-17%" },
      { metric: "Feed conversion", before: "2.1", after: "1.6", improvement: "-24%" },
      { metric: "Net income/cycle", before: "KES 18,000", after: "KES 52,000", improvement: "+189%" },
    ],
    testimonial: "I used to lose half my birds every cycle. Now with the climate control and early warning system, I can actually plan and grow my business.",
    author: "Peter Ochieng, Poultry Farmer",
  },
  {
    name: "Machakos Layers Collective",
    location: "Machakos County, Kenya",
    members: "180 farmers",
    challenge: "Inconsistent egg production, poor egg quality leading to rejections, and exploitative middlemen paying below-market prices.",
    solution: "Implemented automated layer house monitoring, quality grading at collection, and direct linkage to hotels and supermarkets.",
    results: [
      { metric: "Eggs/hen/year", before: "220", after: "295", improvement: "+34%" },
      { metric: "Grade A eggs", before: "55%", after: "88%", improvement: "+60%" },
      { metric: "Price per tray", before: "KES 280", after: "KES 380", improvement: "+36%" },
      { metric: "Annual income", before: "KES 180,000", after: "KES 340,000", improvement: "+89%" },
    ],
    testimonial: "The grading system means we now get premium prices. Hotels call us directly because they trust our quality.",
    author: "Grace Mutua, Layer Farmer",
  },
];

const SmartPoultry = () => {
  const [birdCount, setBirdCount] = useState(500);
  const [cyclesPerYear, setCyclesPerYear] = useState(5);
  const [currentMortality, setCurrentMortality] = useState(35);

  // ROI calculations
  const projectedMortality = Math.round(currentMortality * 0.2);
  const currentSurvival = birdCount * (1 - currentMortality / 100);
  const projectedSurvival = birdCount * (1 - projectedMortality / 100);
  const pricePerBird = 450;
  const currentAnnualRevenue = currentSurvival * pricePerBird * cyclesPerYear;
  const projectedAnnualRevenue = projectedSurvival * pricePerBird * cyclesPerYear;
  const additionalIncome = projectedAnnualRevenue - currentAnnualRevenue;
  const investmentCost = birdCount * 80;
  const roi = Math.round((additionalIncome / investmentCost) * 100);

  return (
    <main className="min-h-screen bg-background">
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
              <Egg className="w-7 h-7 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
              Smart Poultry
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 max-w-4xl">
            Precision poultry management for maximum profitability
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Reduce mortality by 80%, optimize feed conversion, and access premium markets. Data-driven poultry farming for consistent, predictable results.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12">Complete Poultry Solution</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Thermometer,
                title: "Climate Control Systems",
                description: "Automated brooding and housing systems maintain optimal temperature, humidity, and ventilation. Reduce heat stress mortality and accelerate growth rates.",
                image: ClimateSystems,
              },
              {
                icon: Bell,
                title: "Disease Early Warning",
                description: "IoT sensors monitor bird behavior, feed intake, and environmental conditions. AI algorithms detect disease signs 48-72 hours before visible symptoms.",
                image: sensors,
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Real-time dashboards track FCR, daily weight gain, mortality, and profitability. Compare cycles and identify optimization opportunities.",
                image: Analytics,
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                <img src={feature.image} alt={feature.title} className="mt-4 rounded-lg border border-border/50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4 text-center">Calculate Your ROI</h2>
            <p className="text-muted-foreground text-center mb-12">
              See how Smart Poultry can transform your operation's profitability
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <Label className="text-foreground mb-4 block">Flock Size: {birdCount.toLocaleString()} birds</Label>
                  <Slider value={[birdCount]} onValueChange={(v) => setBirdCount(v[0])} min={100} max={5000} step={100} />
                </div>
                <div>
                  <Label className="text-foreground mb-4 block">Cycles Per Year: {cyclesPerYear}</Label>
                  <Slider value={[cyclesPerYear]} onValueChange={(v) => setCyclesPerYear(v[0])} min={3} max={8} step={1} />
                </div>
                <div>
                  <Label className="text-foreground mb-4 block">Current Mortality Rate: {currentMortality}%</Label>
                  <Slider value={[currentMortality]} onValueChange={(v) => setCurrentMortality(v[0])} min={10} max={50} step={5} />
                </div>
              </div>

              {/* Results */}
              <div className="bg-secondary/50 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-6">Projected Impact</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Mortality Rate</span>
                    <div className="text-right">
                      <span className="text-muted-foreground line-through mr-2">{currentMortality}%</span>
                      <span className="text-primary font-semibold">{projectedMortality}%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Birds to Market/Cycle</span>
                    <div className="text-right">
                      <span className="text-muted-foreground line-through mr-2">{Math.round(currentSurvival)}</span>
                      <span className="text-primary font-semibold">{Math.round(projectedSurvival)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Annual Revenue</span>
                    <div className="text-right">
                      <span className="text-muted-foreground line-through mr-2">KES {Math.round(currentAnnualRevenue).toLocaleString()}</span>
                      <span className="text-primary font-semibold">KES {Math.round(projectedAnnualRevenue).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-muted-foreground text-sm mb-2">Additional Annual Income</p>
                    <p className="text-3xl font-serif font-bold text-primary">+KES {Math.round(additionalIncome).toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground mt-2">{roi}% ROI in first year</p>
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
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">Success Stories</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Real results from poultry farmers using Smart Poultry solutions
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

      <Footer />
    </main>
  );
};

export default SmartPoultry;
