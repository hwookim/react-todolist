import { atom } from "recoil";
import { FILTER } from "../utils/filter";

export const filterState = atom({
  key: "filterState",
  default: FILTER.ALL,
});
