import React from "react";
import styled from "styled-components";
import { PaginationProps } from "./types";

const PaginationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 55%;
  margin-left: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const PaginationButton = styled.button<{ isActive: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? "#007bff" : "#e0e2e4")};
  color: ${(props) => (props.isActive ? "#fff" : "#212529")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#007bff" : "#afb2b4")};
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationButton
          key={i}
          isActive={i === currentPage}
          onClick={() => handleClick(i)}
        >
          {i}
        </PaginationButton>
      );
    }
    return pageNumbers;
  };

  return <PaginationContainer>{renderPageNumbers()}</PaginationContainer>;
};

export default Pagination;
