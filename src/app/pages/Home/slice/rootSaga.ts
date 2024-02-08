import { all } from "redux-saga/effects";
import { musicSaga } from "./saga";

export default function* rootSaga() {
  yield all([musicSaga()]);
}
