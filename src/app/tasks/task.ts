export class Task {
  id: number;
  name: string;
  completed: boolean;
  date: Date;
  constructor(id:number,name:string,completed:boolean,date:Date){
    this.id=id;
    this.name=name;
    this.completed=completed;
    this.date=date;
  }
}