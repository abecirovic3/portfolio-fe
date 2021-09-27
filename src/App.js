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

function App() {
    const [aboutMeText, setAboutMeText] = useState([]);
    const [skills, setSkills] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [projects, setProjects] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`${APIRoute}/home/info?title=aboutme`)
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching about me data");
                return response.json();
            })
            .then(data => setAboutMeText(JSON.parse(data)))
            .catch(err => {
                console.log(err);
                setAboutMeText({ content: "static" })
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
            });

    }, []);
  return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">

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
