// In this file you can specify the trial data for your experiment


const trial_info = {
    main_trial: _.shuffle([
        {
            question: "Eel",
            label_target: 'fish',
            label_competitor: 'reptile',
            condition: 'trial',
        },
        {
            question: "Bat",
            label_target: "mammal",
            label_competitor: "bird",
            condition: 'trial',
        },
        {
            question: "Whale",
            label_target: "mammal",
            label_competitor: "fish",
            condition: 'trial',
        },
        {
            question: "Sea lion",
            label_target: "mammal",
            label_competitor: "fish",
            condition: 'trial',
        },
        {
            question: "Penguin",
            label_target: "bird",
            label_competitor: "fish",
            condition: 'trial',
        },
        {
            question: "Butterfly",
            label_target: "insect",
            label_competitor: "bird",
            condition: 'trial',
        },

        {
            question: "Hawk",
            label_target: "bird",
            label_competitor: "reptile",
            condition: 'control',
        },
        {
            question: "Dog",
            label_target: "mammal",
            label_competitor: "insect",
            condition: 'control',
        },
        {
            question: "Horse",
            label_target: "mammal",
            label_competitor: "bird",
            condition: 'control',
        },
        {
            question: "Shark",
            label_target: "fish",
            label_competitor: "mammal",
            condition: 'control',
        },
        {
            question: "Alligator",
            label_target: "reptile",
            label_competitor: "mammal",
            condition: 'control',
        },
        {
            question: "Rabbit",
            label_target: "mammal",
            label_competitor: "reptile",
            condition: 'control',
        },
        {
            question: "Chameleon",
            label_target: "reptile",
            label_competitor: "insects",
            condition: 'control',
        },
        {
            question: "Cat",
            label_target: "mammal",
            label_competitor: "reptile",
            condition: 'control',
        },
        {
            question: "Sparrow",
            label_target: "bird",
            label_competitor: "mammal",
            condition: 'control',
        },
        {
            question: "Goldfish",
            label_target: "fish",
            label_competitor: "amphibian",
            condition: 'control',
        },
        {
            question: "Salmon",
            label_target: "fish",
            label_competitor: "mammal",
            condition: 'control',
        },
        {
            question: "Rattlesnake",
            label_target: "reptile",
            label_competitor: "amphibian",
            condition: 'control',
        },
        {
            question: "Lion",
            label_target: "mammal",
            label_competitor: "fish",
            condition: 'control',
        },
    ]),

    test_trial: _.shuffle([
        {
            question: "Frog",
            label_target: 'amphibian',
            label_competitor: 'reptile',
            condition: 'trial'
        },
        {
            question: "Turtle",
            label_target: "reptile",
            label_competitor: "fish",
            condition: 'control'
        },
        {
            question: "Ant",
            label_target: "insect",
            label_competitor: "reptile",
            condition: 'control'
        },
    ])
};
