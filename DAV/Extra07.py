#Series Slicing and Indexing
import pandas as pd

s = pd.Series([10, 20, 30, 40, 50])

# Single element
print("Element at index 2:", s[2])

# Multiple elements using slicing
print("Sliced elements:", s[1:4])

