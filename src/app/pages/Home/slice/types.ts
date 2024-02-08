export interface Music {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface IFetchRes {
  musics: Music[];
  TotalMusics: number;
}

export interface IMusics {
  page?: number;
  pageSize?: number;
  genre?: string;
}

interface GenreStatistics {
  _id: string;
  count: number;
  musics: string[];
}

interface ArtistStatistics {
  _id: string;
  count: number;
  musics: string[];
  albums: string[];
}

interface AlbumStatistics {
  _id: string;
  count: number;
  musics: string[];
}

interface Statistics {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  genresStatistics: GenreStatistics[];
  artistsStatistics: ArtistStatistics[];
  albumsStatistics: AlbumStatistics[];
}

export interface MusicState {
  musicList: IFetchRes;
  isLoading: boolean;
  error: string | null;
  statistics: Statistics;
  page: number;
  pageSize: number;
  selectedGenre: string | null;
}

export interface MusicPayload {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}
