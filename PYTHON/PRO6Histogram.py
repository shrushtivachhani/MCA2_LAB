def histogram(values):
    for value in values:
        print('*' * value)

numbers = input("Enter Numbers(Space Saperated): ")
numbers = [int(x) for x in numbers.split()]
histogram(numbers)

'''

print("Enter the numbers separated by space")
numbers = input()
numbers = [int(x) for x in numbers.split()]
for i in range(len(numbers)):
    print("*" * numbers[i])

'''