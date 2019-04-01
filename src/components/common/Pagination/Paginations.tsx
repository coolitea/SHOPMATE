import * as React from 'react';
import './Pagination.scss';
import { pager } from 'store/models';
import { productAction } from 'store/actions';

interface Props {
  pager: pager;
  setPage: typeof productAction.setPage;
}

const Pagination: React.SFC<Props> = ({
  pager: { pages, currentpage, totalPages },
  setPage,
}) => {
  if (!pages || pages.length <= 1) {
    return null;
  }
  return (
    <div className="pagination">
      <ul>
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              className={
                currentpage === page ? 'pagination--active' : ''
              }
              onClick={() => setPage(page)}
            >
              {page}
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Pagination;