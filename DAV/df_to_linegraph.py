#create two list first name like aarav, sheela, anju, bunny, yash, nazar second weight like 47, 75, 54, 58, 50, 45 from that create daraframe and then create it's line graph
import pandas as pd
import matplotlib.pyplot as plt

# Create two lists
names = ['aarav', 'sheela', 'anju', 'bunny', 'yash', 'nazar']
weights = [47, 75, 54, 58, 50, 45]

# Create a DataFrame
data = pd.DataFrame({
    'Name': names,
    'Weight': weights
})

# Plotting the line graph
plt.plot(data['Name'], data['Weight'], marker='o')
plt.title('Weights of Individuals')
plt.xlabel('Names')
plt.ylabel('Weights')
plt.grid()
plt.show()