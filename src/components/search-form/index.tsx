import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchATransactionContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchATransactionContainer>
      <input type="text" placeholder="Busque por transações" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchATransactionContainer>
  )
}
