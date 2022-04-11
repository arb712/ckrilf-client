import React, { useState } from "react";

const usePagination = (data, itemsPerPage) => {
  // Using state to store current page value
  const [currentPage, setCurrentPage] = useState(1);
  // Set max page by divide data length with how many item we want to display per page
  const maxPage = Math.ceil(data.length / itemsPerPage);
  // Set min and max item  we want to display
  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };
  // Set navigation for pagination
  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };
  return { currentData, jump, currentPage, maxPage };
};

export default usePagination;
