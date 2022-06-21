import Head from "next/head";
import React, {ReactNode} from "react";

type LayoutProps = {
    children?: ReactNode;
    title?: string;
}

const Layout = ({children, title = "mojheep - 文字数カウント"}: LayoutProps) => {
    return (
        <div className="mx-auto" style={{minWidth: "1024px", maxWidth: "1024px"}}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <main className="m-5">
                {children}
            </main>
        </div>
    );
};

export default Layout;
