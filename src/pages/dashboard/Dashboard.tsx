import { Truck, Users, Wrench, AlertTriangle } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'

const stats = [
  { label: 'Total Vehicles',   value: '24',  icon: Truck,         color: 'bg-blue-500'   },
  { label: 'Active Drivers',   value: '18',  icon: Users,         color: 'bg-green-500'  },
  { label: 'In Maintenance',   value: '3',   icon: Wrench,        color: 'bg-yellow-500' },
  { label: 'Alerts',           value: '5',   icon: AlertTriangle, color: 'bg-red-500'    },
]

const fleetStatus = [
  { name: 'Active',          value: 18, color: '#22c55e' },
  { name: 'In Maintenance',  value: 3,  color: '#eab308' },
  { name: 'Idle',            value: 2,  color: '#94a3b8' },
  { name: 'Out of Service',  value: 1,  color: '#ef4444' },
]

const monthlyData = [
  { month: 'Jan', km: 4200, cost: 3100 },
  { month: 'Feb', km: 3800, cost: 2900 },
  { month: 'Mar', km: 5100, cost: 3800 },
  { month: 'Apr', km: 4700, cost: 3400 },
  { month: 'May', km: 5300, cost: 4100 },
  { month: 'Jun', km: 4900, cost: 3700 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="card flex items-center gap-4">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="mb-4 text-base font-semibold text-gray-900">Monthly Overview (km &amp; cost)</h2>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={monthlyData} margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="km"   name="Km driven" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="cost" name="Cost (€)"  fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="card">
          <h2 className="mb-4 text-base font-semibold text-gray-900">Fleet Status</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={fleetStatus} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {fleetStatus.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="mb-3 text-base font-semibold text-gray-900">Recent Alerts</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-500" /> Insurance expiry: VH-1023 in 7 days</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-500" /> Service due: VH-1017 at 150,000 km</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-500" /> License expiry: John Doe on 2026-07-01</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-500" /> Fuel anomaly: VH-1009 above avg consumption</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
