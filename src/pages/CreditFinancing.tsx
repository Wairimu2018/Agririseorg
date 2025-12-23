import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Wallet, Percent, Clock, Shield, Quote, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    name: "Eldoret Dairy Farmers Sacco",
    location: "Uasin Gishu County, Kenya",
    members: "340 dairy farmers",
    challenge: "Farmers couldn't afford quality dairy cows (KES 120,000+), modern equipment, or feed during dry seasons. Banks required 150% collateral and charged 24% interest.",
    solution: "Value chain financing using milk delivery contracts as collateral. Zero physical collateral required. Interest rates at 12% with repayment deducted directly from milk sales.",
    results: [
      { metric: "Farmers funded", before: "45", after: "280", improvement: "+522%" },
      { metric: "Avg loan size", before: "KES 15,000", after: "KES 85,000", improvement: "+467%" },
      { metric: "Interest rate", before: "24%", after: "12%", improvement: "-50%" },
      { metric: "Default rate", before: "18%", after: "3.2%", improvement: "-82%" },
    ],
    testimonial: "I never thought I could own a grade cow. The loan was approved in 3 days using my milk records, and I pay it back automatically from my deliveries.",
    author: "Samuel Kiptoo, Dairy Farmer",
  },
  {
    name: "Kiambu Poultry Credit Program",
    location: "Kiambu County, Kenya",
    members: "520 poultry farmers",
    challenge: "Poultry farmers needed KES 200,000+ to build modern broiler units but couldn't access credit. High mortality and price volatility made lenders wary.",
    solution: "Bundled financing with climate-controlled housing, day-old chicks, feed, and veterinary support. Off-taker contracts guarantee market. Repayment tied to batch cycles.",
    results: [
      { metric: "Credit accessed", before: "KES 8M/yr", after: "KES 95M/yr", improvement: "+1088%" },
      { metric: "Avg unit size", before: "500 birds", after: "2,000 birds", improvement: "+300%" },
      { metric: "Mortality rate", before: "18%", after: "5%", improvement: "-72%" },
      { metric: "Profit per cycle", before: "KES 25,000", after: "KES 120,000", improvement: "+380%" },
    ],
    testimonial: "The integrated package changed everything. I got the housing, chicks, feed, and buyer all in one loan. My income has tripled in one year.",
    author: "Grace Wambui, Poultry Farmer",
  },
];

const loanProducts = [
  {
    title: "Dairy Cow Financing",
    description: "Purchase grade dairy cows with milk delivery contract as collateral",
    amount: "KES 80,000 - 200,000",
    rate: "12% p.a.",
    term: "24 months",
  },
  {
    title: "Poultry Unit Setup",
    description: "Complete broiler or layer unit with housing, stock, and feed",
    amount: "KES 150,000 - 500,000",
    rate: "14% p.a.",
    term: "18 months",
  },
  {
    title: "Working Capital",
    description: "Seasonal inputs, feed, and operational costs financing",
    amount: "KES 20,000 - 100,000",
    rate: "10% p.a.",
    term: "6 months",
  },
  {
    title: "Equipment Finance",
    description: "Milking machines, incubators, cooling tanks, and machinery",
    amount: "KES 100,000 - 1,000,000",
    rate: "15% p.a.",
    term: "36 months",
  },
];

const CreditFinancing = () => {
  const [loanAmount, setLoanAmount] = useState([100000]);
  const [loanTerm, setLoanTerm] = useState([24]);
  const [interestRate] = useState(12);

  // Loan Calculator
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment = (loanAmount[0] * monthlyRate * Math.pow(1 + monthlyRate, loanTerm[0])) / (Math.pow(1 + monthlyRate, loanTerm[0]) - 1);
  const totalPayment = monthlyPayment * loanTerm[0];
  const totalInterest = totalPayment - loanAmount[0];

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
              <Wallet className="w-7 h-7 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
              Credit Financing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 max-w-4xl">
            Unlock growth with value chain credit financing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Affordable financing for dairy and poultry farmers without traditional collateral. Use your production contracts and delivery records to access credit at half the market rate.
          </p>
          
          {/* <div className="flex flex-wrap gap-4">
            <Button variant="heroPrimary" size="lg">
              Apply for Credit
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              Check Eligibility
            </Button>
          </div> */}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12">
            Why Our Financing Is Different
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "No Collateral Required",
                description: "Your milk or egg delivery contracts serve as security. No land titles or physical assets needed."
              },
              {
                icon: Percent,
                title: "Low Interest Rates",
                description: "Rates starting at 10% p.a. — half of what banks charge — because we understand agricultural cash flows."
              },
              {
                icon: Clock,
                title: "Fast Approval",
                description: "Get approved in 3-5 days using your digital production records. No lengthy paperwork."
              },
              {
                icon: Calculator,
                title: "Flexible Repayment",
                description: "Repayments automatically deducted from your sales. Pay more during peak seasons, less during lean times."
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-secondary/30 rounded-xl p-6 border border-border/30">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Loan Products
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Tailored financing solutions for every stage of your dairy or poultry value chain.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanProducts.map((product) => (
              <div key={product.title} className="bg-card rounded-xl p-6 border border-border/30 hover:border-primary/40 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="text-foreground font-medium">{product.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rate:</span>
                    <span className="text-primary font-medium">{product.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Term:</span>
                    <span className="text-foreground font-medium">{product.term}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4 text-center">
              Loan Calculator
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Estimate your monthly repayments and total cost
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-foreground font-medium">Loan Amount</label>
                    <span className="text-primary font-semibold">KES {loanAmount[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    min={20000}
                    max={500000}
                    step={10000}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-foreground font-medium">Loan Term</label>
                    <span className="text-primary font-semibold">{loanTerm[0]} months</span>
                  </div>
                  <Slider
                    value={loanTerm}
                    onValueChange={setLoanTerm}
                    min={6}
                    max={36}
                    step={6}
                    className="w-full"
                  />
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="text-primary font-semibold">{interestRate}% p.a.</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/50 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-6">Your Estimated Repayments</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly Payment</span>
                    <span className="text-2xl text-primary font-bold">KES {monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Interest</span>
                    <span className="text-foreground font-medium">KES {totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Repayment</span>
                    <span className="text-foreground font-medium">KES {totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
                
                {/* <Button variant="heroPrimary" className="w-full">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Button> */}
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
            Farmers who have grown their operations through our value chain financing.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-secondary/30 rounded-2xl p-8 border border-border/30">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{study.name}</h3>
                  <p className="text-primary font-medium">{study.location} • {study.members}</p>
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
            Ready to grow your farm?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Apply today and get approved in as little as 3 days. No land title required.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <Button variant="heroPrimary" size="lg">
              Start Application
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              Talk to a Loan Officer
            </Button>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditFinancing;
