const getProductsByStock = (products, includeOutOfStock) => {
    let filtertedList = [];
    let newList = [];
    if (includeOutOfStock) {
      newList = products.filter(
        ({ outOfStock }) => outOfStock !== includeOutOfStock
      );
      filtertedList.push(...newList);
    }
    newList = products.filter(
      ({ outOfStock }) => outOfStock === includeOutOfStock
    );
    filtertedList.push(...newList);
    return filtertedList;
  };
  
  export { getProductsByStock };
  