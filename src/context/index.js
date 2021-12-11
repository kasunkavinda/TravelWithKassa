import React, { useState, createContext } from "react";

export const StateContext = createContext(null);

// export const StateProvider = (props) => {
//   //   const [clickedButton, setClickedButton] = useState(false);
//   return (
//     <StateContext.Provider value="kasun">
//       {props.children}
//     </StateContext.Provider>
//   );
// };
