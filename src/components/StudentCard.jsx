

function StudentCard({ name, emoji, city, funFact, skills }) {
  return (

     
    <div className="card">
       <div className="emoji">{emoji}</div>

      <h2>{name}</h2>


      <p className="city"> {city}</p>
      <p className="fun-fact">  <strong>Fun Fact:</strong>    {funFact}</p>
      
      <div className="skills">


        {skills && skills.map((skill, index) => (
          <span key={index} className="tag">{skill}</span>
        ))}
      </div>

    </div>
  );
}export default StudentCard;