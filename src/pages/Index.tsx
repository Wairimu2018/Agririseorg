import Navigation from "@/components/Navigation";
// import Home from "@/components/Home";
import Hero from "@/components/Hero";
import Solutions from "@/components/Home";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {/* <Home /> */}
      <Hero />
      <Solutions />
      <Footer />
    </main>
  );
};

export default Index;