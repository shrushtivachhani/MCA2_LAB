'''Write a program to create a function which accepts 2 numbers(from user) and one
arithmetic operator. Return the answer accordingly.'''
def arithmetic_operation(num1, num2, operator):
    if operator == '+':
        return num1 + num2
    elif operator == '-':
        return num1 - num2
    elif operator == '*':
        return num1 * num2
    elif operator == '/':
        if num2 != 0:
            return num1 / num2
        else:
            return "Error! Division by zero is not allowed."
    else:
        return "Invalid operator. Please use +, -, *, /."
# Test the function
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
operator = input("Enter the operator (+, -, *, /): ")
print(arithmetic_operation(num1, num2, operator))