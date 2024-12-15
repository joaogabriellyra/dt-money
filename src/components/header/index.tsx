import { HeaderLogo } from "./logo";
import { AppNameAndLogoContainer, HeaderContainer, HeaderContent, HeaderNewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <AppNameAndLogoContainer>
          <HeaderLogo />
          <h2>DT Money</h2>
        </AppNameAndLogoContainer>
        <HeaderNewTransactionButton>
          Nova transição
        </HeaderNewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}