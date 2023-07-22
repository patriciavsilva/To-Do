import { PlusCircle } from "@phosphor-icons/react";
import React from "react";

export default function TaskList() {
  return (
    <div className="flex items-center justify-center mt-[-27px] gap-2">
      <input
        type="text"
        className="w-[638px] h-[54px] bg-[#262626] rounded-lg"
      ></input>
      <button className=" flex w-[90px] h-[52px] bg-[#1E6F9F] rounded-lg text-gray-100 text-sm font-bold items-center justify-center gap-2">
        Criar
        <PlusCircle color="#F2F2F2" size={20} />
      </button>
    </div>
  );
}
