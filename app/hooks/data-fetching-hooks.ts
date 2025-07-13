interface Category {
  id: string;
  category_name: string;
  image: string | null;
  description: string | null;
}

interface Subcategory {
  id: string;
  subcategory_name: string;
  image: string | null;
  category_id: string;
}

interface Product {
  uuid: string;
  hs_code: string;
  product_name: string;
  product_description: string | null;
  sub_category_id: string;
  subcategory_name: string;
  category_name: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch("/api/categories");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return await res.json();
};

export const getSubcategories = async (categoryId: string): Promise<Subcategory[]> => {
  const res = await fetch(`/api/subcategories?category_id=${encodeURIComponent(categoryId)}`);
  if (!res.ok) throw new Error("Failed to fetch subcategories");
  return await res.json();
};

export const getProducts = async (subcategoryId: string): Promise<Product[]> => {
  const res = await fetch(`/api/products?sub_category_id=${encodeURIComponent(subcategoryId)}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
};