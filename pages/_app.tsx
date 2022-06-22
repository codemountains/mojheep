import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../lib/wasm.pkg/wasm_bg.wasm";
import type {AppProps} from "next/app";

function MojheepApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MojheepApp;
