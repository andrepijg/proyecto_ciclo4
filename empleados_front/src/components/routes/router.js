import React from "react";
import Login from "../login/login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                {/* Ruta de páginas que no existen, error 404 */}
                <Route
                    path={"*"}
                    component={() => (
                        <h1 style={{ marginTop: 300 }}>
                            404
                            <br />
                            Pagina no encontrada
                        </h1>
                    )}
                />
            </Switch>
        </Router>
    )
}


