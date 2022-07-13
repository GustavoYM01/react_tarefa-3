import './App.css';

function App() {
  const imgURL = "https://i.imgur.com/50NA7vr.gif";
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <img src={imgURL} alt="imagem animada" />
    </div>
  );
}

export default App;
