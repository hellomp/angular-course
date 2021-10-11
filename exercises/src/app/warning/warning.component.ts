import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-warning",
  template: ` <p>That's a warning message!</p> `,
  styleUrls: ["./warning.component.scss"],
})
export class WarningComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
