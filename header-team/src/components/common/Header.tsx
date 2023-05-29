import { Link } from "react-router-dom"
import styled from 'styled-components'

const Header = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Logo>Logo</Logo>

                    <NavHolder>
                        <Nav to="/" >Home</Nav>
                        <Nav to="/about">About</Nav>
                    </NavHolder>
                </Main>
            </Container>
        </div>
    )
}

export default Header

const Nav = styled(Link)`
margin: 0 5px;
transition: all 350ms;
font-weight: 900;
text-transform: uppercase;
font-size: 12px;
text-decoration: none;
color: black;

:hover{
    cursor: pointer;
    transform: translate(0px, -5px);
}
`

const NavHolder = styled.div`
display: flex;

`

const Logo = styled.div``

const Main = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;;
`

const Container = styled.div`
width: 100%;
height: 80px;
background-color: silver;
color: black;
display: flex;
align-items: center;
justify-content: center;
`