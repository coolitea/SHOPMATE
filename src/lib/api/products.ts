import client from "lib/client";

const getSearch = (
  query_string: string,
  all_word = "on",
  page = 1,
  limit = 20,
  description_length = 200
) =>
  client.get(`/products/search`, {
    params: {
      query_string,
      all_word,
      page,
      limit,
      description_length
    }
  });

const getProduct = (
  id: string | undefined,
  page = 1,
  limit = 6,
  description_length = 200
) => {
  if (id === undefined) {
    return client.get(`/products`, {
      params: {
        page,
        limit,
        description_length
      }
    });
  } else {
    return client.get(`/products/${id}`, {
      params: {
        page,
        limit,
        description_length
      }
    });
  }
};

const getProductByCategory = (
  id: string | undefined,
  page = 1,
  limit = 6,
  description_length = 200
) => {
  if (id === undefined) {
    return client.get(`/products/inCategory`, {
      params: {
        page,
        limit,
        description_length
      }
    });
  } else {
    return client.get(`/products/inCategory/${id}`, {
      params: {
        page,
        limit,
        description_length
      }
    });
  }
};

const getProductByDepartment = (
  id: string | undefined,
  page = 1,
  limit = 6,
  description_length = 200
) => {
  if (id === undefined) {
    return client.get(`/products/inDepartment`, {
      params: {
        page,
        limit,
        description_length
      }
    });
  } else {
    return client.get(`/products/inDepartment/${id}`, {
      params: {
        page,
        limit,
        description_length
      }
    });
  }
};

const getReviews = (id: string) => client.get(`/products/${id}/reviews`);

const getProductDetail = (id: string) => client.get(`/products/${id}/details`);

export default {
  getProduct,
  getProductByCategory,
  getProductByDepartment,
  getReviews,
  getProductDetail,
  getSearch
};
