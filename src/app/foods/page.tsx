import React from "react";
import CatIcon from "../../../public/caticon.png";
import ParentLayout from "../../../components/ParentLayout";
import HomeFree from "../../../public/homefree.png";
import Empty from "../../../public/empty.png";
import Image from "next/image";

function Categories() {
  return (
    <div>
      <ParentLayout icon1={CatIcon} icon={HomeFree}>
        <div className="bg-white flex-col h-screen w-full place-content-center place-items-center rounded-[10px] flex content-center items-center">
          <Image alt="" src={Empty} width={526} height={298} />
          <h4 className="font-[700] text-[28px] mt-[30px]">
            This Page Is Empty
          </h4>
        </div>
      </ParentLayout>
    </div>
  );
}

export default Categories;
