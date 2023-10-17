
import './App.css';
function App() {
  var val="Meraki app"
  const changeName=()=>{
        val="laxmi"
        console.log(val)
  }
  return (

    <div className='App'>
      <h1>{val}</h1>
      <button className='btn' onClick={changeName}>click me</button>
    </div>
  );
}

export default App;
