const UploadButton = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div></div>
      <div className="w-full p-8 space-y-4 rounded md:col-span-2">
        <div className="flex justify-end gap-8">
          <button
            type="button"
            className="px-6 py-4 text-sm font-semibold text-white transition-all bg-transparent border rounded-md border-dark-200 hover:bg-primarySec active:scale-95"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-4 text-sm font-semibold text-white transition-all rounded-md bg-primary hover:bg-primarySec active:scale-95"
          >
            Upload Tag
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadButton;
