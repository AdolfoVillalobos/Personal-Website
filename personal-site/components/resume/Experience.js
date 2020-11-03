import ExperienceItem from "./ExperienceItem";

export default ({ experiences }) => (
  <>
    {experiences && Array.isArray(experiences) && experiences.length > 0 ? (
      <div className="experience">
        <h4>Experience</h4>
        <div className="content">
          {experiences.map(experience => (
            <ExperienceItem {...experience} />
          ))}
        </div>
      </div>
    ) : null}
  </>
);