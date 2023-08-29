import Logo from "../../assets/logo-brix.png"
import {StyledHeader, StyledHeaderContainer} from "./Header.style.ts"

interface HeaderProps {
    userName: string
    userImage?: string
}

export const Header = ({ userName, userImage ="" }: HeaderProps) => {
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <div><img src={Logo} alt="Logotipo Brix" /></div>
                <div></div><span>Olá, {userName}</span>
                {/* <img src={userImage} alt=""/> */}
            </StyledHeaderContainer>
        </StyledHeader>
    )
}