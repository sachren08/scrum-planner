import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.scss'
})
export class StoryFormComponent {
  storyName: string = '';
  storyPoints: number | null = null;
  errorMessage: string = '';

  @Output() addStoryEvent = new EventEmitter<{ name: string, points: number }>();

  addStory() {
    if (!this.storyName || !this.storyPoints) {
      this.errorMessage = 'Please enter both story name and points!';
      return;
    }

    this.addStoryEvent.emit({ name: this.storyName, points: this.storyPoints });
    this.storyName = '';
    this.storyPoints = null;
    this.errorMessage = '';
  }
}
