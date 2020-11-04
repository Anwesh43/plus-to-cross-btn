import logo from './logo.svg';
import './App.css';
import PlusToCrossBtn from './PlusToCrossBtn'

function App() {
  return (
    <div className="App">
        <PlusToCrossBtn delay = {12} speed = {0.02} onClick = {() => {
            alert("Hello World")
        }}/>
    </div>
  );
}

export default App;
