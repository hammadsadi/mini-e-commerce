import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // handleSubmitFrom
  const handleSubmitFrom = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    try {
      const data = await signIn(email, password);
      if (data.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // signInWithGoogle
  const handleSignInWithGoogle = async () => {
    const data = await signInWithGoogle();
    if (data?.user) {
      navigate("/");
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSignInWithGoogle}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4  rounded-md focus:ring-2 focus:ring-offset-1 border focus:teal-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-700">Or</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <form onSubmit={handleSubmitFrom} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border outline-none text-teal-600  focus:border-teal-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border outline-none text-teal-600  focus:border-teal-600"
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm text-white bg-teal-600"
          >
            Sign in
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-700">
          Don't have an account? &nbsp;
          <Link
            rel="noopener noreferrer"
            to="/register"
            className="underline font-bold text-teal-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
