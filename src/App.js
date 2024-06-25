
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>
        <Person name='Safaet' job='Student'></Person>
        <Person name='Md' job='Student'></Person>
        <Person name='Kashem' job='Student'></Person>
        <Person name='Md.Safaet' job='Developer'></Person>
        
      </header>
    </div>
  );
}
function Person(props
) {
  const personStyle ={
    border: '2px solid yellow',
    margin: '10px'
  }
  return (
  <div style={personStyle}>
  <h1>Name :{props.name}</h1>
  <h1>Job: {props.job}</h1>
  </div>
  )

}

export default App;
