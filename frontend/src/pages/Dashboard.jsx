function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total Predictions */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">Total Predictions</h3>
          <p className="text-3xl font-bold mt-2">128</p>
        </div>

        {/* High Risk */}
        <div className="bg-red-100 shadow rounded-xl p-6">
          <h3 className="text-red-600">High Risk Cases</h3>
          <p className="text-3xl font-bold mt-2 text-red-700">34</p>
        </div>

        {/* Low Risk */}
        <div className="bg-green-100 shadow rounded-xl p-6">
          <h3 className="text-green-600">Low Risk Cases</h3>
          <p className="text-3xl font-bold mt-2 text-green-700">94</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;