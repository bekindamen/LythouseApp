import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

//  import App from './App.js'    
 const GIT = React.lazy(() => import("./Components/GIT.js"))
 const App = React.lazy(() => import("./App.js"))
 const BD = React.lazy(() => import("./Components/BD.js"))
 const NewsAlert = React.lazy(() => import("./Components/NewsAlert.js"))

function App2 () {


  return (   
    <div>
      <BrowserRouter>
        <main>
          <Suspense 
          fallback={
              <div>

              </div>
          }
          >
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/newsalert" element={<NewsAlert />}></Route>
            <Route path="/git" element={<GIT />}></Route>
            <Route path="/bd" element={<BD />}></Route>
          </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App2;
