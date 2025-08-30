// Product interface
export interface Review {
  rating: number;
  comment: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
  warrantyInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  shippingInformation: string;
  returnPolicy: string;
  images: string[];
  created_at: string;
}

export interface AllProductResponse {
  products: Product[];
  detail?: string;
}


export interface AllProductCategoriesResponse {
  categories: string[];
}


export interface ApiError {
  status: number;
  detail?: string;
}
