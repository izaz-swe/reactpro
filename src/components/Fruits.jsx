import Fruit from "./Fruit";

export default function Fruits() {
  // const furits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Mango", price: 8 },
    { name: "Pineapple", price: 12 },
    { name: "Banana", price: 3 }
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit name={fruit.name} price={fruit.price}/>
        ))}
      </ul>
    </div>
  );
}
