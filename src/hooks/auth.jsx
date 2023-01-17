import { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [ data, setData ] = useState({})

    async function singIn({ email, password }) {
        try {
            const response = await api.post('/session', { email, password })
            const { user, token } = response.data

            localStorage.setItem('@movieNotes:user', JSON.stringify(user))
            localStorage.setItem('@movieNotes:token', token)

            api.defaults.headers.authorization = 'Bearer ' + token
            setData({ user, token })
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível entrar')
            }
        }

    }

    function singOut() {
        localStorage.removeItem('@movieNotes:token')
        localStorage.removeItem('@movieNotes:user')
        setData({})
    }

    useEffect(() => {
        const token = localStorage.getItem('@movieNotes:token')
        const user = localStorage.getItem('@movieNotes:user')

        if ( token && user ) {
            api.defaults.headers.authorization = 'Bearer ' + token

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    },[])


    return (
        <AuthContext.Provider value={{ 
            singIn,
            singOut, 
            user: data.user }} >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }