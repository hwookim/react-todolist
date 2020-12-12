const FILTER = {
  ALL: {
    state: "all",
    text: "전체보기",
    href: "/#",
  },
  ACTIVE: {
    state: "active",
    text: "해야할 일",
    href: "/#active",
  },
  COMPLETED: {
    state: "completed",
    text: "완료한 일",
    href: "/#completed",
  },
};

function findFilterByState(target) {
  return Object.values(FILTER).find(({ state }) => state === target);
}

export { FILTER, findFilterByState };
