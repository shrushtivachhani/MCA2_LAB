import AboutUsFun from "./Component/AboutUsFun";
import Counter from "./Component/Counter";
import EventDemo from "./Component/EventDemo";
import FooterFun from "./Component/FooterFun";
import HeaderFun from "./Component/HeaderFun";
import HomeClass from "./Component/HomeClass";
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* {HeaderFun()}
      <HomeClass/>
      {AboutUsFun()}
      {FooterFun()} */}
      {/* <h1>MY REACT APP</h1>
      <Router>
        <Routes>
          <HeaderFun/>
          <Route path="/" element={<HomeClass/>} />
          <AboutUsFun/>
          <FooterFun/>
        </Routes>
      </Router> */}
      <HeaderFun/>
      <Router>
        <Link to="/">Home</Link> | 
        <Link to="/aboutus">About Us</Link> | 
        <Link to="/btnclick">ClikMe</Link> | 
        <Link to="/counter">Counter</Link>
        <Routes>
          <Route path="/" element={<HomeClass/>}/> 
          <Route path="/aboutus" element={<AboutUsFun/>}/>
          <Route path="/btnclick" element={<EventDemo/>}/>
          <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </Router>
      <FooterFun/>
    </>
  );
}

export default App;
