// 5. Pruebas con Jest y React Testing Library
import React from "react";
import Boton from "./Components/Boton";

function App() {
    return (
        <div>
            <Boton/>
        </div>
    );
}

export default App;

//---------------------------------------------//
// 4. Introducción a Redux
// import React from "react";
// import { Store } from "./Components/Store";
// import Counter from "./Components/Ejercicio4";
// import { Provider } from "react-redux";

// function App() {
//     return (
//         <Provider store={Store}> 
//             <div>
//                 <Counter/>
//             </div>
//         </Provider>
//     );
// }

// export default App;

//-------------------------------------------------------------//
// 3. Gestión de Estado Global con Context
// import React from "react";
// import { ThemeProvider } from "./Components/ThemeContext";
// import ChangeTheme from "./Components/ChangeTheme";

// function App() {
//   return (
//     <ThemeProvider>
//       <ChangeTheme/>
//     </ThemeProvider>
//   );
// }

// export default App;

//------------------------------------------------//
// 2. Introducción a Hooks
// import React from "react";
// import Ejercicio2 from "./Components/Ejercicio2";

// function App() {
//   return (
//     <div>
//       <Ejercicio2/>
//     </div>
//   );
// }

// export default App;
//----------------------------------------------------------------------------------//
// 1. Concepto de Enrutado
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Inicio from "./Components/Inicio";
// import Sobre from "./Components/Sobre";
// import styles from "./Styles/App.module.css";

// function App() {
//     return (
//       <Router>
//         <nav className={styles.nav}>
//           <Link to="/inicio">Inicio</Link>
//           <Link to="/sobre">Sobre</Link>
//         </nav>
//         <Routes>
//           <Route path="/inicio" element={<Inicio/>}/>
//           <Route path="/sobre" element={<Sobre/>}/>
//         </Routes>
//       </Router>
//     );
// }

// export default App;