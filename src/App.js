import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/app.scss";

import MyJs from "./components/MyJs";
import MyReact from "./components/MyReact";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/my-js" element={<MyJs />} />
            <Route path="/my-react" element={<MyReact />} />
            <Route path="/my-python" element={<div>My Python Page</div>} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
