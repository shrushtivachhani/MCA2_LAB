#Write a program to create a list and perform various operations on list using menu.
def list_methods(value):
    lenn = [1, 2, 3, 4, 5, 5]
    obj = {
        '1': len(lenn),
        '2': max(lenn),
        '3': list(),
        '4': lenn.append(6),
        '5': lenn.sort(),
        '6': lenn.reverse(),
        '7': lenn.pop(),
        '8': lenn.remove(5),
        '9': lenn.index(3),
        '10': lenn.count(5),
        '11': lenn.insert(0, 1),
        '12': lenn.extend([7, 8, 9, 10])
    }
    return obj.get(value, "Value is something else")

print("list methods")
print("1.length\n 2.max\n")
print("length is :-",list_methods('length'))
print("max is :-",list_methods('max'))
print("list is :-",list_methods('list'))
print("append is :-",list_methods('append'))
print("sort is :-",list_methods('sort'))
print("reverse is :-",list_methods('reverse'))
print("pop is :-",list_methods('pop'))
print("remove is :-",list_methods('remove'))
print("index is :-",list_methods('index'))
print("count is :-",list_methods('count'))
print("insert is :-",list_methods('insert'))
print("extend is :-",list_methods('extend')) 
