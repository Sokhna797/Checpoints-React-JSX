import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg'

function App() {
  return (
    <div className="App">
      <div style={{ border:"solid 1px black",maxWidth:"1000vw" }}>

      <h1 className="title red">Sokhna Faye</h1>

      <br />

      <img src={imageInSrc} />

      <br />

      <img src="/imageInPublic.jpg" />
      <br/>
      </div>

      <video width="320" height="240" controls>

      <source src="/vdeo/video.mp4" type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
