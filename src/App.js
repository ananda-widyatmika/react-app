import logo from './logo.svg';
import './App.css';
import data from './Data.js';

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={data.album.images[0].url} alt="song-img" />
        <div className='info'>
          <h1>{data.album.name}</h1>
          <p>{data.album.artists[0].name}</p>
        </div>
        <button>Select</button>
      </div>
    </div>
  );
}

export default App;
