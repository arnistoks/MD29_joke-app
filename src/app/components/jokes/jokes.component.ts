import { Component } from '@angular/core';
import { Joke } from '../../models/joke.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  jokes: Joke[] = [
    {
      question: 'Kā rīkoties, ja traucē skaļi kaimiņi?',
      answer: 'Kļūsti skaļāks un tad vairs netraucēs.',
    },
    {
      question: 'Ko darīt, ja kaitina augošās degvielas cenas?',
      answer: 'Sāc ražot degvielu.',
    },
  ];

  addJoke(joke: Joke): void {
    this.jokes = [...this.jokes, joke];
  }

  deleteJoke(index: number): void {
    this.jokes.splice(index, 1);
  }
}
