const CarDetails = ({brand, km, color, newCar }) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p><strong>Esse carro é novo!</strong></p>}
    </div>
  )
}

export default CarDetails