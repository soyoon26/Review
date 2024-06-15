import "@/styles/globals.css";
import React from "react"; // React를 import 해줘야 JSX 사용 가능
import Layouts from "@/layouts/Layouts";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </div>
  );
}
