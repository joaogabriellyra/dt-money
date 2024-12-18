import { useEffect, useState } from "react";
import { Header } from "../header";
import { SearchForm } from "../search-form";
import { Summary } from "../summary";
import { PriceHighlight, TransactionsTableContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}
export function Transactions() {

  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])
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

