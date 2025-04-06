#Create Two Series and Perform Arithmetic take input of series from user
import pandas as pd

# Get input from user
nums1 = input("Enter numbers for first series (space-separated): ")
nums2 = input("Enter numbers for second series (space-separated): ")

# Directly convert user input into pandas Series using map
series1 = pd.Series(map(int, nums1.split()))
series2 = pd.Series(map(int, nums2.split()))

# Display original series
print("\nFirst Series:\n", series1)
print("Second Series:\n", series2)

# Perform arithmetic operations
print("\nAddition:\n", series1 + series2)
print("Subtraction:\n", series1 - series2)
print("Multiplication:\n", series1 * series2)
print("Division:\n", series1 / series2)
