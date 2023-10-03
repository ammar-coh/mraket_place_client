import { combineReducers } from "redux";
import { changedMyMind } from "./changedMyMind";
import { checkoutreducer } from "./checkoutReducer";
import { books } from "./book.js";
import { chat } from './chat'
import { user_login } from './user_login'
import { notification } from './notification'

const reducer = combineReducers({
  checkout: checkoutreducer,
  changedMyMind: changedMyMind,
  books: books,
  user_login: user_login,
  chat: chat,
  notification: notification
});
export default reducer;
