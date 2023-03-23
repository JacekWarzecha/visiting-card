import { Link } from "./styled";

export const projectsBase = {
  currency: {
    name: "Kantor walut",
    linkPage: (
      <Link
        target="_blank"
        title="Przejdź do strony"
        href="https://jacekwarzecha.github.io/currency-converter-react/"
      >
        Link
      </Link>
    ),
    linkRepo: (
      <Link
        target="_blank"
        title="Przejdź do strony"
        href="https://github.com/JacekWarzecha/currency-converter-react"
      >
        Link
      </Link>
    ),
  },
  todoList: {
    name: "Lista zadań",
    linkPage: (
      <Link
        target="_blank"
        title="Przejdź do strony"
        href="https://jacekwarzecha.github.io/todo-list-react/"
      >
        Link
      </Link>
    ),
    linkRepo: (
      <Link
        target="_blank"
        title="Przejdź do strony"
        href="https://github.com/JacekWarzecha/todo-list-react"
      >
        Link
      </Link>
    ),
  },
};
