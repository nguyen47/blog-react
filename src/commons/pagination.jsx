import React from 'react';
import _ from 'lodash';
const Pagination = (props) => {
  const { blogCounts, pageSize, currentPage, onPageChange } = props;

  const totalPage = Math.ceil(blogCounts / pageSize);

  const pages = _.range(1, totalPage + 1);

  return (
    <div className="pull-left">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((p) => (
            <li
              key={p}
              className={currentPage === p ? 'page-item active' : 'page-item'}
            >
              <a className="page-link" onClick={() => onPageChange(p)}>
                {p}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
