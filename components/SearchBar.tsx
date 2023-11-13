"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const [model, setModel] = useState<string>("");

  const router = useRouter();

  const updateSearchParams= (model: string, manufacturer: string) => {
    const params = new URLSearchParams(window.location.search);
    if(model){

      params.set("model", model);
    }else {
      params.delete("model");
    }
    if(manufacturer){
      params.set("manufacturer", manufacturer);
    }else {
      params.delete("manufacturer");
    }
    const pathname = `${window.location.pathname}?${params.toString()}`;

    router.push(pathname);

    
  }
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!manufacturer && !model) {
      return alert("Please enter a manufacturer or model")
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());

  };
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
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          className="searchbar__input"
          placeholder="Tiguan"
          title="Model"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherClasses="sm:hidden" />

      </div>
      <SearchButton otherClasses="max-sm:hidden" />

    </form>
  );
};

export default SearchBar;
