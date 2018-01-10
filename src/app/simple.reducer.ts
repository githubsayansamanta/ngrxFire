import { Action } from '@ngrx/store';

export function simpleReducer(state: string = "Hello World", action: Action) {
    console.log(action.type, state);
    switch (action.type) {
        case 'english':
            return state = 'Speaks in English';
        case 'french':
            return state = 'Speaks in French';
        default:
            return state;
    }

}