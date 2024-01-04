import Link from "next/link"


export default function header() {
  return (
    <>
        <header className="flex items-center justify-between gap-2">
            <nav className="flex items-center gap-5 font-semibold text-gray-500">
              <Link className="text-red-500 font-semibold text-2xl" href={'/'}>Orderista</Link>
              <Link href={'/'}>Home</Link>
              <Link href={''}>Menu</Link>
              <Link href={''}>About</Link>
              <Link href={''}>Contact</Link>
            </nav>
            <nav className="flex items-center gap-2">
              <Link href={'/login'} className="bg-red-500 rounded-full font-semibold text-white px-6 py-2">Login</Link>
              <Link href={'/register'} className="bg-gray-300 rounded-full font-semibold text-white px-6 py-2">Register</Link>
            </nav>
          </header>
    </>
  )
}
