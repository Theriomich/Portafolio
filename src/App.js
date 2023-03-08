import "./App.css";
import Subtitle from "./SubTitle";
import BannerFrontEnd from "./img/BannerFrontEnd.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={BannerFrontEnd} alt="banner" />
        <h2>Portafolio</h2>
      </header>
      <div>
        <Subtitle />
      </div>
    </div>
  );
}

export default App;
