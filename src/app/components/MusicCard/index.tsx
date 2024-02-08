import { useEffect, useState } from "react";
import Card from "../../../styles/Card";
import Box from "../../../styles/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMusicList,
  selectPage,
  selectTotalPages,
} from "../../pages/Home/slice/selectors";
import { fetchMusicListRequest, setPage } from "../../pages/Home/slice";
import { LoadingAnimation } from "../../../styles/Loader";
import Pagination from "../../../styles/Pagination";
import GenreDropdown from "../../../styles/GenreDropdown";
import Text from "../../../styles/Text";

const MusicCard = () => {
  const dispatch = useDispatch();
  const musicList = useSelector(selectMusicList);
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(
        fetchMusicListRequest({
          page: currentPage,
          pageSize: 12,
          genre: selectedGenre,
        })
      );
      setIsLoading(false);
      setNoResults(musicList.length === 0);
    };

    fetchData();
  }, [dispatch, currentPage, selectedGenre, musicList?.length]);

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    dispatch(setPage(1));
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <>
      <GenreDropdown
        selectedGenre={selectedGenre}
        onGenreChange={handleGenreChange}
      />

      <Box>
        {isLoading ? (
          <LoadingAnimation />
        ) : noResults ? (
          <div
            style={{
              width: "30%",
              marginLeft: "33rem",
            }}
          >
            <Text fontSize="2rem" color="#123698">
              Sorry, No results found for the selected Genre
            </Text>
          </div>
        ) : (
          musicList?.map((music) => (
            <Card
              key={music._id}
              id={music._id}
              title={music.title}
              artist={music.artist}
              album={music.album}
              genre={music.genre}
            />
          ))
        )}
      </Box>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MusicCard;
