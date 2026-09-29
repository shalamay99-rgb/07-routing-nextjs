import css from "./SearchBox.module.css";
import type { ChangeEvent } from "react";

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}
