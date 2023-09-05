import { Header } from "../Header/Header"
import { Footer } from "../footer/Footer"
import { StyledLayout } from "./Layout.style"

interface LayoutProps {
    children: React.ReactNode
    isRelated?: boolean
}


export const Layout = ({ children , isRelated = false} : LayoutProps) =>{
    return(
        <>
            <Header/>
            <StyledLayout>{children}</StyledLayout>
            { isRelated ?(  
            <aside>
                <h3>Produtos Relacionados</h3>
            </aside>) : (null)}
            <Footer/>
        </>
    )
}