import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  message: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  message$: Observable<string>
  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  englishMessage() {
    this.store.dispatch({ type: 'english' });
  }
  spanishMessage() {
    this.store.dispatch({ type: 'french' });
  }
}
