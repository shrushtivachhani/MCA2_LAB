#Dictionary with number as key and square as value
import math

n = int(input("Enter value of n: "))
squares_dict = {i: i**2 for i in range(1, n+1)}
print("Dictionary of squares:", squares_dict)
