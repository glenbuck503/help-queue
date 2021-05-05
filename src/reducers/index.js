import formVisibleReducer from './form-visible-reducer';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer,
  firestore: firestoreReducer
});

export default rootReducer;