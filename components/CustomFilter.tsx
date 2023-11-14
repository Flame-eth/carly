"use client";
import {useState} from "react";
import { CustomFilterProps } from "@/types";
import { Listbox } from "@headlessui/react";
import Image from "next/image";

const CustomFilter: React.FC<CustomFilterProps> = ({
  title, options
}) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-fit ">
      <Listbox value={selected} onChange={(e) => setSelected(e)} >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">
              {selected.title}
            </span>
            <Image src="/chevron-up-down.svg" width={20} height={20} alt="chevron-down" className="ml-4 object-contain" />

          </Listbox.Button>
        </div>

      </Listbox>

    </div>
  )
}

export default CustomFilter