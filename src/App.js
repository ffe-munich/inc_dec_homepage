import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Background_info/background_info";
import Services from "./Components/Services/Services";
import Services_2 from "./Components/Services_2/Services_2";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Services_2/>
     
     
    </div>
  );
}

export default App;
