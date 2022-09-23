keep_going = True
professions = {}
profession = ""
tool = ""
item = ""
data = ""
test_dict = {}

def collect_data():
    profession = input("Profession: ")
    tool = input("Tool: ")
    item = input("Item: ")
    return profession, tool, item

try:
    # open text file for goals
    with open ("profs.txt", "r") as data_file:
        data = data_file.read()
except IOError as err:
    # if there is an error opening the file
    print("There was an error opening the data file " + err)
finally:
    # closing goal File if error occurs to make sure no corruption
    data_file.close()
    print(data)
    data.replace("\n","")

    test_dict = data
    print(data)
    print(test_dict)

#while keep_going:
#    profession, tool, item = collect_data()
    #adding dictionaries to dictionary
#    professions[profession] = { "tool": tool , "item" : item}
   
#    print(professions)
#    run = input("Add Another (Yes/No)? : ")
#    if run.lower() == "no":
#        keep_going = False

