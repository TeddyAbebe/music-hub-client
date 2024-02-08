import { useDispatch } from "react-redux";
import Button from "../../../../styles/Button";
import Input from "../../../../styles/Input";
import { Backdrop, ModalContainer } from "../../../../styles/Modal";
import { Music } from "../../../pages/Home/slice/types";
import { UpdateMusicModalProps } from "./types";
import { useState } from "react";
import {
  fetchMusicListRequest,
  generateStatisticsRequest,
  updateMusicRequest,
} from "../../../pages/Home/slice";
import { toast } from "react-toastify";
import { Loading } from "../../../../styles/Loader";

const UpdateMusicModal: React.FC<UpdateMusicModalProps & Music> = ({
  isOpen,
  onClose,
  _id,
  title: initialTitle,
  artist: initialArtist,
  album: initialAlbum,
  genre: initialGenre,
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialTitle);
  const [artist, setArtist] = useState(initialArtist);
  const [album, setAlbum] = useState(initialAlbum);
  const [genre, setGenre] = useState(initialGenre);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateMusic = () => {
    const updatedMusic = {
      _id,
      title,
      artist,
      album,
      genre,
    };

    try {
      setIsLoading(true);
      dispatch(updateMusicRequest(updatedMusic));
    } catch (error) {
      toast.error("Failed to Update Music");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        onClose();
        dispatch(
          fetchMusicListRequest({
            page: 1,
            pageSize: 12,
            genre: "",
          })
        );
        dispatch(generateStatisticsRequest());
        toast.success("Music Updated successfully");
      }, 1000);
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <Backdrop onClick={onClose} />
          <ModalContainer>
            <h2>Update Music</h2>

            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              type="text"
              name="artist"
              placeholder="Artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
            <Input
              type="text"
              name="album"
              placeholder="Album"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              required
            />
            <Input
              type="text"
              name="genre"
              placeholder="Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
            <Button backgroundColor="#007BFF" onClick={handleUpdateMusic}>
              {isLoading ? <Loading /> : "Update"}
            </Button>
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default UpdateMusicModal;
