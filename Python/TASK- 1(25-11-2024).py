
# 1 
def calculate_discount(member_type, bill_value):
    if member_type == "Premium":
        discount = 0.20 * bill_value
    elif member_type == "Gold":
        discount = 0.15 * bill_value
    elif member_type == "Silver":
        discount = 0.10 * bill_value
    else:
        discount = 0.05 * bill_value if bill_value > 2000 else 0
    return discount

print(calculate_discount("Gold", 3000)) #450

#______________________________________________________________________

# 2
def mode_of_transport(priority, weight, distance):
    if priority != "urgent" and weight <= 5:
        return "Bike"
    elif priority != "urgent" and weight > 5 and distance <= 250:
        return "Lorry"
    elif priority == "urgent" and distance < 50 and weight < 100:
        return "Van"
    else:
        return "Train"
 
print(mode_of_transport("urgent", 30, 40)) # van

#______________________________________________________________________


#3

def is_eligible_for_onsite(passport, communication, feedback, experience, age):
    if passport and communication == "good" and feedback == "good" and experience >= 2 and age >= 23:
        return True
    return False
 

print(is_eligible_for_onsite(True, "good", "good", 3, 25)) # True


#______________________________________________________________________

# 4
def calculate_electricity_bill(units):
    if units > 1000:
        bill = units * 10
    elif units > 500:
        bill = units * 5
    elif units > 200:
        bill = units * 2
    else:
        bill = units * 1
    return bill
 

print(calculate_electricity_bill(1200)) # 12000

#______________________________________________________________________

# 5
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
 
def display_primes(x, y):
    primes = [i for i in range(x, y+1) if is_prime(i)]
    return primes
 

print(display_primes(10, 50)) # [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]


#______________________________________________________________________

#6

def reverse_number(number):
    return int(str(number)[::-1])
 

print(reverse_number(12345)) # 54321

#______________________________________________________________________
