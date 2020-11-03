import Education from "./resume/Education";
import Introduction from "./resume/Introduction";
import Experience from "./resume/Experience";
import Skills from "./resume/Skills";
import Interests from "./resume/Interest"

export default props => {
  return (
    <div className="right">
      <div className="right-inner">
        <Introduction />
        <Education />
        <Experience experiences={props.experiences} />
        <Skills skills={props.skills} />
        <Interests interests={props.interests} />
        <a className="resume" href={props.resumeURL} target="_blank">
          <div className="resume-link">Grab a PDF of my full resume</div>
        </a>
      </div>
    </div>
  );
};