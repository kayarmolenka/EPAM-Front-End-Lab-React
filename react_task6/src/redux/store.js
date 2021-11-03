import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers/reducers";
import thunk from "redux-thunk";
import { fetchAlbums } from "./asyncActions/fetchAlbums";
import { fetchAllUsers } from "./asyncActions/fetchAllUsers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

store.dispatch(fetchAlbums());
store.dispatch(fetchAllUsers());

export default store;
