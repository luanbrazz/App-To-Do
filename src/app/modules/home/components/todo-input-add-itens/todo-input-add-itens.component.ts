import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    // trim() remove os espaços em branco do início e/ou fim de um texto
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList = "";
    }
  }

}
