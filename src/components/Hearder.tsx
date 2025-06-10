import { Link } from 'react-router-dom'
function Hearder(){
    return( 
   
    <header className="">
  <nav className=" bg-[#dfe4ea] shadow-lg fixed w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
            <img  className="w-25" src="./logo.png" alt="" />
         
        </div>
        <div className=" flex gap-7  items-center">
          <Link to='/Home' href="#" className="font-semibold hover:text-orange-600">Home</Link>
          <Link to="/Shop" className="font-semibold hover:text-orange-600">Shop</Link>
          <Link to="/About" className="font-semibold hover:text-orange-600">About</Link>
          <Link to="/Contact" className="font-semibold hover:text-orange-600">Contact</Link>
          <Link to="/Cart" className="font-semibold hover:text-orange-600">Cart</Link>
         <p><Link to="/Login">Login</Link> / <Link to="/Register">Register</Link></p>
        </div>
      
      </div>
     
    </div>
  </nav>
  </header>

    );
}
export default Hearder;
