import { GreenSummaryContentContainer, SummaryContainer, SummaryContentContainer, SummaryContentValue, SummaryTitleAndIconContainer } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'
import { priceFormatter } from "../../utils/formatter"
import { useSummary } from "../../hooks/useSummary"

export function Summary() {
  const summary = useSummary()

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