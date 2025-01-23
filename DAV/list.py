'''
create an empty list,
1. ask the user to enter 10 numbers into it,
2. arrange the number in acsending order,
3. insert new element at 5th possition of your choice and remove the element at 7th possition 
'''

numbers = []

for i in range(10):
    numbers.append(int(input("Enter a number: ")))
    
numbers.sort()
print(numbers)

numbers.insert(5, 100)
print(numbers)
   
numbers.pop(6)
print(numbers)    

'''
create a list of any 10 number and according to number divide the list into to parts odd and even numbers
'''
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd_numbers = [num for num in numbers if num % 2 != 0]
even_numbers = [num for num in numbers if num % 2 == 0]

'''
write a program to create a list in such a way that 
it should add squares of numbers between 1 to N in the list.
'''

'''
ask the user to enter a number in a sequence saperated by coma(,)
and find it out maximum and minimum number out of it.
'''
num = input("Enter a number in a sequence saperated by coma(,): ")
num = [int(i) for i in num.split(",")]
print("Maximum number is: ", max(num))
print("Minimum number is: ", min(num))