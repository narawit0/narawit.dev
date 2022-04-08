import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import { ArrowUp } from 'react-feather';

const ScrollToTop = () => {
    const [show, setShow] = useState(false)

    const handleScroll = () => {
        if (window.pageYOffset > 200) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        window.addEventListener(`scroll`, handleScroll)
        return () => window.removeEventListener(`scroll`, handleScroll)
    })

    return (
        <>
            {show ? (
                <StyledScroll onClick={handleClick}><ArrowUp /></StyledScroll>
            ) : ""}
        </>
    )
}

const StyledScroll = styled.span`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  background-color: ${props => props.theme.scrollToTopBgColor};
  color: ${props => props.theme.scrollToTopColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s linear;
  
  &:hover {
    background-color: ${props => props.theme.scrollToTopBgColorHover};
    color: ${props => props.theme.scrollToTopColorHover};
  }
`

export default ScrollToTop;