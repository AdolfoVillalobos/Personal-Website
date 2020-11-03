import InterestItem from "./InterestItem";

export default ({ interests }) => (
  <>
    {interests && Array.isArray(interests) && interests.length > 0 ? (
      <div className="interests">
        <h4>Intersests</h4>
        <div className="content">
          {interests.map(interests => (
            <InterestItem {...interests} />
          ))}
        </div>
      </div>
    ) : null}
  </>
);