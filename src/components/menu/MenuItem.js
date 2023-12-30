
export default function MenuItem(){
  return (
    <div className="bg-gray-200 p-3 rounded-lg text-center">
        <img src="/pizza.png" alt="menu"/>
        <h4 className="font-semibold my-4 text-sl">Menu Pizza</h4>
        <p className="text-gray-500 text-sm">description</p>
        <button className="bg-red-500 text-white rounded-full 
        px-4 py-2 mt-4">Add to cart</button>
  </div>
  )
}
