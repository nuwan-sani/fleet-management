import { useLocation } from 'react-router-dom'
import { Bell, User } from 'lucide-react'

const titles: Record<string, string> = {
  '/dashboard':   'Dashboard',
  '/vehicles':    'Vehicles',
  '/drivers':     'Drivers',
  '/trips':       'Trips',
  '/maintenance': 'Maintenance',
  '/fuel':        'Fuel',
  '/settings':    'Settings',
}

export default function Header() {
  const { pathname } = useLocation()
  const title = titles[pathname] ?? 'Fleet Management'

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

      <div className="flex items-center gap-3">
        <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button className="flex items-center gap-2 rounded-full p-1.5 text-gray-500 hover:bg-gray-100 transition-colors">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
            <User className="h-4 w-4" />
          </div>
        </button>
      </div>
    </header>
  )
}
