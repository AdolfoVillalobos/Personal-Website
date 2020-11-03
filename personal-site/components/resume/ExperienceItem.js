export default (props) => (
    <div className="exp-item">
      <div className="job">
        <a className="company" href={props.companyLink} target="_blank">{props.companyName}</a>
        <div className="duration">{props.companyDuration}</div>
      </div>
      <div className="title">{props.companyDesignation}</div>
      <ul className="description">
        {props.description}
      </ul>
    </div>
  )