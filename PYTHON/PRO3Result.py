s1 = float(input("Enter 1st Subject Mark:"))
s2 = float(input("Enter 2nd Subject Mark:"))
s3 = float(input("Enter 3rd Subject Mark:"))
s4 = float(input("Enter 4th Subject Mark:"))

t = s1 + s2 + s3 + s4
p = t/4

print("Percentage is: ", p)

if p >= 80:
    print("Grade: A")
elif p >= 70 and p < 80:
    print("Grade: B")
elif p >= 60 and p < 70:
    print("Grade: C")
else:
    print("Fail")