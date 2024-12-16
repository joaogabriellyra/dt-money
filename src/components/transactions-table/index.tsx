import { PriceHighlight, TransactionsTableContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <TransactionsTableContainer>
      <TransactionsTable>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">
                R$ 12.000,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td>
              <PriceHighlight>
                - R$ 59,00
              </PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td>
              <PriceHighlight>
                - R$ 1.200,00
              </PriceHighlight>
            </td>
            <td>Casa</td>
            <td>27/03/2022</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td>
              <PriceHighlight variant="income">
                R$ 5.400,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>15/03/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">
                R$ 8.000,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/03/2022</td>
          </tr>
          <tr>
            <td>Janta</td>
            <td>
              <PriceHighlight>
                - R$ 39,00
              </PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/03/2022</td>
          </tr>
          <tr>
            <td>Aluguem do Apartamento</td>
            <td>
              <PriceHighlight>
                - R$ 1.200,00
              </PriceHighlight>
            </td>
            <td>Casa</td>
            <td>27/02/2022</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td>
              <PriceHighlight variant="income">
                R$ 5.400,00
              </PriceHighlight>
            </td>
            <td>Salário</td>
            <td>15/02/2022</td>
          </tr>
          <tr>
            <td>Almoço</td>
            <td>
              <PriceHighlight>
                - R$ 30,00
              </PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>05/02/2022</td>
          </tr>
          <tr>
            <td>Fone de ouvido</td>
            <td>
              <PriceHighlight>
                - R$ 150,00
              </PriceHighlight>
            </td>
            <td>Itens</td>
            <td>02/02/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsTableContainer>
  )
}