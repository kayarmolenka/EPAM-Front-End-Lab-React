import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers/reducers";
import thunk from "redux-thunk";
import { fetchAlbums } from "./asyncActions/fetchAlbums";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

store.dispatch(fetchAlbums());

export default store;
