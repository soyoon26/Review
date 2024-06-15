import Link from "next/link";
import React from "react";

export default function Layouts({ children }) {
  return (
    <div>
      <nav>
        <Link href="/home">home</Link> | <Link href="/login">login</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
