import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import PageThree from "./Pages/PageThree";
import PageFour from "./Pages/PageFour";

function App() {
  return (
    <>
     <Header></Header>

     <Nav></Nav>

      <div className="mid">

        <div className="article">
      <Routes>
        <Route path='/' element = {<Home/>}> </Route>
        <Route path='/PageOne' element = {<PageOne/>}> </Route>
        <Route path='/PageTwo' element = {<PageTwo/>}> </Route>
        <Route path='/PageThree' element = {<PageThree/>}> </Route>
        <Route path='/PageFour' element = {<PageFour/>}> </Route>
      </Routes>
      </div>
      <Aside></Aside>
      </div>
     <Footer></Footer>
    </>
  )
}

export default App;


