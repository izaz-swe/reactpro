function Hello({person}){
  return (
    <div>
      <h3>{person.message} {person.name} {person.seatNumbers}</h3>
    </div>
  );
}

export default Hello;