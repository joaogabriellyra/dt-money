import { useContext } from "react";
import { Header } from "../header";
import { SearchForm } from "../search-form";
import { Summary } from "../summary";
import { PriceHighlight, TransactionsTableContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/transactions-context";

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
                      R$ {price}
                    </PriceHighlight>
                  </td>
                  <td>{category}</td>
                  <td>{createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsTableContainer>
    </div>
  )
}

