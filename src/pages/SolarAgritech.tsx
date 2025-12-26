import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Sun, Battery, Droplets, Thermometer, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import coldStorage from "@/assets/ColdStorage.png";
import payasyougo from "@/assets/Payasyougo.png";
import solarPump from "@/assets/Solar_pump.jpg";

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
    testimonial:
      "We used to spend more on diesel than we earned from crops. Now the sun does the work for free and our yields have more than doubled.",
    author: "James Kirimi, Scheme Chairman",
  },
  {
    name: "Kisumu Fish Farmers",
    location: "Kisumu County, Kenya",
    members: "85 farmers",
    challenge:
      "No cold storage for harvested fish, forcing farmers to sell immediately at low prices. 25% post-harvest losses due to spoilage.",
    solution:
      "Deployed 10 solar-powered cold rooms with pay-as-you-go financing, enabling farmers to store fish and sell at optimal market prices.",
    results: [
      { metric: "Post-harvest loss", before: "25%", after: "3%", improvement: "-88%" },
      { metric: "Selling price", before: "KES 250/kg", after: "KES 380/kg", improvement: "+52%" },
      { metric: "Storage capacity", before: "0 kg", after: "2,000 kg", improvement: "∞" },
      { metric: "Monthly savings", before: "N/A", after: "KES 45,000", improvement: "New" },
    ],
    testimonial:
      "Before, I had to sell the same day or watch my fish rot. Now I store them and wait for the best prices. It changed everything.",
    author: "Otieno Nyawade, Fish Farmer",
  },
];

const SolarAgriTech = () => {
  const [acreage, setAcreage] = useState(5);
  const [dieselCost, setDieselCost] = useState(15000);
  const [pumpHours, setPumpHours] = useState(4);

  // ROI calculations
  const systemCost = acreage * 120000;
  const annualSavings = dieselCost * 12;
  const additionalYield = acreage * 16 * 35000;
  const totalAnnualBenefit = annualSavings + additionalYield;
  const paybackMonths = Math.round(systemCost / (totalAnnualBenefit / 12));
  const fiveYearROI = Math.round(((totalAnnualBenefit * 5 - systemCost) / systemCost) * 100);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <Sun className="w-7 h-7 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase bg-primary/10 text-primary rounded-full">
              Solar Agri-Tech
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6 max-w-4xl">
            Harvest the sun to power your farm's future
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl">
            Solar-powered irrigation and cold storage that eliminates energy costs and unlocks new market opportunities.
          </p>
        </div>
      </section>

      {/* Features WITH IMAGES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold mb-12">
            Complete Solar Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Solar Irrigation Systems",
                description:
                  "High-efficiency solar pumps with smart controllers that optimize water delivery based on crop and soil needs.",
                image: solarPump,
              },
              {
                icon: Thermometer,
                title: "Off-Grid Cold Storage",
                description:
                  "Solar-powered cold rooms that preserve produce, fish, and dairy without grid electricity.",
                image: coldStorage,
              },
              {
                icon: Battery,
                title: "Pay-As-You-Go Financing",
                description:
                  "Flexible payment plans spread costs over time while you save from day one.",
                image: payasyougo,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl overflow-hidden border border-border/50"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-44 object-cover"
                />

                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold text-center mb-4">
            Calculate Your Savings
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Label>Farm Size: {acreage} acres</Label>
                <Slider value={[acreage]} onValueChange={(v) => setAcreage(v[0])} min={1} max={50} />
              </div>

              <div>
                <Label>Monthly Diesel Cost: KES {dieselCost.toLocaleString()}</Label>
                <Slider value={[dieselCost]} onValueChange={(v) => setDieselCost(v[0])} min={5000} max={100000} step={5000} />
              </div>

              <div>
                <Label>Current Pump Hours: {pumpHours} hrs/day</Label>
                <Slider value={[pumpHours]} onValueChange={(v) => setPumpHours(v[0])} min={2} max={8} />
              </div>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-8 border border-primary/20">
              <p className="text-lg font-semibold mb-4">Projected Impact</p>
              <p>System Cost: KES {systemCost.toLocaleString()}</p>
              <p>Annual Savings: KES {annualSavings.toLocaleString()}</p>
              <p>Payback Period: {paybackMonths} months</p>
              <p className="text-2xl font-bold text-primary mt-4">{fiveYearROI}% ROI in 5 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold mb-12">Success Stories</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-card rounded-2xl p-8 border">
                <h3 className="text-xl font-serif font-semibold">{study.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{study.location}</p>

                <p className="text-sm mb-4">{study.challenge}</p>
                <p className="text-sm mb-4">{study.solution}</p>

                <blockquote className="italic text-muted-foreground border-l-2 pl-4">
                  "{study.testimonial}"
                  <footer className="mt-2 font-medium">— {study.author}</footer>
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

export default SolarAgriTech;
