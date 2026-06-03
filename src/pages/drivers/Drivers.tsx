import { Plus, Search } from 'lucide-react'
import { useState } from 'react'

const MOCK_DRIVERS = [
  { id: '1', name: 'John Doe',      license: 'B12345', expiry: '2026-07-01', phone: '+39 333 111 2222', status: 'active'   },
  { id: '2', name: 'Maria Rossi',   license: 'C98765', expiry: '2027-03-15', phone: '+39 347 555 6666', status: 'active'   },
  { id: '3', name: 'Luca Bianchi',  license: 'B55432', expiry: '2025-12-31', phone: '+39 320 999 8888', status: 'inactive' },
  { id: '4', name: 'Sara Verdi',    license: 'B77890', expiry: '2028-01-20', phone: '+39 366 222 4444', status: 'active'   },
]

export default function Drivers() {
  const [search, setSearch] = useState('')

  const filtered = MOCK_DRIVERS.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.license.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search drivers…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button className="btn-primary">
          <Plus className="h-4 w-4" />
          Add Driver
        </button>
      </div>

      <div className="card overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              {['Name', 'License No.', 'Expiry', 'Phone', 'Status', 'Actions'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{d.name}</td>
                <td className="px-4 py-3 text-gray-600">{d.license}</td>
                <td className="px-4 py-3 text-gray-600">{d.expiry}</td>
                <td className="px-4 py-3 text-gray-600">{d.phone}</td>
                <td className="px-4 py-3">
                  <span className={d.status === 'active' ? 'badge-active' : 'badge-out'}>
                    {d.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-gray-400">No drivers found.</p>
        )}
      </div>
    </div>
  )
}
