/* eslint-disable @typescript-eslint/no-explicit-any */
import { takeLatest, call, put, SagaReturnType } from "redux-saga/effects";
import { apiCall } from "../../../API";
import {
  fetchMusicListRequest,
  fetchMusicListSuccess,
  fetchMusicListFailure,
  addMusicRequest,
  addMusicSuccess,
  addMusicFailure,
  updateMusicRequest,
  updateMusicSuccess,
  updateMusicFailure,
  removeMusicRequest,
  removeMusicSuccess,
  removeMusicFailure,
  setStatisticsSuccess,
  setStatisticsFailure,
  generateStatisticsRequest,
} from "./index";
import { PayloadAction } from "@reduxjs/toolkit";
import { IMusics, Music } from "./types";

function* fetchMusicListSaga(action: PayloadAction<IMusics>) {
  try {
    const { page, pageSize, genre } = action.payload;

    const musicList: Music[] = yield call(apiCall, {
      route: "/",
      method: "GET",
      page,
      pageSize,
      genre,
    });
    yield put(fetchMusicListSuccess(musicList));
  } catch (error: any) {
    yield put(fetchMusicListFailure(error.message));
  }
}

function* addMusicSaga(action: PayloadAction<Music>) {
  try {
    const newMusic: Music = yield call(apiCall, {
      route: "/add",
      method: "POST",
      body: action.payload,
    });
    yield put(addMusicSuccess(newMusic));
  } catch (error: any) {
    yield put(addMusicFailure(error.message));
  }
}

function* updateMusicSaga(action: PayloadAction<Music>) {
  try {
    const updatedMusic: Music = yield call(apiCall, {
      route: `/${action.payload._id}`,
      method: "PUT",
      body: action.payload,
    });
    yield put(updateMusicSuccess(updatedMusic));
  } catch (error: any) {
    yield put(updateMusicFailure(error.message));
  }
}

function* removeMusicSaga(action: PayloadAction<string>) {
  try {
    yield call(apiCall, {
      route: `/${action.payload}`,
      method: "DELETE",
    });
    yield put(removeMusicSuccess(action.payload));
  } catch (error: any) {
    yield put(removeMusicFailure(error.message));
  }
}

function* generateStatisticsSaga(): Generator<
  any,
  void,
  SagaReturnType<typeof apiCall>
> {
  try {
    const statisticsData = yield call(apiCall, {
      route: "/stats",
      method: "GET",
    });
    yield put(setStatisticsSuccess(statisticsData));
  } catch (error: any) {
    yield put(setStatisticsFailure(error.message));
  }
}

export function* musicSaga() {
  yield takeLatest(fetchMusicListRequest.type, fetchMusicListSaga);
  yield takeLatest(addMusicRequest.type, addMusicSaga);
  yield takeLatest(updateMusicRequest.type, updateMusicSaga);
  yield takeLatest(removeMusicRequest.type, removeMusicSaga);
  yield takeLatest(generateStatisticsRequest.type, generateStatisticsSaga);
}
