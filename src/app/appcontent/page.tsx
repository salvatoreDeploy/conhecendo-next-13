import Link from "next/link";
import { cookies, headers } from "next/headers";

export default function App() {
  /* Pelo next ser por padrão server-side temos acesso aos cookies e headers */
  const userCookie = cookies();
  const userHeader = headers();

  return (
    <div>
      <h1>Application Content</h1>
      <div>
        {JSON.stringify(userCookie.getAll(), null, 2)}
        {JSON.stringify(userHeader.entries(), null, 2)}
      </div>

      <Link href="/signin">Sign-In</Link>
    </div>
  );
}
