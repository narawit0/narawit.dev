import React from 'react'
import styled from "styled-components";
import Image from "./Image";

const AuthorArticle = ({ article }) => {
    return (
        <StyledAuthorArticleContainer>
            <StyledAuthorArticleProfile>
                <StyledAuthorAvatar>
                    <Image
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt="profileImage"
                    />
                </StyledAuthorAvatar>
                <StyledAuthorArticleInfoContainer>
                    <StyledAuthorArticleName>
                        Narawit Kaewbun
                    </StyledAuthorArticleName>
                    <StyledArticleContainer>
                        <span className="date">
                            {article.mdx.frontmatter.date}
                        </span>
                        <span className="dot">
                            <span>&middot;</span>
                        </span>
                        <span className="min-read">
                            {article.mdx.fields.readingTime.text}
                        </span>
                    </StyledArticleContainer>
                </StyledAuthorArticleInfoContainer>
            </StyledAuthorArticleProfile>
        </StyledAuthorArticleContainer>
    )
}

const StyledAuthorArticleContainer = styled.div`
  display: flex;
`

const StyledAuthorArticleProfile = styled.div`
    display: flex;
    align-items: center;
`

const StyledAuthorAvatar = styled.div`
  position: relative;
  width: 4.8rem;
  height: 4.8rem;
  border: 3px solid ${props => props.theme.avatarBorderColor};
  border-radius: 50%;
  margin-right: 1rem;
  
  /* Selecting Gatsby-image-wrapper */
  div {
    border-radius: 50%;
  }
`

const StyledAuthorArticleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  //font-weight: 200;
`

const StyledAuthorArticleName = styled.div`
  font-size: 1.6rem;
  margin-bottom: .5rem;
`

const StyledArticleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  

  .dot {
    padding: 0 .3rem;
    font-weight: bold;
  }
`

export default AuthorArticle;