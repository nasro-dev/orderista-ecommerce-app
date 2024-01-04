import Image from "next/image";


export default function hero() {
  return (
    <section className="hero mt-8">
        <div className="py-8">
            <h1 className="text-4xl font-semibold leading-normal">Everthing is better with a delicious and healthy food</h1>
            <p className="my-6 text-gray-500">
                Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
            </p>
            <div className="flex gap-4">
              <button className="bg-red-500 text-white font-semibold uppercase px-6 py-2 rounded-full">
                Order now
              </button>
              <button className="flex gap-2 py-2 text-gray-600 ">
                Learn more
              </button>
            </div>
        </div>
        <div className="relative">
           <Image src="/pizza.png" layout={'fill'} objectFit={'contain'} alt='pizza'/>
        </div>
    </section>
  )
}
