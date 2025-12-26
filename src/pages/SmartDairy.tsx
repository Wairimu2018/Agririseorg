import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Milk,
  TrendingUp,
  Thermometer,
  Users,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ✅ IMAGES
import milkmarket from "@/assets/milkmarket.png";
import FeedOptimization from "@/assets/FeedOptimization.png";
import ColdChain from "@/assets/Cold-Chain-Management.png";

// CASE STUDIES
const caseStudies = [
  {
    name: "Nakuru Dairy Cooperative",
    location: "Nakuru County, Kenya",
    members: "120 farmers",
    challenge:
      "Inconsistent milk quality, high feed costs, and limited market access leading to low profits.",
    solution:
      "Implemented AI feed optimization, cold chain monitoring, and direct market linkages.",
    results: [
      { metric: "Milk Yield", before: "8 L/day", after: "18 L/day", improvement: "+125%" },
      { metric: "Feed Cost", before: "KES 250/day", after: "KES 175/day", improvement: "-30%" },
      { metric: "Monthly Revenue", before: "KES 28,000", after: "KES 75,000", improvement: "+168%" },
    ],
    testimonial:
      "Our cooperative now produces consistently high-quality milk and sells directly to processors at fair prices. The technology paid for itself within months.",
    author: "Mary Wanjiku, Cooperative Chairperson",
  },
  {
    name: "Machakos Dairy Farmers",
    location: "Machakos County, Kenya",
    members: "85 farmers",
    challenge:
      "High post-milking losses due to poor cold storage and lack of market visibility.",
    solution:
      "Installed IoT-based cold storage units and digital market platform for price transparency.",
    results: [
      { metric: "Milk Losses", before: "22%", after: "4%", improvement: "-82%" },
      { metric: "Monthly Profit", before: "KES 15,000", after: "KES 48,000", improvement: "+220%" },
    ],
    testimonial:
      "Before, a third of our milk would spoil. Now we can deliver fresh milk to buyers every day and profits have tripled.",
    author: "Peter Mutua, Dairy Farmer",
  },
];

// FEATURES
const features = [
  {
    icon: TrendingUp,
    title: "AI Feed Optimization",
    description:
      "Machine learning algorithms analyze herd data, feed prices, and nutrition requirements to maximize milk yield while reducing costs.",
    image: FeedOptimization,
  },
  {
    icon: Thermometer,
    title: "Cold Chain Monitoring",
    description:
      "IoT sensors track milk temperature from collection to delivery, preventing spoilage and ensuring quality compliance.",
    image: ColdChain,
  },
  {
    icon: Users,
    title: "Market Linkage Platform",
    description:
      "Direct digital connections between farmers and processors eliminate middlemen and guarantee fair pricing with fast payments.",
    image: milkmarket,
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
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <Milk className="w-7 h-7 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase bg-primary/10 text-primary rounded-full">
              Smart Dairy
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 max-w-4xl">
            Transform your dairy operation with precision technology
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl">
            End-to-end dairy value chain optimization — from feed management to cold chain and market access.
          </p>
        </div>
      </section>

      {/* FEATURES WITH IMAGES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold mb-12">
            Complete Dairy Solution
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-cover"
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

      {/* ROI CALCULATOR */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold mb-4 text-center">
            Calculate Your ROI
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* INPUTS */}
            <div className="space-y-8">
              <div>
                <Label>Herd Size: {herdSize} cows</Label>
                <Slider
                  value={[herdSize]}
                  onValueChange={(v) => setHerdSize(v[0])}
                  min={1}
                  max={100}
                />
              </div>

              <div>
                <Label>Current Yield: {currentYield} L/day</Label>
                <Slider
                  value={[currentYield]}
                  onValueChange={(v) => setCurrentYield(v[0])}
                  min={2}
                  max={20}
                />
              </div>

              <div>
                <Label>Daily Feed Cost: KES {feedCost}</Label>
                <Slider
                  value={[feedCost]}
                  onValueChange={(v) => setFeedCost(v[0])}
                  min={100}
                  max={500}
                  step={10}
                />
              </div>
            </div>

            {/* RESULTS */}
            <div className="bg-secondary/50 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-semibold mb-6">Projected Impact</h3>

              <p className="text-muted-foreground mb-2">Monthly Profit Increase</p>
              <p className="text-3xl font-serif font-bold text-primary mb-2">
                +KES {additionalIncome.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">{roi}% ROI in first year</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES / TESTIMONIALS */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold mb-4">Success Stories</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Real results from dairy farmers using Smart Dairy solutions
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.name}
                className="bg-card rounded-2xl p-8 border border-border/50"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      {study.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {study.location} • {study.members}
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-destructive/80 mb-2">
                    Challenge
                  </p>
                  <p className="text-muted-foreground text-sm">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-primary mb-2">Solution</p>
                  <p className="text-muted-foreground text-sm">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div
                      key={result.metric}
                      className="bg-secondary/50 rounded-lg p-3"
                    >
                      <p className="text-xs text-muted-foreground mb-1">
                        {result.metric}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground line-through mr-1">
                          {result.before}
                        </span>
                        <span className="text-foreground font-medium">
                          {result.after}
                        </span>
                      </p>
                      <p className="text-xs text-primary font-semibold">
                        {result.improvement}
                      </p>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground text-sm">
                  "{study.testimonial}"
                  <footer className="mt-2 not-italic font-medium text-foreground">
                    — {study.author}
                  </footer>
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

export default SmartDairy;
