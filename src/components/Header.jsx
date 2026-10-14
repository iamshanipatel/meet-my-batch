

function Header({ batchName, total }) {
  return (

 <header className="header">

      <h1> {batchName}</h1>
         <p>Total Students: {total}</p>
    </header>
  );
}export default Header;