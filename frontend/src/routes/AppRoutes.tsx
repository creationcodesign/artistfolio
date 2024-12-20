import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import Profile from '../pages/profile/Profile'
import ProtectedRoute from './ProtectedRoute'

export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/auth/profile' element={<Profile />} />
            </Route>
            <Route path="*" element={<Home />} />
        </Routes>
    )
}
