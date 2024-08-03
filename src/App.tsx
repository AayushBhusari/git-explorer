import { useState, Suspense } from "react";
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { appRoutes } from "./routes";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes location={location}>
            {appRoutes.map((route, i) => {
              if (route.requiresAuth && !isLogged) {
                return (
                  <Route
                    key={i}
                    path={route.path}
                    element={<Navigate replace to="./login" />}
                  />
                );
              } else {
                return (
                  <Route
                    key={i}
                    path={route.path}
                    element={
                      <route.component
                        setIsLogged={setIsLogged}
                        setUsername={setUsername}
                        username={username}
                      />
                    }
                  />
                );
              }
            })}
          </Routes>
        </Suspense>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default App;
