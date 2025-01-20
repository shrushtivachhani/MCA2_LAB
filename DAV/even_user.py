#even number from given number

no = int(input("Enter end point for range(starts from 1): "))
i = 1
while i<=no:
    if i%2 == 0:
        print(i)
    i+=1
"""
    for i in range(1,no+1):
        if i % 2 == 0:
        print(i)
"""
