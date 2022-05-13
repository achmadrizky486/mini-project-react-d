// Tambah ke cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Hapus dari cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
