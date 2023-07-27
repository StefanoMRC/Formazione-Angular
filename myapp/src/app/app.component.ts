import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <button (click)="visible = !visible">visibilità</button>
    <h1 *ngIf="visible">hello word</h1>

    <li [hidden]="!visible" *ngFor="let user of users">{{ user }}</li>
  `,
})
export class AppComponent {
  visible = false;
  users = ["Stefano", "Fabio", "Andrea"];
}
