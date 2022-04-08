import React from 'react'
import styled from "styled-components";
import Img from "gatsby-image"
import { Link } from "gatsby"


const Article = ({ article, index}) => {
    const renderTags = (highlight) => {
        return article.node.frontmatter.tags && article.node.frontmatter.tags.split(",").map((tag) => {
            return (
                <>
                    {highlight ? (
                        <StyledTagHighlight>
                            {tag}
                        </StyledTagHighlight>) : (
                        <StyledTag>
                            {tag}
                        </StyledTag>
                    )}
                </>
            )
        })
    }
    return (
        <>
                {index === 0 ? (
                    <StyledLatestArticleContainer>
                        <StyledLink to={article.node.fields.slug}>
                            <StyledArticleCard>
                                <Img fluid={article.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                <StyledArticleCardContentHighlight>
                                    <StyledArticleCardContentHeader>
                                        <StyledTags>
                                            {renderTags(true)}
                                        </StyledTags>
                                        <StyledHighlightDate>
                                            {article.node.frontmatter.date}
                                        </StyledHighlightDate>
                                    </StyledArticleCardContentHeader>
                                    <StyledHighlightTitle>
                                        {article.node.frontmatter.title}
                                    </StyledHighlightTitle>
                                </StyledArticleCardContentHighlight>
                            </StyledArticleCard>
                        </StyledLink>
                    </StyledLatestArticleContainer>
                ) : (
                    <StyledArticleContainer>
                        <StyledLink to={article.node.fields.slug}>
                            <StyledArticleCard>
                                <Img fluid={article.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                <StyledArticleCardContent>
                                    <StyledArticleCardContentHeader>
                                        <StyledTags>
                                            {renderTags(false)}
                                        </StyledTags>
                                        <StyledDate>
                                            {article.node.frontmatter.date}
                                        </StyledDate>
                                    </StyledArticleCardContentHeader>
                                    <StyledTitle>
                                        {article.node.frontmatter.title}
                                    </StyledTitle>
                                </StyledArticleCardContent>
                            </StyledArticleCard>
                        </StyledLink>
                    </StyledArticleContainer>
                )}
        </>
    )
}


const StyledLatestArticleContainer = styled.div`
  grid-column: 1 / span 2;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`

const StyledArticleContainer = styled.div`
`

const StyledArticleCard = styled.div`
  height: 100%;
  box-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s linear;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  position: relative;
  background-color: ${props => props.theme.articleBgColor};
  color: ${props => props.theme.color};
  
  &:hover {
    box-shadow: 10px 10px 8px  rgba(0, 0, 0, 0.2);
    transform: translateX(-0.1rem) translateY(-0.1rem);
  }
`

const StyledArticleCardContent = styled.div`
  padding: 0.5rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const StyledArticleCardContentHighlight = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.5);
  padding: 0 2rem 2rem 2rem;
  color: ${props => props.theme.highlightTextColor};

  @media (max-width: 768px) {
    height: 100%;
    position: static !important;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const StyledArticleCardContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const StyledTags = styled.div`
  display: flex;
`

const StyledTag = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  margin-right: 4px;
  padding: 0.1rem 0.5rem;
  background-color: ${props => props.theme.tagBgColor};
  color: rgba(0,0,0, 0.8);
  border-radius: 1rem;
`

const StyledTagHighlight = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  margin-right: 4px;
  padding: 0.1rem 0.5rem;
  background-color: ${props =>  props.theme.highlightTagBgColor};
  color: ${props =>  props.theme.highlightTagTextColor};
  border-radius: 1rem;
`

const StyledDate = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${props => props.theme.color};
`

const StyledHighlightDate = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${props =>  props.theme.highlightDateColor};
`

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: normal;
  color: ${props => props.theme.color};
`

const StyledHighlightTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: normal;
  color: ${props => props.theme.highlightDateColor};
`

export default Article