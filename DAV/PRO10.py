#Generate Fibonacci Sequence
n = int(input("Enter the number of Fibonacci terms: "))
a, b = 0, 1
print("Fibonacci Sequence:")
for _ in range(n):
    print(a, end=' ')
    a, b = b, a + b