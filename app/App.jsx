import {AuthProvider} from "../context/AuthContext";
import {Sidebar} from "@components/Sidebar";

export function App() {
    return (
        <AuthProvider>
            <Sidebar/>
        </AuthProvider>
    );
}