import { Children, createContext, useState } from "react";

export  const FavoritosContext = createContext()

// export const FavoritosProvider = ({Children}) => {
//     const [favoritos, setFavoritos] = useState ([]);

//     // funcion para agregar favoritos a mis card

//     const addFavoritos = (item) => {
//         setFavoritos (prev => {
//             if (prev.find(fav => fav.uid === item.uid)) return prev;
//             return [...prev, item];
//         });
//     }
//     //  funcion para eliminar de favortios

//     return (
//         <FavoritosContext.Provider valvue = {{favoritos, addFavoritos}}>

//             {Children}
//         </FavoritosContext.Provider>
//     )


// }

