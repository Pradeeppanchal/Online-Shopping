function Contact(){
    return(
        <div>
             <div className=" pt-25 bg-[#fdf8f1]  h-80 text-center">
                <h1 className="text-5xl font-bold" >Contact</h1>
                <p className="pt-3 text-gray-700 max-w-3xl mx-auto">We’d love to hear from you! Whether you have a question about our collections, need styling advice, or want to book a personalized shopping session, our team is here to help. Visit us in-store or reach out using the details below:</p>
            </div>
           
           <div className="items-center p-20 h-150">
             <div className=" shadow-black rounded-lg shadow text-center pb-5 pt-5 ">
                  <h1 className="text-2xl font-semibold pb-2 ">LEAVE MESSAGE</h1>
                 <div className=" pb-2">
                     <input className="border rounded  w-130 border-gray-500 100 h-10" type="text" name="name" id="" placeholder="  Enter your name" />
                 </div>
                 <div className=" pb-2">
                     <input className=" border rounded  w-130 border-gray-500 100 h-10" type="text" name="name" id="" placeholder="  Enter your phone number" />
                 </div>
                 <div className=" pb-2">
                     <input className="border rounded  w-130 border-gray-500 100 h-10" type="text" name="name" id="" placeholder="  Enter your Email" />
                 </div>
                 <div>
                     <textarea className="border rounded  w-130 border-gray-500 100 h-50" name="" id="" placeholder="  Enter messege"></textarea>
                 </div>
                <div className="p-2">
                     <button className="bg-orange-500 rounded-lg  p-4 py-2 text-white font-bold cursor-pointer">Submit</button>
                </div>
                
            </div>
           </div>
        </div>
    );
}
export default Contact;