"use client"

import { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar: React.FC = () => {

    const [manufacturer, setManufacturer] = useState<string>('')
  const handleSearch = () => {};
  return <form action="" className="searchbar" onSubmit={handleSearch}>
    <div className="searchbar__item">

        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
    </div>
  </form>;
};

export default SearchBar;
