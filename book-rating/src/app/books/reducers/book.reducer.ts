import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from '../actions/book.actions';
import { Book } from '../shared/book';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false,
};

const bookReducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => state),
  on(BookActions.loadBooksSuccess, (state, action) => state),
  on(BookActions.loadBooksFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}
