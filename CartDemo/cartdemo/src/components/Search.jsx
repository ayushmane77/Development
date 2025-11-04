// import { useState } from "react";

// export const Search = () => {
//     const [user, SetUser] = useState(null);
//     const [userName, setUserName] = useState("");

//     async function getData(e) {
//         e.preventDefault();
//         let data = await fetch(`https://api.github.com/users/${userName}`);
//         let res = await data.json();
//         SetUser(res);
//     }

//     return (
//         <>
//             <form onSubmit={getData}>
//                 <label>Enter the name</label>
//                 <input onChange={(e) => setUserName(e.target.value)} />
//                 <button type="submit">Submit</button>
//             </form>

//             <div key={user.id} className="card" style="width: 18rem;">
//                 <img src="" className="card-img-top" alt="avatar" height={100} width={100}  />
//                 <div class="card-header">
//                     Featured
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">An item</li>
//                     <li className="list-group-item">A second item</li>
//                     <li className="list-group-item">A third item</li>
//                 </ul>
//             </div>

//             {user && (
//                 <div>
//                     <p>{user.login}</p>
//                     <img src={user.avatar_url} width={100} />
//                 </div>
//             )}
//         </>
//     );
// };


import React, { useState } from 'react'

const Search = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");

  const searchData = async (e) => {
    e.preventDefault();   // 🚨 Prevent page reload
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <>
      <form onSubmit={searchData}>
        <label>Enter the name</label>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {user && user.login && (
        <div>
          <p>{user.login}</p>
          <img src={user.avatar_url} width={100} />
        </div>
      )}
    </>
  );
};

export default Search;
