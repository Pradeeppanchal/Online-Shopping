function Cart() {
  return (
    <div className="flex">
    <div className="p-20  ">
      <div className="flex shadow  rounded-lg  border-gray-500 w-200 ">
        <div className="p-4 w-40 rounded  ">
          <img
            className=" rounded"
            src="https://www.vandsl.in/cdn/shop/files/4M6A9936.jpg?v=1724615744&width=1946"
            alt=""
          />
        </div>
        <div className="flex gap-10">
          <h1 className="pt-20 text-center font-bold">Blue Signature Style Shirt</h1>
          <div className="pt-19  space-x-2 ">
            <button className=" text-xl font-bold">-</button>
            <span className="text-lg font-medium">2</span>
            <button className=" text-xl font-bold">+</button>
          </div>
          <p className="pt-20 font-semibold">₹949 <del  className="text-gray-500">₹1,999</del></p>
          <i  className="fa-solid fa-trash pt-21 text-red-500 mx-10"></i>
        </div>
      </div>

      <div className="flex shadow  rounded-lg  border-gray-500 w-200 ">
        <div className="p-4 w-40 rounded ">
          <img
            className=" rounded"
            src="https://showoffff.in/cdn/shop/files/CHN-SH-001-1_Multi_1_740edc2e-bbe4-4d7b-bc07-d254777f55d5.jpg?v=1742377362&width=1080"
            alt=""
          />
        </div>
        <div className="flex gap-10">
          <h1 className="pt-20 text-center font-bold">Women col blocked Shirt</h1>
          <div className="pt-19  space-x-2 ">
            <button className=" text-xl font-bold">-</button>
            <span className="text-lg font-medium">3</span>
            <button className=" text-xl font-bold">+</button>
          </div>
          <p className="pt-20 font-semibold">₹1,025 <del className="text-gray-500">₹2,698</del></p>
          <i  className="fa-solid fa-trash pt-21 text-red-500 mx-8"></i>
        </div>
      </div>
      <div className="flex shadow  rounded-lg  border-gray-500 w-200">
        <div className="p-4 w-40 rounded ">
          <img
            className=" rounded"
            src="https://imagescdn.louisphilippe.com/img/app/product/3/39676856-13741100.jpg?auto=format&w=390"
            alt=""
          />
        </div>
        <div className="flex gap-10">
          <h1 className="pt-20 text-center font-bold">Multi Slim Fit Shirt</h1>
          <div className="pt-19 mx-11  space-x-2 ">
            <button className="  text-xl font-bold">-</button>
            <span className="text-lg font-medium">1</span>
            <button className=" text-xl font-bold">+</button>
          </div>
          <p className="pt-20  font-semibold">₹2669<del className="text-gray-500">₹2999</del></p>
          <i  className="fa-solid fa-trash pt-21 text-red-500 mx-6"></i>
        </div>
      </div>
      </div>

     <div className="pt-40 ">
         <div className=" bg-gray-200 rounded-lg w-100 h-100 ">
        <h1 className="p-4 font-bold">ORDER SUMMARY</h1>
       <div className="p-5 ">
        <div className="p-10 bg-white rounded-lg font-semibold">
        <div className="flex  justify-between pb-4 border-b">
            <p className=" ">ITEMS</p>
            <p>3</p>
        </div>
        <div className="flex justify-between pb-4 border-b">
            <p className="pt-2 ">Product total</p>
            <p className="pt-2">₹4,643</p>
        </div>
        <div className="flex justify-between pb-4 border-b">
            <p className=" pt-2">Delivery</p>
            <p className="pt-2">FREE</p>
        </div>
        <div className="flex justify-between pb-4  font-bold ">
            <p className=" pt-2">Total</p>
            <p className="pt-2">₹4,643</p>
        </div>
        <div className="text-center bg-orange-500 p-2 rounded-lg">
            <button className="text-white cursor-pointer">Checkout</button>
        </div>
       </div>
       </div>

      </div>
     </div>
      </div>
  );
}
export default Cart;
