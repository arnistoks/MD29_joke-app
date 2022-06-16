import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Joke} from "../../../models/joke.model";

@Component({
  selector: 'app-jokes-form',
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss'],
})
export class JokesFormComponent implements OnInit {
  @Output()
  addJokeEvent = new EventEmitter<Joke>();

  jokesForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  addJoke(): void {
    this.jokesForm.markAllAsTouched();
    if (this.jokesForm.valid) {
      this.addJokeEvent.emit(this.jokesForm.value);
      this.jokesForm.reset();
    }
  }

  buildForm(): void {
    this.jokesForm = this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }
}
