import CartCounter from "../../shopping-cart/components/CartCounter";


export const metadata = {
  title: 'Counter Page',
  description: 'Un simple Contador'
}

export default function NamePage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20}/>

    </div>
  );
}