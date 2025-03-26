"""Write a program to make use of map(), filter() and reduce() functions
with context to lambda functions."""

from functools import reduce

# Sample list of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Using map() with lambda -> Square each number
squared = list(map(lambda x: x ** 2, numbers))
print(f"Squared numbers: {squared}")

# Using filter() with lambda -> Filter even numbers
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(f"Even numbers: {even_numbers}")

# Using reduce() with lambda -> Find the sum of all numbers
sum_all = reduce(lambda x, y: x + y, numbers)
print(f"Sum of all numbers: {sum_all}")
