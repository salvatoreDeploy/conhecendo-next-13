import Link from "next/link";
import HeadIndex from "./head";
import { Suspense } from "react";
import { Repo } from "../components/Repo";

export default function Dashboard() {
  return (
    <div>
      <HeadIndex />
      <h1>Dashboard</h1>
      <Link href="/">voltar</Link>

      <Suspense fallback={<p>Carregando usando suspense APi 5seg</p>}>
        <Repo />
      </Suspense>
    </div>
  );
}
