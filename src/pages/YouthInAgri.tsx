import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Users, GraduationCap, Briefcase, Sprout, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    name: "Nakuru Youth Agri-Hub",
    location: "Nakuru County, Kenya",
    participants: "180 youth entrepreneurs",
    challenge: "High youth unemployment at 35%, limited access to agricultural land, and lack of practical farming skills among graduates.",
    solution: "Established intensive 6-month bootcamp combining hands-on training, access to leased farmland, and startup capital through micro-loans.",
    results: [
      { metric: "Employment rate", before: "12%", after: "78%", improvement: "+550%" },
      { metric: "Monthly income", before: "KES 3,000", after: "KES 28,000", improvement: "+833%" },
      { metric: "Businesses started", before: "0", after: "45", improvement: "45 new" },
      { metric: "Land accessed", before: "0 acres", after: "320 acres", improvement: "320 acres" },
    ],
    testimonial: "I was selling charcoal on the roadside. Now I run a profitable greenhouse operation and employ 4 other youth from my village.",
    author: "James Kiprop, Agripreneur Graduate",
  },
  {
    name: "Kisumu Women in Agri",
    location: "Kisumu County, Kenya",
    participants: "240 young women",
    challenge: "Gender barriers to agricultural land ownership, limited access to finance for women farmers, and lack of female role models in agribusiness.",
    solution: "Women-focused incubator providing skills training, group land leasing, and women-led cooperative formation with dedicated credit lines.",
    results: [
      { metric: "Land ownership", before: "5%", after: "42%", improvement: "+740%" },
      { metric: "Credit access", before: "8%", after: "67%", improvement: "+738%" },
      { metric: "Cooperative members", before: "0", after: "6 groups", improvement: "6 co-ops" },
      { metric: "Average savings", before: "KES 500/mo", after: "KES 8,500/mo", improvement: "+1600%" },
    ],
    testimonial: "AgriRise showed me that farming is not just for men. Our women's cooperative now supplies vegetables to three supermarkets in Kisumu.",
    author: "Grace Atieno, Cooperative Leader",
  },
];

const YouthInAgri = () => {
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
              <Users className="w-7 h-7 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
              Youth in Agri
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 max-w-4xl">
            Empowering the next generation of African farmers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Comprehensive training, financing, and mentorship programs that transform unemployed youth into successful agripreneurs. 2,500+ youth trained and counting.
          </p>
          
          {/* <div className="flex flex-wrap gap-4">
            <Button variant="heroPrimary" size="lg">
              Apply for Training
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              Partner With Us
            </Button>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12">
            Complete Youth Development Program
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Skills Bootcamps",
                description: "Intensive 6-month practical training covering modern farming techniques, business management, financial literacy, and digital agriculture tools."
              },
              {
                icon: Briefcase,
                title: "Startup Incubation",
                description: "Business development support including mentorship, access to startup capital, market connections, and ongoing advisory services for new agripreneurs."
              },
              {
                icon: Sprout,
                title: "Resource Access",
                description: "Facilitated access to agricultural land through group leasing, quality inputs on credit, and equipment sharing programs to reduce startup barriers."
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

      {/* Impact Stats */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-12 text-center">
            Program Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2,500+", label: "Youth Trained" },
              { value: "78%", label: "Employment Rate" },
              { value: "450+", label: "Businesses Started" },
              { value: "KES 28K", label: "Avg Monthly Income" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
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
            Real transformations from youth who have graduated from our programs and built thriving agricultural businesses.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-secondary/30 rounded-2xl p-8 border border-border/30">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{study.name}</h3>
                  <p className="text-primary font-medium">{study.location} • {study.participants}</p>
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
            Ready to start your agricultural journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Applications are open for our next cohort. Join 2,500+ youth who have transformed their lives through agriculture.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <Button variant="heroPrimary" size="lg">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="lg">
              Download Program Guide
            </Button>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YouthInAgri;
