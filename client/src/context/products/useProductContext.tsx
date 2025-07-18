import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { ProductContextType } from "./ProductContext";



export const useProductContext = (): ProductContextType | null => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProductContext must be used within a ProductProvider");
  return context;
};



// using code in a component example
// import { useProductContext } from "../context/ProductContext";

// const CategoryList = () => {
//   const { categories, fetchCategories } = useProductContext();

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <ul>
//       {categories?.map((cat) => (
//         <li key={cat.id}>{cat.name}</li>
//       ))}
//     </ul>
//   );
// };
