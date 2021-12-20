import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamapp';
  isNameEmpty:boolean = false;
  competitor = '';
  competitors: string[] = [];

  addCompetitor(){
    if (!this.competitor) {
      this.isNameEmpty = true;
      return;
    }
    this.competitors.push(this.competitor);
    this.competitor = '';
    this.isNameEmpty = false;
  }

  onCompetitorInput(newCompetitor: string){
    this.competitor = newCompetitor;
  }

  inputFormControl = new FormControl('', [Validators.required, Validators.nullValidator]);
}
