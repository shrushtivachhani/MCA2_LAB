#String Operations
text = input("Enter a string: ").lower()

# a) Count vowels
vowels = "aeiou"
vowel_count = sum(1 for char in text if char in vowels)

# b) Length without len()
length = sum(1 for _ in text)

# c) Reverse
reversed_text = text[::-1]

# d) Find & Replace
replaced = text.replace("a", "@")

# e) Palindrome check
is_palindrome = text == text[::-1]

print("Vowel Count:", vowel_count)
print("Length:", length)
print("Reversed:", reversed_text)
print("Replaced (a -> @):", replaced)
print("Palindrome:", is_palindrome)