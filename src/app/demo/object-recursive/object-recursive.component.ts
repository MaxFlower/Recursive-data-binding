import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-recurive',
  templateUrl: './object-recursive.component.html',
  styleUrls: ['./object-recursive.component.css']
})
export class ObjectRecursiveComponent implements OnInit {

  @Input() iteration: number = 0;
  @Input() data: string;

  public maxIteration: number = 3;

  constructor() { }

  public ngOnInit(): void {
    this.iteration++;
  }
  
}