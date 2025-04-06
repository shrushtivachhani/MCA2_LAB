#Create two lists with EVEN and ODD numbers
nums = input("Enter comma-separated numbers: ")
num_list = [int(x) for x in nums.split(",")]
even = [x for x in num_list if x % 2 == 0]
odd = [x for x in num_list if x % 2 != 0]
print("Even numbers:", even)
print("Odd numbers:", odd)