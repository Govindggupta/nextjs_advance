import { ReactNode } from "react";

export default function({children}: {children: ReactNode}) {
    return (
        <>
        <header>This is header</header>
        <div>{children}</div>
        <footer>This is footer</footer>
        </>
    )
}