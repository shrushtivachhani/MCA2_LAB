#exporting data csv
import pandas as pd

#list of name, degree, score
nme = ["aparna", "pakaj", ""]
deg = [""]
scr = []
dict = {}
df = pd.DataFrame(dict)

#saving the dataframe
df.to_csv('file1.csv')

#saving the dataframe
df.to_csv('file2.csv', header=False, index=False)