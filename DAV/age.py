#age

age = int(input("Enter age: "))

if age < 13:
    print("Child")
elif age > 13 and age < 17:
    print("Teenager")
elif age > 17 and age < 60:
    print("Adult")
else:
    print("Senior")
