import Header from "@/components/header";

export default function Pets() {
    return (
     <main>
      <Header/>
      <div className="flex flex-col h-screen items-center justify-center  bg-gradient-to-b from-contraste-primary via-contraste-secundary to-contraste-tertiary gap-10">
        <h1 className="text-4xl pageHeader">Mascotas</h1>
        <p className="mx-10 pageContent text-center line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna
          auctor, viverra sapien. Donec euismod turpis eget massa lobortis, eget
          scelerisque justo.
        </p>
      </div>
     </main>
    );
  }