import "../index.css";
function Home_P() {
  return (
    <>
      <div className="flex  flex-col  items-center justify-center h-screen ">
        <div className="flex  items-center justify-center  bg-white">
          <form
            action=""
            className="z-10 mix-blend-multiply mx-96 ml-6    bg-white rounded-3xl "
          >
            <h1 className="font-light mb-2">Start For Free</h1>
            <h2 className="mb-12 text-5xl font-bold  font-serif   ">
              {" "}
              Create new account{" "}
            </h2>
            <div className="flex flex-row gap-8">
              <input
                type="text"
                placeholder="First Name?"
                className="w-5 mb-4 px-28 border border-gray-300 rounded bg-slate-100 "
              />
              <input
                type="text"
                placeholder="First Name?"
                className="w-7 mb-4 px-28 py-3 border border-gray-300 rounded bg-slate-100"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Email"
                className="w-60 mb-4 px-60 py-3  border border-gray-300 rounded bg-slate-100"
              />
              <input
                type="password"
                placeholder="paddword"
                className="w-60 mb-4 px-60 py-3  border border-gray-300 rounded"
              />
            </div>
            <div className="font-thin mb-10 mt-2">
              {" "}
              Already have an account?{" "}
              <span className="font-bold text-blue-800 hover:text-blue-600">
                Sign in
              </span>{" "}
            </div>
            <button className="w-96 text-white pt-3 ml-10 pb-3 text-center justify-center items-center custom mr-36 hover:bg-blue-500  rounded-full">
              Create acount{" "}
            </button>
          </form>

          <div className="absolute bottom-0 right-0 w-1/2 h-full custom-bg">
            <svg width="0" height="0">
              <defs>
                <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
                  <path d="M0,0 Q0.5,0.5,1,0 Q1,0.5,0,1"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_P;
