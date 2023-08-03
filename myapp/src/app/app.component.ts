import { Component } from "@angular/core";
import { User } from "./model/user";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  template: `
    <button (click)="visible = !visible">visibilità</button>
    <app-hello *ngIf="visible"></app-hello>

    <li [hidden]="!visible" *ngFor="let user of users">{{ user }}</li>

    <!-- DATE PIPE -->
    <div>{{ today | date : "dd/MMM/yy" }}</div>
    <!-- CURRENCY PIPE -->
    <div>{{ money | currency : "€" }}</div>
    <!-- NUMBER PIPE -->
    <div>{{ bitcoins | number : "2.2-4" }}</div>
    <!-- NUMBER OBJ -->
    <pre>{{ yourJson | json }}</pre>

    <li *ngFor="let user of users2">{{ user.name }}</li>
  `,
})
export class AppComponent {
  visible = false;
  users = ["Stefano", "Fabio", "Andrea"];
  today = Date.now();
  money = 1200;
  bitcoins = 0.12345242;
  yourJson = { id: 1, name: "Stefano" };

  users2: User[];
  constructor(http: HttpClient) {
    this.users2 = [
      { id: 1, name: "Stefano" },
      { id: 2, name: "Andrea" },
      { id: 3, name: "Valerio" },
    ];
    this.users2.push({ id: 4, name: "Cingols" });
    http
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((result) => {
        console.log(result);
      });
  }
}
