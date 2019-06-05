import { Component , OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: number = Date.now();
  serializedDate = new FormControl((new Date()).toISOString());
  drinks = ['Milk', 'Cofee','Tea', 'Water'];
  status:string = "Milk"
  title = 'ReactiveForm';
  model: any = {};
  public data=[];
  @ViewChild('myInput') myInputVariable: ElementRef;
   @ViewChild("todo") el : ElementRef
   @ViewChild("todo1") el1 : ElementRef
   @ViewChild("todo2") el2 : ElementRef

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem("myData"));
    this.data.push(currentUser)
  }
  onSubmit() {
    let r = Math.random().toString(36).substring(7);
    this.model.id=r;
    localStorage.setItem("myData", JSON.stringify(this.model));
    this.ngOnInit()
      this.myInputVariable.nativeElement.value = "";
      this.el.nativeElement.value = "";
      this.el1.nativeElement.value = "";
      this.el2.nativeElement.value = "";
  }

  editForm(user){
    localStorage.setItem("myData", JSON.stringify(user));
  }
}
