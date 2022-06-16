import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../../../models/joke.model';

@Component({
  selector: 'app-jokes-card',
  templateUrl: './jokes-card.component.html',
  styleUrls: ['./jokes-card.component.scss'],
})
export class JokesCardComponent {
  @Input() joke?: Joke;
  showAnswer = false;
  buttonTitle = 'Tell me';

  @Output()
  deleteJokeEvent = new EventEmitter<null>();

  deleteJoke(): void {
    this.deleteJokeEvent.emit();
  }

  toggleAnswerVisibility(): void {
    if (!this.showAnswer) {
      this.showAnswer = !this.showAnswer;
      this.buttonTitle = 'Hide';
    } else {
      this.showAnswer = !this.showAnswer;
      this.buttonTitle = 'Tell me';
    }
  }
}
