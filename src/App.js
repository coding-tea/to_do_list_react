// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Train from "./components/ex1/Train";
// import Voiture from "./components/ex3/Voiture";
// import Courses from "./components/ex4/Cources";
// import Menu from "./components/ex4/menu";
// import Participant from "./components/ex4/participant";
// import { useState } from "react";

import Boisson from "./components/ex5/Boisson";

function App() {

//   const [participant,setParticipant] = useState([
//     {id:1, nom:'Med', idCourse:'MarcheH'},
//     {id:2, nom:'Rajae', idCourse:'MarcheF'}
//   ]);

//   const cources = [
//     {id:'MarcheF', nom:'marche Femmes', categorie:'F', distance:'1000'},
//     {id:'MarcheH', nom:'marche Hommes', categorie:'H', distance:'1000'},
// ];

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Menu /> } >
        <Route path="/" element={ <Courses cources={cources} participant={participant} /> } />
        <Route path="/newparticipant" element={ <Participant cources={cources} participant={participant} setParticipant={setParticipant} /> } />
      </Route>
    </Routes>
    </ BrowserRouter> */}

      <Boisson />

    </>
  );
}

export default App;
