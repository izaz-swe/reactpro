export default function Fruit({name, price}){
  return (
    <>
    {price > 5 ? <li key={name}> {name} ${price}</li>: ""}
    </>
  );
}