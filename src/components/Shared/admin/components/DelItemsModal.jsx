import { delateItem } from "@/utils/api/shared/itemdel";
import { motion as m, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

const DelItemsModal = ({ isDelOpen, setDelOpen, path, title }) => {
  const router = useRouter();

  const delateTheItem = async () => {
    const res = await delateItem(path);
    console.log("🚀 ~ file: DelItemsModal.jsx:12 ~ delateTheItem ~ res:", res);
    if (res?.status === 200) {
      router.refresh();
      toast.success(`${title} is delete`);
    }
  };

  return (
    <AnimatePresence>
      {isDelOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setDelOpen(false)}
          className="fixed inset-0 z-50 grid p-4 overflow-y-auto cursor-pointer bg-slate-900/20 backdrop-blur place-items-center scrollbar"
        >
          <m.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="rounded-sm shadow-xl  lg:w-1/4 md:2/4 4/3 col-span-1 cursor-default min-h-[300px] h-auto p-5 dark:bg-dark-400 border dark:border-dark-300 flex flex-col justify-between"
          >
            <>
              {/* productinfo */}
              <div className="space-y-5 text-center">
                <div className="flex items-center justify-center">
                  <RiDeleteBin6Line className="text-center text-red-400 cursor-pointer text-7xl" />
                </div>
                <p className="text-2xl font-semibold">Delete</p>
                <p>Are you sure, you want to delete?</p>
              </div>
              {/* productinfo */}
              {/* ans */}
              <div className="flex gap-5">
                <button
                  onClick={() => setDelOpen(false)}
                  className="w-1/2 py-3 font-semibold rounded-sm bg-primary hover:bg-primarySec"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setDelOpen(false), delateTheItem();
                  }}
                  className={
                    "w-1/2 bg-red-400 hover:bg-red-500 py-3 rounded-sm font-semibold "
                  }
                >
                  Delete
                </button>
              </div>
              {/* close btn */}
            </>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default DelItemsModal;
