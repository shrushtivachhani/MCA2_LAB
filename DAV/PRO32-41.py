#Operations on datframes
import pandas as pd
import numpy as np

# 1. Create the DataFrame
data = {
    'Animal': ['cat', 'cat', 'snake', 'dog', 'dog', 'cat', 'snake', 'cat', 'dog', 'dog'],
    'Age': [2.5, 3.0, 0.5, np.nan, 5.0, 2.0, 4.5, np.nan, 7.0, 3.0],
    'Priority': ['yes', 'yes', 'no', 'yes', 'no', 'no', 'no', 'yes', 'no', 'no'],
    'Visits': [1, 3, 2, 3, 2, 3, 1, 1, 2, 1]
}
index_labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
df = pd.DataFrame(data, index=index_labels)

# 2. Display a summary of the data frame’s basic information
print("2. DataFrame Info:")
print(df.info())
print("\n")

# 3. Return the first three rows
print("3. First three rows:")
print(df.head(3))
print("\n")

# 4. Select just the Animal and Age columns
print("4. Animal and Age columns:")
print(df[['Animal', 'Age']])
print("\n")

# 5. Count the visit priority per animal
print("5. Visit priority count per animal:")
print(df.groupby(['Animal', 'Priority']).size())
print("\n")

# 6. Find the mean of the animals’ ages
print("6. Mean age of animals:")
print(df['Age'].mean())
print("\n")

# 7. Display a summary of the data set
print("7. Summary of dataset:")
print(df.describe(include='all'))
print("\n")

# 8. First three rows (again)
print("8. First three rows again:")
print(df.head(3))
print("\n")

# 9. Extract first and last column in one table
print("9. First and Last columns:")
print(df[['Animal', 'Visits']])
print("\n")

# 10. ndim and shape
print("10. DataFrame dimensions and shape:")
print("ndim:", df.ndim)
print("shape:", df.shape)

#deleting rows or columns from dataframe
#renaming rows or columns from dataframe
#accessing data from rows and columns in dataframe through slicing
#joining, merging and concatination of dataframes
#attributes of dataframe