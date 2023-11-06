import React from "react";

const Card = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
          <div
            key={e}
            // sm:max-w-[310px]
            className="w-full h-[270px] text-white space-y-2 col-span-1"
          >
            <div className="flex max-h-[206px] w-full">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F803%2Fconversions%2Fimage16-thumbnail.jpg&w=640&q=100"
                alt=""
                className="object-cover w-full"
              />
            </div>

            <div className="flex items-center justify-between gap-2">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2Fconversions%2FGroup-14400-thumbnail.jpg&w=640&q=100"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="space-y-1">
                <h1 className="text-sm font-medium line-clamp-1">
                  Shoppie UI Kit PSD Ecommerce Design Template
                </h1>
                <p className="text-sm text-[#777777]">Temper studios</p>
              </div>
              <p className="bg-[#2a2a2a] text-primary text-sm rounded-full px-2 py-1">
                $69.00
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* load more button */}
      <div className="flex justify-center my-6">
        <button className="bg-primary text-white font-semibold px-8 py-4 rounded-md hidden md:block hover:bg-[#00997d] transition-all">
          Load More
        </button>
      </div>
    </section>
  );
};

export default Card;
