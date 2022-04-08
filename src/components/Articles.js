import React from 'react'
import styled from "styled-components";
import Article from "./Article";

const Articles = ({ articles }) => {

    const renderArticles = () => {
        return articles.map((article, index) => {
            return <Article article={article} index={index}/>
        })
    }

    return (
        <StyledArticles>
            {renderArticles()}
        </StyledArticles>
    )
}

const StyledArticles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
    grid-template-columns: 1fr !important;
  }

  @media (max-width: 1000px) {
    padding: 0 2rem;
    grid-template-columns: 1fr 1fr;
  }
`


export default Articles