import pandas as pd

#reading csv files
df = pd.read_csv("People.csv")
print(df)

#read specific columns
df = pd.read_csv("People.csv", usecols=["First Name", "Email"])
print(df)

#setting an index columns
df = pd.raed_csv("People.csv", index_col="First Name")
print(df)

#handling missing values using read_csv
df = pd.read_csv("People.csv", na_values=["N/A", "Unknown"])
print(df)

#using nrows
df = pd.read_csv("people.csv", nrows=3)
print(df)

#using skiprows
df = pd.read_csv("People.csv", skiprows = [2, 4])
print("Dataset After Skipping rows: ")
print(df)