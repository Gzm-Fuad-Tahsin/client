import React from "react";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDateRange } from "react-icons/md";

import { PiDrop } from "react-icons/pi";
import { AiOutlineTag } from "react-icons/ai";

const date = (date) => {
  const dateObject = new Date(date);

  // Extracting the date components
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(dateObject.getDate()).padStart(2, "0");

  // Creating the formatted date string
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

const ProductInfo = ({ productById }) => {
  /* const tags = [
    "Dashboard",
    " E-commerce",
    "Landing Page",
    "Retail",
    " WooCommerce",
  ]; */
  const { tags, layout, createdAt, updatedAt } = productById;

  return (
    <section className="space-y-4">
      <div>
        <div className="flex gap-10 py-2.5">
          <span className="flex items-center gap-5 ">
            <RxUpdate className="dark:text-dark-100 h-5 w-5" /> Last Update:
          </span>
          <span className="font-semibold dark:text-white">
            {date(updatedAt)}
          </span>
        </div>
        <div className="flex gap-14 py-2.5">
          <span className="flex items-center gap-5 ">
            <MdOutlineDateRange className="dark:text-dark-100 h-5 w-5" />
            Published:
          </span>
          <span className="font-semibold dark:text-white">
            {date(createdAt)}
          </span>
        </div>
        <div className="flex gap-20 py-2.5">
          <span className="flex items-center gap-5 ">
            <PiDrop className="dark:text-dark-100 h-5 w-5" />
            Layout:
          </span>
          <span className="font-semibold dark:text-white">{layout}</span>
        </div>
        <div className="flex gap-20  py-2.5">
          <span className=" w-24 flex items-center gap-5">
            <AiOutlineTag className="dark:text-dark-100 h-5 w-5" /> Tags:
          </span>
          <span className="font-semibold  dark:text-white flex flex-wrap  md:flex-row gap-3 ">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-sm text-xs font-medium border border-dark-400 dark:text-dark-100 flex items-center"
              >
                {tag}
              </span>
            ))}
          </span>
        </div>
      </div>
      {/* <div>
        <p className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
          <span className="flex items-center gap-5 ">
            <RxUpdate className="dark:text-dark-100 h-5 w-5" /> Liquid:
          </span>
          <span className="font-semibold dark:text-white lg:col-span-3 md:col-span-2 col-span-1">
            Mar 8, 2022
          </span>
        </p>
      </div>
      <div>
        <p className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
          <span className="flex items-center gap-5 ">
            <MdOutlineDateRange className="dark:text-dark-100 h-5 w-5" />
            Published:
          </span>
          <span className="font-semibold dark:text-white lg:col-span-3 md:col-span-2 col-span-1">
            Jan 27, 2022
          </span>
        </p>
      </div>
      <div>
        <p className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
          <span className="flex items-center gap-5 ">
            {" "}
            <PiDrop className="dark:text-dark-100 h-5 w-5" />
            Layout:
          </span>
          <span className="font-semibold dark:text-white lg:col-span-3 md:col-span-2 col-span-1">
            {" "}
            Liquid
          </span>
        </p>
      </div>
      <div>
        <p className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
          <span className="">
            <span className=" flex items-center gap-5">
              <AiOutlineTag className="dark:text-dark-100 h-5 w-5" /> Tags:
            </span>
          </span>
          <span className="font-semibold dark:text-white lg:col-span-3 md:col-span-2 col-span-1 flex flex-wrap gap-3 ">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 rounded-sm text-xs font-medium dark:text-white border border-dark-400 dark:text-dark-100 "
              >
                {tag}
              </span>
            ))}
          </span>
        </p>
      </div> */}
    </section>
  );
};

export default ProductInfo;
