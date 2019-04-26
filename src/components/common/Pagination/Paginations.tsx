import * as React from "react";
import "./Pagination.scss";
import { pager } from "store/models";
import { productAction } from "store/actions";

interface Props {
  pager: pager;
  setPage: typeof productAction.setPage;
}

const Pagination: React.SFC<Props> = ({
  pager: { pages, currentpage, totalPages },
  setPage
}) => {
  if (!pages || pages.length <= 1 || !currentpage || !totalPages) {
    return null;
  }
  return (
    <div className="pagination">
      <ul>
        <li
          className={currentpage === 1 ? "pagination_move" : ""}
          onClick={() => setPage(currentpage - 1)}
        >
          prev
        </li>
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              className={currentpage === page ? "pagination--active" : ""}
              onClick={() => setPage(page)}
            >
              {page}
            </li>
          );
        })}
        <li
          className={currentpage === totalPages ? "pagination_move" : ""}
          onClick={() => setPage(currentpage + 1)}
        >
          next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
