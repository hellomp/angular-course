import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success",
  template: ` <p>That's a success message!</p> `,
  styleUrls: ["./success.component.scss"],
})
export class SuccessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
