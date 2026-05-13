import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib

# Load dataset

data = pd.read_csv('dataset.csv')

# Convert category

data['page_category'] = data['page_category'].astype('category').cat.codes

data['interest'] = data['interest'].astype('category').cat.codes

X = data[['page_category', 'clicks', 'duration']]
y = data['interest']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2
)

model = RandomForestClassifier()
model.fit(X_train, y_train)

predictions = model.predict(X_test)

accuracy = accuracy_score(y_test, predictions)

print('Accuracy:', accuracy)

joblib.dump(model, 'model.pkl')
