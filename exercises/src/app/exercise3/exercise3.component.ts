import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercise3",
  templateUrl: "./exercise3.component.html",
  styleUrls: ["./exercise3.component.scss"],
})
export class Exercise3Component {
  showDetails: boolean = false;
  clickList: string[] = [];

  constructor() {}

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.clickList.push(Date());
  }
}
