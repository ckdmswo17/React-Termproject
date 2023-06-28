import React, { useState } from "react";

function Pagination({ itemAmount, currentPage, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(itemAmount / itemsPerPage); // 전체 페이지 수
  console.log("totalpage : " + totalPages);
  const handlePageChange = (pageNumber) => {
    console.log("pageNumber : " + pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
    console.log("pageNumbers : " + pageNumbers);

    return pageNumbers.map((pageNumber) => (
      <li
        key={pageNumber}
        className={`number ${currentPage === pageNumber ? "active" : ""}`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </li>
    ));
  };

  return (
    <div className="menu-pagination">
      <div className="layout-pagination">
        <div className="layout-pagination el-pagination">
          <button
            type="button"
            disabled={currentPage === 1}
            className="btn-prev"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <span className="el-icon el-icon-arrow-left">&lt;</span>
          </button>
          <ul className="el-pager">{renderPageNumbers()}</ul>
          <button
            type="button"
            disabled={currentPage === totalPages}
            className="btn-next"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span className="el-icon el-icon-arrow-right">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
