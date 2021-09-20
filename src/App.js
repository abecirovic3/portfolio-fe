import Header from "./components/Header"
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />
        <div className="content">
          <AboutMe />
        </div>
    </div>
  );
}

export default App;
