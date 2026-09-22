import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [credentials, setCredentials] = useState(() => {
        const saved = localStorage.getItem('green-api-credentials');
        return saved ? JSON.parse(saved) : null;
    });

    const login = (idInstance, apiTokenInstance) => {
        const credential = { idInstance, apiTokenInstance };
        setCredentials(credential);
        localStorage.setItem('green-api-credentials', JSON.stringify(credential));
    };

    const logout = () => {
        setCredentials(null);
        localStorage.removeItem('green-api-credentials');
    };

    return (
        <AuthContext.Provider value={{ credentials, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);