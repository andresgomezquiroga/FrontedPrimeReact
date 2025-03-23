import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
const Dashboard = lazy(() => import('./features/dashboard/Dashboard'));
const Login = lazy(() => import('./features/Auth/Login'));
const CreateUser = lazy(() => import('./features/dashboard/pages/Users/CreateUser'));
const HomePage = lazy(() => import('./features/dashboard/HomePage'));

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {/* Ruta de Login */}
                <Route path="/" element={<Login />} />

                {/* Rutas anidadas dentro del Layout */}
                <Route path="/dashboard" element={<Dashboard />}>
                    {/* Ruta de Chat anidada */}
                    <Route path="create-user" element={<CreateUser />} />
                    <Route path="home-page" element={<HomePage />} />
                </Route>
            </Routes>
        </Suspense>

    );
}

export default App;
