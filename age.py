from datetime import date

def calculate_age(birth_year):
    today = date.today()
    age = today.year - birth_year
    return age

birth_year = 2010
age = calculate_age(birth_year)
print("Age of person born in ", birth_year, " is: ", age)

