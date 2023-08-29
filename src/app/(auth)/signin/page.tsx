"use client";

import Link from "next/link";
import { useState } from "react";

export default function Signin() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Sign-in</h1>
      <p>{count}</p>
      <Link href="/appcontent">APP</Link>
      <button onClick={() => setCount((state) => state + 1)}>Increment</button>
    </div>
  );
}
