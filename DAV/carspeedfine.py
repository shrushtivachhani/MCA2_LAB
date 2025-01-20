#car speed and fine

speed = int(input("Define car speed: "))

if speed < 80:
    print("You don't have to pay any fine.")
elif speed > 80 and speed < 100:
    print("You have to pay 200rs fine")
elif speed > 100 and speed < 110:
    print("You have to pay 350rs fine")
else:
    print("You have to pay 500rs fine")
