import api from "../axios";

// save product into database
export const saveProduct = async (data) => {
  try {
    const res = await api.post("/admin/product/create-product", data);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const getSearchProduct = async (text) => {
  try {
    const res = await fetch(
      text
        ? `http://localhost:5000/api/v1/auth/admin/product/all-product/?text=${text}`
        : "http://localhost:5000/api/v1/auth/admin/product/all-product/"
    );

    return res.json();
  } catch (error) {
    console.error(error.message);
  }
};

export const getProducts = async (text) => {
  try {
    const res = await fetch(`/admin/product/all-product${text}`, {
      next: { revalidate: 10 },
    });

    return res.json();
  } catch (error) {
    console.error(error.message);
  }
};
