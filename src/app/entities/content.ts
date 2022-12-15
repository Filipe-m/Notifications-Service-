export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private valideteContentLenght(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLenghtValid = this.valideteContentLenght(content);
    if (!isContentLenghtValid) {
      throw new Error('Content lenght error.');
    }
    this.content = content;
  }
}
