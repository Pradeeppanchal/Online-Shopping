import { useEffect, useState } from 'react';

type ProductType = {
  Imageurl: string;
  Name: string;
  Price: number;
  Discount: number;
  Discountprice: number; }
  

function Shop(){
  
  const [Product, setUsers] = useState<ProductType[]>([]);
    
      useEffect(() => {
        fetch('http://localhost:4000/Product') 
          .then((response) => response.json())
          .then((data) => setUsers(data));
      }, []);


    return(
        <div className="pt-20 mx-20">
          
          <div className="  text font-semibold mx-28 flex gap-5">
            <button>All Product</button>
            <button>Man</button>
            <button>Woman </button>
          </div>
    <div className=" flex flex-wrap justify-start mx-28 text-center pt-5  pb-4">
        {Product.map((Product , index) => (
          <div className=" w-1/4 shadow rounded-lg    "key={index}>
            <div className="  p-4 m-2  ">
              <div className=" p-2 border-gray-300 ">
                <img className="rounded-xl w-60 h-60 " src={Product.Imageurl} />
              </div>
              <h4 className="text-sm">{Product.Name}</h4>
             
              <h4 className="mt-3 ">  <span className="font-bold text-md  ">₹
                {Product.Discountprice}
              </span>{Product.Discount > 0 &&
              <del className="text-gray-500 mx-2">₹{Product.Price}</del> }
               {Product.Discount > 0 && (
                  <span className="  font-semibold  text-green-500 mx-2 rounded-lg">({Product.Discount}% OFF)</span>
                
              )}</h4>
              
             
              <button className="bg-orange-500 rounded-lg  w-full py-2 text-white font-sembold cursor-pointer mt-2 ">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
}
export default Shop;