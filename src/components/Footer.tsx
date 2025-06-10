function Footer() {
  return (
    <footer className="bg-[#dfe4ea]  h-80">
      <div className="flex jusitfy-between iterm-center">
        <div className=" mx-15 pt-10 w-100">
          <img className="w-20" src="./logo.png" alt="" />
          <h3 className="text-xl font-semibold pt-5">Contact</h3>
          <ul className="font-semibold">
            <li className="pt-1">
              <a href="">Address : Bangalore </a>
            </li>
            <li className="pt-1">
              <a href="">Email : pradeeppanchal748@gmail.com </a>
            </li>
            <li className="pt-1">
              <a href="">Phone : 7483373301</a>
            </li>
          </ul>
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex gap-4 mt-4">
              <i className="fa-brands fa-facebook-f"></i>
               <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-pinterest-p"></i>
              <i className="fa-brands fa-youtube"></i>
             
            </div>
          </div>
        </div>

        <div className=" mx-30 pt-25">
          <h3 className="text-xl font-semibold ">Shop Man</h3>
          <ul className="font-semibold ">
            <li className="pt-2 hover:text-orange-600">
              <a href="">Clothing Fashion</a>
            </li>
            <li className="pt-2 hover:text-orange-600">
              <a href="">Winter</a>
            </li>
            <li className="pt-2 hover:text-orange-600">
              <a href="">Summer</a>
            </li>
            <li className="pt-2 hover:text-orange-600">
              <a href="">Formal</a>
            </li>
          </ul>
        </div>
        <div className=" pt-25">
          <h3 className="text-xl font-semibold">Shop Woman</h3>
          <ul className="font-semibold">
            <li className="pt-2 hover:text-orange-600">
              <a href="">Clothing Fashion</a>
            </li>
            <li className="pt-2 hover:text-orange-600">
              <a href="">Winter</a>
            </li>
            <li className="pt-2 hover:text-orange-600">
              <a href="">Summer</a>
            </li>
            <li className="pt-2 hover:text-orange-600">
              <a href="">Formal</a>
            </li>
          </ul>
        </div>
        <div className=" mx-40 pt-25">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="font-semibold">
            <li className="pt-2 hover:text-orange-600">
              <a href="/Home">Home</a>
            </li>
            <li className="pt-2 hover:text-orange-600">
              <a href="/About">About</a>
            </li>
           
            <li className="pt-2 hover:text-orange-600">
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
