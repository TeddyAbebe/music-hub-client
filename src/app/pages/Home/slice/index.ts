import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMusics, MusicState } from "./types";

const initialState: MusicState = {
  musicList: [],
  isLoading: false,
  error: null,
  statistics: {
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
    genresStatistics: [],
    artistsStatistics: [],
    albumsStatistics: [],
  },
  page: 1,
  pageSize: 12,
  selectedGenre: null,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    // Fetch
    fetchMusicListRequest: (state, action: PayloadAction<IMusics>) => {
      state.isLoading = true;

      if (action.payload) {
        state.page = action.payload.page || 1;
        state.pageSize = action.payload.pageSize || 9;
      }
    },
    fetchMusicListSuccess: (state, action) => {
      state.musicList = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchMusicListFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Add
    addMusicRequest: (state) => {
      state.isLoading = true;
    },
    addMusicSuccess: (state, action) => {
      state.isLoading = false;
      state.musicList.musics.push(action.payload);
      state.error = null;
    },
    addMusicFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Update
    updateMusicRequest: (state) => {
      state.isLoading = true;
    },
    updateMusicSuccess: (state, action) => {
      state.isLoading = false;
      const updatedMusicIndex = state.musicList.musics.findIndex(
        (music) => music._id === action.payload._id
      );
      if (updatedMusicIndex !== -1) {
        state.musicList.musics[updatedMusicIndex] = action.payload;
      }
      state.error = null;
    },
    updateMusicFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Remove
    removeMusicRequest: (state) => {
      state.isLoading = true;
    },
    removeMusicSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.musicList.musics = state.musicList.musics.filter(
        (music) => music._id !== action.payload
      );
    },
    removeMusicFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Stat
    generateStatisticsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setStatisticsSuccess: (state, action) => {
      state.isLoading = false;
      state.statistics = action.payload;
      state.error = null;
    },
    setStatisticsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Pagination
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },

    // Filtering
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const {
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
  generateStatisticsRequest,
  setStatisticsSuccess,
  setStatisticsFailure,
  setPage,
  setPageSize,
  setSelectedGenre,
} = musicSlice.actions;

export default musicSlice.reducer;
