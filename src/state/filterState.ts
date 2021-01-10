import { atom } from "recoil";
import Filter from "../domain/Filter";

export const filterState = atom<Filter>({
  key: "filterState",
  default: Filter.ALL,
});
