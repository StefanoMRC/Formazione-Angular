import { Component } from "@angular/core";
// RICHIAMO INTERFACCIA USER
import { User } from "./model/user";
// RICHIAMO INTERFACCIA POST
import { Post } from "./model/post";
import { HttpClient } from "@angular/common/http";
import { FormAdded } from "./model/formAdded";

@Component({
  selector: "app-root",
  template: `
    <h2>NG IF</h2>
    <button (click)="visible = !visible">visibilità</button>
    <app-hello *ngIf="visible"></app-hello>

    <li [hidden]="!visible" *ngFor="let user of users">{{ user }}</li>

    <h2>DATE PIPE</h2>
    <div>{{ today | date : "dd/MMM/yy" }}</div>

    <h2>CURRENCY PIPE</h2>
    <div>{{ money | currency : "€" }}</div>

    <h2>NUMBER PIPE</h2>
    <div>{{ bitcoins | number : "2.2-4" }}</div>

    <h2>NUMBER OBJ</h2>
    NUMBER OBJ
    <pre>{{ yourJson | json }}</pre>

    <h2>CICLO ARRAY DI OGGETTI USERS</h2>
    <div
      *ngFor="
        let user of users2;
        let i = index;
        let pari = odd;
        let last = last
      "
    >
      {{ i }}. {{ user.name }}
      <hr *ngIf="pari" />
      <div *ngIf="last" class="lastElement">ULTIMO ELEMENTO</div>
    </div>
    <h2>NG CLASS</h2>
    <li *ngFor="let user of users3" [ngClass]="getCls(user)">
      {{ user.name }}
    </li>
    <h2>FORM</h2>
    <form #f="ngForm" (submit)="addForm(f)">
      <input type="text" [ngModel]="formAdded?.label" name="label" />
      <input type="number" [ngModel]="formAdded?.age" name="age" />
      <button type="submit">ADD</button>
    </form>
    {{ formAdded }}
    <li *ngFor="let user of formAdded">{{ user.label }} - {{ user.age }}</li>

    <h2>STAMPO RESULT DELLA CHIAMATA</h2>
    <pre>{{ posts | json }}</pre>
  `,
  styleUrls: ["./app.components.css"],
})
export class AppComponent {
  label: string;
  age: number;
  formAdded: FormAdded[] = [];

  visible = false;
  users = ["Stefano", "Fabio", "Andrea"];
  today = Date.now();
  money = 1200;
  bitcoins = 0.12345242;
  yourJson = { id: 1, name: "Stefano" };
  posts: Post[];
  users2: User[];
  users3 = [
    { id: 1, name: "Fabio", gender: "M" },
    { id: 2, name: "Lisa", gender: "F" },
    { id: 3, name: "Lorenzo", gender: "M" },
    { id: 4, name: "Silvia", gender: "F" },
  ];

  getCls(user) {
    return {
      female: user.gender === "F",
      male: user.gender === "M",
    };
  }
  addForm(form: NgForm) {
    this.formAdded.push(form.value);
  }

  constructor(http: HttpClient) {
    this.users2 = [
      { id: 1, name: "Stefano" },
      { id: 2, name: "Andrea" },
      { id: 3, name: "Valerio" },
    ];

    // CHIAMATA GET
    this.users2.push({ id: 4, name: "Cingols" });
    http
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe((result) => {
        this.posts = result;
      });
  }
}
