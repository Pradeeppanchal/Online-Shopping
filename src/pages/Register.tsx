function Register(){
    return(
        <div className="bg-white flex items-center justify-center pt-20 pb-3">

  <div className="w-full max-w-md p-8 shadow ">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Sign Up</h2>
    <p className="text-center text-gray-500 mb-6">Create your account to get full access</p>

    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Full Name</label>
        <input type="text" placeholder="Enter full name"
               className="w-full border border-gray-300 px-4 py-3 rounded-md  " />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Email Address</label>
        <input type="email" placeholder="Enter email address"
               className="w-full border border-gray-300 px-4 py-3 rounded-md " />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Password</label>
        <input type="password" placeholder="Enter Password"
               className="w-full border border-gray-300 px-4 py-3 rounded-md " />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Confirm Password</label>
        <input type="password" placeholder="Confirm Password"
               className="w-full border border-gray-300 px-4 py-3 rounded-md" />
      </div>

      <div>
        <button type="submit"
                className="w-full bg-orange-500 text-white font-medium py-3 rounded-md ">
         Sing Up
        </button>
      </div>
    </form>
  </div>

</div>

    );
}
export default Register;