num = []
for i in range(3):
    number = int(input("Enter a value :"))
    num.append(number)
    
print(num)

for number in num:
    sum = 0 
    temp = number
    
    while temp > 0:
        digit = temp % 10
        sum += (digit ** 3)
        temp //= 10
        
    if number == sum:
        print(number, "Armstrong")
    else:
        print(number, "Not Armstrong")

"""listofnumber = []

for i in range(2):
    num = int(input(f"Enter number {i+1}: "))
    listofnumber.append(num)

def is_armstrong(number):
    num_of_digits = len(str(number))
    sum_of_digits = sum(int(digit) ** num_of_digits for digit in str(number))
    return sum_of_digits == number

armstrong_numbers = []

for num in listofnumber:
    if is_armstrong(num):
        armstrong_numbers.append(num)

print("Armstrong numbers in the list:", armstrong_numbers)"""