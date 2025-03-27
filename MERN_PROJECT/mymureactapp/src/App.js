import AboutUsFun from "./Component/AboutUsFun";
import FooterFun from "./Component/FooterFun";
import HeaderFun from "./Component/HeaderFun";
import HomeClass from "./Component/HomeClass";


function App() {
  return (
    <>
      {HeaderFun()}
      <HomeClass/>
      {AboutUsFun()}
      {FooterFun()}
    </>
  );
}

export default App;
