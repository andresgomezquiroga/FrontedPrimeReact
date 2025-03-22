import { Route, Routes } from "react-router-dom";

import Dashboard from "./features/dashboard/Dashboard";
import Login from "./features/Auth/Login";
import CreateUser from "./features/dashboard/pages/Users/CreateUser"
import HomePage from "./features/dashboard/HomePage";

function App() {
    return (
        <Routes>
            {/* Ruta de Login */}
            <Route path="/" element={<Login />} />
            
            {/* Rutas anidadas dentro del Layout */}
            <Route path="/dashboard" element={<Dashboard />}>
                {/* Ruta de Chat anidada */}
                <Route path="create-user" element={<CreateUser/>} />
                <Route path="home-page" element={<HomePage/>} />
            </Route>
        </Routes>
    );
}

export default App;
