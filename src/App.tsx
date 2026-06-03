import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Dashboard from '@/pages/dashboard/Dashboard'
import Vehicles from '@/pages/vehicles/Vehicles'
import Drivers from '@/pages/drivers/Drivers'
import Trips from '@/pages/trips/Trips'
import Maintenance from '@/pages/maintenance/Maintenance'
import Fuel from '@/pages/fuel/Fuel'
import Settings from '@/pages/settings/Settings'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="trips" element={<Trips />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="fuel" element={<Fuel />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
