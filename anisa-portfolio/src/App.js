import './App.css';
import "./App.css"
import Header from './components/Header';

function App()
{
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
      <section>
      <img src="stars.png" id="stars" alt="stars"/>
      <img src="moon.png" id="moon" alt="moon"/>
      <img src="mountains_behind.png" id="mountains_behind" alt="mountains_behind"/>
      <img src="mountains_front.png" id="mountains_front" alt="mountains_front"/>
      </section>
      </div>
    </div>
  );
}

export default App;
