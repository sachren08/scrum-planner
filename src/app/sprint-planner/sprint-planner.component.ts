import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sprint-planner',
  templateUrl: './sprint-planner.component.html',
  styleUrls: ['./sprint-planner.component.scss']
})
export class SprintPlannerComponent {
  sprintCapacity: number | null = null;
  selectedStories: { name: string, points: number }[] = [];

  @Input() stories: { name: string, points: number }[] = [];

  setSprintCapacity(capacity: number) {
    this.sprintCapacity = capacity;
    this.autoSelectStories();
  }

  autoSelectStories() {
    let totalPoints = 0;
    this.selectedStories = [];

    for (const story of this.stories) {
      if (totalPoints + story.points <= this.sprintCapacity!) {
        this.selectedStories.push(story);
        totalPoints += story.points;
      }
    }
  }

  clearStories() {
    this.stories.length = 0;
    this.selectedStories.length = 0;
  }

  clearSelectedStories() {
    this.selectedStories.length = 0;
  }
}
