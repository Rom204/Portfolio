// import { Stars } from "@react-three/drei";
// import { Earth } from "./components/Earth";
import { Navbar } from "./components/Navbar";
import { Intro } from "./pages/Intro";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="h-full bg-blue-950">
      
      <Navbar/>
      <Intro/>
      <About/>
      {/* <Main/> */}
      <Contact/>
      {/* <Earth /> */}
    </div>
  );
}

export default App;
