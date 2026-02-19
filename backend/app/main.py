from fastapi import FastAPI
import numpy as np
from .model_loader import load_model

from .schemas import PatientData


app = FastAPI()

model = load_model()

@app.post("/predict")
def predict(data: PatientData):
    input_data = np.array([[ 
        data.age,
        data.sex,
        data.cp,
        data.trestbps,
        data.chol,
        data.fbs,
        data.restecg,
        data.thalach,
        data.exang,
        data.oldpeak,
        data.slope,
        data.ca,
        data.thal
    ]])

    probability = model.predict_proba(input_data)[0][1]

    if probability < 0.3:
        risk = "Low Risk"
    elif probability < 0.7:
        risk = "Moderate Risk"
    else:
        risk = "High Risk"

    return {
        "risk_probability": float(probability),
        "risk_category": risk
    }
