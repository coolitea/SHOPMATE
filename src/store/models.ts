// Error
export interface error {
  message: string;
  field: string;
}
// DEPARTMENTS
export interface departments {
  department_id: number;
  name: string;
  description: string;
}

export interface departmentsState {
  isLoading: boolean;
  departments: departments[];
  err?: error;
}

// CATEGORIES
export interface categories {
  category_id: number;
  name: string;
  description?: string;
  department_id: number;
}

export interface categoriesState {
  count?: number;
  rows: categories[];
  err?: error;
  isLoading: boolean;
}

// CUSTOMER
export interface customer {
  customer_id?: number;
  name: string;
  email: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  region?: string;
  postal_code?: string;
  country?: string;
  shipping_region_id?: number;
  day_phone?: string;
  eve_phone?: string;
  mob_phone?: string;
}

export interface customerState {
  user?: customer;
  error?: error;
}

// PRODUCTS
export interface products {
  product_id: number;
  name: string;
  description: string;
  price: string;
  discounted_price: string;
  thumbnail: string;
}

export interface products_detail {
  product_id?: number;
  name?: string;
  description?: string;
  price?: string;
  discounted_price?: string;
  image?: string;
  image_2?: string;
}

export interface product_lists {
  count: number;
  rows: products[];
}

export interface pager {
  totalItems?: number;
  currentpage?: number;
  pageSize?: number;
  totalPages?: number;
  startPage?: number;
  endPage?: number;
  startIndex?: number;
  endIndex?: number;
  pages?: number[];
}

export interface productState {
  search: product_lists;
  products: product_lists;
  productDetail: products_detail;
  currentPage: number;
  pageSize: number;
  pager: pager;
  reviews: review[];
  star: number;
}

export interface review {
  name: string;
  review: string;
  rating: number;
  created_on: string;
}

// ATTRIBUTE
export interface attribute {
  attribute_name: string;
  attribute_value_id: number;
  attribute_value: string;
}

export interface attributeState {
  colors: attribute[];
  sizes: attribute[];
  err?: error;
}

// SHOPPINGCART
export interface cart {
  item_id: number;
  name: string;
  attributes: string;
  price: string;
  quantity: number;
  subtotal: string;
}

export interface cartState {
  cart: cart[];
  total_amount: string;
  total_items: number;
  err?: error;
}