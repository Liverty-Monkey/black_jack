import random

start = input("Do you want to play a game of Blackjack? Press 'y' or 'n': ")

if start.lower() == "n":
    print("Goodbye!")
else:
    numbers = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    your_cards = random.sample(numbers, 2)
    computer_1st_card = random.choice(numbers)
    print(f"Your cards: {your_cards}, Current score: {sum(your_cards)}")
    print(f"Computer's 1st card: {computer_1st_card}")
    
    another_card = input("Type 'y' to get another card, type 'n' to pass: ")
    if another_card.lower() == "y":
        another_card_2 = random.choice(numbers)
        your_cards.append(another_card_2)
    
    final_score = sum(your_cards)
    print(f"Your final hand: {your_cards}, Final score: {sum(your_cards)}")

    computer_cards = [computer_1st_card]
    computer_cards.append(random.choice(numbers))
    final_computer_score = sum(computer_cards)
    print(f"Computer's final hand: {computer_cards}, Final score: {final_computer_score}")

    if final_score > 21:
        print("You went over. You lose!")
    elif final_computer_score > 21:
        print("Computer went over. You win!")
    elif final_score > final_computer_score:
        print("You win!")
    elif final_score < final_computer_score:
        print("You lose!")
    else:
        print("It's a draw!")
#print(player_1 + player_1_3)