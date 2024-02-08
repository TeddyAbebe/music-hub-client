import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateStatisticsRequest } from "../../pages/Home/slice";
import { selectStatistics } from "../../pages/Home/slice/selectors";
import { LoadingAnimation } from "../../../styles/Loader";
import Button from "../../../styles/Button";
import Flex from "../../../styles/Flex";
import Text from "../../../styles/Text";
import genreIcon from "../../../assets/genre.ico";
import artistIcon from "../../../assets/guitar.ico";
import albumIcon from "../../../assets/music-album.ico";
import totalIcon from "../../../assets/select-all.ico";

const Statistics = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistics);

  const [isLoading, setIsLoading] = useState(false);
  const [displayTotal, setDisplayTotal] = useState(false);
  const [displayGenres, setDisplayGenres] = useState(false);
  const [displayArtists, setDisplayArtists] = useState(false);
  const [displayAlbums, setDisplayAlbums] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(generateStatisticsRequest());
    setIsLoading(false);
  }, [dispatch]);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const handleDisplayTotal = () => {
    handleButtonClick();
    setDisplayTotal(true);
    setDisplayGenres(false);
    setDisplayArtists(false);
    setDisplayAlbums(false);
  };

  const handleDisplayGenres = () => {
    handleButtonClick();
    setDisplayTotal(false);
    setDisplayGenres(true);
    setDisplayArtists(false);
    setDisplayAlbums(false);
  };

  const handleDisplayArtists = () => {
    handleButtonClick();
    setDisplayTotal(false);
    setDisplayGenres(false);
    setDisplayArtists(true);
    setDisplayAlbums(false);
  };

  const handleDisplayAlbums = () => {
    handleButtonClick();
    setDisplayTotal(false);
    setDisplayGenres(false);
    setDisplayArtists(false);
    setDisplayAlbums(true);
  };

  return (
    <div style={{ position: "relative" }}>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: "55%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LoadingAnimation />
        </div>
      ) : (
        <>
          {statistics ? (
            <>
              <Text fontSize="2rem" textAlign="center">
                Stats
              </Text>
              <br />
              <Flex
                gap="17px"
                justifyContent="space-around"
                paddingRight="0px"
                paddingLeft="0px"
                alignItems="start"
                flexWrap="wrap"
              >
                <Button
                  width="80px"
                  onClick={handleDisplayTotal}
                  active={displayTotal}
                  backgroundColor="#007bff"
                  icon={totalIcon}
                >
                  Total
                </Button>
                <Button
                  width="80px"
                  onClick={handleDisplayGenres}
                  active={displayGenres}
                  backgroundColor="#007bff"
                  icon={genreIcon}
                >
                  Genre
                </Button>
                <Button
                  width="80px"
                  onClick={handleDisplayArtists}
                  active={displayArtists}
                  backgroundColor="#007bff"
                  icon={artistIcon}
                >
                  Artist
                </Button>
                <Button
                  width="80px"
                  onClick={handleDisplayAlbums}
                  active={displayAlbums}
                  backgroundColor="#007bff"
                  icon={albumIcon}
                >
                  Album
                </Button>
              </Flex>

              <br />
              <div style={{ height: "50vh", overflowY: "scroll" }}>
                {buttonClicked ? (
                  <Flex flexDirection="column">
                    {displayTotal && (
                      <div>
                        <h3>Total Songs: {statistics.totalSongs}</h3>
                        <h3>Total Artists: {statistics.totalArtists}</h3>
                        <h3>Total Albums: {statistics.totalAlbums}</h3>
                        <h3>Total Genres: {statistics.totalGenres}</h3>
                      </div>
                    )}

                    {displayGenres && (
                      <div>
                        {statistics.genresStatistics.map((genre) => (
                          <p key={genre._id}>
                            <strong>Genre:</strong> {genre._id},
                            <br />
                            <strong>Total:</strong> {genre.count}
                            <br />
                            <strong>Musics:</strong>{" "}
                            <ul>
                              {genre.musics.map((music, index) => (
                                <li key={index}>{music}</li>
                              ))}
                            </ul>
                            <hr />
                          </p>
                        ))}
                      </div>
                    )}

                    {displayArtists && (
                      <div>
                        {statistics.artistsStatistics.map((artist) => (
                          <p key={artist._id}>
                            <strong>Artist:</strong> {artist._id},
                            <br />
                            <strong>Albums:</strong> {artist.albums.join(", ")}
                            <br />
                            <strong>Musics: </strong>{" "}
                            <ul>
                              {artist.musics.map((music, index) => (
                                <li key={index}>{music}</li>
                              ))}
                            </ul>
                            <hr />
                          </p>
                        ))}
                      </div>
                    )}

                    {displayAlbums && (
                      <div>
                        {statistics.albumsStatistics.map((album) => (
                          <p key={album._id}>
                            <strong>Album:</strong> {album._id},
                            <br />
                            <strong>Total Musics:</strong> {album.count}
                            <br />
                            <strong>Musics:</strong>
                            <ul>
                              {album.musics.map((music, index) => (
                                <li key={index}>{music}</li>
                              ))}
                            </ul>
                            <hr />
                          </p>
                        ))}
                      </div>
                    )}
                  </Flex>
                ) : (
                  <Text textAlign="center" fontSize="1rem">
                    Select an option to view statistics
                  </Text>
                )}
              </div>
            </>
          ) : (
            <Text textAlign="center" fontSize="1rem">
              No statistics data available.
            </Text>
          )}
        </>
      )}
    </div>
  );
};

export default Statistics;
