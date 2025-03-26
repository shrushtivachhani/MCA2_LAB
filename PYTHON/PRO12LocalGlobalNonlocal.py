"""Write a program to display the use of local, global and nonlocal variables
"""
# Global variable
x = 100  

def outer_function():
    # Nonlocal variable
    x = 50  
    
    def inner_function():
        # Local variable
        x = 10  
        print(f"Local variable: {x}")  # Output: 10
    
    inner_function()
    print(f"Nonlocal variable: {x}")  # Output: 50

# Displaying the global variable
print(f"Global variable: {x}")  # Output: 100

# Calling the outer function
outer_function()
