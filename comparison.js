// Dataset definitions - SIMPLE and UNIVERSALLY understandable
const datasets = [
    {
        name: "Family & Friends",
        description: "People connected by family ties and friendships",
        nodes: [
            // Smith Family
            { id: "Dad", group: 0 },
            { id: "Mom", group: 0 },
            { id: "Son", group: 0 },
            { id: "Daughter", group: 0 },
            // Jones Family
            { id: "Grandpa", group: 1 },
            { id: "Grandma", group: 1 },
            { id: "Uncle", group: 1 },
            { id: "Aunt", group: 1 },
            // School Friends
            { id: "BestFriend", group: 2 },
            { id: "Classmate1", group: 2 },
            { id: "Classmate2", group: 2 },
            { id: "Teacher", group: 2 },
            // Neighbors
            { id: "Neighbor1", group: 3 },
            { id: "Neighbor2", group: 3 },
            { id: "Neighbor3", group: 3 }
        ],
        links: [
            // Smith Family (very close)
            { source: "Dad", target: "Mom", value: 5 },
            { source: "Dad", target: "Son", value: 5 },
            { source: "Dad", target: "Daughter", value: 5 },
            { source: "Mom", target: "Son", value: 5 },
            { source: "Mom", target: "Daughter", value: 5 },
            { source: "Son", target: "Daughter", value: 4 },

            // Jones Family (grandparents & relatives)
            { source: "Grandpa", target: "Grandma", value: 5 },
            { source: "Grandpa", target: "Uncle", value: 4 },
            { source: "Grandma", target: "Aunt", value: 4 },
            { source: "Uncle", target: "Aunt", value: 5 },

            // School Friends
            { source: "Son", target: "BestFriend", value: 5 },
            { source: "BestFriend", target: "Classmate1", value: 4 },
            { source: "Classmate1", target: "Classmate2", value: 4 },
            { source: "BestFriend", target: "Teacher", value: 3 },
            { source: "Classmate2", target: "Teacher", value: 3 },

            // Neighbors
            { source: "Neighbor1", target: "Neighbor2", value: 4 },
            { source: "Neighbor2", target: "Neighbor3", value: 4 },
            { source: "Neighbor1", target: "Neighbor3", value: 3 },

            // Cross-group connections
            { source: "Dad", target: "Grandpa", value: 3 },
            { source: "Mom", target: "Neighbor1", value: 2 },
            { source: "Daughter", target: "Classmate1", value: 2 }
        ]
    },
    {
        name: "Animals",
        description: "Animals grouped by where they live and what they eat",
        nodes: [
            // Farm Animals
            { id: "Cow", group: 0 },
            { id: "Pig", group: 0 },
            { id: "Chicken", group: 0 },
            { id: "Horse", group: 0 },
            // Pets
            { id: "Dog", group: 1 },
            { id: "Cat", group: 1 },
            { id: "Rabbit", group: 1 },
            { id: "Hamster", group: 1 },
            // Wild Animals
            { id: "Lion", group: 2 },
            { id: "Tiger", group: 2 },
            { id: "Bear", group: 2 },
            { id: "Wolf", group: 2 },
            // Birds
            { id: "Eagle", group: 3 },
            { id: "Parrot", group: 3 },
            { id: "Owl", group: 3 }
        ],
        links: [
            // Farm Animals (live together)
            { source: "Cow", target: "Pig", value: 5 },
            { source: "Pig", target: "Chicken", value: 5 },
            { source: "Chicken", target: "Horse", value: 4 },
            { source: "Cow", target: "Horse", value: 5 },

            // Pets (live in homes)
            { source: "Dog", target: "Cat", value: 4 },
            { source: "Cat", target: "Rabbit", value: 3 },
            { source: "Rabbit", target: "Hamster", value: 4 },
            { source: "Dog", target: "Hamster", value: 3 },

            // Wild Animals (hunt together)
            { source: "Lion", target: "Tiger", value: 5 },
            { source: "Tiger", target: "Bear", value: 4 },
            { source: "Bear", target: "Wolf", value: 5 },
            { source: "Lion", target: "Wolf", value: 4 },

            // Birds (fly together)
            { source: "Eagle", target: "Parrot", value: 3 },
            { source: "Parrot", target: "Owl", value: 3 },
            { source: "Eagle", target: "Owl", value: 4 },

            // Cross-category (weak connections)
            { source: "Chicken", target: "Parrot", value: 2 },
            { source: "Horse", target: "Dog", value: 2 },
            { source: "Wolf", target: "Dog", value: 1 }
        ]
    },
    {
        name: "Food",
        description: "Foods grouped by meal type and taste",
        nodes: [
            // Breakfast
            { id: "Eggs", group: 0 },
            { id: "Bread", group: 0 },
            { id: "Milk", group: 0 },
            { id: "Cereal", group: 0 },
            // Lunch
            { id: "Sandwich", group: 1 },
            { id: "Soup", group: 1 },
            { id: "Salad", group: 1 },
            { id: "Burger", group: 1 },
            // Dinner
            { id: "Rice", group: 2 },
            { id: "Chicken_Food", group: 2 },
            { id: "Fish", group: 2 },
            { id: "Vegetables", group: 2 },
            // Dessert
            { id: "Cake", group: 3 },
            { id: "IceCream", group: 3 },
            { id: "Cookies", group: 3 }
        ],
        links: [
            // Breakfast foods (eaten together)
            { source: "Eggs", target: "Bread", value: 5 },
            { source: "Bread", target: "Milk", value: 4 },
            { source: "Milk", target: "Cereal", value: 5 },
            { source: "Eggs", target: "Milk", value: 3 },

            // Lunch foods
            { source: "Sandwich", target: "Soup", value: 5 },
            { source: "Soup", target: "Salad", value: 4 },
            { source: "Salad", target: "Burger", value: 3 },
            { source: "Sandwich", target: "Burger", value: 4 },

            // Dinner foods
            { source: "Rice", target: "Chicken_Food", value: 5 },
            { source: "Chicken_Food", target: "Fish", value: 3 },
            { source: "Fish", target: "Vegetables", value: 5 },
            { source: "Rice", target: "Vegetables", value: 5 },

            // Desserts (sweet treats)
            { source: "Cake", target: "IceCream", value: 5 },
            { source: "IceCream", target: "Cookies", value: 4 },
            { source: "Cake", target: "Cookies", value: 4 },

            // Cross-meal connections
            { source: "Bread", target: "Sandwich", value: 3 },
            { source: "Milk", target: "IceCream", value: 2 },
            { source: "Chicken_Food", target: "Burger", value: 2 }
        ]
    }
    ,
    {
        name: "Zachary Karate Club (real dataset)",
        description: "A real social network split into two factions",
        nodes: [
            { "id": "Member 1", "group": 0 },
            { "id": "Member 2", "group": 0 },
            { "id": "Member 3", "group": 0 },
            { "id": "Member 4", "group": 0 },
            { "id": "Member 5", "group": 0 },
            { "id": "Member 6", "group": 0 },
            { "id": "Member 7", "group": 0 },
            { "id": "Member 8", "group": 0 },
            { "id": "Member 9", "group": 0 },
            { "id": "Member 10", "group": 1 },
            { "id": "Member 11", "group": 0 },
            { "id": "Member 12", "group": 0 },
            { "id": "Member 13", "group": 0 },
            { "id": "Member 14", "group": 0 },
            { "id": "Member 15", "group": 1 },
            { "id": "Member 16", "group": 1 },
            { "id": "Member 17", "group": 0 },
            { "id": "Member 18", "group": 0 },
            { "id": "Member 19", "group": 1 },
            { "id": "Member 20", "group": 0 },
            { "id": "Member 21", "group": 1 },
            { "id": "Member 22", "group": 0 },
            { "id": "Member 23", "group": 1 },
            { "id": "Member 24", "group": 1 },
            { "id": "Member 25", "group": 1 },
            { "id": "Member 26", "group": 1 },
            { "id": "Member 27", "group": 1 },
            { "id": "Member 28", "group": 1 },
            { "id": "Member 29", "group": 1 },
            { "id": "Member 30", "group": 1 },
            { "id": "Member 31", "group": 1 },
            { "id": "Member 32", "group": 1 },
            { "id": "Member 33", "group": 1 },
            { "id": "Member 34", "group": 1 }
        ],
        links: [
            { "source": "Member 1", "target": "Member 2", "value": 3 },
            { "source": "Member 1", "target": "Member 3", "value": 3 },
            { "source": "Member 1", "target": "Member 4", "value": 3 },
            { "source": "Member 1", "target": "Member 5", "value": 3 },
            { "source": "Member 1", "target": "Member 6", "value": 3 },
            { "source": "Member 1", "target": "Member 7", "value": 3 },
            { "source": "Member 1", "target": "Member 8", "value": 3 },
            { "source": "Member 1", "target": "Member 9", "value": 3 },
            { "source": "Member 1", "target": "Member 11", "value": 3 },
            { "source": "Member 1", "target": "Member 12", "value": 3 },
            { "source": "Member 1", "target": "Member 13", "value": 3 },
            { "source": "Member 1", "target": "Member 14", "value": 3 },
            { "source": "Member 1", "target": "Member 18", "value": 3 },
            { "source": "Member 1", "target": "Member 20", "value": 3 },
            { "source": "Member 1", "target": "Member 22", "value": 3 },
            { "source": "Member 1", "target": "Member 32", "value": 3 },
            { "source": "Member 2", "target": "Member 3", "value": 3 },
            { "source": "Member 2", "target": "Member 4", "value": 3 },
            { "source": "Member 2", "target": "Member 8", "value": 3 },
            { "source": "Member 2", "target": "Member 14", "value": 3 },
            { "source": "Member 2", "target": "Member 18", "value": 3 },
            { "source": "Member 2", "target": "Member 20", "value": 3 },
            { "source": "Member 2", "target": "Member 22", "value": 3 },
            { "source": "Member 2", "target": "Member 31", "value": 3 },
            { "source": "Member 3", "target": "Member 4", "value": 3 },
            { "source": "Member 3", "target": "Member 8", "value": 3 },
            { "source": "Member 3", "target": "Member 9", "value": 3 },
            { "source": "Member 3", "target": "Member 10", "value": 3 },
            { "source": "Member 3", "target": "Member 14", "value": 3 },
            { "source": "Member 3", "target": "Member 28", "value": 3 },
            { "source": "Member 3", "target": "Member 29", "value": 3 },
            { "source": "Member 3", "target": "Member 33", "value": 3 },
            { "source": "Member 4", "target": "Member 8", "value": 3 },
            { "source": "Member 4", "target": "Member 13", "value": 3 },
            { "source": "Member 4", "target": "Member 14", "value": 3 },
            { "source": "Member 5", "target": "Member 7", "value": 3 },
            { "source": "Member 5", "target": "Member 11", "value": 3 },
            { "source": "Member 6", "target": "Member 7", "value": 3 },
            { "source": "Member 6", "target": "Member 11", "value": 3 },
            { "source": "Member 6", "target": "Member 17", "value": 3 },
            { "source": "Member 7", "target": "Member 17", "value": 3 },
            { "source": "Member 9", "target": "Member 31", "value": 3 },
            { "source": "Member 9", "target": "Member 33", "value": 3 },
            { "source": "Member 9", "target": "Member 34", "value": 3 },
            { "source": "Member 10", "target": "Member 34", "value": 3 },
            { "source": "Member 14", "target": "Member 34", "value": 3 },
            { "source": "Member 15", "target": "Member 33", "value": 3 },
            { "source": "Member 15", "target": "Member 34", "value": 3 },
            { "source": "Member 16", "target": "Member 33", "value": 3 },
            { "source": "Member 16", "target": "Member 34", "value": 3 },
            { "source": "Member 19", "target": "Member 33", "value": 3 },
            { "source": "Member 19", "target": "Member 34", "value": 3 },
            { "source": "Member 20", "target": "Member 34", "value": 3 },
            { "source": "Member 21", "target": "Member 33", "value": 3 },
            { "source": "Member 21", "target": "Member 34", "value": 3 },
            { "source": "Member 23", "target": "Member 33", "value": 3 },
            { "source": "Member 24", "target": "Member 26", "value": 3 },
            { "source": "Member 24", "target": "Member 28", "value": 3 },
            { "source": "Member 24", "target": "Member 30", "value": 3 },
            { "source": "Member 24", "target": "Member 33", "value": 3 },
            { "source": "Member 24", "target": "Member 34", "value": 3 },
            { "source": "Member 25", "target": "Member 26", "value": 3 },
            { "source": "Member 25", "target": "Member 28", "value": 3 },
            { "source": "Member 25", "target": "Member 32", "value": 3 },
            { "source": "Member 26", "target": "Member 32", "value": 3 },
            { "source": "Member 27", "target": "Member 30", "value": 3 },
            { "source": "Member 27", "target": "Member 34", "value": 3 },
            { "source": "Member 28", "target": "Member 34", "value": 3 },
            { "source": "Member 29", "target": "Member 32", "value": 3 },
            { "source": "Member 29", "target": "Member 34", "value": 3 },
            { "source": "Member 30", "target": "Member 33", "value": 3 },
            { "source": "Member 30", "target": "Member 34", "value": 3 },
            { "source": "Member 31", "target": "Member 33", "value": 3 },
            { "source": "Member 31", "target": "Member 34", "value": 3 },
            { "source": "Member 32", "target": "Member 33", "value": 3 },
            { "source": "Member 32", "target": "Member 34", "value": 3 },
            { "source": "Member 33", "target": "Member 34", "value": 3 }
        ]
    }    ,
    {
        name: "Dolphin Social Network (real dataset)",
        description: "Bottlenose dolphins with observed associations",
        nodes: [
        {
                "id": "Beak",
                "group": 0
        },
        {
                "id": "Beescratch",
                "group": 0
        },
        {
                "id": "Bumper",
                "group": 0
        },
        {
                "id": "CCL",
                "group": 0
        },
        {
                "id": "Cross",
                "group": 0
        },
        {
                "id": "DN16",
                "group": 0
        },
        {
                "id": "DN21",
                "group": 0
        },
        {
                "id": "DN63",
                "group": 0
        },
        {
                "id": "Double",
                "group": 0
        },
        {
                "id": "Feather",
                "group": 0
        },
        {
                "id": "Fish",
                "group": 0
        },
        {
                "id": "Five",
                "group": 0
        },
        {
                "id": "Fork",
                "group": 0
        },
        {
                "id": "Gallatin",
                "group": 0
        },
        {
                "id": "Grin",
                "group": 0
        },
        {
                "id": "Haecksel",
                "group": 0
        },
        {
                "id": "Hook",
                "group": 0
        },
        {
                "id": "Jet",
                "group": 0
        },
        {
                "id": "Jonah",
                "group": 0
        },
        {
                "id": "Knit",
                "group": 0
        },
        {
                "id": "Kringel",
                "group": 0
        },
        {
                "id": "MN105",
                "group": 0
        },
        {
                "id": "MN23",
                "group": 0
        },
        {
                "id": "MN60",
                "group": 0
        },
        {
                "id": "MN83",
                "group": 0
        },
        {
                "id": "Mus",
                "group": 0
        },
        {
                "id": "Notch",
                "group": 0
        },
        {
                "id": "Number1",
                "group": 0
        },
        {
                "id": "Oscar",
                "group": 0
        },
        {
                "id": "Patchback",
                "group": 0
        },
        {
                "id": "PL",
                "group": 0
        },
        {
                "id": "Quasi",
                "group": 0
        },
        {
                "id": "Ripplefluke",
                "group": 0
        },
        {
                "id": "Scabs",
                "group": 0
        },
        {
                "id": "Shmuddel",
                "group": 0
        },
        {
                "id": "SMN5",
                "group": 0
        },
        {
                "id": "SN100",
                "group": 0
        },
        {
                "id": "SN4",
                "group": 0
        },
        {
                "id": "SN63",
                "group": 0
        },
        {
                "id": "SN89",
                "group": 0
        },
        {
                "id": "SN9",
                "group": 0
        },
        {
                "id": "SN90",
                "group": 0
        },
        {
                "id": "SN96",
                "group": 0
        },
        {
                "id": "Stripes",
                "group": 0
        },
        {
                "id": "Thumper",
                "group": 0
        },
        {
                "id": "Topless",
                "group": 0
        },
        {
                "id": "TR120",
                "group": 0
        },
        {
                "id": "TR77",
                "group": 0
        },
        {
                "id": "TR82",
                "group": 0
        },
        {
                "id": "TR88",
                "group": 0
        },
        {
                "id": "TR99",
                "group": 0
        },
        {
                "id": "Trigger",
                "group": 0
        },
        {
                "id": "TSN103",
                "group": 0
        },
        {
                "id": "TSN83",
                "group": 0
        },
        {
                "id": "Upbang",
                "group": 0
        },
        {
                "id": "Vau",
                "group": 0
        },
        {
                "id": "Wave",
                "group": 0
        },
        {
                "id": "Web",
                "group": 0
        },
        {
                "id": "Whitetip",
                "group": 0
        },
        {
                "id": "Zap",
                "group": 0
        },
        {
                "id": "Zig",
                "group": 0
        },
        {
                "id": "Zipfel",
                "group": 0
        }
],
        links: [
        {
                "source": "Double",
                "target": "CCL",
                "value": 3
        },
        {
                "source": "Feather",
                "target": "DN16",
                "value": 3
        },
        {
                "source": "Feather",
                "target": "DN21",
                "value": 3
        },
        {
                "source": "Fish",
                "target": "Beak",
                "value": 3
        },
        {
                "source": "Fish",
                "target": "Bumper",
                "value": 3
        },
        {
                "source": "Gallatin",
                "target": "DN16",
                "value": 3
        },
        {
                "source": "Gallatin",
                "target": "DN21",
                "value": 3
        },
        {
                "source": "Gallatin",
                "target": "Feather",
                "value": 3
        },
        {
                "source": "Grin",
                "target": "Beak",
                "value": 3
        },
        {
                "source": "Grin",
                "target": "CCL",
                "value": 3
        },
        {
                "source": "Haecksel",
                "target": "Beak",
                "value": 3
        },
        {
                "source": "Hook",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "Jet",
                "target": "Beescratch",
                "value": 3
        },
        {
                "source": "Jet",
                "target": "DN21",
                "value": 3
        },
        {
                "source": "Jet",
                "target": "Feather",
                "value": 3
        },
        {
                "source": "Jet",
                "target": "Gallatin",
                "value": 3
        },
        {
                "source": "Jonah",
                "target": "Haecksel",
                "value": 3
        },
        {
                "source": "Knit",
                "target": "Beescratch",
                "value": 3
        },
        {
                "source": "Knit",
                "target": "DN63",
                "value": 3
        },
        {
                "source": "Kringel",
                "target": "Double",
                "value": 3
        },
        {
                "source": "Kringel",
                "target": "Hook",
                "value": 3
        },
        {
                "source": "Kringel",
                "target": "Jonah",
                "value": 3
        },
        {
                "source": "MN105",
                "target": "Jonah",
                "value": 3
        },
        {
                "source": "MN23",
                "target": "Jet",
                "value": 3
        },
        {
                "source": "MN83",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "MN83",
                "target": "Haecksel",
                "value": 3
        },
        {
                "source": "MN83",
                "target": "Jonah",
                "value": 3
        },
        {
                "source": "Mus",
                "target": "Jet",
                "value": 3
        },
        {
                "source": "Notch",
                "target": "Beescratch",
                "value": 3
        },
        {
                "source": "Notch",
                "target": "Mus",
                "value": 3
        },
        {
                "source": "Number1",
                "target": "Beescratch",
                "value": 3
        },
        {
                "source": "Number1",
                "target": "DN63",
                "value": 3
        },
        {
                "source": "Number1",
                "target": "Jet",
                "value": 3
        },
        {
                "source": "Number1",
                "target": "Mus",
                "value": 3
        },
        {
                "source": "Number1",
                "target": "Notch",
                "value": 3
        },
        {
                "source": "Oscar",
                "target": "Beescratch",
                "value": 3
        },
        {
                "source": "Oscar",
                "target": "Double",
                "value": 3
        },
        {
                "source": "Oscar",
                "target": "Kringel",
                "value": 3
        },
        {
                "source": "Patchback",
                "target": "Fish",
                "value": 3
        },
        {
                "source": "Patchback",
                "target": "Jonah",
                "value": 3
        },
        {
                "source": "Patchback",
                "target": "MN105",
                "value": 3
        },
        {
                "source": "Patchback",
                "target": "MN83",
                "value": 3
        },
        {
                "source": "PL",
                "target": "DN63",
                "value": 3
        },
        {
                "source": "PL",
                "target": "Knit",
                "value": 3
        },
        {
                "source": "PL",
                "target": "Oscar",
                "value": 3
        },
        {
                "source": "Quasi",
                "target": "Jet",
                "value": 3
        },
        {
                "source": "Ripplefluke",
                "target": "Feather",
                "value": 3
        },
        {
                "source": "Ripplefluke",
                "target": "Gallatin",
                "value": 3
        },
        {
                "source": "Scabs",
                "target": "Fork",
                "value": 3
        },
        {
                "source": "Scabs",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "Scabs",
                "target": "Hook",
                "value": 3
        },
        {
                "source": "Scabs",
                "target": "MN105",
                "value": 3
        },
        {
                "source": "Shmuddel",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "Shmuddel",
                "target": "Scabs",
                "value": 3
        },
        {
                "source": "SMN5",
                "target": "Patchback",
                "value": 3
        },
        {
                "source": "SN100",
                "target": "Beescratch",
                "value": 3
        },
        {
                "source": "SN100",
                "target": "Kringel",
                "value": 3
        },
        {
                "source": "SN100",
                "target": "MN60",
                "value": 3
        },
        {
                "source": "SN4",
                "target": "Double",
                "value": 3
        },
        {
                "source": "SN4",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "SN4",
                "target": "Hook",
                "value": 3
        },
        {
                "source": "SN4",
                "target": "MN105",
                "value": 3
        },
        {
                "source": "SN4",
                "target": "Scabs",
                "value": 3
        },
        {
                "source": "SN4",
                "target": "Shmuddel",
                "value": 3
        },
        {
                "source": "SN4",
                "target": "SN100",
                "value": 3
        },
        {
                "source": "SN63",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "SN63",
                "target": "Hook",
                "value": 3
        },
        {
                "source": "SN63",
                "target": "Kringel",
                "value": 3
        },
        {
                "source": "SN63",
                "target": "Scabs",
                "value": 3
        },
        {
                "source": "SN89",
                "target": "SN100",
                "value": 3
        },
        {
                "source": "SN9",
                "target": "Beak",
                "value": 3
        },
        {
                "source": "SN9",
                "target": "DN63",
                "value": 3
        },
        {
                "source": "SN9",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "SN9",
                "target": "Haecksel",
                "value": 3
        },
        {
                "source": "SN9",
                "target": "Scabs",
                "value": 3
        },
        {
                "source": "SN9",
                "target": "SN100",
                "value": 3
        },
        {
                "source": "SN9",
                "target": "SN4",
                "value": 3
        },
        {
                "source": "SN90",
                "target": "Beescratch",
                "value": 3
        },
        {
                "source": "SN90",
                "target": "Feather",
                "value": 3
        },
        {
                "source": "SN90",
                "target": "Gallatin",
                "value": 3
        },
        {
                "source": "SN96",
                "target": "Beak",
                "value": 3
        },
        {
                "source": "SN96",
                "target": "Bumper",
                "value": 3
        },
        {
                "source": "SN96",
                "target": "Fish",
                "value": 3
        },
        {
                "source": "SN96",
                "target": "PL",
                "value": 3
        },
        {
                "source": "Stripes",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "Stripes",
                "target": "Patchback",
                "value": 3
        },
        {
                "source": "Stripes",
                "target": "Scabs",
                "value": 3
        },
        {
                "source": "Stripes",
                "target": "SN4",
                "value": 3
        },
        {
                "source": "Stripes",
                "target": "SN63",
                "value": 3
        },
        {
                "source": "Thumper",
                "target": "Bumper",
                "value": 3
        },
        {
                "source": "Thumper",
                "target": "Kringel",
                "value": 3
        },
        {
                "source": "Thumper",
                "target": "Shmuddel",
                "value": 3
        },
        {
                "source": "Thumper",
                "target": "SN63",
                "value": 3
        },
        {
                "source": "Topless",
                "target": "Double",
                "value": 3
        },
        {
                "source": "Topless",
                "target": "Haecksel",
                "value": 3
        },
        {
                "source": "Topless",
                "target": "Jonah",
                "value": 3
        },
        {
                "source": "Topless",
                "target": "MN105",
                "value": 3
        },
        {
                "source": "Topless",
                "target": "MN60",
                "value": 3
        },
        {
                "source": "Topless",
                "target": "MN83",
                "value": 3
        },
        {
                "source": "Topless",
                "target": "Patchback",
                "value": 3
        },
        {
                "source": "Topless",
                "target": "SN4",
                "value": 3
        },
        {
                "source": "TR120",
                "target": "Stripes",
                "value": 3
        },
        {
                "source": "TR77",
                "target": "Beak",
                "value": 3
        },
        {
                "source": "TR77",
                "target": "Fish",
                "value": 3
        },
        {
                "source": "TR77",
                "target": "Kringel",
                "value": 3
        },
        {
                "source": "TR77",
                "target": "Oscar",
                "value": 3
        },
        {
                "source": "TR77",
                "target": "PL",
                "value": 3
        },
        {
                "source": "TR77",
                "target": "SN96",
                "value": 3
        },
        {
                "source": "TR88",
                "target": "Shmuddel",
                "value": 3
        },
        {
                "source": "TR88",
                "target": "TR120",
                "value": 3
        },
        {
                "source": "TR99",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "TR99",
                "target": "Hook",
                "value": 3
        },
        {
                "source": "TR99",
                "target": "Kringel",
                "value": 3
        },
        {
                "source": "TR99",
                "target": "Scabs",
                "value": 3
        },
        {
                "source": "TR99",
                "target": "SN96",
                "value": 3
        },
        {
                "source": "TR99",
                "target": "Topless",
                "value": 3
        },
        {
                "source": "Trigger",
                "target": "Cross",
                "value": 3
        },
        {
                "source": "Trigger",
                "target": "Five",
                "value": 3
        },
        {
                "source": "Trigger",
                "target": "Jonah",
                "value": 3
        },
        {
                "source": "Trigger",
                "target": "MN105",
                "value": 3
        },
        {
                "source": "Trigger",
                "target": "MN60",
                "value": 3
        },
        {
                "source": "Trigger",
                "target": "MN83",
                "value": 3
        },
        {
                "source": "Trigger",
                "target": "Patchback",
                "value": 3
        },
        {
                "source": "Trigger",
                "target": "Topless",
                "value": 3
        },
        {
                "source": "Trigger",
                "target": "TR99",
                "value": 3
        },
        {
                "source": "TSN103",
                "target": "Grin",
                "value": 3
        },
        {
                "source": "TSN103",
                "target": "Patchback",
                "value": 3
        },
        {
                "source": "TSN103",
                "target": "SN63",
                "value": 3
        },
        {
                "source": "TSN103",
                "target": "SN9",
                "value": 3
        },
        {
                "source": "TSN83",
                "target": "Stripes",
                "value": 3
        },
        {
                "source": "Upbang",
                "target": "Beescratch",
                "value": 3
        },
        {
                "source": "Upbang",
                "target": "DN21",
                "value": 3
        },
        {
                "source": "Upbang",
                "target": "DN63",
                "value": 3
        },
        {
                "source": "Upbang",
                "target": "Gallatin",
                "value": 3
        },
        {
                "source": "Upbang",
                "target": "Knit",
                "value": 3
        },
        {
                "source": "Upbang",
                "target": "SN90",
                "value": 3
        },
        {
                "source": "Vau",
                "target": "Haecksel",
                "value": 3
        },
        {
                "source": "Vau",
                "target": "Trigger",
                "value": 3
        },
        {
                "source": "Wave",
                "target": "DN16",
                "value": 3
        },
        {
                "source": "Wave",
                "target": "DN21",
                "value": 3
        },
        {
                "source": "Web",
                "target": "DN16",
                "value": 3
        },
        {
                "source": "Web",
                "target": "DN21",
                "value": 3
        },
        {
                "source": "Web",
                "target": "Feather",
                "value": 3
        },
        {
                "source": "Web",
                "target": "Gallatin",
                "value": 3
        },
        {
                "source": "Web",
                "target": "Jet",
                "value": 3
        },
        {
                "source": "Web",
                "target": "SN89",
                "value": 3
        },
        {
                "source": "Web",
                "target": "SN90",
                "value": 3
        },
        {
                "source": "Web",
                "target": "TR82",
                "value": 3
        },
        {
                "source": "Web",
                "target": "Upbang",
                "value": 3
        },
        {
                "source": "Whitetip",
                "target": "SN63",
                "value": 3
        },
        {
                "source": "Zap",
                "target": "CCL",
                "value": 3
        },
        {
                "source": "Zap",
                "target": "Double",
                "value": 3
        },
        {
                "source": "Zap",
                "target": "Haecksel",
                "value": 3
        },
        {
                "source": "Zap",
                "target": "SN100",
                "value": 3
        },
        {
                "source": "Zap",
                "target": "Topless",
                "value": 3
        },
        {
                "source": "Zig",
                "target": "Ripplefluke",
                "value": 3
        },
        {
                "source": "Zipfel",
                "target": "Bumper",
                "value": 3
        },
        {
                "source": "Zipfel",
                "target": "SN4",
                "value": 3
        },
        {
                "source": "Zipfel",
                "target": "TSN83",
                "value": 3
        }
]
    }
    ,
    {
        name: "Les Miserables (real dataset)",
        description: "Character co-appearances in the novel",
        nodes: [
        {
                "id": "Myriel",
                "group": 0
        },
        {
                "id": "Napoleon",
                "group": 0
        },
        {
                "id": "MlleBaptistine",
                "group": 0
        },
        {
                "id": "MmeMagloire",
                "group": 0
        },
        {
                "id": "CountessDeLo",
                "group": 0
        },
        {
                "id": "Geborand",
                "group": 0
        },
        {
                "id": "Champtercier",
                "group": 0
        },
        {
                "id": "Cravatte",
                "group": 0
        },
        {
                "id": "Count",
                "group": 0
        },
        {
                "id": "OldMan",
                "group": 0
        },
        {
                "id": "Labarre",
                "group": 0
        },
        {
                "id": "Valjean",
                "group": 0
        },
        {
                "id": "Marguerite",
                "group": 0
        },
        {
                "id": "MmeDeR",
                "group": 0
        },
        {
                "id": "Isabeau",
                "group": 0
        },
        {
                "id": "Gervais",
                "group": 0
        },
        {
                "id": "Tholomyes",
                "group": 0
        },
        {
                "id": "Listolier",
                "group": 0
        },
        {
                "id": "Fameuil",
                "group": 0
        },
        {
                "id": "Blacheville",
                "group": 0
        },
        {
                "id": "Favourite",
                "group": 0
        },
        {
                "id": "Dahlia",
                "group": 0
        },
        {
                "id": "Zephine",
                "group": 0
        },
        {
                "id": "Fantine",
                "group": 0
        },
        {
                "id": "MmeThenardier",
                "group": 0
        },
        {
                "id": "Thenardier",
                "group": 0
        },
        {
                "id": "Cosette",
                "group": 0
        },
        {
                "id": "Javert",
                "group": 0
        },
        {
                "id": "Fauchelevent",
                "group": 0
        },
        {
                "id": "Bamatabois",
                "group": 0
        },
        {
                "id": "Perpetue",
                "group": 0
        },
        {
                "id": "Simplice",
                "group": 0
        },
        {
                "id": "Scaufflaire",
                "group": 0
        },
        {
                "id": "Woman1",
                "group": 0
        },
        {
                "id": "Judge",
                "group": 0
        },
        {
                "id": "Champmathieu",
                "group": 0
        },
        {
                "id": "Brevet",
                "group": 0
        },
        {
                "id": "Chenildieu",
                "group": 0
        },
        {
                "id": "Cochepaille",
                "group": 0
        },
        {
                "id": "Pontmercy",
                "group": 0
        },
        {
                "id": "Boulatruelle",
                "group": 0
        },
        {
                "id": "Eponine",
                "group": 0
        },
        {
                "id": "Anzelma",
                "group": 0
        },
        {
                "id": "Woman2",
                "group": 0
        },
        {
                "id": "MotherInnocent",
                "group": 0
        },
        {
                "id": "Gribier",
                "group": 0
        },
        {
                "id": "Jondrette",
                "group": 0
        },
        {
                "id": "MmeBurgon",
                "group": 0
        },
        {
                "id": "Gavroche",
                "group": 0
        },
        {
                "id": "Gillenormand",
                "group": 0
        },
        {
                "id": "Magnon",
                "group": 0
        },
        {
                "id": "MlleGillenormand",
                "group": 0
        },
        {
                "id": "MmePontmercy",
                "group": 0
        },
        {
                "id": "MlleVaubois",
                "group": 0
        },
        {
                "id": "LtGillenormand",
                "group": 0
        },
        {
                "id": "Marius",
                "group": 0
        },
        {
                "id": "BaronessT",
                "group": 0
        },
        {
                "id": "Mabeuf",
                "group": 0
        },
        {
                "id": "Enjolras",
                "group": 0
        },
        {
                "id": "Combeferre",
                "group": 0
        },
        {
                "id": "Prouvaire",
                "group": 0
        },
        {
                "id": "Feuilly",
                "group": 0
        },
        {
                "id": "Courfeyrac",
                "group": 0
        },
        {
                "id": "Bahorel",
                "group": 0
        },
        {
                "id": "Bossuet",
                "group": 0
        },
        {
                "id": "Joly",
                "group": 0
        },
        {
                "id": "Grantaire",
                "group": 0
        },
        {
                "id": "MotherPlutarch",
                "group": 0
        },
        {
                "id": "Gueulemer",
                "group": 0
        },
        {
                "id": "Babet",
                "group": 0
        },
        {
                "id": "Claquesous",
                "group": 0
        },
        {
                "id": "Montparnasse",
                "group": 0
        },
        {
                "id": "Toussaint",
                "group": 0
        },
        {
                "id": "Child1",
                "group": 0
        },
        {
                "id": "Child2",
                "group": 0
        },
        {
                "id": "Brujon",
                "group": 0
        },
        {
                "id": "MmeHucheloup",
                "group": 0
        }
],
        links: [
        {
                "source": "Napoleon",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "MlleBaptistine",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "MmeMagloire",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "MmeMagloire",
                "target": "MlleBaptistine",
                "value": 3
        },
        {
                "source": "CountessDeLo",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "Geborand",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "Champtercier",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "Cravatte",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "Count",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "OldMan",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "Valjean",
                "target": "Labarre",
                "value": 3
        },
        {
                "source": "Valjean",
                "target": "MmeMagloire",
                "value": 3
        },
        {
                "source": "Valjean",
                "target": "MlleBaptistine",
                "value": 3
        },
        {
                "source": "Valjean",
                "target": "Myriel",
                "value": 3
        },
        {
                "source": "Marguerite",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "MmeDeR",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Isabeau",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Gervais",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Listolier",
                "target": "Tholomyes",
                "value": 3
        },
        {
                "source": "Fameuil",
                "target": "Tholomyes",
                "value": 3
        },
        {
                "source": "Fameuil",
                "target": "Listolier",
                "value": 3
        },
        {
                "source": "Blacheville",
                "target": "Tholomyes",
                "value": 3
        },
        {
                "source": "Blacheville",
                "target": "Listolier",
                "value": 3
        },
        {
                "source": "Blacheville",
                "target": "Fameuil",
                "value": 3
        },
        {
                "source": "Favourite",
                "target": "Tholomyes",
                "value": 3
        },
        {
                "source": "Favourite",
                "target": "Listolier",
                "value": 3
        },
        {
                "source": "Favourite",
                "target": "Fameuil",
                "value": 3
        },
        {
                "source": "Favourite",
                "target": "Blacheville",
                "value": 3
        },
        {
                "source": "Dahlia",
                "target": "Tholomyes",
                "value": 3
        },
        {
                "source": "Dahlia",
                "target": "Listolier",
                "value": 3
        },
        {
                "source": "Dahlia",
                "target": "Fameuil",
                "value": 3
        },
        {
                "source": "Dahlia",
                "target": "Blacheville",
                "value": 3
        },
        {
                "source": "Dahlia",
                "target": "Favourite",
                "value": 3
        },
        {
                "source": "Zephine",
                "target": "Tholomyes",
                "value": 3
        },
        {
                "source": "Zephine",
                "target": "Listolier",
                "value": 3
        },
        {
                "source": "Zephine",
                "target": "Fameuil",
                "value": 3
        },
        {
                "source": "Zephine",
                "target": "Blacheville",
                "value": 3
        },
        {
                "source": "Zephine",
                "target": "Favourite",
                "value": 3
        },
        {
                "source": "Zephine",
                "target": "Dahlia",
                "value": 3
        },
        {
                "source": "Fantine",
                "target": "Tholomyes",
                "value": 3
        },
        {
                "source": "Fantine",
                "target": "Listolier",
                "value": 3
        },
        {
                "source": "Fantine",
                "target": "Fameuil",
                "value": 3
        },
        {
                "source": "Fantine",
                "target": "Blacheville",
                "value": 3
        },
        {
                "source": "Fantine",
                "target": "Favourite",
                "value": 3
        },
        {
                "source": "Fantine",
                "target": "Dahlia",
                "value": 3
        },
        {
                "source": "Fantine",
                "target": "Zephine",
                "value": 3
        },
        {
                "source": "Fantine",
                "target": "Marguerite",
                "value": 3
        },
        {
                "source": "Fantine",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "MmeThenardier",
                "target": "Fantine",
                "value": 3
        },
        {
                "source": "MmeThenardier",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Thenardier",
                "target": "MmeThenardier",
                "value": 3
        },
        {
                "source": "Thenardier",
                "target": "Fantine",
                "value": 3
        },
        {
                "source": "Thenardier",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Cosette",
                "target": "MmeThenardier",
                "value": 3
        },
        {
                "source": "Cosette",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Cosette",
                "target": "Tholomyes",
                "value": 3
        },
        {
                "source": "Cosette",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Javert",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Javert",
                "target": "Fantine",
                "value": 3
        },
        {
                "source": "Javert",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Javert",
                "target": "MmeThenardier",
                "value": 3
        },
        {
                "source": "Javert",
                "target": "Cosette",
                "value": 3
        },
        {
                "source": "Fauchelevent",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Fauchelevent",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Bamatabois",
                "target": "Fantine",
                "value": 3
        },
        {
                "source": "Bamatabois",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Bamatabois",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Perpetue",
                "target": "Fantine",
                "value": 3
        },
        {
                "source": "Simplice",
                "target": "Perpetue",
                "value": 3
        },
        {
                "source": "Simplice",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Simplice",
                "target": "Fantine",
                "value": 3
        },
        {
                "source": "Simplice",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Scaufflaire",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Woman1",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Woman1",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Judge",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Judge",
                "target": "Bamatabois",
                "value": 3
        },
        {
                "source": "Champmathieu",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Champmathieu",
                "target": "Judge",
                "value": 3
        },
        {
                "source": "Champmathieu",
                "target": "Bamatabois",
                "value": 3
        },
        {
                "source": "Brevet",
                "target": "Judge",
                "value": 3
        },
        {
                "source": "Brevet",
                "target": "Champmathieu",
                "value": 3
        },
        {
                "source": "Brevet",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Brevet",
                "target": "Bamatabois",
                "value": 3
        },
        {
                "source": "Chenildieu",
                "target": "Judge",
                "value": 3
        },
        {
                "source": "Chenildieu",
                "target": "Champmathieu",
                "value": 3
        },
        {
                "source": "Chenildieu",
                "target": "Brevet",
                "value": 3
        },
        {
                "source": "Chenildieu",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Chenildieu",
                "target": "Bamatabois",
                "value": 3
        },
        {
                "source": "Cochepaille",
                "target": "Judge",
                "value": 3
        },
        {
                "source": "Cochepaille",
                "target": "Champmathieu",
                "value": 3
        },
        {
                "source": "Cochepaille",
                "target": "Brevet",
                "value": 3
        },
        {
                "source": "Cochepaille",
                "target": "Chenildieu",
                "value": 3
        },
        {
                "source": "Cochepaille",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Cochepaille",
                "target": "Bamatabois",
                "value": 3
        },
        {
                "source": "Pontmercy",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Boulatruelle",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Eponine",
                "target": "MmeThenardier",
                "value": 3
        },
        {
                "source": "Eponine",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Anzelma",
                "target": "Eponine",
                "value": 3
        },
        {
                "source": "Anzelma",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Anzelma",
                "target": "MmeThenardier",
                "value": 3
        },
        {
                "source": "Woman2",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Woman2",
                "target": "Cosette",
                "value": 3
        },
        {
                "source": "Woman2",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "MotherInnocent",
                "target": "Fauchelevent",
                "value": 3
        },
        {
                "source": "MotherInnocent",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Gribier",
                "target": "Fauchelevent",
                "value": 3
        },
        {
                "source": "MmeBurgon",
                "target": "Jondrette",
                "value": 3
        },
        {
                "source": "Gavroche",
                "target": "MmeBurgon",
                "value": 3
        },
        {
                "source": "Gavroche",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Gavroche",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Gavroche",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Gillenormand",
                "target": "Cosette",
                "value": 3
        },
        {
                "source": "Gillenormand",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Magnon",
                "target": "Gillenormand",
                "value": 3
        },
        {
                "source": "Magnon",
                "target": "MmeThenardier",
                "value": 3
        },
        {
                "source": "MlleGillenormand",
                "target": "Gillenormand",
                "value": 3
        },
        {
                "source": "MlleGillenormand",
                "target": "Cosette",
                "value": 3
        },
        {
                "source": "MlleGillenormand",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "MmePontmercy",
                "target": "MlleGillenormand",
                "value": 3
        },
        {
                "source": "MmePontmercy",
                "target": "Pontmercy",
                "value": 3
        },
        {
                "source": "MlleVaubois",
                "target": "MlleGillenormand",
                "value": 3
        },
        {
                "source": "LtGillenormand",
                "target": "MlleGillenormand",
                "value": 3
        },
        {
                "source": "LtGillenormand",
                "target": "Gillenormand",
                "value": 3
        },
        {
                "source": "LtGillenormand",
                "target": "Cosette",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "MlleGillenormand",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "Gillenormand",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "Pontmercy",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "LtGillenormand",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "Cosette",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "Tholomyes",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "Eponine",
                "value": 3
        },
        {
                "source": "Marius",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "BaronessT",
                "target": "Gillenormand",
                "value": 3
        },
        {
                "source": "BaronessT",
                "target": "Marius",
                "value": 3
        },
        {
                "source": "Mabeuf",
                "target": "Marius",
                "value": 3
        },
        {
                "source": "Mabeuf",
                "target": "Eponine",
                "value": 3
        },
        {
                "source": "Mabeuf",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Enjolras",
                "target": "Marius",
                "value": 3
        },
        {
                "source": "Enjolras",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Enjolras",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Enjolras",
                "target": "Mabeuf",
                "value": 3
        },
        {
                "source": "Enjolras",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Combeferre",
                "target": "Enjolras",
                "value": 3
        },
        {
                "source": "Combeferre",
                "target": "Marius",
                "value": 3
        },
        {
                "source": "Combeferre",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Combeferre",
                "target": "Mabeuf",
                "value": 3
        },
        {
                "source": "Prouvaire",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Prouvaire",
                "target": "Enjolras",
                "value": 3
        },
        {
                "source": "Prouvaire",
                "target": "Combeferre",
                "value": 3
        },
        {
                "source": "Feuilly",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Feuilly",
                "target": "Enjolras",
                "value": 3
        },
        {
                "source": "Feuilly",
                "target": "Prouvaire",
                "value": 3
        },
        {
                "source": "Feuilly",
                "target": "Combeferre",
                "value": 3
        },
        {
                "source": "Feuilly",
                "target": "Mabeuf",
                "value": 3
        },
        {
                "source": "Feuilly",
                "target": "Marius",
                "value": 3
        },
        {
                "source": "Courfeyrac",
                "target": "Marius",
                "value": 3
        },
        {
                "source": "Courfeyrac",
                "target": "Enjolras",
                "value": 3
        },
        {
                "source": "Courfeyrac",
                "target": "Combeferre",
                "value": 3
        },
        {
                "source": "Courfeyrac",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Courfeyrac",
                "target": "Mabeuf",
                "value": 3
        },
        {
                "source": "Courfeyrac",
                "target": "Eponine",
                "value": 3
        },
        {
                "source": "Courfeyrac",
                "target": "Feuilly",
                "value": 3
        },
        {
                "source": "Courfeyrac",
                "target": "Prouvaire",
                "value": 3
        },
        {
                "source": "Bahorel",
                "target": "Combeferre",
                "value": 3
        },
        {
                "source": "Bahorel",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Bahorel",
                "target": "Courfeyrac",
                "value": 3
        },
        {
                "source": "Bahorel",
                "target": "Mabeuf",
                "value": 3
        },
        {
                "source": "Bahorel",
                "target": "Enjolras",
                "value": 3
        },
        {
                "source": "Bahorel",
                "target": "Feuilly",
                "value": 3
        },
        {
                "source": "Bahorel",
                "target": "Prouvaire",
                "value": 3
        },
        {
                "source": "Bahorel",
                "target": "Marius",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Marius",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Courfeyrac",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Bahorel",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Enjolras",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Feuilly",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Prouvaire",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Combeferre",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Mabeuf",
                "value": 3
        },
        {
                "source": "Bossuet",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Bahorel",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Bossuet",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Courfeyrac",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Enjolras",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Feuilly",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Prouvaire",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Combeferre",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Mabeuf",
                "value": 3
        },
        {
                "source": "Joly",
                "target": "Marius",
                "value": 3
        },
        {
                "source": "Grantaire",
                "target": "Bossuet",
                "value": 3
        },
        {
                "source": "Grantaire",
                "target": "Enjolras",
                "value": 3
        },
        {
                "source": "Grantaire",
                "target": "Combeferre",
                "value": 3
        },
        {
                "source": "Grantaire",
                "target": "Courfeyrac",
                "value": 3
        },
        {
                "source": "Grantaire",
                "target": "Joly",
                "value": 3
        },
        {
                "source": "Grantaire",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Grantaire",
                "target": "Bahorel",
                "value": 3
        },
        {
                "source": "Grantaire",
                "target": "Feuilly",
                "value": 3
        },
        {
                "source": "Grantaire",
                "target": "Prouvaire",
                "value": 3
        },
        {
                "source": "MotherPlutarch",
                "target": "Mabeuf",
                "value": 3
        },
        {
                "source": "Gueulemer",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Gueulemer",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Gueulemer",
                "target": "MmeThenardier",
                "value": 3
        },
        {
                "source": "Gueulemer",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Gueulemer",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Gueulemer",
                "target": "Eponine",
                "value": 3
        },
        {
                "source": "Babet",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Babet",
                "target": "Gueulemer",
                "value": 3
        },
        {
                "source": "Babet",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Babet",
                "target": "MmeThenardier",
                "value": 3
        },
        {
                "source": "Babet",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Babet",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Babet",
                "target": "Eponine",
                "value": 3
        },
        {
                "source": "Claquesous",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Claquesous",
                "target": "Babet",
                "value": 3
        },
        {
                "source": "Claquesous",
                "target": "Gueulemer",
                "value": 3
        },
        {
                "source": "Claquesous",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Claquesous",
                "target": "MmeThenardier",
                "value": 3
        },
        {
                "source": "Claquesous",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Claquesous",
                "target": "Eponine",
                "value": 3
        },
        {
                "source": "Claquesous",
                "target": "Enjolras",
                "value": 3
        },
        {
                "source": "Montparnasse",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Montparnasse",
                "target": "Babet",
                "value": 3
        },
        {
                "source": "Montparnasse",
                "target": "Gueulemer",
                "value": 3
        },
        {
                "source": "Montparnasse",
                "target": "Claquesous",
                "value": 3
        },
        {
                "source": "Montparnasse",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Montparnasse",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Montparnasse",
                "target": "Eponine",
                "value": 3
        },
        {
                "source": "Montparnasse",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Toussaint",
                "target": "Cosette",
                "value": 3
        },
        {
                "source": "Toussaint",
                "target": "Javert",
                "value": 3
        },
        {
                "source": "Toussaint",
                "target": "Valjean",
                "value": 3
        },
        {
                "source": "Child1",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Child2",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Child2",
                "target": "Child1",
                "value": 3
        },
        {
                "source": "Brujon",
                "target": "Babet",
                "value": 3
        },
        {
                "source": "Brujon",
                "target": "Gueulemer",
                "value": 3
        },
        {
                "source": "Brujon",
                "target": "Thenardier",
                "value": 3
        },
        {
                "source": "Brujon",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "Brujon",
                "target": "Eponine",
                "value": 3
        },
        {
                "source": "Brujon",
                "target": "Claquesous",
                "value": 3
        },
        {
                "source": "Brujon",
                "target": "Montparnasse",
                "value": 3
        },
        {
                "source": "MmeHucheloup",
                "target": "Bossuet",
                "value": 3
        },
        {
                "source": "MmeHucheloup",
                "target": "Joly",
                "value": 3
        },
        {
                "source": "MmeHucheloup",
                "target": "Grantaire",
                "value": 3
        },
        {
                "source": "MmeHucheloup",
                "target": "Bahorel",
                "value": 3
        },
        {
                "source": "MmeHucheloup",
                "target": "Courfeyrac",
                "value": 3
        },
        {
                "source": "MmeHucheloup",
                "target": "Gavroche",
                "value": 3
        },
        {
                "source": "MmeHucheloup",
                "target": "Enjolras",
                "value": 3
        }
]
    }

];
// Add 3 more COMPLEX datasets (50-100 nodes) but still easy to understand
datasets.push(
    {
        name: "School (60 students)",
        description: "Students grouped by grade, clubs, and friendships",
        nodes: (() => {
            const nodes = [];
            // Grade 9 (15 students)
            for (let i = 1; i <= 15; i++) nodes.push({ id: `Grade9_${i}`, group: 0 });
            // Grade 10 (15 students)
            for (let i = 1; i <= 15; i++) nodes.push({ id: `Grade10_${i}`, group: 1 });
            // Grade 11 (15 students)
            for (let i = 1; i <= 15; i++) nodes.push({ id: `Grade11_${i}`, group: 2 });
            // Grade 12 (15 students)
            for (let i = 1; i <= 15; i++) nodes.push({ id: `Grade12_${i}`, group: 3 });
            return nodes;
        })(),
        links: (() => {
            const links = [];
            // Strong connections within each grade
            for (let grade = 0; grade < 4; grade++) {
                const start = grade * 15;
                for (let i = start; i < start + 15; i++) {
                    for (let j = i + 1; j < start + 15; j++) {
                        if (Math.random() < 0.3) { // 30% connection rate within grade
                            links.push({
                                source: `Grade${grade + 9}_${(i % 15) + 1}`,
                                target: `Grade${grade + 9}_${(j % 15) + 1}`,
                                value: 4 + Math.floor(Math.random() * 2)
                            });
                        }
                    }
                }
            }
            // Weaker connections between adjacent grades (clubs, siblings)
            for (let grade = 0; grade < 3; grade++) {
                for (let i = 1; i <= 5; i++) {
                    links.push({
                        source: `Grade${grade + 9}_${i}`,
                        target: `Grade${grade + 10}_${i}`,
                        value: 2
                    });
                }
            }
            return links;
        })()
    },
    {
        name: "City (75 locations)",
        description: "City locations grouped by districts and connected by roads",
        nodes: (() => {
            const nodes = [];
            const districts = ['Downtown', 'Residential', 'Industrial', 'Shopping', 'Park'];
            const counts = [20, 20, 15, 12, 8]; // Total = 75

            districts.forEach((district, idx) => {
                for (let i = 1; i <= counts[idx]; i++) {
                    nodes.push({ id: `${district}_${i}`, group: idx });
                }
            });
            return nodes;
        })(),
        links: (() => {
            const links = [];
            const districts = ['Downtown', 'Residential', 'Industrial', 'Shopping', 'Park'];
            const counts = [20, 20, 15, 12, 8];

            // Strong connections within districts (local roads)
            let offset = 0;
            districts.forEach((district, idx) => {
                const count = counts[idx];
                for (let i = 1; i <= count; i++) {
                    for (let j = i + 1; j <= count; j++) {
                        if (Math.random() < 0.25) { // 25% connection rate
                            links.push({
                                source: `${district}_${i}`,
                                target: `${district}_${j}`,
                                value: 4 + Math.floor(Math.random() * 2)
                            });
                        }
                    }
                }
                offset += count;
            });

            // Major roads connecting districts
            for (let i = 1; i <= 5; i++) {
                links.push({ source: `Downtown_${i}`, target: `Residential_${i}`, value: 3 });
                links.push({ source: `Downtown_${i}`, target: `Shopping_${i}`, value: 3 });
            }
            for (let i = 1; i <= 3; i++) {
                links.push({ source: `Residential_${i}`, target: `Park_${i}`, value: 2 });
                links.push({ source: `Industrial_${i}`, target: `Downtown_${i}`, value: 2 });
            }

            return links;
        })()
    },
    {
        name: "Company (80 employees)",
        description: "Employees grouped by departments and project teams",
        nodes: (() => {
            const nodes = [];
            const depts = ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Support'];
            const counts = [20, 15, 12, 10, 13, 10]; // Total = 80

            depts.forEach((dept, idx) => {
                for (let i = 1; i <= counts[idx]; i++) {
                    nodes.push({ id: `${dept}_${i}`, group: idx });
                }
            });
            return nodes;
        })(),
        links: (() => {
            const links = [];
            const depts = ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Support'];
            const counts = [20, 15, 12, 10, 13, 10];

            // Strong connections within departments (daily work)
            depts.forEach((dept, idx) => {
                const count = counts[idx];
                for (let i = 1; i <= count; i++) {
                    for (let j = i + 1; j <= count; j++) {
                        if (Math.random() < 0.35) { // 35% connection rate within dept
                            links.push({
                                source: `${dept}_${i}`,
                                target: `${dept}_${j}`,
                                value: 4 + Math.floor(Math.random() * 2)
                            });
                        }
                    }
                }
            });

            // Cross-department collaboration (projects)
            // Engineering <-> Sales
            for (let i = 1; i <= 8; i++) {
                links.push({ source: `Engineering_${i}`, target: `Sales_${i}`, value: 3 });
            }
            // Marketing <-> Sales
            for (let i = 1; i <= 6; i++) {
                links.push({ source: `Marketing_${i}`, target: `Sales_${i}`, value: 3 });
            }
            // HR <-> All departments (weak connections)
            for (let i = 1; i <= 3; i++) {
                links.push({ source: `HR_${i}`, target: `Engineering_${i}`, value: 2 });
                links.push({ source: `HR_${i}`, target: `Sales_${i}`, value: 2 });
                links.push({ source: `HR_${i}`, target: `Marketing_${i}`, value: 2 });
            }
            // Finance <-> All departments (budget meetings)
            for (let i = 1; i <= 3; i++) {
                links.push({ source: `Finance_${i}`, target: `Engineering_${i}`, value: 2 });
                links.push({ source: `Finance_${i}`, target: `Sales_${i}`, value: 2 });
            }
            // Support <-> Engineering
            for (let i = 1; i <= 5; i++) {
                links.push({ source: `Support_${i}`, target: `Engineering_${i}`, value: 3 });
            }

            return links;
        })()
    }
);

// Color schemes for clusters (extended for more clusters)
const colorSchemes = [
    ['#2196f3', '#e91e63', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4'],
    ['#00bcd4', '#ff5722', '#8bc34a', '#ffc107', '#673ab7', '#3f51b5'],
    ['#3f51b5', '#f44336', '#009688', '#ff6f00', '#7b1fa2', '#4caf50'],
    ['#2196f3', '#e91e63', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4'],
    ['#00bcd4', '#ff5722', '#8bc34a', '#ffc107', '#673ab7', '#3f51b5'],
    ['#3f51b5', '#f44336', '#009688', '#ff6f00', '#7b1fa2', '#4caf50'],
    ['#1e88e5', '#d81b60', '#43a047', '#fb8c00', '#8e24aa', '#00acc1'],
    ['#00897b', '#c62828', '#5e35b1', '#f9a825', '#3949ab', '#7cb342'],
    ['#546e7a', '#ef6c00', '#6d4c41', '#26a69a', '#ab47bc', '#5c6bc0']
];

let currentDataset = 0;

// K-Means implementation
function kMeans(nodes, links, k = 4) {
    const positions = nodes.map((n, i) => ({ id: n.id, x: Math.random(), y: Math.random(), index: i }));
    const maxIterations = 50;

    // Initialize centroids randomly
    let centroids = [];
    for (let i = 0; i < k; i++) {
        centroids.push({ x: Math.random(), y: Math.random() });
    }

    let clusters = new Array(nodes.length).fill(0);

    for (let iter = 0; iter < maxIterations; iter++) {
        // Assign points to nearest centroid
        positions.forEach((p, i) => {
            let minDist = Infinity;
            let bestCluster = 0;
            centroids.forEach((c, ci) => {
                const dist = Math.sqrt((p.x - c.x) ** 2 + (p.y - c.y) ** 2);
                if (dist < minDist) {
                    minDist = dist;
                    bestCluster = ci;
                }
            });
            clusters[i] = bestCluster;
        });

        // Update centroids
        const newCentroids = new Array(k).fill(null).map(() => ({ x: 0, y: 0, count: 0 }));
        positions.forEach((p, i) => {
            const c = clusters[i];
            newCentroids[c].x += p.x;
            newCentroids[c].y += p.y;
            newCentroids[c].count++;
        });

        centroids = newCentroids.map(c => ({
            x: c.count > 0 ? c.x / c.count : Math.random(),
            y: c.count > 0 ? c.y / c.count : Math.random()
        }));
    }

    return clusters;
}

// Leiden Algorithm implementation (simplified community detection)
function leidenAlgorithm(nodes, links) {
    const n = nodes.length;
    const adjacency = Array(n).fill(null).map(() => Array(n).fill(0));
    const nodeMap = new Map(nodes.map((n, i) => [n.id, i]));

    // Build adjacency matrix
    links.forEach(link => {
        const i = nodeMap.get(link.source.id || link.source);
        const j = nodeMap.get(link.target.id || link.target);
        if (i !== undefined && j !== undefined) {
            adjacency[i][j] = link.value;
            adjacency[j][i] = link.value;
        }
    });

    // Initialize each node in its own community
    let communities = nodes.map((_, i) => i);
    const totalEdgeWeight = links.reduce((sum, l) => sum + l.value, 0) * 2;

    // Iterative optimization
    let improved = true;
    let iterations = 0;
    const maxIterations = 20;

    while (improved && iterations < maxIterations) {
        improved = false;
        iterations++;

        for (let i = 0; i < n; i++) {
            const currentCommunity = communities[i];
            let bestCommunity = currentCommunity;
            let bestDeltaQ = 0;

            // Try moving node to neighboring communities
            const neighbors = new Set();
            for (let j = 0; j < n; j++) {
                if (adjacency[i][j] > 0) {
                    neighbors.add(communities[j]);
                }
            }

            neighbors.forEach(targetCommunity => {
                if (targetCommunity === currentCommunity) return;

                const deltaQ = calculateModularityDelta(i, currentCommunity, targetCommunity, communities, adjacency, totalEdgeWeight);

                if (deltaQ > bestDeltaQ) {
                    bestDeltaQ = deltaQ;
                    bestCommunity = targetCommunity;
                }
            });

            if (bestCommunity !== currentCommunity) {
                communities[i] = bestCommunity;
                improved = true;
            }
        }
    }

    // Renumber communities to be consecutive
    const uniqueCommunities = [...new Set(communities)];
    const communityMap = new Map(uniqueCommunities.map((c, i) => [c, i]));
    return communities.map(c => communityMap.get(c));
}

function calculateModularityDelta(node, fromCommunity, toCommunity, communities, adjacency, totalEdgeWeight) {
    let deltaQ = 0;
    const n = adjacency.length;

    // Calculate edge weights
    let edgesToFrom = 0;
    let edgesToTo = 0;
    let nodeDegree = 0;

    for (let j = 0; j < n; j++) {
        nodeDegree += adjacency[node][j];
        if (communities[j] === fromCommunity && j !== node) {
            edgesToFrom += adjacency[node][j];
        }
        if (communities[j] === toCommunity) {
            edgesToTo += adjacency[node][j];
        }
    }

    deltaQ = (edgesToTo - edgesToFrom) / totalEdgeWeight;
    return deltaQ;
}

// Calculate modularity score
function calculateModularity(nodes, links, clusters) {
    const nodeMap = new Map(nodes.map((n, i) => [n.id, i]));
    const m = links.reduce((sum, l) => sum + l.value, 0);

    if (m === 0) return 0;

    const degrees = new Array(nodes.length).fill(0);
    links.forEach(link => {
        const i = nodeMap.get(link.source.id || link.source);
        const j = nodeMap.get(link.target.id || link.target);
        if (i !== undefined) degrees[i] += link.value;
        if (j !== undefined) degrees[j] += link.value;
    });

    let Q = 0;
    links.forEach(link => {
        const i = nodeMap.get(link.source.id || link.source);
        const j = nodeMap.get(link.target.id || link.target);
        if (i !== undefined && j !== undefined && clusters[i] === clusters[j]) {
            Q += link.value - (degrees[i] * degrees[j]) / (2 * m);
        }
    });

    return Q / m;
}

// Visualization function - INCREASED SIZE
function visualize(containerId, data, clusters, colors) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const width = container.clientWidth || 700;
    const height = container.clientHeight || 600;

    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Create a copy of the data
    const nodes = data.nodes.map((d, i) => ({ ...d, cluster: clusters[i] }));
    const links = data.links.map(d => ({ ...d }));

    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(d => 120 / (d.value + 1)))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(30));

    // Draw links
    const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('class', 'link')
        .attr('stroke-width', d => d.value);

    // Draw nodes
    const node = svg.append('g')
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('class', 'node')
        .attr('r', 15)  // Increased from 12 to 15
        .attr('fill', d => colors[d.cluster % colors.length])
        .call(drag(simulation));

    // Add labels
    const labels = svg.append('g')
        .selectAll('text')
        .data(nodes)
        .join('text')
        .attr('class', 'node-label')
        .attr('text-anchor', 'middle')
        .attr('dy', 30)  // Increased from 25 to 30
        .style('font-size', '12px')  // Increased font size
        .text(d => d.id);

    // Update positions on tick
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);

        labels
            .attr('x', d => d.x)
            .attr('y', d => d.y);
    });

    // Create legend
    const legendContainer = document.getElementById(`${containerId.replace('-viz', '-legend')}`);
    const clusterCounts = clusters.reduce((acc, c) => {
        acc[c] = (acc[c] || 0) + 1;
        return acc;
    }, {});

    legendContainer.innerHTML = Object.keys(clusterCounts).map(cluster => `
        <div class="legend-item">
            <div class="legend-color" style="background: ${colors[cluster]}"></div>
            <span>Cluster ${parseInt(cluster) + 1} (${clusterCounts[cluster]} nodes)</span>
        </div>
    `).join('');
}

// Drag behavior
function drag(simulation) {
    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
}

// Run comparison
function runComparison() {
    const data = datasets[currentDataset];
    const colors = colorSchemes[currentDataset];

    // Run K-Means
    const kMeansClusters = kMeans(data.nodes, data.links, 4);
    const kMeansModularity = calculateModularity(data.nodes, data.links, kMeansClusters);

    // Run Leiden
    const leidenClusters = leidenAlgorithm(data.nodes, data.links);
    const leidenModularity = calculateModularity(data.nodes, data.links, leidenClusters);

    // Visualize
    visualize('kmeans-viz', data, kMeansClusters, colors);
    visualize('leiden-viz', data, leidenClusters, colors);

    // Update metrics
    document.getElementById('kmeans-modularity').textContent = kMeansModularity.toFixed(3);
    document.getElementById('leiden-modularity').textContent = leidenModularity.toFixed(3);

    // Generate interpretation
    const winner = leidenModularity > kMeansModularity ? 'Leiden' : 'K-Means';
    const difference = Math.abs(leidenModularity - kMeansModularity);
    const percentDiff = ((difference / Math.max(kMeansModularity, leidenModularity)) * 100).toFixed(1);

    let interpretation = `<span class="winner-badge"><i class="bi bi-trophy"></i> ${winner} WINS!</span><br><br>`;

    if (currentDataset === 0) {
        // Family & Friends
        interpretation += `<strong>Family & Friends Analysis:</strong><br>`;
        if (leidenModularity > kMeansModularity) {
            interpretation += `<strong>Leiden wins by ${percentDiff}%!</strong><br><br>
            👨‍👩‍👧‍👦 <strong>Family Groups:</strong> Leiden correctly identifies the four natural groups: Smith Family (Dad, Mom, Son, Daughter), 
            Jones Family (Grandpa, Grandma, Uncle, Aunt), School Friends (BestFriend, Classmates, Teacher), and Neighbors. 
            These groupings reflect real relationship strength.<br><br>
            
            🔗 <strong>Cross-Group Connections:</strong> The algorithm handles connections like Dad→Grandpa (family tie), 
            Mom→Neighbor1 (friendly neighbor), and Son→BestFriend (school connection) intelligently by keeping the main 
            family groups intact while recognizing these weaker bridges.<br><br>
            
            ❌ <strong>K-Means Problem:</strong> K-Means might group Dad with a Neighbor just because they're spatially close 
            in the visualization, ignoring that family bonds are much stronger than neighbor friendships.`;
        } else {
            interpretation += `<strong>K-Means wins by ${percentDiff}%</strong> - unusual!<br><br>
            This happens when the force layout creates geometrically separated family groups. However, Leiden's network approach 
            is more reliable for understanding real social relationships.`;
        }
    } else if (currentDataset === 1) {
        // Animals
        interpretation += `<strong>Animals Analysis:</strong><br>`;
        if (leidenModularity > kMeansModularity) {
            interpretation += `<strong>Leiden dominates by ${percentDiff}%!</strong><br><br>
            🐄 <strong>Animal Groups:</strong> Leiden perfectly identifies where animals belong: Farm Animals (Cow, Pig, Chicken, Horse), 
            Pets (Dog, Cat, Rabbit, Hamster), Wild Animals (Lion, Tiger, Bear, Wolf), and Birds (Eagle, Parrot, Owl). 
            These groups make sense - animals that live together or share habitats form communities.<br><br>
            
            🦅 <strong>Cross-Category Links:</strong> Chicken→Parrot (both birds), Horse→Dog (both can be pets/farm), and 
            Wolf→Dog (related species) are weak connections that don't break the main groups. Leiden handles these perfectly.<br><br>
            
            📊 <strong>Why It Matters:</strong> For a zoo or wildlife app, Leiden would correctly group animals by habitat 
            and behavior, while K-Means might put a Lion next to a Chicken just because of random positioning!`;
        } else {
            interpretation += `<strong>K-Means wins by ${percentDiff}%</strong> - surprising!<br><br>
            This suggests the animal groups happened to form geometrically distinct clusters. However, Leiden's approach 
            is better for understanding real animal relationships and habitats.`;
        }
    } else if (currentDataset === 2) {
        // Food
        interpretation += `<strong>Food Analysis:</strong><br>`;
        if (leidenModularity > kMeansModularity) {
            interpretation += `<strong>Leiden crushes it by ${percentDiff}%!</strong><br><br>
            🍳 <strong>Meal Groups:</strong> Leiden correctly identifies the four meal types: Breakfast (Eggs, Bread, Milk, Cereal), 
            Lunch (Sandwich, Soup, Salad, Burger), Dinner (Rice, Chicken, Fish, Vegetables), and Dessert (Cake, IceCream, Cookies). 
            These are foods that people actually eat together!<br><br>
            
            🥪 <strong>Food Connections:</strong> Bread→Sandwich (bread is in sandwiches), Milk→IceCream (milk makes ice cream), 
            and Chicken→Burger (chicken burgers) are smart connections that Leiden handles by keeping the main meal groups intact.<br><br>
            
            💡 <strong>Real-World Use:</strong> For a meal planning or recipe app, Leiden would suggest foods that actually go 
            together at the same meal, while K-Means might suggest having Cake with Eggs just because they're nearby in the layout!`;
        } else {
            interpretation += `<strong>K-Means wins by ${percentDiff}%</strong> - rare outcome!<br><br>
            This means the meal groups formed geometrically distinct clusters by chance. However, Leiden's network-based 
            approach is superior for understanding which foods actually go together in real meals.`;
        }
    } else if (currentDataset === 3) {
        // Karate Club
        interpretation += `<strong>Karate Club Analysis (real dataset):</strong><br>`;
        if (leidenModularity > kMeansModularity) {
            interpretation += `<strong>Leiden wins by ${percentDiff}%!</strong><br><br>
            🥋 <strong>Two factions:</strong> This real network is known to split into two factions. Leiden’s community 
            detection is designed for graphs and tends to recover these two groups cleanly.<br><br>
            
            🔗 <strong>Bridge members:</strong> People with ties across both sides often sit on the boundary. Leiden usually 
            keeps these bridges but still preserves the split, which is exactly what you want from a community algorithm.`;
        } else {
            interpretation += `<strong>K-Means wins by ${percentDiff}%</strong> - surprising here.<br><br>
            The graph has a known two-faction split; Leiden is usually strong on this dataset. If K-Means wins, the force layout 
            geometry likely aligned well with the factions for this run.`;
        }
    } else if (currentDataset === 4) {
        // Dolphins
        interpretation += `<strong>Dolphins Analysis (real dataset):</strong><br>`;
        if (leidenModularity > kMeansModularity) {
            interpretation += `<strong>Leiden wins by ${percentDiff}%!</strong><br><br>
            🐬 <strong>Social communities:</strong> Dolphins form natural social groups. Leiden tends to recover these 
            communities more cleanly by following the network structure rather than geometry.`;
        } else {
            interpretation += `<strong>K-Means wins by ${percentDiff}%</strong> - this can happen when the layout happens 
            to separate the dolphins spatially. Leiden is still generally stronger for social networks.`;
        }
    } else if (currentDataset === 5) {
        // Les Miserables
        interpretation += `<strong>Les Miserables Analysis (real dataset):</strong><br>`;
        if (leidenModularity > kMeansModularity) {
            interpretation += `<strong>Leiden wins by ${percentDiff}%!</strong><br><br>
            📚 <strong>Character groups:</strong> The novel’s characters form story-based communities. Leiden often 
            groups them according to co-appearance structure, which is exactly what community detection is designed for.`;
        } else {
            interpretation += `<strong>K-Means wins by ${percentDiff}%</strong> - possible if the force layout separates 
            the narrative groups geometrically for this run.`;
        }
    } else if (currentDataset === 6) {
        // School
        interpretation += `<strong>School Analysis:</strong><br>
        This dataset has grade-level groups with cross-grade friendships. Leiden often preserves grade communities; K-Means 
        can blur boundaries if the geometry overlaps.`;
    } else if (currentDataset === 7) {
        // City
        interpretation += `<strong>City Analysis:</strong><br>
        Districts are natural communities. Leiden typically keeps road-dense districts intact, while K-Means can merge nearby 
        districts if the layout overlaps.`;
    } else {
        // Company
        interpretation += `<strong>Company Analysis:</strong><br>
        Departments form dense teams with cross-functional projects. Leiden tends to keep departments tighter; K-Means may 
        cluster by geometric proximity instead of actual collaboration ties.`;
    }

    document.getElementById('interpretation-text').innerHTML = interpretation;
}

function setupFullscreenButtons() {
    const buttons = document.querySelectorAll('[data-fullscreen-target]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-fullscreen-target');
            const target = document.getElementById(targetId);
            if (!target) return;

            if (document.fullscreenElement) {
                document.exitFullscreen();
                return;
            }

            if (target.requestFullscreen) {
                target.requestFullscreen();
            } else if (target.webkitRequestFullscreen) {
                target.webkitRequestFullscreen();
            }
        });
    });

    document.addEventListener('fullscreenchange', () => {
        setTimeout(() => runComparison(), 50);
    });
}

// Dataset selection
document.querySelectorAll('.dataset-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.dataset-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        currentDataset = index;
        runComparison();
    });
});

setupFullscreenButtons();

// Initial run
runComparison();

// Interpretations are handled in runComparison with dataset-specific branches:
// 0: Family & Friends, 1: Animals, 2: Food, 3: Karate Club, 4: Dolphins, 5: Les Miserables, 6: School, 7: City, 8: Company
