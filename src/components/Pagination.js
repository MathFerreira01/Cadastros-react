import React from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <button>
            <li key={number} className="pagination--numbers">
              <a onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          </button>
        ))}
      </ul>
    </nav>
    
  );
};

export default Pagination;
