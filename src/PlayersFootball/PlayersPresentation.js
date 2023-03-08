// import React from 'react';
// import style from './Players.module.css';

// export default function PlayersPresentation({ player }) {
//     console.log(player);
//     return (
//         <div className={style.container}>
//             {player.map((data) => (
//                 <div className={style.column}>
//                     <div className={style.card}>
//                         <img src={data.img}></img>
//                         <h3>{data.name}</h3>
//                         <p className='title'>{data.club}</p>
//                         <p>
//                             <button onClick={() => {setPlayer(player)}}>
//                                 Detail
//                                 <a href='#popup1' id='openPopUp'>Detail</a>
//                                 </button>
//                         </p>
//                     </div>
//                 </div>
//             ))}

//             <div id='popup' className='overlay'>
//                 <div className='popup'>
//                     <img src={player.img}></img>
//                     <h2>{player.name}</h2>
//                     <a className='close' href='#'>&times;</a>
//                     <div className='content'>
//                         {player.info}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }