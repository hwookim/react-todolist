export default class Filter {
  constructor(private state: string, private text: string, private href: string) {}

  public static findFilter(target: Filter) {
    return Object.values(FILTER).find((filter: Filter) => filter.isSame(target));
  }

  private isSame(target: Filter) {
    return this === target;
  }

  public getState() {
    return this.state;
  }

  public getText() {
    return this.text;
  }

  public getHref() {
    return this.href;
  }
}

const ALL: Filter = new Filter("all", "전체보기", "/#");
const ACTIVE: Filter = new Filter("active", "해야할 일", "/#active");
const COMPLETED: Filter = new Filter("completed", "완료한 일", "/#completed");

const FILTER = {
  ALL,
  ACTIVE,
  COMPLETED,
};

export { FILTER };
