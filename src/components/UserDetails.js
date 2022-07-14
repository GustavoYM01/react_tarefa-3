const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <hr />
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? (
        <p><strong>Pode tirar a CNH</strong></p>
      ) : (
        <p><strong>Menor de idade</strong></p>
      )}
    </div>
  );
};

export default UserDetails;
