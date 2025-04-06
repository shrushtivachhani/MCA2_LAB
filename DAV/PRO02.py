#Generate Random Values Between Two Numbers
#randint() - used for generating one number randomly
#sample(range(), ) - used for generating more then one number randomly

import random

start = int(input("Enter start value: "))
end = int(input("Enter end value: "))
count = int(input("How many random numbers to generate? "))

print("Random values:")
for _ in range(count):
    print(random.randint(start, end))
