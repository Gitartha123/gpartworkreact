import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contactus";
import Latestdrawing from "./components/pages/drawingalleries/Latestdrawing";
import DrawingGallery from "./components/pages/DrawingGallery";
import Packages from "./components/pages/Packages";
import Prices from "./components/pages/Prices";
import Footer from "./components/templates/Footer";
import Header from "./components/templates/Header";
import Navbar from "./components/templates/Navbar";
import Slider from "./components/templates/Slider";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid position-relative p-0">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<><Slider /><Latestdrawing /><Prices /></>}></Route>
            <Route exact path='/aboutus' element={<><Aboutus /><Prices /></>}></Route>
            <Route exact path='/packages' element={<Packages />}></Route>
            <Route exact path='/gallery' element={<DrawingGallery />}></Route>
            <Route exact path='/contactus' element={<Contactus />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
