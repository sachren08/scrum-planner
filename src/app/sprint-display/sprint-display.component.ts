import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sprint-display',
  templateUrl: './sprint-display.component.html',
  styleUrls: ['./sprint-display.component.scss']
})
export class SprintDisplayComponent {
  @Input() selectedStories: { name: string, points: number }[] = [];
}

