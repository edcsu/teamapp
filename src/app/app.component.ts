import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamapp';
  competitor = '';
  competitors: string[] = [];

  addCompetitor(){
    this.competitors.push(this.competitor);
  }

  onCompetitorInput(newCompetitor: string){
    this.competitor = newCompetitor;
    console.log(this.competitor);
  }
}
