"""write a code for
give choice for add student, 
search student,
list all student,
update student,
delete student,
exit"""
# All list functions like a menu type add or etc
# ------------------------------------------------------------
# 1) add student
# 2) search student
# 3) list all students
# 4) update student
# 5) delete student
# 6) exit
# ------------------------------------------------------------
# Give me output of this commennt in list functions and execute this 
# ------------------------------------------------------------

def add_student():
    name = input("Enter student name: ")
    roll = int(input("Enter student roll number: "))
    students.append({'name': name
                        , 'roll': roll})
    print("Student added successfully")

def search_student():
        roll = int(input("Enter student roll number: "))
        for student in students:
            if student['roll'] == roll:
                print("Student found")
                print("Name:", student['name'])
                print("Roll:", student['roll'])
                break
        else:
            print("Student not found")

def list_students():
    for student in students:
        print("Name:", student['name'])
        print("Roll:", student['roll'])
        print("")

def update_student():
    roll = int(input("Enter student roll number: "))
    for student in students:
        if student['roll'] == roll:
            student['name'] = input("Enter new name: ")
            print("Student updated successfully")
            break
    else:
        print("Student not found")

def delete_student():
    roll = int(input("Enter student roll number: "))
    for student in students:
        if student['roll'] == roll:
            students.remove(student)
            print("Student deleted successfully")
            break
    else:
        print("Student not found")

students = []
while True:
    print("1) add student")
    print("2) search student")
    print("3) list all students")
    print("4) update student")
    print("5) delete student")
    print("6) exit")
    choice = int(input("Enter your choice: "))
    if choice == 1:
        add_student()
    elif choice == 2:
        search_student()
    elif choice == 3:
        list_students()
    elif choice == 4:
        update_student()
    elif choice == 5:
        delete_student()
    elif choice == 6:
        break
    else:
        print("Invalid choice")