import Image from "next/image";

export default function LoginPage(){
    return (
        <section className="mt-8">  
            <h1 className="text-center text-primary text-3xl font-semibold mb-4">
            Login
            </h1>
            <form className="block max-w-sm mx-auto mt-8"> 
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Login</button>
                <div className="my-4 text-center text-gray-500"> or login with other provider </div>
                <button className="flex gap-4 justify-center items-center">
                    <Image src={'/google.png'} width={16} height={16} alt={'google'} />
                    login with Google
                </button>
            </form>
        </section>
    )
}