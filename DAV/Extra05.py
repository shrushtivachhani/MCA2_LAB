#Student Marks Dictionary with CRUD operations
students = {}

# Add
students["Ravi"] = 85
students["Neha"] = 92

# Update
students["Ravi"] = 90

# Search
print("Ravi's Marks:", students.get("Ravi", "Not found"))

# Delete
del students["Neha"]

# Display
print("All Students:", students)
