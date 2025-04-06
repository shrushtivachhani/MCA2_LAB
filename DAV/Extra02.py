#Add square of number from 1 to n in list
n = int(input("Enter the value of n: "))
squares = [i**2 for i in range(1, n+1)]
print("List of squares:", squares)