import React, { createContext, useEffect, useState } from "react";
import { GetAllProducts } from "../../packages/api/products/GetAllProducts";
import { GetAllProductCategories } from "../../packages/api/products/GetAllProductCategories";
import {
  AllProductResponse,
  AllProductCategoriesResponse,
} from "../../interface/ProductProps";

export interface ProductContextType {
  products: AllProductResponse | null;
  categories: AllProductCategoriesResponse | null;
  fetchProducts: () => Promise<void>;
  fetchCategories: () => Promise<void>;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<AllProductResponse | null>(null);
  const [categories, setCategories] = useState<AllProductCategoriesResponse | null>(null);

  const fetchProducts = async () => {
    if (products) return;

    const cached = localStorage.getItem("products");
    if (cached) {
      setProducts(JSON.parse(cached));
      return;
    }

    try {
      const data = await GetAllProducts();
      if (data) {
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
      }
    } catch (err) {
      console.error("Fetch products failed", err);
    }
  };

  const fetchCategories = async () => {
    if (categories) return;

    const cached = localStorage.getItem("categories");
    if (cached) {
      setCategories(JSON.parse(cached));
      return;
    }

    try {
      const data = await GetAllProductCategories();
      if (data) {
        setCategories(data);
        localStorage.setItem("categories", JSON.stringify(data));
      }
    } catch (err) {
      console.error("Fetch categories failed", err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        fetchProducts,
        fetchCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

