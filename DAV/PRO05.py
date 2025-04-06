#Gross Pay Calculation with Overtime
hours = float(input("Enter Hours: "))
rate = float(input("Enter Rate: "))

if hours > 30:
    overtime = (hours - 30) * rate * 1.5
    pay = (30 * rate) + overtime
else:
    pay = hours * rate

print("Pay:", pay)
