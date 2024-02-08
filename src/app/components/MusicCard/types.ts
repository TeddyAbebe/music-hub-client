export interface Music {
  _id: {
    $oid: string;
  };
  title: string;
  artist: string;
  album?: string;
  genre?: string;
}
