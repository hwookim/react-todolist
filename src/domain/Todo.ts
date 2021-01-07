export default class Todo {
  constructor(private id: number, private content: string, private completed: boolean) {}

  public getId() {
    return this.id;
  }

  public getContent() {
    return this.content;
  }

  public isCompleted() {
    return this.completed;
  }
}
