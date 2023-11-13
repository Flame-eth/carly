"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchButton: React.FC<{
  otherClasses?: string;
}> = ({ otherClasses }) => (
  <button
    type="submit"
    className={` -ml-3 z-10 ${otherClasses}`}
    title="Search"
  >
    <Image
      src="/magnifying-glass.svg"
      width={40}
      height={40}
      className="object-contain"
      alt="Search"
    />
  </button>
);

const SearchBar: React.FC = () => {
  const [manufacturer, setManufacturer] = useState<string>("");
  const handleSearch = () => {};
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image src="/model-icon.png" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" alt="car model" />
      </div>
    </form>
  );
};

export default SearchBar;
