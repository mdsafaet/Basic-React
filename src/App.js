
import './App.css';


function App() {
  const products = [
    {name: 'Phone', price: '$90.99'},
    {name: 'Candy', price: '$60.99'},
    {name: 'Chair', price: '$6.99'},
    {name: ' Books', price: '$249.99'}
  ]
 
 
  return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>
        {
          products.map(pd => <Product product={pd}></Product>)
        }    
        <Person name='Safaet' job='Student'></Person>
        <Person name='Md' job='Student'></Person>
        <Person name='Kashem' job='Student'></Person>
        <Person name='Md.Safaet' job='Developer'></Person>
        
      </header>
    </div>
  );
}
function Product(props) {
const productStyle = {
  border: '2px solid gray',
  borderRadius: '5px',
  backgroundColor: 'blue',
  height: '200px',
  width: '200px',
  float: 'left'
}

const {name, price} = props.product;
console.log(name, price);

return(
  <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy Now</button>
  </div>
)
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
