import MenuItem from "../menu/MenuItem"

const HomeMenu = () => {
  return (
    <section className="">
      <div className="text-center">
        <h3 className="text-gray-600 
        uppercase font-semibold leading-4">Check Out</h3>
        <h2 className="text-primary 
        font-bold text-4xl">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
         <MenuItem/>
         <MenuItem/>
         <MenuItem/>
         <MenuItem/>
         <MenuItem/>
      </div>  
    </section>
  )
}

export default HomeMenu