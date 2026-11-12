import type { ReactNode } from "react";
import './header.scss'
interface CompProps {
    children: ReactNode
}
function Header( {children}: CompProps ){
    return(
        <header className="header">
            {children}
        </header>
    )
}

export {Header};