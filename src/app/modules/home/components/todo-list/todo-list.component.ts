import { Component, OnInit } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array <TaskList> = [
    { task: "Minha nova Task", checked: true },
    { task: "Minha nova Task 2", checked: false }
  ];

  constructor() {  }

  ngOnInit(): void {
  }

  // O método splice() permite inserir novos elementos e excluir elementos existentes em um array simultaneamente.
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  /**
   * deleteAllTaskList
   */
  public deleteAllTaskList() {
    const confirm = window.confirm("Você realmente deseja deletar tudo?")

    if (confirm) {
      this.taskList = []
    }
  }

}
