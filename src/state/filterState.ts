import { atom } from "recoil";
import Filter, { FILTER } from "../domain/Filter";

export const filterState = atom<Filter>({
  key: "filterState",
  default: FILTER.ALL,
});
