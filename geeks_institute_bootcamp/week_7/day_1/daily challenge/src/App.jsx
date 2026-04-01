import Header from "./components/Header";
import Card from "./components/Card";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <main id="home" className="py-20 text-center bg-white border-b">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Build Faster with React</h2>
        <p className="text-lg text-gray-500">The perfect solution for your next big project.</p>
      </main>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            icon="fa-rocket" 
            title="Fast Performance" 
            description="Our app is optimized for speed and works smoothly on all devices." 
          />
          <Card 
            icon="fa-bolt" 
            title="Easy to Use" 
            description="User-friendly interface designed with simplicity in mind for everyone." 
          />
          <Card 
            icon="fa-mobile-alt" 
            title="Modern Design" 
            description="Clean and sleek aesthetics following the latest UI trends." 
          />
        </div>
      </section>

      <Contact />

      <footer className="py-6 text-center text-gray-500 bg-white border-t">
        <p>© 2026 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;