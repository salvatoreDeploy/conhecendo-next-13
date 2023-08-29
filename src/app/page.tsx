import Link from "next/link";
import { User } from "./components/User";
import { Repo } from "./components/Repo";
import { Suspense } from "react";

export default async function Home() {
  /* Fazendo chamada a api's  */

  // Static
  const response = await fetch("https://api.github.com/users/salvatoreDeploy", {
    // next: {
    /* Revalidando apenas esta chamada cada segundos  */
    // revalidate: 0,
    // },
    /* Recriando o conteudo de forma dinamica em SSR */
    //cache: "no-store",
  });
  const user = await response.json();

  /* Em casos de duas chamadas fetch que não dependerem uma da chamada da outra */
  //  const [fetch1, fetch2] = await Promise.all([fetch(""), fetch("")]);

  return (
    <div>
      <h1>Hello Word Next-13</h1>
      {/* Processo chamado de SSR Streming */}
      <Suspense fallback={<p>Carregando usando suspense APi 8seg</p>}>
        <User />
      </Suspense>
      {/* Aqui podemos usar a suspense api para que apenas a promisse do componente repo fique em stand-by */}
      <Suspense fallback={<p>Carregando usando suspense APi 5seg</p>}>
        <Repo />
      </Suspense>
      <Link href="/dashboard">dashboard</Link>
    </div>
  );
}

/* 
  - Por padrão o next tem suas chamada fetch e renderização pelo lado do servidor assim sendo "Server-Side-Firts"
  - Revalidate -> Static Server
  - cache: {"no-store"} -> Server Side Rendering
*/
