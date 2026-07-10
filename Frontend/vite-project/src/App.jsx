import React, { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import auth, { googleProvider } from '../../utils/firebase'

function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  const googleLogin = async () => {
    if (loading) return
    setLoading(true)
    setError(null)
    try {
      const data = await signInWithPopup(auth, googleProvider);
      console.log(data)
      setUser(data.user)
    } catch (err) {
      console.error("Sign in failed:", err)
      setError(err.message || "An unexpected error occurred during sign-in.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-radial from-slate-900 to-slate-950 text-slate-100 font-sans antialiased p-6">
      <div className="relative w-full max-w-md p-8 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-cyan-950/20">
        
        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8 p-4 bg-gradient-to-tr from-red-500/10 to-blue-500/10 border border-slate-800 rounded-2xl">
            <svg className="w-10 h-10 text-cyan-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent mb-2">
            Secure Portal
          </h2>
          <p className="text-slate-400 text-sm text-center mb-8">
            Access the Multi-Agent Orchestration Platform
          </p>

          {user ? (
            <div className="w-full text-center space-y-4">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                <p className="text-emerald-400 font-semibold mb-1">Authenticated successfully</p>
                <div className="flex items-center justify-center space-x-3 mt-3">
                  {user.photoURL && (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName} 
                      className="w-10 h-10 rounded-full ring-2 ring-emerald-500/40" 
                    />
                  )}
                  <div className="text-left">
                    <p className="font-semibold text-slate-200 text-sm">{user.displayName}</p>
                    <p className="text-xs text-slate-400">{user.email}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  auth.signOut();
                  setUser(null);
                }}
                className="text-xs text-slate-500 hover:text-slate-400 underline transition duration-150 cursor-pointer"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="w-full space-y-4">
              <button 
                className={`relative w-full h-14 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-semibold rounded-2xl transition duration-200 shadow-lg shadow-red-950/20 flex items-center justify-center space-x-3 cursor-pointer group ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={googleLogin}
                disabled={loading}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <svg className="w-5 h-5 fill-current text-white transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                      <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.665 0-8.472-3.825-8.472-8.518 0-4.693 3.807-8.518 8.472-8.518 2.235 0 3.864.887 4.717 1.705l3.19-3.19C17.973 1.22 15.352 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c6.887 0 11.748-4.83 11.748-11.932 0-.693-.075-1.35-.213-1.898H12.24z"/>
                    </svg>
                    <span>Continue with Google</span>
                  </>
                )}
              </button>
              
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-xs text-red-400 text-center font-medium leading-relaxed">
                    {error}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App