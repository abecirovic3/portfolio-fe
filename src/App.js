import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

import { BrowserRouter as Router, Route } from "react-router-dom";
import {useEffect, useState} from "react";
import APIRoute from "./components/APIRoute";
import NetworkError from "./components/NetworkError";

function App() {
    const [aboutMeText, setAboutMeText] = useState(
        {
            id: 1,
            title: "aboutme",
            content: ""
        }
    );
    const [skills, setSkills] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [projects, setProjects] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [networkError, setNetworkError] = useState(false);

    useEffect(() => {
        fetch(`${APIRoute}/home/info?title=aboutme`)
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setAboutMeText(JSON.parse(data)))
            .catch(err => {
                console.log(err);
                setNetworkError(true);
            });

        fetch(`${APIRoute}/skill/all`)
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setSkills(JSON.parse(data)))
            .catch(err => {
                console.log(err);
                setNetworkError(true);
            });

        fetch(`${APIRoute}/technology/all`)
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setTechnologies(JSON.parse(data)))
            .catch(err => {
                console.log(err);
                setNetworkError(true);
            });

        fetch(`${APIRoute}/project/all`)
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setProjects(JSON.parse(data)))
            .catch(err => {
                console.log(err);
                setNetworkError(true);
            });

        fetch(`${APIRoute}/blog/all`)
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setBlogs(JSON.parse(data)))
            .catch(err => {
                console.log(err);
                setNetworkError(true);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            {networkError && <NetworkError contactInfo="ajdinrs.becirovic@gmial.com" />}

            <Route path="/" exact render={(props) => (
                <>
                  <AboutMe aboutMeText={aboutMeText}/>
                  <Skills skills={skills}/>
                  <Technologies technologies={technologies} />
                </>
            )} />

            <Route path="/projects" render={(props) => (
                <Projects {...props} projects={projects} />
            )} />

            <Route path="/blog" render={(props) => (
                <Blogs {...props} blogs={blogs} />
            )} />

            <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;
