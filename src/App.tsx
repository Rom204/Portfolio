import { Earth } from "./components/Earth";
import { Navbar } from "./components/Navbar";
import { Intro } from "./pages/intro";

function App() {
  return (
    <div className="h-screen bg-blue-950">
      <Navbar/>
      <Intro/>
      {/* <Earth /> */}
    </div>
  );
}

export default App;
