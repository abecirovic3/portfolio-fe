import Header from "./components/Header"
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <div className="content">
          <AboutMe />
          <Skills />
          <Technologies />
          <Footer />
        </div>
    </div>
  );
}

export default App;
