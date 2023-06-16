import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Social/>
      <About/>
      <Portfolio/>
    </div>
    
  );
}

export default App;
