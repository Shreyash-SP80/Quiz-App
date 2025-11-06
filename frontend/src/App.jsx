import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyResultPage from './pages/MyResultPage'


// Private protected route
function RequireAuth( {children} ) {
  const isLoggedIn = Boolean(localStorage.getItem('authToken'));
  const location = useLocation(); // To use an Location hook

  if (!isLoggedIn) {
    alert("You must have to login first to see your Result")
    return <Navigate to="/login" state={{from: location}} replace />
  } else {
    return children;
  }
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> }></Route>
      <Route path='/login' element={ <Login /> }></Route>
      <Route path='/signup' element={ <Signup /> }></Route>
      <Route path='/result' element={ 
        <RequireAuth>
          <MyResultPage /> 
        </RequireAuth>
      }></Route>
    </Routes>
  )
}

export default App
