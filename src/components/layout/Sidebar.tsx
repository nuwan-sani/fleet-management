import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Truck,
  Users,
  MapPin,
  Wrench,
  Fuel,
  Settings,
} from 'lucide-react'
import { clsx } from 'clsx'

const nav = [
  { to: '/dashboard',   label: 'Dashboard',   icon: LayoutDashboard },
  { to: '/vehicles',    label: 'Vehicles',    icon: Truck },
  { to: '/drivers',     label: 'Drivers',     icon: Users },
  { to: '/trips',       label: 'Trips',       icon: MapPin },
  { to: '/maintenance', label: 'Maintenance', icon: Wrench },
  { to: '/fuel',        label: 'Fuel',        icon: Fuel },
  { to: '/settings',    label: 'Settings',    icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center gap-3 border-b border-gray-200 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
          <Truck className="h-5 w-5 text-white" />
        </div>
        <span className="text-base font-semibold text-gray-900">Sani Fleet</span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {nav.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
              )
            }
          >
            <Icon className="h-5 w-5 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-gray-200 p-4">
        <p className="text-xs text-gray-400">Sani Service IT © 2026</p>
      </div>
    </aside>
  )
}
