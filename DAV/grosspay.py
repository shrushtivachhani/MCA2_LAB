#worker gross pay

hr = float(input("Enter hours: "))
rate = float(input("Enter rate per hour: "))

if hr > 30:
    rate = rate * 1.5
    print("Gross Pay is: ", hr * rate)
else:
    print("Gross Pay is: ", hr * rate)
