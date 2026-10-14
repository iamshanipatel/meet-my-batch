import students from './data';
import Header from './components/Header';

import StudentList from './components/StudentList';
import './App.css';

function  App( ) {
  return (

    <div className="app">

      <Header batchName="Meet My Batch" total={students.length} />

       <StudentList students={ students} />

    </div>
  );
}

   export default App;