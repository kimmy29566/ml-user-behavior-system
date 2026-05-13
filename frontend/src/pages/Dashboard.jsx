import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'AI', users: 120 },
  { name: 'Cloud', users: 80 },
  { name: 'Security', users: 50 },
]

export default function Dashboard() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Users</h2>
          <p className="text-3xl font-bold">2,540</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Prediction Accuracy</h2>
          <p className="text-3xl font-bold">87%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Active Sessions</h2>
          <p className="text-3xl font-bold">312</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
