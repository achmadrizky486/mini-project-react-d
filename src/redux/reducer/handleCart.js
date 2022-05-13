const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //cek ke-ada-an barang di cart
      const ada = state.find(
        (barangYangDicari) => barangYangDicari.id === product.id
      );
      if (ada) {
        //Tambah barang
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }
      break;

    case "DELITEM":
      const ada1 = state.find(
        (barangYangDicari) => barangYangDicari.id === product.id
      );
      if (ada1.qty === 1) {
        //Tambah barang
        return state.filter((x) => x.id !== ada1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
