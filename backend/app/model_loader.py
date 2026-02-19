# Load trained model
import os
import joblib

def load_model():
    current_dir = os.path.dirname(__file__)
    project_root = os.path.abspath(os.path.join(current_dir, "../../"))
    model_path = os.path.join(project_root, "model_training", "saved_model.pkl")

    return joblib.load(model_path)
