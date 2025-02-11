import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-200 pt-0 px-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-6xl px-6 lg:px-12">
        {/* Left Section: Image with Transparent Pink Circle */}
        <div className="relative flex-1 flex justify-center lg:justify-end items-center">

          <Image
            src="/Hero2/sofa2.png"
            alt="Italian Sofa"
            width={400}
            height={400}
            className="z-10"
          />
        </div>

        {/* Right Section: Content */}
        <div className="flex-1 flex flex-col justify-center items-start lg:pl-16 mt-10 lg:mt-0">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-blue-950 mb-6">
            Unique Features Of Latest & Tranding Products
          </h1>

          {/* Colored Circles with Text */}
          <div className="flex flex-col space-y-4 mb-6">
            {/* Circle 1 */}
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              <p className="text-gray-400">All frames contructed with hardwood solids and laminates</p>
            </div>
            {/* Circle 2 */}
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-gray-400">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
            </div>
            {/* Circle 3 */}
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-green-300"></div>
              <p className="text-gray-400">Arms, backs and seats are structurally reinforced</p>
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center space-x-6">
            {/* Add to Cart Button */}
            <button className="bg-pink-500 text-white px-6 py-3 shadow-lg hover:bg-pink-600 transition">
              Add to Cart
            </button>
            {/* Product Info (Name and Price) */}
            <div>
              <p className="text-xl font-medium text-gray-800">B&B Italian Sofa</p>
              <p className="text-lg text-gray-600">$1299.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



