"""
write a program to create a series
and also create a series with array
and also using arange function which is same as range but create a array of it
and also using null values in series with none and np.NaN
and also accessing elements of a series using indexing with labled and positional index
and also accessing elements of a series using slicing with labled and positional index
and use inbuild function of series (attributes: index, size, empty, value, etc...)
and use inbuild function of series (methods: head, counts, tail, etc..)
and perform mathematical operations on series
"""
import pandas as pd
import numpy as np
# Create a series   
series = pd.Series([1, 2, 3, 4, 5])
print("Series: ", series)
# Create a series with array
series1 = pd.Series(np.array([1, 2, 3, 4, 5]))
print("Series with array: ", series1)
# Create a series with arange function
series2 = pd.Series(np.arange(1, 6))
print("Series with arange function: ", series2)
# Create a series with null values
series3 = pd.Series([1, 2, np.NaN, 4, 5])
print("Series with null values: ", series3)
# Accessing elements of a series using indexing with labeled index
series4 = pd.Series([1, 2, 3, 4, 5], index=['a', 'b', 'c', 'd', 'e'])
print("Accessing elements of a series using indexing with labeled index: ", series4['a'])
# Accessing elements of a series using indexing with positional index
series5 = pd.Series([1, 2, 3, 4, 5])
print("Accessing elements of a series using indexing with positional index: ", series5[0])
# Accessing elements of a series using slicing with labeled index
series6 = pd.Series([1, 2, 3, 4, 5], index=['a', 'b', 'c', 'd', 'e'])
print("Accessing elements of a series using slicing with labeled index: ", series6['a':'0'])
# Accessing elements of a series using slicing with positional index
series7 = pd.Series([1, 2, 3, 4, 5])
print("Accessing elements of a series using slicing with positional index: ", series7[0:3])
# Use inbuild function of series (attributes: index, size, empty, value, etc...)    
print("Index of series: ", series.index)
print("Size of series: ", series.size)
print("Empty of series: ", series.empty)
print("Value of series: ", series.value)
print("Attributes of series: ", series.attrs)
# Use inbuild function of series (methods: head, counts, tail, etc..)
print("Head of series: ", series.head(3))
print("Counts of series: ", series.count())
print("Tail of series: ", series.tail(3))
# Mathematical operations on series
print("Addition of series: ", series + series1)
