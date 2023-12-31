import Image from "next/image";
import logo from "@/assets/images/logo.png"
import AnimatedLink from "../components/animatedLink";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-screen p-10">

        <AnimatedLink
          href="/deportes"
          className="bg-primary rounded-lg col-span-1 row-span-2  p-4 aspect-w-1 aspect-h-2"
        >
          <div>
            Deportes y aire libre
          </div>
        </AnimatedLink>

        <AnimatedLink
          href="/hogar"
          className="bg-background-primary border border-primary rounded-lg col-span-2 p-4 aspect-w-2 aspect-h-1"
        >
          <div>
            Hogar y decoración
          </div>
        </AnimatedLink>

        <AnimatedLink
          href="/exteriores"
          className="bg-primary border border-primary rounded-lg col-span-1 row-span-1  p-4 aspect-w-1 aspect-h-1"
        >
          <div>
           Jardin y exteriores
          </div>
        </AnimatedLink>

        <AnimatedLink
          href="/mascotas"
          className="bg-background-primary border border-primary rounded-lg order-last p-4 h-full aspect-w-1 aspect-h-1"
        >
        <div >
          Mascotas
        </div>
        </AnimatedLink>


        <div
          className="bg-background-primary boder-2 boder-primary rounded-lg col-span-2 row-span-1 p-4 aspect-w-2 aspect-h-1 flex justify-center align-middle header"
        >
          <Image 
            src={logo}
            alt="halitto logo"
            width={400}
           />
        </div>


        <AnimatedLink
          href="/cuidado-personal"
          className="bg-gradient-to-b from-custom-white via-secundary to-primary hover:from-contraste-primary hover:via-contraste-secundary hover:to-contraste-tertiary rounded-lg col-span-1 row-span-2  p-4 aspect-w-1 aspect-h-2 cursor-pointer"
        >
          <div>
              Belleza y cuidado personal
          </div>
        </AnimatedLink>

        <AnimatedLink
          href="/ideas-regalos"
          className="bg-gradient-to-r from-custom-white via-secundary to-primary hover:from-contraste-primary hover:via-contraste-secundary hover:to-contraste-tertiary rounded-lg col-span-2 row-span-1 p-4 aspect-w-2 aspect-h-1 cursor-pointer"
        >

          <div>
              Ideas y regalos
          </div>
        </AnimatedLink>


      </div>
    </main>
  )
}
