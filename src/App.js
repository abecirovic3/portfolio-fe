import Header from "./components/Header"
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <Header />
        <div className="content">
          <AboutMe />
          <Skills />
          <Technologies />
        </div>
    </div>
  );
}

export default App;
