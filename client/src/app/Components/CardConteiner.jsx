
// const CardsConteiner = () => {

// return (
//     <div className={style.divPadre}>
//      <div className ={style.filters}>
//         <input className={style.conteiner} onChange={handleChange} />

//         <select className={style.SortOption} value={state.origin} onChange={(e) => handleFilterApiDb(e)} name="" id="">
//           <option hidden>Filter by origin:</option>
//           <option value="bdd">bdd</option>
//           <option value="api">api</option>
//           <option value="all">all</option>
//         </select>


//         <div>
//         <select className={style.SortOption} onChange={(e) => handleSortByName(e)} >
//           <option value="-">Alphabetic</option>
//           <option value="A-Z">A-Z</option>
//           <option value="Z-A">Z-A</option>
//         </select>
//         <select className={style.SortOption} onChange={(e) => handleSortByRating(e)}>
//           <option value="-">Rating</option>
//           <option value="Ascendente">Ascendente</option>
//           <option value="Descendente">Descendente</option>
//         </select>
//         <select className={style.SortOption} onChange={(e) => handleFilterByGenre(e)}>
//           <option value="All">Genres</option>
//           {genres.map((g) => (
//             <option key={g.id} value={g.name}>
//               {g.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       </div>
//       <div className={style.conteiner}>
//         {videogames.map((videogame) => {
//           return (
//             <Link className={style.link} key={videogame.id} to={`/videogames/${videogame.id}`}>
//               <Card
//                 id={videogame.id}
//                 key={videogame.id}
//                 name={videogame.name}
//                 genres={videogame.genres}
//                 image={videogame.image}
//               />
//             </Link>
//           );
//         })}
//       </div>
//       <div className={style.button}>
//         <button onClick={goToPreviousPage} disabled={currentPage === 1}>
//           {"<<Prev"}
//         </button>
//         <button onClick={goToNextPage} disabled={currentPage === totalPages}>
//           {"Next>>"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardsConteiner;