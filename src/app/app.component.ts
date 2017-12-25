import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]  
})
export class AppComponent {
  public data: string = 'Word';
  public objectData: object = {
    stringData: 'Word'
  };
  public detectionData: object = {
    stringData: 'Change me!'
  };
}

