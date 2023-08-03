import { Component } from "@angular/core";

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
  `,
})
export class AppComponent {
  visible = false;
  users = ["Stefano", "Fabio", "Andrea"];
  today = Date.now();
  money = 1200;
  bitcoins = 0.12345242;
  yourJson = { id: 1, name: "Stefano" };
}
