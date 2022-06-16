import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../../../models/joke.model';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss'],
})
export class JokesListComponent {
  @Input() jokes: Joke[] = [
    {
      question: '',
      answer: '',
    },
  ];

  @Output() deleteJokeEvent = new EventEmitter<number>();

  deleteJoke(index: number): void {
    this.deleteJokeEvent.emit(index);
  }
}
