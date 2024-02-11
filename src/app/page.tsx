"use client";
import Link from "next/link";
import ParentLayout from "../../components/ParentLayout";
import SearchButton from "../../public/Frame 741.png";
import Image from "next/image";
import CatIcon from "../../public/005-fever.png";
import Apple from "../../public/Frame 714 (2).png";
import Default from "../../public/Frame 714 (1).png";
import Facebook from "../../public/facebook.png";
import LinkedIn from "../../public/linkedin.png";
import Twitter from "../../public/twitter.png";
import More from "../../public/link.png";
import HomeIcon from "../../public/icons.png";
import ImageOne from "../../public/ban2.png";
import ImageTwo from "../../public/ban1.png";
import { Quicksand } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as Unfill } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";

import MenuIconMobile from "../../public/menu-01.png";
import { useEffect, useState } from "react";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["700"] });

// const Fruits = [
//   {
//     name: "Oranges",
//     vitamin: "C",
//     image: Orange,
//   },
//   {
//     name: "Apples",
//     vitamin: "C",
//     image: Apple,
//   },
//   {
//     name: "Avocado",
//     vitamin: "B6",
//     image: Default,
//   },
//   {
//     name: "Strawberries",
//     vitamin: "C",
//     image: Default,
//   },
//   {
//     name: "Mangoes",
//     vitamin: "A, C",
//     image: Default,
//   },
//   {
//     name: "Blueberries",
//     vitamin: "C, K",
//     image: Default,
//   },
//   {
//     name: "Grips",
//     vitamin: "A, C",
//     image: Default,
//   },
//   {
//     name: "Pineapples",
//     vitamin: "C, K",
//     image: Default,
//   },
//   {
//     name: "Mangoes",
//     vitamin: "A, C",
//     image: Default,
//   },
//   {
//     name: "Blueberries",
//     vitamin: "C, K",
//     image: Default,
//   },
//   {
//     name: "Grips",
//     vitamin: "A, C",
//     image: Default,
//   },
// ];

export default function Home() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api");
      const sub = await fetch("/api/subcategory");
      const data = await res.json();
      const subdata = await sub.json();
      console.log(data.posts);
      setCategory(data.posts);
      setSubCategory(subdata.sub);
      console.log(subdata.sub);
    }

    fetchPosts();
  }, []);
  return (
    <main className="">
      <ParentLayout icon={HomeIcon}>
        <div
          onClick={() => setShow(true)}
          className="mobile:flex mb-[16px] justify-between px-3 rounded-[10px]  place-items-center laptop:hidden bg-white w-full h-[40px]"
        >
          <div className="flex place-items-center space-x-4">
            <Image alt="" src={MenuIconMobile} height={20} width={20} />
            <h1 className="font-[600] text-[12px]">Select Food Item</h1>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            height="14px"
            width="14px"
            color="black"
          />
        </div>
        <div className="flex pb-[50px]">
          <div className="h-[630px] relative laptop:flex flex-col mobile:hidden pr-[16px]  p-[15px] items-center w-[300px] rounded-[15px] bg-white">
            <div className="w-[100%] top-0 absolute bg-[#1FA45B] h-[57px] flex content-center place-content-center items-center rounded-t-[10px]">
              <h1 className="text-white font-light text-[14px]">Categories</h1>
            </div>
            <div className="mt-[37px] mb-[7px]">
              <div className="border-solid pr-[1px] place-content-center place-items-center mt-[16px] flex justify-between content-center border-[2px] border-[rgba(240, 242, 244, 1)] w-[270px] h-[44px] rounded-[9px]">
                <Link href="">
                  <Image alt="" src={SearchButton} height={40} width={40} />
                </Link>
                <input
                  placeholder="Search by Categories"
                  className="px-[15px] self-center font-normal text-[12px]"
                />
              </div>
            </div>
            <div className="scrollbar-thin px-[12px] h-full overflow-x-hidden overflow-scroll  scrollbar-track-gray-100">
              <div className="space-y-[10px] ">
                {category.map((data: any) => (
                  <>
                    <div
                      key={data.id}
                      className="flex justify-between hover:bg-[#E2E2E2] place-items-center w-[270px] h-[73px] bg-white rounded-[10px]"
                    >
                      <div className="p-[8px] bg-[#CFE0E5] mx-[10px] rounded-xl">
                        <Image alt="" src={CatIcon} height={40} width={40} />
                      </div>
                      <div>
                        <h1 className="font-[700] text-[#1FA45B] text-[12px]">
                          {data.cat_name_en}
                        </h1>
                        <h1 className="font-[400] text-[#7E7E7E] text-[12px]">
                          Subcategory: {data.no_of_subcat}
                        </h1>
                      </div>
                      <div className="mx-[3px] ml-[50px]">
                        <h1 className="text-[#393939] text-center text-base font-semibold leading-5 tracking-normal">
                          {data.no_of_dua}
                        </h1>
                        <h1 className="font-[400] text-[#7E7E7E] text-[12px]">
                          Duas
                        </h1>
                      </div>
                    </div>
                    <div className="w-[230px] h-auto">
                      {subcategory
                        .filter(({ cat_id }) => cat_id == data.cat_id)
                        .map((subdata: any) => (
                          <div className="flex cursor-pointer w-[250px] overflow-hidden ml-[10px] space-x-3">
                            <div className="text-[#1FA45B] h-[30px] mt-[10px] rotate-90">
                              <span className="text-center">·</span>•
                              <span className="text-center">········</span>
                            </div>
                            <h5 className="text-[13px] leading-4 font-semibold tracking-normal text-left">
                              {subdata.subcat_name_en}
                            </h5>
                          </div>
                        ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`laptop:hidden ${
            show ? "mobile:visible" : "mobile:invisible"
          } fixed z-[1001] top-0 left-0 w-full h-full bg-slate-900/70`}
          onClick={() => setShow(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`h-full z-[1001] flex-col  pr-[16px] scrollbar-none overflow-x-hidden overflow-scroll scrollbar-thumb-orange-300 scrollbar-track-gray-100 p-[15px] items-center w-[300px] rounded-r-[25px] bg-white`}
          >
            <div className="w-[270px] flex content-center place-content-center items-center h-[45px] border-rose-300/30 border-2 border-solid rounded-[10px]">
              <Link
                href=""
                className="w-[134px] flex content-center place-content-center text-center items-center h-[37px] rounded-[7px] bg-rose-300/30"
              >
                <h1 className="text-orange-600 font-semibold text-[14px]">
                  Fruits
                </h1>
              </Link>
              <Link
                href=""
                className="w-[130px] flex content-center place-content-center text-center items-center h-[37px] rounded-[7px] bg-white"
              >
                <h1 className="text-black font-normal text-[14px]">
                  Vegetables
                </h1>
              </Link>
            </div>
            <div>
              <div className="border-solid pr-[1px] place-content-center place-items-center mt-[16px] flex justify-between content-center border-[2px] border-[rgba(240, 242, 244, 1)] w-[270px] h-[34px] rounded-[9px]">
                <input
                  placeholder="Search by Fruits Name"
                  className="px-[15px] self-center font-normal text-[12px]"
                />
                <Link href="">
                  <Image alt="" src={SearchButton} height={20} width={27} />
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-[500] py-[14px] text-[12px] text-black">
                Fruits List
              </h1>
              <div className="space-y-[10px]">
                {category.map((data: any) => (
                  <div
                    key={data.id}
                    className="flex  place-items-center w-[270px] h-[73px] bg-white border-[1.5px] border-solid hover:border-orange-600 border-[rgba(229, 85, 39, 1)] rounded-[10px]"
                  >
                    <div className="p-[10px] bg-[#CFE0E5] rounded-sm">
                      <Image alt="" src={CatIcon} height={40} width={40} />
                    </div>
                    <div>
                      <h1 className="font-[500] text-black text-[14px]">
                        {data.cat_name_en}
                      </h1>
                      <h1 className="font-[400] text-[rgba(16, 16, 16, 0.7)] text-[12px]">
                        Vitamin {data.no_of_subcat}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ParentLayout>
    </main>
  );
}
