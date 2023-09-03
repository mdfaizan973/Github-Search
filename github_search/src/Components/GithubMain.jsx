import React, { useEffect, useState } from "react";
import "./GithubSearch.css";
export default function GithubMain() {
  const [user, setUser] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    handleFind();
  }, []);
  const handleFind = async () => {
    try {
      let response = await fetch(`https://api.github.com/users/${user}`);
      let newUser = await response.json();
      setTimeout(() => {
        setData(newUser);
        console.log(newUser);
        setUser("");
      }, 1200);
    } catch (error) {
      console.log("Error:-", error);
    }
  };
  return (
    <div className="mainContainer1">
      {/* -----Input UI----- */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-center">
        <input
          placeholder="🔍 Enter your Github Username....."
          type="text"
          id="large-input"
          onChange={(e) => setUser(e.target.value)}
          className="block w-full sm:w-1/2 p-4 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          onClick={handleFind}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 sm:mt-0 ml-0 sm:ml-2 mb-2 sm:mb-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Find User
        </button>
      </div>

      {/* -----Card UI----- */}
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="mainContainer relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    className="mx-auto rounded-full h-36 w-36"
                    src={data.avatar_url}
                    alt="author avatar"
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-20">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {data.followers}
                    </span>
                    <span className="text-sm text-blueGray-400">Followers</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {data.following}
                    </span>
                    <span className="text-sm text-blueGray-400">Following</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {data.public_repos}
                    </span>
                    <span className="text-sm text-blueGray-400">Repos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {data.name} <br />
                <span class="text-sm"> {data.login} </span>
              </h3>

              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                {/* <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> */}
                Location: {data.location}
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                {/* <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>$ */}
                {data.bio}
              </div>
              <div className="mb-2 text-blueGray-600">
                {/* <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i> */}
                <a href="">Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//     <div class="w-full lg:w-4/12 px-4 mx-auto">
//     <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
//       <div class="px-6">
//         <div class="flex flex-wrap justify-center">
//           <div class="w-full px-4 flex justify-center">
//             <div class="relative">
//               <img
//                 alt="..."
//                 src="https://avatars.githubusercontent.com/u/106812942?v=4"
//                 class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
//               />
//             </div>
//           </div>
//           <div class="w-full px-4 text-center mt-20">
//             <div class="flex justify-center py-4 lg:pt-4 pt-8">
//               <div class="mr-4 p-3 text-center">
//                 <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
//                   fkjkfdsjfk
//                 </span>
//                 <span class="text-sm text-blueGray-400">Followers</span>
//               </div>
//               <div class="mr-4 p-3 text-center">
//                 <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
//                   fdsafs
//                 </span>
//                 <span class="text-sm text-blueGray-400">Following</span>
//               </div>
//               <div class="lg:mr-4 p-3 text-center">
//                 <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
//                   fdsf
//                 </span>
//                 <span class="text-sm text-blueGray-400">Repos</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="text-center mt-12">
//           <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
//             fdsfds
//           </h3>
//           <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
//             <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
//             Location: fdsfds
//           </div>
//           <div class="mb-2 text-blueGray-600 mt-10">
//             <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>$
//             fdsf
//           </div>
//           <div class="mb-2 text-blueGray-600">
//             <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
//             <a href="">Website</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// }
