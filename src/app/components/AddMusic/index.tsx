import Flex from "../../../styles/Flex";
import Icon from "../../../styles/Icon";
import { IoAddCircle } from "react-icons/io5";
import AddMusicModal from "../Modals/AddModal";
import { useState } from "react";

const AddMusic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex paddingLeft="30px">
      <Icon width="35px" onClick={openModal} backgroundColor="#28a745">
        <IoAddCircle fontSize={"30px"} color="white" />
      </Icon>

      <AddMusicModal isOpen={isModalOpen} onClose={closeModal} />
    </Flex>
  );
};

export default AddMusic;
