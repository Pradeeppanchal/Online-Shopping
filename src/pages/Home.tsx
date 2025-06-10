import { useEffect, useState } from 'react';

type ProductType = {
  Imageurl: string;
  Name: string;
  Price: number;
  Discount: number;
  Discountprice: number;
}



function Home() {
  const [Product, setUsers] = useState<ProductType[]>([]);
    
      useEffect(() => {
        fetch('http://localhost:4000/Product') 
          .then((response) => response.json())
          .then((data) => setUsers(data));
      }, []);
 


    return(
        <div>
        <div className="flex bg-[#dfe4ea]  justify-around h-178">
            <div className="   pt-50">
                <p className="font-bold ">New Collection</p>
                <h1 className="text-6xl font-bold">Catch Your Own</h1>
                <h1 className="text-6xl font-bold text-green-500">style And Look</h1>
                
               <div className="pt-5">
                 <a  className="rounded text-white text-lg w-30 bg-orange-500 p-2">Shop Now</a>
               </div>
                
            </div>
            <div className="w-101 pt-15">
             <img src="./home5.png" alt="" />
            </div>
        </div>

        
        <div className="">
  <div className=" mx-auto py-12 w-328">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className=" overflow-hidden rounded-lg">
        <img src="https://preview.colorlib.com/theme/fashi/img/banner-1.jpg" alt="Men's Fashion" className="w-full h-auto object-cover" />
       
      </div>

      <div className=" group overflow-hidden rounded-lg">
        <img src="https://preview.colorlib.com/theme/fashi/img/banner-2.jpg" alt="Women's Fashion" className="w-full h-auto object-cover" />
      
      </div>

     
      <div className=" group overflow-hidden rounded-lg">
        <img src="https://preview.colorlib.com/theme/fashi/img/banner-3.jpg" alt="Kid's Fashion" className="w-full h-auto object-cover" />
       
      </div>

    </div>
  </div>
</div>


        <div className=" mx-28 ">
          <h1 className="text-4xl font-bold">PRODUCT OVERVIEW</h1>
         </div>
         <div className=" flex flex-wrap justify-start mx-25 text-center pt-5  pb-4">
        {Product.map((Product , index) => (
          <div className=" w-1/4 shadow  horer:shadow rounded-lg  "key={index}>
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
                  <span className="  font-semibold  text-green-500 mx-2 rounded-lg">({Product.Discount}% off)</span>
                
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
export default Home;