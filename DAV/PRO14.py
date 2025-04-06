#Create a Series for Students' Names and SPI Values
import pandas as pd

students = pd.Series([8.2, 9.1, 7.8], index=["Shrushti", "Dhruv", "Varshishth"])
print(students)