import React from "react";
//import ReactGA from "react-ga";

//import Styles from "./styles";
import Styles from "../styles/Styles";
import Head from "../components/Head";
import Hero from "../components/Hero";
import Description from "../components/Description";
import DATA from '../static/data/data'

class Home extends React.Component {


  render() {
    return (
      <>
       <Styles />
        <Head />
        <div className="app">
          <Hero
            name={DATA.name}
            subtext={DATA.subtext}
            jobStatus={DATA.jobStatus}
            instaURL={DATA.instaURL}
            githubURL={DATA.githubURL}
            emailURL={DATA.emailURL}
            linkedinURL={DATA.linkedinURL}
          />
          <Description
            skills={DATA.skills}
            interests={DATA.interests}
            resumeURL={DATA.resumeURL}
            experiences={DATA.experiences}
            projects={DATA.projects}
          />
        </div>
      </>
    );
  }
}

export default Home;