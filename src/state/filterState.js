import { atom } from "recoil";
import { FILTER } from "../domain/Filter";

export const filterState = atom({
  key: "filterState",
  default: FILTER.ALL,
});
