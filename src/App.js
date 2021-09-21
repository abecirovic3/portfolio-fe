import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">

            <Route path="/" exact render={(props) => (
                <>
                  <AboutMe />
                  <Skills />
                  <Technologies />
                </>
            )} />

            <Route path="/projects" component={Projects} />

            <Route path="/blog" component={Blog} />

            <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;
