import { Component, DoCheck, OnInit } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array <TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  // [
  //   { task: "Minha nova Task", checked: true },
  //   { task: "Minha nova Task 2", checked: false }
  // ];

  constructor() {  }

  ngDoCheck() {
    this.setLocalStorage();
  }

  public setEmitTaskList (event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  // O método splice() permite inserir novos elementos e excluir elementos existentes em um array simultaneamente.
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você realmente deseja deletar tudo?")

    if (confirm) {
      this.taskList = []
    }
  }


  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?")

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if (this.taskList) {
      // O método sort() permite organizar uma lista em ordem ascendente ou descendente.
    this.taskList.sort(
       (first, last) => Number(first.checked) - Number(last.checked)
     );
     // localStorage é um objeto JavaScript que usamos para armazenar dados no navegador.
     // Ele fornece métodos para armazenar e recuperar a informação
                                       // stringify CONVERTE array p/ string
     localStorage.setItem("list", JSON.stringify(this.taskList))
  }
  }
}
