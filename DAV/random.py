#random numbers
#randint() - used for generating one number randomly
#sample(range(), ) - used for generating more then one number randomly

import random as rn

a = int(input("Enter starting point: "))
b = int(input("Enter ending point: "))
c = int(input("Enter how many random number you want?: "))

print(rn.randint(a,b))
print(rn.sample(range(a,b), c))
