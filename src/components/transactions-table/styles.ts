import styled from "styled-components";

export const TransactionsTableContainer = styled.main`
  margin: 4rem auto 0;
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;



  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      width: 40%;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlight {
  variant?: 'income';
}

export const PriceHighlight = styled.span<PriceHighlight>`
  color: ${props => props.variant ? props.theme['green-300'] : props.theme['red-300']}
`