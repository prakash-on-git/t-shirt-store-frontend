// import { useState } from "react";
// import "./searchbar.css";
// import { products } from "../../utils/products";
// // import useDebounce from "../../hooks/useDebounce";
// const SearchBar = ({ setFilterList }) => {
//   const [searchWord, setSearchWord] = useState(null);
//   // const debounceSearchWord = useDebounce(searchWord, 300);
//   const handelChange = (input) => {
//     setSearchWord(input.target.value);
//     setFilterList(products.filter((item) => item.productName?.toLowerCase().includes(searchWord?.toLowerCase())));
//     setFilterList(products.filter((item) => item.color?.toLowerCase().includes(searchWord?.toLowerCase())));
//     setFilterList(products.filter((item) => item.category?.toLowerCase().includes(searchWord?.toLowerCase())));
//   };
//   return (
//     <div className="search-container">
//       <input type="text" placeholder="Search..." onChange={handelChange} />
//       <ion-icon name="search-outline" className="search-icon"></ion-icon>
//     </div>
//   );
// };

// export default SearchBar;

import { useEffect, useState } from "react";
import "./searchbar.css";
import { products } from "../../utils/products";
import useDebounce from "../../hooks/useDebounce";

const SearchBar = ({ setFilterList }) => {
  const [searchWord, setSearchWord] = useState("");
  const debounceSearchWord = useDebounce(searchWord, 300);

  const handleChange = (input) => {
    setSearchWord(input.target.value);
  };

  // Use effect to handle the debounced search word
  useEffect(() => {
    if (debounceSearchWord === "") {
      setFilterList(products);
    } else {
      const filteredProducts = products.filter((item) =>
        [item.productName, item.color, item.category].some((field) =>
          field?.toLowerCase().includes(debounceSearchWord.toLowerCase())
        )
      );
      setFilterList(filteredProducts);
    }
  }, [debounceSearchWord, setFilterList]);

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
