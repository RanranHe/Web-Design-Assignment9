export class Item {
  id: string;
  title: string;
  content: string;
  createdDate: Date;
  modifiedDate: Date;
  dueDate: Date;
  status: string;

  constructor(title: string, content: string, dueDate: Date) {
    this.title = title;
    this.content = content;
    this.createdDate = new Date();
    this.modifiedDate = new Date();
    this.dueDate = dueDate;
    this.status = 'In Progress';
  }
}
