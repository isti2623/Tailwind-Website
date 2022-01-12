
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './componant/Home';
import Food from './componant/Food';
import About from './componant/About';
import Contact from './componant/Contact';
import Header from "./componant/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="food" element={<Food />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
