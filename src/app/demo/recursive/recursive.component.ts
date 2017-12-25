import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.css']
})
export class RecursiveComponent implements OnInit {

  @Input() iteration: number = 0;
  @Input() data: string;
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();

  public maxIteration: number = 3;

  constructor() { }

  public ngOnInit(): void {
    this.iteration++;
  }

  public onChange(): void {
    this.dataChange.emit(this.data);
  }

}
