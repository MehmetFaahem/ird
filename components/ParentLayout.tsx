"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/unnamed 1.png";
import SearchButton from "../public/Frame 741.png";
import BrightNess from "../public/Frame 767.png";
import Steps from "../public/Frame 769.png";
import MenuIcon from "../public/Frame 765.png";
import Link from "next/link";
import HomeIcon from "../public/icons.png";
import Icon1 from "../public/icons (1).png";
import Icon2 from "../public/icons (2).png";
import Icon3 from "../public/icons (3).png";
import Icon4 from "../public/icons (4).png";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextSquare from "../public/text-square.png";

function ParentLayout({ children, icon, icon1 }: any) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(12);
  const [progress, setProgress] = useState(0);
  return (
    <div className="w-auto">
      <div className="relative">
        <div className="mobile:hidden laptop:flex content-center items-center p-[15px] laptop:justify-between h-[70px]">
          <div className="">
            <Image alt="" src={Logo} height={73} width={73} />
          </div>
          <div className="border-solid  flex justify-between content-center border-[2px] border-[rgba(240, 242, 244, 1)] w-auto h-[40px] rounded-[9px]">
            <input
              placeholder="Search Best Food"
              className="px-[15px] w-[360px]  self-center font-normal text-[12px]"
            />
            <Link href="">
              <Image alt="" src={SearchButton} height={36} width={36} />
            </Link>
          </div>
          <div className="flex items-center space-x-[24px]">
            <Link href="" className="">
              <Image alt="" src={BrightNess} height={36} width={36} />
            </Link>
            <Link href="" className="">
              <Image alt="" src={Steps} height={36} width={36} />
            </Link>
            <Link href="" onClick={() => setShow(!show)}>
              <Image alt="" src={MenuIcon} height={36} width={36} />
            </Link>
          </div>
        </div>
        <div
          className={`absolute z-[1002] items-center content-center flex place-content-center mobile:top-[4%] laptop:top-[7%] right-[1%] w-[300px] h-[262px] bg-white rounded-[10px] ${
            show ? "visible" : "invisible"
          }`}
        >
          <div className="w-[260px] h-[238px] border-4 px-3 rounded-[10px] border-solid border-gray-100">
            <div className="flex mb-[16px] justify-between rounded-[10px]  place-items-center bg-white w-full h-[40px]">
              <div className="flex place-items-center space-x-4">
                <Image alt="" src={TextSquare} height={20} width={20} />
                <h1 className="font-[600] text-orange-600 text-[14px]">
                  Setting
                </h1>
              </div>
              <FontAwesomeIcon
                onClick={() => setShow(false)}
                icon={faChevronUp}
                height="14px"
                width="14px"
                color="rgba(229, 85, 39, 1)"
              />
            </div>
            <div className="justify-between flex">
              <h1 className="font-[600] text-[14px]">Paragraph Font Size</h1>
              <h2 className="text-orange-600 font-[600] text-[14px]">
                {value}
              </h2>
            </div>
            <div className="range">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => {
                  setProgress((e.target.valueAsNumber / 100) * 100);
                  setValue(e.target.valueAsNumber);
                  e.target.style.background = `linear-gradient(to right, #f50 ${e.target.valueAsNumber}%, #ccc ${e.target.valueAsNumber}%)`;
                }}
                id="range2"
              />
            </div>

            <div className="justify-between flex mt-[4px]">
              <h1 className="font-[600] text-[14px]">Choose Vitamin Type</h1>
            </div>
            <select
              value={""}
              className="bg-slate-100 w-full py-2 mt-2 rounded-[10px] px-2"
              placeholder="All Vitamin"
            >
              <option>All Vitamin</option>
            </select>
            <div className="justify-between flex mt-[16px]">
              <h1 className="font-[500] text-[14px]">Turn Off Subtitle</h1>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="content-center items-center p-[15px] justify-between h-[60px] mobile:flex laptop:hidden">
          <div className="mobile:mr-[110px] laptop:mr-[0px]">
            <Image alt="" src={Logo} height={36} width={71} />
          </div>
          <div className="border-solid space-x-3 flex justify-between content-center w-auto h-[40px] rounded-[9px]">
            <Link href="">
              <Image alt="" src={SearchButton} height={36} width={36} />
            </Link>
            <Link onClick={() => setShow(!show)} href="">
              <Image alt="" src={MenuIcon} height={36} width={36} />
            </Link>
          </div>
        </div>

        <div className="flex relative">
          <div className="bg-white z-[1000]  bottom-0 laptop:static mobile:fixed laptop:w-[110px] mobile:w-full items-center flex-col laptop:my-[60px] mobile:my-0 laptop:space-y-[36px] content-center laptop:max-h-full">
            <div className="mobile:justify-between mobile:space-x-[10px] mobile:px-4 mobile:w-full mobile:py-2 laptop:space-x-0 flex mobile:content-center laptop:items-center laptop:space-y-[36px] laptop:flex-col mobile:flex-row">
              <Link href="/">
                <Image alt="" src={icon} height={36} width={36} />
              </Link>
              <Link href="/foods">
                <Image
                  alt=""
                  src={icon1 ? icon1 : Icon1}
                  height={36}
                  width={36}
                />
              </Link>
              <Link href="">
                <Image alt="" src={Icon2} height={36} width={36} />
              </Link>
              <Link href="">
                <Image alt="" src={Icon3} height={36} width={36} />
              </Link>
              <Link href="">
                <Image alt="" src={Icon4} height={36} width={36} />
              </Link>
            </div>
          </div>

          <div className="bg-gray-100 laptop:w-[100%] h-auto p-[16px] rounded-l-[24px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentLayout;
