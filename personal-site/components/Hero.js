import Instagram from "../static/assets/instagram.svg";
import Github from "../static/assets/github.svg";
import LinkedIn from "../static/assets/linkedin.svg";
import Email from "../static/assets/email.svg";

export default props => {
  return (
    <div className="left">
      <div className="bg-img" />
      <div className="left-inner">
        <div className="info">
          <h2 className="name">{props.name}</h2>
          <div className="subtext">{props.subtext}</div>
          <div className="jobStatus">{props.jobStatus}</div>
          <div className="social-links">
          <a href={props.emailURL} target="_blank">
              <i className="fa">
                <Email />
              </i>
            </a>
            <a href={props.githubURL} target="_blank">
              <i className="fa">
                <Github />
              </i>
            </a>
            <a href={props.linkedinURL} target="_blank">
              <i className="fa">
                <LinkedIn />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};