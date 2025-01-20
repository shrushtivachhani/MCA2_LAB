num=[]
for i in range(10):
    num.append(int(input("Enter a Number: ")))
    
print(num)
print("Largest Odd Number is: ",max([i for i in num if i%2!=0]))