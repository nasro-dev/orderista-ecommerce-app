import Image from "next/image";


export default function hero() {
  return (
    <section className="grid grid-cols-2">
        <div>
            <h1 className="text-4xl font-semibold">Everthing is better with a delicious and healthy food</h1>
            <p className="my-4 text-gray-500">
                Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
            </p>
        </div>
        <div className="relative">
           <Image src="/pizza.png" layout={'fill'} objectFit={'contain'} alt='pizza'/>
        </div>
    </section>
  )
}
