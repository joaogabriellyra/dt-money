import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/header"
import { Summary } from "./components/summary"
import { Transactions } from "./components/transactions-table"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Summary />
      <Transactions />
    </ThemeProvider>
  )
}