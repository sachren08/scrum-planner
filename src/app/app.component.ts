import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  stories: { name: string, points: number }[] = [];

  addStory(story: { name: string, points: number }) {
    // Prevent duplicates
    if (!this.stories.find(s => s.name === story.name)) {
      this.stories.push(story);
    }
  }
}
