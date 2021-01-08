export default class Filter {
  constructor(private state: string, private text: string, private href: string) {}

  public static findFilter(target: Filter): Filter {
    return <Filter>Object.values(FILTER).find((filter: Filter) => filter.isSame(target));
  }

  private isSame(target: Filter): boolean {
    return this === target;
  }

  public getState(): string {
    return this.state;
  }

  public getText(): string {
    return this.text;
  }

  public getHref(): string {
    return this.href;
  }
}

const ALL = new Filter("all", "전체보기", "/#");
const ACTIVE = new Filter("active", "해야할 일", "/#active");
const COMPLETED = new Filter("completed", "완료한 일", "/#completed");

const FILTER = {
  ALL,
  ACTIVE,
  COMPLETED,
};

export { FILTER };
