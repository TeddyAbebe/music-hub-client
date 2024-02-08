import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../../styles/Button";
import Input from "../../../../styles/Input";
import { Backdrop, ModalContainer } from "../../../../styles/Modal";
import { AddMusicModalProps } from "./types";
import {
  addMusicRequest,
  fetchMusicListRequest,
  generateStatisticsRequest,
} from "../../../pages/Home/slice";
import { toast } from "react-toastify";
import { Loading } from "../../../../styles/Loader";

const AddMusicModal: React.FC<AddMusicModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [musicData, setMusicData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMusicData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddMusic = () => {
    try {
      setIsLoading(true);
      dispatch(addMusicRequest(musicData));
    } catch (error) {
      toast.error("Failed to add Music");
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

        toast.success("Music Added successfully");
        setMusicData({
          title: "",
          artist: "",
          album: "",
          genre: "",
        });
      }, 1000);
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <Backdrop onClick={onClose} />
          <ModalContainer>
            <h2>Add Music</h2>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              required
              onChange={handleChange}
            />
            <Input
              type="text"
              name="artist"
              placeholder="Artist"
              required
              onChange={handleChange}
            />
            <Input
              type="text"
              name="album"
              placeholder="Album"
              required
              onChange={handleChange}
            />
            <Input
              type="text"
              name="genre"
              placeholder="Genre"
              required
              onChange={handleChange}
            />
            <Button onClick={handleAddMusic} disabled={isLoading}>
              {isLoading ? <Loading /> : "Add"}
            </Button>
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default AddMusicModal;
