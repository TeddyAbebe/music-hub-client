import styled from "styled-components";
import { CardProps } from "./types";
import Icon from "../Icon";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FcMusic } from "react-icons/fc";
import Flex from "../Flex";
import { useState } from "react";
import UpdateMusicModal from "../../app/components/Modals/UpdateModal";
import DeleteMusicModal from "../../app/components/Modals/DeleteModal";

const CardContainer = styled.div`
  padding: 12px;
  width: 220px;
  height: 200px;
  background-color: antiquewhite;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-x: auto;
  white-space: nowrap;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0px;
  text-align: center;
`;

const Artist = styled.p`
  font-size: 15px;
  color: #000000;
  margin: 0px;
`;

const Album = styled.p`
  font-size: 15px;
  color: #000000;
  margin: 0px;
`;

const Genre = styled.p`
  font-size: 15px;
  color: #000000;
  margin: 0px;
`;

const Card: React.FC<CardProps> = ({ title, artist, album, genre, id }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setIsUpdateModalOpen(false);
    setIsDeleteModalOpen(false);
  };
  return (
    <CardContainer>
      <Title>
        <FcMusic />
        {title}
      </Title>
      <Artist>
        <strong>Artist :</strong> {artist}
      </Artist>

      <Album>
        <strong>Album :</strong> {album}
      </Album>
      <Genre>
        <strong>Genre :</strong> {genre}
      </Genre>
      <Flex justifyContent="center" gap="3rem">
        <Icon backgroundColor="#007BFF" onClick={openUpdateModal}>
          <MdModeEdit color="white" />
        </Icon>
        <Icon backgroundColor="#DC3545" onClick={openDeleteModal}>
          <MdDelete color="white" />
        </Icon>

        <UpdateMusicModal
          isOpen={isUpdateModalOpen}
          onClose={closeModal}
          title={title}
          artist={artist}
          album={album}
          genre={genre}
          _id={id}
        />

        <DeleteMusicModal
          isOpen={isDeleteModalOpen}
          onClose={closeModal}
          _id={id}
        />
      </Flex>
    </CardContainer>
  );
};

export default Card;
