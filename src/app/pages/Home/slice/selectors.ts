import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/RootState";
import { MusicState } from "./types";

export const selectMusicState = (state: RootState) => state.music;

export const selectMusicList = createSelector(
  selectMusicState,
  (musicState: MusicState) => musicState.musicList.musics
);

export const selectTotalMusics = createSelector(
  selectMusicState,
  (musicState: MusicState) => musicState.musicList.TotalMusics
);

export const selectStatistics = createSelector(
  selectMusicState,
  (musicState: MusicState) => musicState.statistics
);

export const selectPage = createSelector(
  selectMusicState,
  (musicState: MusicState) => musicState.page
);

export const selectPageSize = createSelector(
  selectMusicState,
  (musicState: MusicState) => musicState.pageSize
);

export const selectTotalPages = createSelector(
  selectMusicState,
  (musicState: MusicState) =>
    Math.ceil(musicState.musicList.TotalMusics / musicState.pageSize)
);
