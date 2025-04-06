#Create DataFrame for Students' Grades and Mean
import pandas as pd

data = {
    "Name": ["Shrushti", "Dhruv", "Arun"],
    "Math": [85, 92, 78],
    "Science": [88, 89, 84],
    "English": [90, 87, 80]
}

df = pd.DataFrame(data)
df["Mean"] = df[["Math", "Science", "English"]].mean(axis=1)
print(df)