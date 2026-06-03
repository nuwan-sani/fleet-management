import { Plus, Search } from 'lucide-react'
import { useState } from 'react'

const MOCK_VEHICLES = [
  { id: '1', plate: 'VH-1001', make: 'Ford',    model: 'Transit',  year: 2022, status: 'active',      mileage: 82340 },
  { id: '2', plate: 'VH-1002', make: 'Mercedes', model: 'Sprinter', year: 2021, status: 'maintenance', mileage: 110200 },
  { id: '3', plate: 'VH-1003', make: 'Fiat',    model: 'Ducato',   year: 2023, status: 'active',      mileage: 45900 },
  { id: '4', plate: 'VH-1004', make: 'Renault', model: 'Master',   year: 2020, status: 'idle',        mileage: 134500 },
  { id: '5', plate: 'VH-1005', make: 'Ford',    model: 'Transit',  year: 2019, status: 'out',         mileage: 201000 },
]

const statusClass: Record<string, string> = {
  active:      'badge-active',
  maintenance: 'badge-maintenance',
  idle:        'badge-idle',
  out:         'badge-out',
}

export default function Vehicles() {
  const [search, setSearch] = useState('')

  const filtered = MOCK_VEHICLES.filter(
    (v) =>
      v.plate.toLowerCase().includes(search.toLowerCase()) ||
      v.make.toLowerCase().includes(search.toLowerCase()) ||
      v.model.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search vehicles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button className="btn-primary">
          <Plus className="h-4 w-4" />
          Add Vehicle
        </button>
      </div>

      <div className="card overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              {['Plate', 'Make', 'Model', 'Year', 'Mileage', 'Status', 'Actions'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((v) => (
              <tr key={v.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{v.plate}</td>
                <td className="px-4 py-3 text-gray-600">{v.make}</td>
                <td className="px-4 py-3 text-gray-600">{v.model}</td>
                <td className="px-4 py-3 text-gray-600">{v.year}</td>
                <td className="px-4 py-3 text-gray-600">{v.mileage.toLocaleString()} km</td>
                <td className="px-4 py-3">
                  <span className={statusClass[v.status]}>{v.status}</span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-gray-400">No vehicles found.</p>
        )}
      </div>
    </div>
  )
}
