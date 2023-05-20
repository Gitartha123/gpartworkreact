
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./components/pages/Aboutus";
import Artondemand from "./components/pages/Artondemand";
import Contactus from "./components/pages/Contactus";
import Latestdrawing from "./components/pages/drawingalleries/Latestdrawing";
import DrawingGallery from "./components/pages/DrawingGallery";
import Packages from "./components/pages/Packages";
import Footer from "./components/templates/Footer";
import Navbar from "./components/templates/Navbar";
import Slider from "./components/templates/Slider";
import Api from "./context/Apicontext";
import UserStates from "./context/UserAuthContext";

function App() {

  const loginreducers = useSelector(state => state.loginReducers);

  return (
    <Router>
      <div className="App">
        <Api>
          <UserStates>
            {/** IF Userrole is 0 */}
            {loginreducers.role !== 1 ?
              <>
                <div className="container-fluid position-relative p-sm-0">
                  <Navbar />
                  <Routes>
                    <Route exact path='/' element={<><Slider /><Artondemand /><Latestdrawing /></>}></Route>
                    <Route exact path='/aboutus' element={<><Aboutus /><Artondemand /></>}></Route>
                    <Route exact path='/packages' element={<Packages />}></Route>
                    <Route exact path='/gallery' element={<DrawingGallery />}></Route>
                    <Route exact path='/contactus' element={<Contactus />}></Route>
                  </Routes>

                </div>
                <Footer />
              </>

              :
              /** If Userrole is 1 */
              ""
            }

          </UserStates>
        </Api>
      </div>
    </Router>
  );
}

export default App;
