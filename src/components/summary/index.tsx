import { GreenSummaryContentContainer, SummaryContainer, SummaryContentContainer, SummaryContentValue, SummaryTitleAndIconContainer } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryContentContainer>
        <SummaryTitleAndIconContainer>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </SummaryTitleAndIconContainer>
        <SummaryContentValue>
          R$ 17.400,00
        </SummaryContentValue>
      </SummaryContentContainer>
      <SummaryContentContainer>
        <SummaryTitleAndIconContainer>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </SummaryTitleAndIconContainer>
        <SummaryContentValue>
          R$ 1.259,00
        </SummaryContentValue>
      </SummaryContentContainer>
      <GreenSummaryContentContainer>
        <SummaryTitleAndIconContainer>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </SummaryTitleAndIconContainer>
        <SummaryContentValue>
          R$ 16.141,00
        </SummaryContentValue>
      </GreenSummaryContentContainer>
    </SummaryContainer>
  )
}