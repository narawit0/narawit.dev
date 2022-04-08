import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components";
import "normalize.css"
import "./layout.css"
import {GlobalStyles, theme, lightTheme, darkTheme} from "../components/Shared/styles-global"
import { Link } from "gatsby";
import Switch from "react-switch";
import { Moon, Sun } from 'react-feather';

const Nav = styled.nav`
  padding: 2rem 4rem;
`

const MainContent = styled.main`
  padding: 2rem 0;
`

const Logo = styled.img`
  width: 12rem;
  height: auto;
`

const Container = styled.div`
  max-width: ${props => props.article ?  props.theme.articlePagMaxWidth : props.theme.homePageMaxWidth};
  margin: 0 auto;
`

const StyledNavContainer = styled.div`
  max-width: ${props => props.article ?  props.theme.articlePagMaxWidth : props.theme.homePageMaxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Index = ({ children, article = false }) => {
    const [checked, setChecked] = useState(theme.current !== 'light')

    const onChange = () => {
        if (!checked) {
            theme.current = 'dark';
        } else {
            theme.current = 'light'
        }

        setChecked(!checked)
    }

    return (
        <ThemeProvider theme={!checked ? lightTheme : darkTheme}>
            <GlobalStyles />
            <script
                data-ad-client="ca-pub-3745286694854005"
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
            <Nav>
                <StyledNavContainer>
                    <Link to="/">
                        <Logo src={!checked ? "../../logo.svg" : "../../logo-white.svg"} alt=""/>
                    </Link>
                    <StyledSwitch onClick={onChange}>
                        {!checked ? (
                            <Moon />
                        ) : (
                            <Sun />
                        )}
                    </StyledSwitch>
                </StyledNavContainer>
            </Nav>
            <MainContent>
                <Container article={article}>
                    {children}
                </Container>
            </MainContent>
        </ThemeProvider>
    )
}

const StyledSwitch = styled.div`
  cursor: pointer;
`

export default Index;