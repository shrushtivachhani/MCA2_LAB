'''Write a program to create 4 lambda functions which shall accept 2
numbers(from user) and one arithmetic operator. As per arithmetic operator related
lambda functions shall be call or invoked.'''
# Define a dictionary to map operators to their corresponding lambda functions
operators = {
    '+': lambda x, y: x + y,
    '-': lambda x, y: x - y,
    '*': lambda x, y: x * y,
    '/': lambda x, y: x / y if y != 0 else "Error:"
    }

# Get the two numbers from the user
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Get the operator from the user
operator = input("Enter an operator (+, -, *, /): ")

# Check if the operator is valid
if operator in operators:
    # Call the corresponding lambda function
    result = operators[operator](num1, num2)
    print(f"{num1} {operator} {num2} = {result}")
else:
    print("Invalid operator. Please try again.")