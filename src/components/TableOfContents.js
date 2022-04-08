import React from 'react'
import styled from 'styled-components'
import {Link} from "gatsby";
import Scrollspy from 'react-scrollspy'
import scrollTo from 'gatsby-plugin-smoothscroll';

const TableOfContents = ({ article }) => {
    const renderTableOfContents = () => {

        let url = [];
        let contents = [];

        article.mdx.tableOfContents.items.forEach((content) => {
            url.push(content.url.substring(1))

            if (content.items && content.items.length) {
                content.items.forEach((item) => {
                    if (!item.items) {
                        url.push(item.url.substring(1))
                    }
                })
            }
        })

        {article.mdx.tableOfContents.items.map((content) => {
            contents.push(<StyledLink to={content.url}>{content.title}</StyledLink>)

            if (content.items && content.items.length) {
                {content.items.map((item) => {
                    if (!item.items) {
                        contents.push(
                            <StyledLinkSecond to={item.url}>{item.title}</StyledLinkSecond>
                        )
                    }
                })}
            }
        })}

        return (
            <Scrollspy items={url} currentClassName="active">
                {contents}
            </Scrollspy>
        )
    }


    return (
        <StyledContainer>
            <StyledContent>
                <h3>Table of contents</h3>
                <StyledContentOne>
                    {renderTableOfContents()}
                </StyledContentOne>
            </StyledContent>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  width: 18rem;
  font-size: 1.4rem;

  @media (max-width: 1200px) {
    display: none;
  }
`

const StyledContent = styled.div`
  position: sticky;
  top: 4rem;
  color: ${props => props.theme.tableContentColor};
  
  h3 {
    margin-top: 0;
  }
`

const StyledContentOne = styled.div`
  
  ul {
    padding: 0;
    display: flex;
    flex-direction: column; 
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
  transition: all 0.2s linear;
  margin-bottom: .5rem;
  
  &.active {
    color: ${props => props.theme.tableContentColorHover};
    text-decoration: underline;
  }
  
  &:hover {
    color: ${props => props.theme.tableContentColorHover};
    text-decoration: underline;
  }
`

const StyledLinkSecond = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
  transition: all 0.2s linear;
  margin-bottom: .5rem;
  padding-left: 2rem;
  
  &.active {
    color: ${props => props.theme.tableContentColorHover};
    text-decoration: underline;
  }
  
  &:hover {
    color: ${props => props.theme.tableContentColorHover};
    text-decoration: underline;
  }
`

export default TableOfContents