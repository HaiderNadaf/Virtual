import Navbar from "./container/Navbar";
import Hero from "./container/Hero";
import Feature from "./container/Feature";
import Workflow from "./container/Workflow";
import Pricing from "./container/Pricing";
import Testinomials from "./container/Testinomials";
import Footer from "./container/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
        <Pricing />
        <Testinomials />
        <Footer />
      </div>
    </>
  );
};

export default App;
