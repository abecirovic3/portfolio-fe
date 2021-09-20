import Header from "./components/Header"
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
        <div className="content">
          <AboutMe />
          <Skills />
        </div>
    </div>
  );
}

export default App;
