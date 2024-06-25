
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  const personStyle ={
    border: '2px solid yellow',
    margin: '10px'
  }
  return (
  <div style={personStyle}>
  <h1>Name : Safaet</h1>
  <h1>Job: Student</h1>
  </div>
  )

}

export default App;
