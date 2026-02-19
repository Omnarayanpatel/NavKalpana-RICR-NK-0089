import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, roc_auc_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
import xgboost as xgb

# Load dataset
data = pd.read_csv("data/heart.csv")

# Features & Target
X = data.drop("target", axis=1)
y = data["target"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Models
log_model = LogisticRegression(max_iter=1000)
rf_model = RandomForestClassifier()
xgb_model = xgb.XGBClassifier(use_label_encoder=False, eval_metric="logloss")

log_model.fit(X_train, y_train)
rf_model.fit(X_train, y_train)
xgb_model.fit(X_train, y_train)

# Evaluation
for model, name in [
    (log_model, "Logistic Regression"),
    (rf_model, "Random Forest"),
    (xgb_model, "XGBoost")
]:
    preds = model.predict(X_test)
    probs = model.predict_proba(X_test)[:,1]
    print(f"\n{name}")
    print(classification_report(y_test, preds))
    print("ROC-AUC:", roc_auc_score(y_test, probs))

# Save best model
joblib.dump(xgb_model, "saved_model.pkl")

print("Model saved successfully!")
