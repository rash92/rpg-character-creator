import React from 'react';
import { createRoot } from 'react-dom/client';

function Test({input}){
    return <div>test content {input}</div>
}

function GameSelection(){
    return <div>
        <label for="game">Choose a game ruleset:</label>
        <select name="game" id="game">
            <option value="aliens and asteroids">aliens and asteroids</option>
            <option value="draftsmen and drawings">draftsmen_and_drawings</option>
            <option value="DND">DND</option>
            <option value="call of cthulu">call of cthulu</option>
        </select>
     </div>
}

export default function App(){
    return <GameSelection/>
}


// import React, { useState } from "react"
// import usePromise from "react-use-promise";

// export default (props) => {
//   let [directory, setDirectory] = useState(window.api.currentDirectory())
//   let isRoot = (directory === "/")

//   let [files, filesError, filesState] = usePromise(() => (
//     window.api.directoryContents(directory)
//   ), [directory])

//   let navigate = (path) => {
//     if (directory === "/") {
//       setDirectory("/" + path)
//     } else {
//       setDirectory(directory + "/" + path)
//     }
//   }
//   let navigateUp = () => {
//     setDirectory(directory.split("/").slice(0, -1).join("/") || "/")
//   }

//   return (
//     <>
//       <h1>{directory}</h1>
//       {!isRoot && <div><button onClick={() => navigateUp()}>..</button></div> }
//       {files && files.map((entry, i) => (
//         (entry.type === "directory") ? (
//           <div key={i}>
//             <button onClick={() => navigate(entry.name)}>{entry.name}</button>
//           </div>
//         ) : (
//             <div key={i}>{entry.name}</div>
//         )
//       ))}
//     </>
//   )
// }
