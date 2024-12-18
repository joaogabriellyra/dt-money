import { useContext } from "react";
import { Header } from "../header";
import { SearchForm } from "../search-form";
import { Summary } from "../summary";
import { PriceHighlight, TransactionsTableContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/transactions-context";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />


      <TransactionsTableContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(({ description, category, createdAt, price, type, id }) => {
              return (
                <tr key={id}>
                  <td>{description}</td>
                  <td>
                    <PriceHighlight variant={type === 'income' ? 'income' : undefined}>
                      {type === 'outcome' && '- '}
                      {priceFormatter.format(price)}
                    </PriceHighlight>
                  </td>
                  <td>{category}</td>
                  <td>{dateFormatter.format(new Date(createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsTableContainer>
    </div>
  )
}

