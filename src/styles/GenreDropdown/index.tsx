import React from "react";
import styled from "styled-components";
import { GenreDropdownProps } from "./types";

const DropdownContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 10%;
  margin-left: 42.3rem;
  margin-top: 4.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #faebd7;
`;

const GenreDropdown: React.FC<GenreDropdownProps> = ({
  selectedGenre,
  onGenreChange,
}) => {
  const genres = [
    "Rock",
    "Pop",
    "Country",
    "Hip Hop",
    "Blues",
    "Funk",
    "Jazz",
    "Soul",
    "Classical",
  ];

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onGenreChange(e.target.value);
  };

  return (
    <DropdownContainer>
      <Select value={selectedGenre} onChange={handleGenreChange}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
    </DropdownContainer>
  );
};

export default GenreDropdown;
