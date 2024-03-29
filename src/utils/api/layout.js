import api from "../axios";

// save tag into database
export const saveLayout = async (data) => {
  try {
    const res = await api.post("/admin/layout/create-layout", data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
export const updateLayout = async (data, id) => {
  try {
    const res = await api.patch(`/admin/layout/layout-update/${id}`, data);
    console.log(res);

    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const getLayout = async () => {
  try {
    const res = await api.get("/admin/layout/all-layout");
    return res.data.data;
  } catch (error) {
    console.error(error.message);
  }
};
export const getLayoutById = async (id) => {
  try {
    const res = await api.get(`/admin/layout/Single-layout/${id}`);
    return res.data.data;
  } catch (error) {
    console.error(error.message);
  }
};
