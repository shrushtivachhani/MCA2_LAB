#triangle area

a = int(input("Enter values: "))
b = int(input("Enter values: "))
c = int(input("Enter values: "))

s = (a+b+c)/2
print("Semiperimeters: ", s)

print("Area of Triangle is: ", (s*(s-a)*(s-b)*(s-c))**0.5)

