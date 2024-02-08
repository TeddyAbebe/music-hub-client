import { useDispatch } from "react-redux";
import Button from "../../../../styles/Button";
import Flex from "../../../../styles/Flex";
import { Backdrop, ModalContainer } from "../../../../styles/Modal";
import {
  fetchMusicListRequest,
  generateStatisticsRequest,
  removeMusicRequest,
} from "../../../pages/Home/slice";
import { DeleteMusicModalProps } from "./types";
import { toast } from "react-toastify";
import { useState } from "react";
import { Loading } from "../../../../styles/Loader";

const DeleteMusicModal: React.FC<DeleteMusicModalProps> = ({
  isOpen,
  onClose,
  _id,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveMusic = () => {
    try {
      setIsLoading(true);
      dispatch(removeMusicRequest(_id));
    } catch (error) {
      toast.error("Failed to Delete Music");
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
        toast.success("Music Deleted successfully");
      }, 1000);
    }
  };

  const handleCancelRemoveMusic = () => {
    toast.success("Good Choice!");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          <Backdrop onClick={onClose} />
          <ModalContainer height="10rem">
            <h2>Are you sure about this ?</h2>

            <Flex gap="40px">
              <Button backgroundColor="#DC3545" onClick={handleRemoveMusic}>
                {isLoading ? <Loading /> : "Yes"}
                {/* Yes */}
              </Button>
              <Button
                backgroundColor="#28A745"
                onClick={handleCancelRemoveMusic}
              >
                No
              </Button>
            </Flex>
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default DeleteMusicModal;
