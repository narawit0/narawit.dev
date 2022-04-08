import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'
import { ArrowLeft, ArrowRight } from 'react-feather';

const Pagination = ({ numPages, currentPage }) => {

    const renderPageButtons = () => {
        const buttons = []

        if (currentPage > 2) {
            buttons.push(
                <StyledPageNext onClick={() => {navigate(`/page/${currentPage-1}`)}}>
                    <ArrowLeft />
                </StyledPageNext>
            )
        } else {
            buttons.push(
                <StyledPageNext onClick={() => {navigate(`/`)}} className={currentPage === 1 ? 'disabled' : ''}>
                    <ArrowLeft />
                </StyledPageNext>
            )
        }

        for (let i = 1; i <= numPages; i++) {
            if (i === 1) {
                buttons.push(
                    <StyledPageButton onClick={() => {navigate(`/`)}} className={currentPage === i ? 'active' : ''}>
                        {i}
                    </StyledPageButton>
                )
            } else {
                buttons.push(
                    <StyledPageButton onClick={() => {navigate(`/page/${i}`)}} className={currentPage === i ? 'active' : ''}>
                        {i}
                    </StyledPageButton>
                )
            }
        }

        if (currentPage < numPages) {
            buttons.push(
                <StyledPageNext onClick={() => {navigate(`/page/${currentPage+1}`)}}>
                    <ArrowRight />
                </StyledPageNext>
            )
        } else {
            buttons.push(
                <StyledPageNext className={currentPage === numPages ? 'disabled' : ''}>
                    <ArrowRight />
                </StyledPageNext>
            )
        }

        return buttons;
    }

    return (
        <StyledContainer>
            {renderPageButtons()}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  maxgin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`

const StyledPageButton = styled.div`
  color: inherit;
  padding: .2rem 1.2rem;
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid ${props => props.theme.paginateBorderColor};
  color: ${props => props.theme.paginateColor};
  margin-right: .3rem;
  
  &.active {
    color: ${props => props.theme.paginateActiveColor};
    background-color: ${props => props.theme.paginateActiveBgColor}]
  }

  &:hover {
    color: ${props => props.theme.paginateHoverColor};
    background-color: ${props => props.theme.paginateHoverBgColor};
  }
`

const StyledPageNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .2rem .8rem;
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid ${props => props.theme.paginateBorderColor};
  color: ${props => props.theme.paginateColor};
  margin-right: .3rem;
  
  &.disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.paginateDisabledBgColor};
  }
  
  &:hover {
    color: ${props => props.theme.paginateHoverColor};
    background-color: ${props => props.theme.paginateHoverBgColor};
  }
`
export default Pagination