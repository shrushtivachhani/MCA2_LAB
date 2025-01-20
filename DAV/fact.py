#factorial

no = int(input("Enter a number: "))
fact = 1
for i in range(1,no+1):
    fact = fact * i
print("Factorial is: ",fact)
