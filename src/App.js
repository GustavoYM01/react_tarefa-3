import { useState } from "react";
import "./App.css";
import Gif from "./assets/gif.gif";
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragments from "./components/Fragments";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";
import UserDetails from "./components/UserDetails";

function App() {
  const imgURL = "https://i.imgur.com/50NA7vr.gif";
  // const name = "Joaquim";
  const [userName] = useState("Pedro");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "Lexus", color: "Preto", newCar: false, km: 1000 },
    { id: 3, brand: "Nissan", color: "Azul", newCar: false, km: 12000 },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "João", job: "Analista de requisitos", age: 19 },
    { id: 2, name: "Maria", job: "Eng. Industrial", age: 25 },
    { id: 3, name: "Pedro", job: "Mecânico", age: 31 },
    { id: 4, name: "Alfredo", job: "Estudante", age: 16 }
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <h2>Img com src vindo de uma const:</h2>
      <img src={imgURL} alt="imagem animada" />
      <h2>Img do public:</h2>
      <img src="/gif.gif" alt="gif" />
      <h2>Img de /src/assets:</h2>
      <img src={Gif} alt="gif" />
      <br />
      <br />
      <ManageData />
      <br />
      <br />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails
        brand="Toyota"
        km={25000}
        color="Azul meia-noite"
        newCar={false}
      />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelho pérola" km={0} newCar={true} />
      <CarDetails
        brand="Honda"
        color="Preto carbono"
        km={4500}
        newCar={false}
      />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragments */}
      <Fragments prop={"props"} />
      {/* children */}
      <Container myValue="testando">
        <p>Conteúdo do container</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Tarefa 4 */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </div>
  );
}

export default App;
