export default class Filter {
  public static ALL = new Filter("all", "전체보기", "/#");
  public static ACTIVE = new Filter("active", "해야할 일", "/#active");
  public static COMPLETED = new Filter("completed", "완료한 일", "/#completed");

  constructor(private state: string, private text: string, private href: string) {}

  public static getFilters(): { ALL: Filter; ACTIVE: Filter; COMPLETED: Filter } {
    return {
      ALL: this.ALL,
      ACTIVE: this.ACTIVE,
      COMPLETED: this.COMPLETED,
    };
  }

  public static findFilter(target: Filter): Filter {
    const filters = this.getFilters();
    return <Filter>Object.values(filters).find((filter: Filter) => filter.isSame(target));
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
