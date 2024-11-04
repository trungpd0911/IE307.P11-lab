import { createContext } from "react";

const data = [
    {
        email: '21520504@gm.uit.edu.vn',
        password: 'phandinhthetrung',
        name: 'Phan Đình Thế Trung'
    }
];

let currentUser: any = null;
const login = (email: string, password: string) => {
    const user = data.find((item) => item.email === email && item.password === password);
    if (user) {
        currentUser = user;
        return user;
    }
    return null;
};
const register = (email: string, password: string, name: string) => {
    const user = data.find((item) => item.email === email);
    if (!user) {
        data.push({ email, password, name });
        return true;
    }
    return false;
}
const logout = () => {
    currentUser = null;
    return null;
}

export const AuthContext = createContext({
    currentUser,
    login,
    register,
    logout
});
export const AuthProvider = ({ children }: any) => {
    return (
        <AuthContext.Provider value={{ currentUser, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}