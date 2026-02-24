import { useState } from "react";
import axios from "axios";

function Prediction() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    ap_hi: "",
    ap_lo: "",
    cholesterol: "",
    gluc: "",
    smoke: "",
    alco: "",
    active: "",
  });
  const [result, setResult] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData,
      );
      setResult(response.data);
        console.log(response.data);
      //   alert(`Risk Category: ${response.data.risk_category}
      //          Risk Probability: ${response.data.risk_probability}`);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">New Heart Risk Prediction</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <input
            name="age"
            placeholder="Age"
            onChange={handleChange}
            className="input"
          />
          <input
            name="height"
            placeholder="Height (cm)"
            onChange={handleChange}
            className="input"
          />
          <input
            name="weight"
            placeholder="Weight (kg)"
            onChange={handleChange}
            className="input"
          />
          <input
            name="ap_hi"
            placeholder="Systolic BP"
            onChange={handleChange}
            className="input"
          />
          <input
            name="ap_lo"
            placeholder="Diastolic BP"
            onChange={handleChange}
            className="input"
          />

          <select name="gender" onChange={handleChange} className="input">
            <option value="">Select Gender</option>
            <option value="1">Female</option>
            <option value="2">Male</option>
          </select>

          <select name="cholesterol" onChange={handleChange} className="input">
            <option value="">Cholesterol</option>
            <option value="1">Normal</option>
            <option value="2">Above Normal</option>
            <option value="3">Well Above Normal</option>
          </select>

          <select name="gluc" onChange={handleChange} className="input">
            <option value="">Glucose</option>
            <option value="1">Normal</option>
            <option value="2">Above Normal</option>
            <option value="3">Well Above Normal</option>
          </select>

          <select name="smoke" onChange={handleChange} className="input">
            <option value="">Smoking</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>

          <select name="alco" onChange={handleChange} className="input">
            <option value="">Alcohol</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>

          <select name="active" onChange={handleChange} className="input">
            <option value="">Physical Activity</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-3 rounded-lg"
          >
            Predict Risk
          </button>
        </div>

        {/* ✅ Result Section (outside grid but inside form) */}
        {result && (
          <div
            className="mt-6 p-6 rounded-xl shadow-md 
      bg-gradient-to-r from-green-100 to-green-200"
          >
            <h2 className="text-xl font-bold mb-2">Prediction Result</h2>

            <p>
              Risk Category:
              <span className="font-semibold ml-2">
                {result.risk_category === 1 ? "High Risk" : "Low Risk"}
              </span>
            </p>

            <p>
              Risk Probability:
              <span className="font-semibold ml-2">
                {(result.risk_probability * 100).toFixed(2)}%
              </span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Prediction;
