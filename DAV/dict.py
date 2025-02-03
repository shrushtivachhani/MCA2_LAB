"""
Write a program to create a dictionary in such a way that 
it shoud add number as a key and square root of  number as a value between 1 to n in the dictionary
at the end  the dat shall be displayed example {1:1, 2:4, 3:9,...}
"""

n = int(input("Enter the number: "))
d = {}

for i in range(1, n+1):
    d[i] = i * i

print(d)


