// App.jsx
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black to-purple-950">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
