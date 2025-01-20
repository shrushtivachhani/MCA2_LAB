a = float(input("Enter First Number: "))
b = float(input("Enter Second Number: "))
op = input("Enter Operator (+,-,/,*): ")

if op == '+':
    print("Adition of Two Numbers are: ", a + b )
elif op == '-':
    print("Subtraction of Two Numbers are: ", a - b )
elif op == '*':
    print("Multiplication of Two Numbers are: ", a * b )
elif op == '/':
    if a == 0 and b == 0:
        print("Result is Undefined")
    elif b == 0:
        print("Number cannot Divisible by Zero")
    else:
        print("Division of Two Numbers are: ", a / b )
else:
    print("Operator Invalid")