import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Series = ({ series, seriesName }) => {

    const renderSeries = () => {
        return series.map((item) => {
            return (
                <StyledSeriesItem>
                    <StyledLink className="series-link" to={item.link}>{item.linkLabel} - <span>{item.title}</span></StyledLink>
                </StyledSeriesItem>
            )
        })
    }

    return (
        <>
            <StyledContainer>
                <StyledSeriesName>
                    {seriesName}
                </StyledSeriesName>
                {renderSeries()}
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledSeriesName = styled.h3`
  padding: 0;
  margin: 0;
`

const StyledSeriesItem = styled.div`
  padding-left: 2rem;
  border-left: 4px solid ${props => props.theme.seriesBorderColor};
  transition: all .2s linear;
  cursor: pointer;
  
  & > * {
    color: ${props => props.theme.color};
  }

  &:hover {
    background-color: ${props => props.theme.seriesHoverBgColor};
  }

  &:hover > * {
    color: rgba(255,255, 255, 0.8) !important;
  }
`

const StyledLink = styled(Link)`
  color: inherit;
`

export default Series;