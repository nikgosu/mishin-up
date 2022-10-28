import './App.css';
import HomePage from "./pages/HomePage"
import {NavBar} from "./components/NavBar"
import Footer from "./components/FooterComponents/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Portfolio from "./pages/Portfolio"
import CommercialVideos from "./components/CommercialVideos"
import Backstage from "./pages/Backstage"

function App() {
  return (
    <div className="App">
	    <BrowserRouter>
		    <NavBar/>
		    <Routes>
			    <Route path={'/'} element={<HomePage/>}/>
			    <Route path={'/portfolio'} element={<Portfolio/>}/>
			    <Route path={'/commercial'} element={<CommercialVideos/>}/>
			    <Route path={'/backstage'} element={<Backstage/>}/>
		    </Routes>
		    <Footer/>
	    </BrowserRouter>
    </div>
  );
}

export default App;
