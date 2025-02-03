"""
write a program to create a dictionary in such a way that it should add name as a keya and marks as a value 
and search in the dictionary by using name and display marks of the student
and also update the marks of the student by taking input from the user as a student name
and also delete the student from the dictionary by taking input from the user as a student name 
"""
d = {}
while True:
    print("\n1. Add Student")
    print("2. Search Student")
    print("3. Update Student")
    print("4. Delete Student")
    print("5. Exit")
    choice = int(input("Enter your choice: "))
    if choice == 1:
        name = input("Enter the name of the student: ")
        marks = int(input("Enter the marks of the student: "))
        d[name] = marks
    elif choice == 2:
        name = input("Enter the name of the student: ")
        if name in d:
            print("Marks of the student: ", d[name])
        else:
            print("Student not found")
    elif choice == 3:
        name = input("Enter the name of the student: ")
        if name in d:
            marks = int(input("Enter the new marks of the student: "))
            d[name] = marks
        else:
            print("Student not found")
    elif choice == 4:
        name = input("Enter the name of the student: ")
        if name in d:
            del d[name]
        else:
            print("Student not found")
    elif choice == 5:
        break
    else:
        print("Invalid choice")
        continue
    print(d)