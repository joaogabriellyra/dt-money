import { useContext } from "react"
import { GreenSummaryContentContainer, SummaryContainer, SummaryContentContainer, SummaryContentValue, SummaryTitleAndIconContainer } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'
import { TransactionsContext } from "../../contexts/transactions-context"
import { priceFormatter } from "../../utils/formatter"

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'income') {
      acc.income += transaction.price
      acc.total += transaction.price
    } else {
      acc.outcome -= transaction.price
      acc.total -= transaction.price
    }
    return acc
  }, {
    outcome: 0,
    income: 0,
    total: 0
  })
  return (
    <SummaryContainer>
      <SummaryContentContainer>
        <SummaryTitleAndIconContainer>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </SummaryTitleAndIconContainer>
        <SummaryContentValue>
          {priceFormatter.format(summary.income)}
        </SummaryContentValue>
      </SummaryContentContainer>
      <SummaryContentContainer>
        <SummaryTitleAndIconContainer>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </SummaryTitleAndIconContainer>
        <SummaryContentValue>
          {priceFormatter.format(summary.outcome)}
        </SummaryContentValue>
      </SummaryContentContainer>
      <GreenSummaryContentContainer>
        <SummaryTitleAndIconContainer>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </SummaryTitleAndIconContainer>
        <SummaryContentValue>
          {priceFormatter.format(summary.total)}
        </SummaryContentValue>
      </GreenSummaryContentContainer>
    </SummaryContainer>
  )
}