import SkillItem from "./Skillitem";

export default ({ skills }) => (
  <>
    {skills && Array.isArray(skills) && skills.length > 0 ? (
      <div className="skills">
        <h4>Skills</h4>
        <div className="content">
          {skills.map(skill => (
            <SkillItem {...skill} />
          ))}
        </div>
      </div>
    ) : null}
  </>
);