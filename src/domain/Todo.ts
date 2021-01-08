export default class Todo {
  constructor(private id: number, private content: string, private completed: boolean) {}

  public toggle(): Todo {
    return new Todo(this.id, this.content, !this.completed);
  }

  public equals(todo: Todo): boolean {
    return this === todo;
  }

  public getId(): number {
    return this.id;
  }

  public getContent(): string {
    return this.content;
  }

  public isCompleted(): boolean {
    return this.completed;
  }
}
