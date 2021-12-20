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
  isTeamEmpty:boolean = false;
  isTeamLess:boolean = false;
  competitor = '';
  competitors: string[] = [];
  numberOfTeams:number | "" = "";
  teams:string [][] = [];

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

  onNumberOfTeamsInput(teamNumber: string){
    this.numberOfTeams = Number(teamNumber);
  }

  generateTeams(){
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.isTeamEmpty = true;
      return;
    }
    
    if (this.competitors.length < this.numberOfTeams) {
      this.isTeamLess = true;
      return;
    }

    const allCompetitors = [...this.competitors];

    while (allCompetitors.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allCompetitors.length);
        const chosen = allCompetitors.splice(randomIndex, 1)[0];
        if(!chosen) break;
        if (this.teams[i]) {
          this.teams[i].push(chosen);
        } else {
          this.teams[i] = [chosen];
        }   
      }
    }

    this.isNameEmpty = false;
    this.isTeamEmpty = false; 
    this.isTeamLess = false; 

    this.competitors = [];
    this.numberOfTeams = "";
  }

  inputFormControl = new FormControl('', [Validators.required, Validators.nullValidator]);
  teamFormControl = new FormControl('', [Validators.required, Validators.nullValidator]);
}
