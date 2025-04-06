#Operations on excel file
import pandas as pd

# Load the Excel file
file_path = "movies.xls"  # Ensure this file is in your current working directory
xls = pd.ExcelFile(file_path)

# 1. Read the sheet named '2000s' into a DataFrame
Second_sheet = pd.read_excel(xls, sheet_name='2000s')

# 2. Show the first 7 rows
print("First 7 rows:")
print(Second_sheet.head(7))

# 3. Show the last 5 rows
print("\nLast 5 rows:")
print(Second_sheet.tail(5))

# 4. Show only the 'Budget' column
print("\nBudget column:")
print(Second_sheet['Budget'])

# 5. Total rows in the '2000s' sheet
print("\nTotal rows in '2000s':", Second_sheet.shape[0])

# 6. Maximum Budget
print("\nMax Budget:", Second_sheet['Budget'].max())

# 7. Minimum Budget
print("Min Budget:", Second_sheet['Budget'].min())

# 8. Statistics about 'User Votes'
print("\nUser Votes stats:")
print(Second_sheet['User Votes'].describe())

# 9. Rows where Country is 'USA' and Duration < 50
USA50 = Second_sheet[(Second_sheet['Country'] == 'USA') & (Second_sheet['Duration'] < 50)]
print("\nRows with Country='USA' and Duration<50:")
print(USA50)

# 10. Create 'Avg Reviews' column
Second_sheet['Avg Reviews'] = (Second_sheet['Reviews by Users'] + Second_sheet['Reviews by Critics']) / 2
print("\nFirst 5 rows after adding 'Avg Reviews':")
print(Second_sheet.head(5))

# 11. Sort by Country (ascending) and Avg Reviews (descending)
sorted_df = Second_sheet.sort_values(by=['Country', 'Avg Reviews'], ascending=[True, False])
print("\nSorted by Country (asc) and Avg Reviews (desc):")
print(sorted_df)
