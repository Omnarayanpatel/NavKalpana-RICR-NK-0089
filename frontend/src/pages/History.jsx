import { useEffect, useState } from "react";
import axios from "axios";

function History() {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/history")
      .then(res => {
        setHistory(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Prediction History
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Risk</th>
              <th className="p-3 border">Probability</th>
            </tr>
          </thead>

          <tbody>
            {history.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-3 border">{item.id}</td>

                <td className="p-3 border font-semibold">
                  {item.risk_category === 0 && "Low"}
                  {item.risk_category === 1 && "Medium"}
                  {item.risk_category === 2 && "High"}
                </td>

                <td className="p-3 border">
                  {(item.risk_probability * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;