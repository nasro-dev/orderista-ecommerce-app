import Link from "next/link"


export default function header() {
  return (
    <>
        <header className="flex items-center justify-between">
          <Link className="text-red-500 font-semibold text-2xl" href={''}>Orderista</Link>
            <nav className="flex items-center gap-6 font-semibold text-gray-500">
              <Link href={''}>Home</Link>
              <Link href={''}>Menu</Link>
              <Link href={''}>About</Link>
              <Link href={''}>Contact</Link>
              <Link href={''} className="bg-red-500 rounded-full text-white px-6 py-2">Login</Link>
            </nav>
          </header>
    </>
  )
}
