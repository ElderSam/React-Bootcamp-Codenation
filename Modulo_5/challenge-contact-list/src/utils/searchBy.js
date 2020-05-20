export default (array, search) => {
    return array.filter((item) =>
      Object.values(item).some((value, idx) =>
        value.toLowerCase().includes(search.toLowerCase())
      )
    );
};