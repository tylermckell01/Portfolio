import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
