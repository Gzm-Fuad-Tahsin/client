"use client";
import SharedComp from "@/components/Shared/admin/SharedComp";
import AllStateContext from "@/context/AllStateContext";
import Image from "next/image";
import { useContext, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import AnsModal from "./AnsModal";
import DelItemsModal from "@/components/Shared/admin/components/DelItemsModal";

const Questions = () => {
  const [isOpen, setOpen] = useState(false);

  const { setIsShow, isShow } = useContext(AllStateContext);

  return (
    <div className="relative">
      <SharedComp type={"Questions"} />

      {/*  */}
      <>
        <div className="w-auto p-5 mt-5 mb-5 overflow-x-auto border rounded dark:bg-dark-400 text-start dark:border-dark-300 scrollbar">
          <table className="w-full">
            <thead>
              <tr className="w-auto h-12 text-xs border rounded dark:bg-dark-200 border-dark-300 md:text-base text-start">
                <th>Image</th>
                <th className="text-start">Question & Answer</th>
                <th className="text-start">Customer Name</th>
                <th>Products</th>
                <th>Reports</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              <tr className="h-20 text-xs md:text-base text-start">
                <td className="w-[110px]">
                  <div className="w-20 h-12 ">
                    <Image
                      className="rounded"
                      src={"/assets/images/branner/productsBanner2.jpg"}
                      width={1500}
                      height={100}
                      alt="banner"
                    />
                  </div>
                </td>

                <td>
                  <div className="w-[300px] ">
                    <p>
                      Q: <spna>Is it gutenberg based or elementor based?</spna>
                    </p>
                    <p>
                      A: <spna>It is gutenberg based.</spna>
                    </p>
                  </div>
                </td>
                <td>
                  <p>Customer</p>
                </td>

                <td>
                  <p>ChawkBazar Laravel Flutter Mobile App</p>
                </td>
                <td>
                  <p>feedback</p>
                </td>
                <td>
                  <p>dates</p>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-1 p-3 md:gap-5">
                    <RiDeleteBin6Line
                      onClick={() => setOpen(true)}
                      className="text-red-400 cursor-pointer"
                    />
                    <FaRegEdit
                      onClick={() => setIsShow(true)}
                      className="text-green-500 cursor-pointer"
                    />
                  </div>
                  {/* qustion modul */}
                  <>
                    <AnsModal isShow={isShow} setIsShow={setIsShow} />
                    <DelItemsModal isOpen={isOpen} setOpen={setOpen} />
                  </>
                  {/* qustion modul */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default Questions;
