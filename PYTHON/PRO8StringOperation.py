'''Write a Python program to perform following operation on given string
input:
a) Count Number of Vowel in given string
b) Count Length of string (donot use len() )
c) Reverse string
d) Find and replace operation
e) check whether string entered is a palindrome or not'''
string = input("Enter a string: ")

vowels = "aeiouAEIOU"
count = 0
for char in string:
    if char in vowels:
        count += 1
print("Number of Vowels in the string:", count)

print("Length of the string: ", len(string))

print("Reversed string: ", string[::-1])

find_word = "i"
replace_word = "o"
modified_string = string.replace(find_word, replace_word)
print("String after find and replace operation:", modified_string)
    
if string == string[::-1]:
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")