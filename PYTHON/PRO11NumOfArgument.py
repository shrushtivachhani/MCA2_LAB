'''Write a python program to create function which shall accept any number of
arguments from the user and display total of all the numbers given as argument by the user.'''

def calculate_total(*args):
    total = sum(args)  
    print(f"The total of the given numbers is: {total}")

calculate_total(10, 20, 30) 