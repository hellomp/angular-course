import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { WarningComponent } from "./warning/warning.component";
import { SuccessComponent } from "./success/success.component";
import { Exercise1Component } from "./exercise1/exercise1.component";
import { Exercise2Component } from "./exercise2/exercise2.component";

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    Exercise1Component,
    Exercise2Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
