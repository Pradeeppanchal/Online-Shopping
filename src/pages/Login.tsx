function Login(){
    return(
        <div className="bg-white flex items-center justify-center pt-20 pb-3">

  <div className="w-full max-w-md p-8 shadow ">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Login</h2>
    <p className="text-center text-gray-500 mb-6">Enter Login details to get access</p>

    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Username or Email Address</label>
        <input type="text" placeholder="Username or Email Address"
               className="w-full border border-gray-300 px-4 py-3 rounded-md  " />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Password</label>
        <input type="password" placeholder="Enter Password"
               className="w-full border border-gray-300 px-4 py-3 rounded-md " />
      </div>

    
      <div>
        <button type="submit"
                className="w-full bg-orange-500 text-white font-medium py-3 rounded-md ">
        Login
        </button>
      </div>
    </form>
  </div>

</div>

    );
}
export default Login;