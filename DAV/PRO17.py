#Largest Odd Number from 10 Inputs
numbers = [int(input(f"Enter number {i+1}: ")) for i in range(10)]
odd_numbers = [num for num in numbers if num % 2 != 0]

if odd_numbers:
    print("Largest odd number:", max(odd_numbers))
else:
    print("No odd number found.")