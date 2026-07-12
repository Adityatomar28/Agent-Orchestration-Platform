import React, { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import auth, { googleProvider } from '../../utils/firebase'
import api from '../../utils/axios'


function Home() {
    const handleLogin = async (token) => {
        try {
            const { data } = await api.post("/auth/login", { token })
            console.log(data)
            return data
        } catch (error) {
            console.error("Backend login error:", error)
            throw error
        }
    }
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    const googleLogin = async () => {
        if (loading) return
        setLoading(true)
        setError(null)
        try {
            const data = await signInWithPopup(auth, googleProvider);
            const token = await data.user.getIdToken()
            console.log(data)
            await handleLogin(token)
            setUser(data.user)
        } catch (err) {
            console.error("Sign in failed:", err)
            setError(err.response?.data?.message || err.message || "An unexpected error occurred during sign-in.")
        } finally {
            setLoading(false)
        }
    }
}

export default Home