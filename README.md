# User Stories
user has NO account
    create a account
user has account
    delete account
    play game
        show character
            character is at location
                is location the end?

            character has inventory
                money
                items/weapons
        show map
            map has locations
                start
                in-between
                end
            map has inventory (loot)
                money drops
                item drops

    view characters
        view game progress
        view inventory


User
    play game
        start game
            chose character
                game starts

game
    map
        locations
            enemies
                class
                health
                    actual
                    shield
                items
                    type
                        box
                            loot
                        weapon
                        ammo

            items
                weaopns
                money
                ammo
                health Refill
    user
        charcter
            class
            health
                actual
                shield
            items
                weapons
                ammo
                money

- item
    - type: weapon, money, refill
    - owner: player, enemy, board



User
    username
    password
    email
    characters

- user
    - username
    - password
    - email
    - characters
        - items
    - 

Win game
    reached end

lose game
    didnt reach end
    died

User opens app
    User needs account
        User creates account            (CREATE/NEW) - C
        User Logs in to account
            User sees other users       (INDEX) - R
            User deletes account        (DELETE) - D
            User edits/updates account  (EDIT/UPDATE) - U
            User sees account info      (SHOW) - R
                # current games in progress
                # number of characters
                # number of cards colleceted

            User starts game
                User views characters               (INDEX) - R
                    User selects Character
                    User views single Chararcter    (SHOW) - R
                        User views Character stats
                            name
                            class
                            health
                            current game
                            deaths
                        User views character inventory
                            money
                            weapons
                            ammunition
                            *shield
                            perks
                    User deletes single character   (DELETE) - D
                        User chooses how to handle Character's inventory
                            User sells inventory for cash
                            User stores in inventory in bank universal to all their characters
                        User choses what to do with Character's money
                            User gives money to other characters
                            User stores amount in personal bank
                    User creates new character      (CREATE/NEW) - C
                        User selects Character class
                        User gives Charcter name
                            User submit Character creation
                    
                    
characters
    Soldier
        Axton
        Roland
        Athena
    Berserker
        Salvador
        Brick
        Wilhelm
    Siren
        Maya
        Lilith
        Nisha
    Hunter
        Zer0
        Mordecai
        Claptrap
    Bonus
        Gaige
        Krieg
        Doppleganger Jack
        Lady Hammerlock
        Rhys
        Fiona
        Handsome Jack
        Angel (Siren)
        Commandant Steele
        Colonel Zarpedon

Assistance Cards
    Pre-game
        Tiny Tina
            rpg range
    In-game ONLY
        Nurse Nina
            Health
        Marcus
            ammuntion
        Dr.Zed
            Shield
        Mr Torgue
            grenade expand
        Moxxi
            passive boosts
        Ellie
            movement
        Scooter
            movement
        Sir Hammerlock
        TK Baha
        Patricia Tannis
            vault key
        Pickle
    Non-game
        Crazy Earl
            eridium
        Janey Springs
            weapon trade

User
    username: string
    email: string
    password: string
    image: sting
    Character
        user:  string
        class: string
        name: string
        health: number
        cash: number
        *eridium: number
        deployed: boolean
        image: string
    Cards
        type: "cash/weapon/assistance"
        image: string
        holder: Character/Bank

Board:
    spaces:

    start:
    end:


User plays game
    User needs account
        login to account
            send email or username
            send password
        create account
            submit username
            submit email
            submit password


I'm trying to seed my database. The code appears correct, but there might be a syntax error somewhere. The terminal tells me I have an invalid schema. idk. I want to check the legitimacy of the way to import models from another file. I WILL SEED!!!