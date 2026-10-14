
import StudentCard from './StudentCard';

function StudentList({ students }) {
  return (

    <div className="grid">
       {students.map((student) => (
        <StudentCard
           key={student.id}
          name={student.name}
           emoji={student.emoji}
          city={student.city}
           funFact={student.funFact}
          skills={student.skills}
        />
      ))}



    </div>
  );
}export default StudentList;