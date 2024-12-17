import { NewTransactionModal } from "../new-transaction-modal";
import { HeaderLogo } from "./logo";
import { AppNameAndLogoContainer, HeaderContainer, HeaderContent, HeaderNewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <AppNameAndLogoContainer>
          <HeaderLogo />
          <h2>DT Money</h2>
        </AppNameAndLogoContainer>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderNewTransactionButton>
              Nova transação
            </HeaderNewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}