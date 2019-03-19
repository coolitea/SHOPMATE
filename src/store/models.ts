// DEPARTMENTS
export interface departments {
  department_id: number;
  name: string;
  description: string;
}

export interface departmentsState {
  isLoading: boolean;
  departments: departments[];
  err?: string;
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
  row: categories[];
  err?: string;
  isLoading: boolean;
}