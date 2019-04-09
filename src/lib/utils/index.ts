import * as _ from 'underscore';
import { pager } from 'store/models';

// PAGINATIONS
export const pagination = {
  setPage(page: number,pageSize: number, count: number): {pager: pager }{
    // if (page < 1) {
    //   return;
    // }
    // get new pager object for specified page
    const pager = this.getPager(count, page, pageSize);
    return {
      pager,
    }
  },
  getPager(totalitems: number, currentpage: number, pagesize: number) {
    // default first page
    currentpage = currentpage || 1;
    // default page size is 20
    pagesize = pagesize || 20;
    // calculate total pages
    const totalPages = Math.ceil(totalitems / pagesize);
    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages than show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages than calculate start and end pages
      if (currentpage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentpage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentpage - 5;
        endPage = currentpage + 4;
      }
    }
    // caculate start and end item indexes
    const startIndex = (currentpage - 1) * pagesize;
    const endIndex = Math.min(startIndex + pagesize - 1, totalitems - 1);

    // create an array of pages
    const pages = _.range(startPage, endPage + 1);
    return {
      totalitems,
      currentpage,
      pagesize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    }
  }
}

export const average = (total: number, amount: number) => total / amount;