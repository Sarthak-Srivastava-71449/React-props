import './App.css';


function App(props) {
  console.log("Props :", props.data)
  return(
    <div className='App'>
    <h1>Kalvium Gallery</h1>
    <div className='imagepart'>
    {props.Sarthak.map((e)=>{
          return <img src= {e.img} alt = 'Elephant Art'/>;
        })}
    </div>
    </div>
  )
}

export default App;
