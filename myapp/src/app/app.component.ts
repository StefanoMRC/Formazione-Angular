import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <button (click)="visible = !visible">visibilità</button>
    <app-hello *ngIf="visible"></app-hello>

    <li [hidden]="!visible" *ngFor="let user of users">{{ user }}</li>
  `,
})
export class AppComponent {
  visible = false;
  users = ["Stefano", "Fabio", "Andrea"];
}
