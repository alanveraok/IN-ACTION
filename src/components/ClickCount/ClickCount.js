// import React, { useState } from "react";
// import "./ClickCounter.css";

// function ClickCount() {
//   console.log("Render");
//   const [clicks, setClicks] = React.useState(1);
//   /*hacerlo con const en vez de let y no usar ++*/

//   function handleClick() {
//     setClicks(clicks + 1);
//   }

//   return (
//     <div className="clickCounter">
//       <h1>Click Counter</h1>
//       <button onClick={handleClick}> Click me</button>
//       <button onClick={() => setClicks(0)}> Reset</button>
//       <h3>Clicks: {clicks}</h3>
//     </div>
//   );
// }

// export default ClickCount;




/*setEffect usa dos parámetros: ()=> y un [] y en el ejemplo de clase lo usamos para que ejecute UNA SOLA VEZ por más cambios que realicemos*/