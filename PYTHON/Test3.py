"""
write a program for taking input from user and check if age is greater than 18 print eligible for voting and less that 18 print not eligible for voting 
and raise exception if age is less than 0 and greater than 150 and print relatable message without class
"""
try:
    age = int(input("Enter your age: "))
    if age < 0:
        raise ValueError("Age cannot be negative")
    elif age >= 150:
        raise ValueError("Enter a valid age")
except ValueError as e:
    print(e)
else:
    if age > 18:
        print("You are eligible for vote.")
    else:
        print("You are not eligible for vote.")
finally:
    print("Program execution completed.")