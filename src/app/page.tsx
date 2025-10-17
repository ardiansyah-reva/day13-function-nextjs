import './globals.css';
import { array, first, nameProduct, object, price, second, third } from "@/utils/desturing"
import { arrowFunction, sum } from "@/utils/logic";

export default function Home() {
  return (
   <div className='container mx-auto my-15 grid gap-10'>
      <div>
        <h2  className="text-lg font-bold">Arrow Function</h2>
        <pre>{arrowFunction}</pre>
        <p>a = 2000</p>
        <p>b = 3000</p>
        <p>console.log = {sum(2000,3000)}</p>
      </div>
      <div>
        <h2  className="text-lg font-bold">Desturing Object</h2>
        <pre>{object}</pre>
        <p>nameProduct = "kulkas"</p>
        <p>price = 1.000.000</p>
        <p>console.log = {nameProduct}</p>
        <p>console.log = {price}</p>
      </div>
      <div>
        <h2  className="text-lg font-bold">Desturing Array</h2>
        <pre>{array}</pre>
        <p>console.log = {first}</p>
        <p>console.log = {second}</p>
        <p>console.log = {third}</p>
      </div>
   </div>
  );
}