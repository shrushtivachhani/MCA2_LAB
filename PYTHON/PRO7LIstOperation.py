#Write a program to create a list and perform various operations on list using menu.
def list_methods(value):
    lenn = [1, 2, 3, 4, 5, 5] 
    obj = {
        '1': lambda: len(lenn),         
        '2': lambda: max(lenn),        
        '3': lambda: list(),            
        '4': lambda: (lenn.append(6), lenn),  
        '5': lambda: lenn.count(5),     
        '6': lambda: (lenn.extend([7, 8, 9, 10]), lenn),  
        '7': lambda: lenn.index(2),     
        '8': lambda: (lenn.insert(2, 11), lenn),  
        '9': lambda: lenn.pop(),        
        '10': lambda: (lenn.remove(11), lenn),  
        '11': lambda: (lenn.reverse(), lenn),  
        '12': lambda: (lenn.sort(), lenn)  
    }
 
    return obj.get(value, lambda: "Value is something else")()

# Print instructions for clarity
print("List methods:")
print("1. len()")
print("2. max()")
print("3. list()")
print("4. append()")
print("5. count()")
print("6. extend()")
print("7. index()")
print("8. insert()")
print("9. pop()")
print("10. remove()")
print("11. reverse()")
print("12. sort()")

value = input("Enter the operation number: ")
print("Result:", list_methods(value)) 