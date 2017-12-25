import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detection-recursive',
  templateUrl: './change-detection-recursive.component.html',
  styleUrls: ['./change-detection-recursive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionRecursiveComponent implements OnInit {

  @Input() iteration: number = 0;
  @Input() data: string;

  public maxIteration: number = 3;

  constructor(private cd: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.iteration++;
  }
}