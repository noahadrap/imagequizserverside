


let flowers = [
    {
        name: "Acacia",
        picture: "https://habahram.blob.core.windows.net/flowers/acacia.jpg"
    },
    {
        name: "Alyssum",
        picture: "https://habahram.blob.core.windows.net/flowers/alyssum.jpg"
    },
    {
        name: "Amaryllis",
        picture: "https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"
    },
    {
        name: "Aster",
        picture: "https://habahram.blob.core.windows.net/flowers/aster.jpg"
    },
    {
        name: "Azalea",
        picture: "https://habahram.blob.core.windows.net/flowers/azalea.jpg"
    },
    {
        name: "Begonia",
        picture: "https://habahram.blob.core.windows.net/flowers/begonia.jpg"
    },
    {
        name: "Buttercup",
        picture: "https://habahram.blob.core.windows.net/flowers/buttercup.jpg"
    },
    {
        name: "Calluna",
        picture: "https://habahram.blob.core.windows.net/flowers/calluna.jpg"
    },
    {
        name: "Camellia",
        picture: "https://habahram.blob.core.windows.net/flowers/camellia.jpg"
    },
    {
        name: "Cardinal",
        picture: "https://habahram.blob.core.windows.net/flowers/cardinal.jpg"
    },
    {
        name: "Carnation",
        picture: "https://habahram.blob.core.windows.net/flowers/carnation.jpg"
    },
    {
        name: "Clover",
        picture: "https://habahram.blob.core.windows.net/flowers/clover.jpg"
    },
    {
        name: "Crown Imperial",
        picture: "https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"
    },
    {
        name: "Daffodil",
        picture: "https://habahram.blob.core.windows.net/flowers/daffodil.jpg"
    },
    {
        name: "Dahlia",
        picture: "https://habahram.blob.core.windows.net/flowers/dahlia.jpg"
    },
    {
        name: "Daisy",
        picture: "https://habahram.blob.core.windows.net/flowers/daisy.jpg"
    },
    {
        name: "Gladiolus",
        picture: "https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"
    },
    {
        name: "Lantana",
        picture: "https://habahram.blob.core.windows.net/flowers/lantana.jpg"
    },
    {
        name: "Lily",
        picture: "https://habahram.blob.core.windows.net/flowers/lily.jpg"
    },
    {
        name: "Lotus",
        picture: "https://habahram.blob.core.windows.net/flowers/lotus.jpg"
    },
    {
        name: "Marigold",
        picture: "https://habahram.blob.core.windows.net/flowers/Marigold.jpg"
    },
    {
        name: "Orchid",
        picture: "https://habahram.blob.core.windows.net/flowers/orchid.jpg"
    },
    {
        name: "Primrose",
        picture: "https://habahram.blob.core.windows.net/flowers/primrose.jpg"
    },
    {
        name: "Sunflower",
        picture: "https://habahram.blob.core.windows.net/flowers/sunflower.jpg"
    },
    {
        name: "Tickseed",
        picture: "https://habahram.blob.core.windows.net/flowers/tickseed.jpg"
    },
    {
        name: "Tulip",
        picture: "https://habahram.blob.core.windows.net/flowers/tulip.jpg"
    },
    {
        name: "Zinnia",
        picture: "https://habahram.blob.core.windows.net/flowers/zinnia.jpg"
    }
];

const quiz = [
    {
        id: 1,
        image: flowers[0],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Acaia', isCorrect: true },
            
        ],
    },
    {
        id: 1,
        image: flowers[0],
        questionText: 'How Long Do Acaia Trees live?',
        answerOptions: [
            { answerText: '10-20 years', isCorrect: false },
            { answerText: '20-30 years', isCorrect: true },
            { answerText: '30-40 years', isCorrect: false },
        ],
    },
    {
        id: 1,
        image: flowers[0],
        questionText: 'What animals feed off this?',
        answerOptions: [
            { answerText: 'Both of these', isCorrect: true },
            { answerText: 'Elephants', isCorrect: false },
            { answerText: 'Giraffes', isCorrect: false },
        ],
    },
    {
        id: 1,
        image: flowers[0],
        questionText: 'Where do these trees grow?',
        answerOptions: [
            { answerText: 'Austrailia', isCorrect: false },
            { answerText: 'South Africa', isCorrect: false },
            { answerText: 'both of these', isCorrect: true },
        ],
    },
    {
        id: 1,
        image: flowers[0],
        questionText: 'What protection do these trees have for herbivores?',
        answerOptions: [
            
            { answerText: 'Termites', isCorrect: false },
            { answerText: 'Poisonous leaves', isCorrect: false },
            { answerText: 'Thorns', isCorrect: true },
        ],
    },
    {
        id: 1,
        image: flowers[0],
        questionText: 'What color do these leaves have when blooming?',
        answerOptions: [
            { answerText: 'Red', isCorrect: false },
            { answerText: 'Green', isCorrect: false },
            { answerText: 'Yellow', isCorrect: true },
        ],
    },
     
    {
        id: 2,
        image: flowers[1],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Alyssum', isCorrect: true },
            
        ],
    },
    {
        id: 2,
        image: flowers[1],
        questionText: 'How are the smell of these best described?',
        answerOptions: [
            { answerText: 'No smell', isCorrect: false },
            { answerText: 'Sweet', isCorrect: true },
            { answerText: 'Sour', isCorrect: false },
        ],
    },
    {
        id: 2,
        image: flowers[1],
        questionText: 'How long do these spread?',
        answerOptions: [
            { answerText: '3 to 6 inches', isCorrect: true },
            { answerText: '6 to 9 inches', isCorrect: false },
            { answerText: '9 to 12 inches', isCorrect: false },
        ],
    },
    {
        id: 2,
        image: flowers[1],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Only to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
        ],
    },
    {
        id: 2,
        image: flowers[1],
        questionText: 'What does this classify as?',
        answerOptions: [
            
            { answerText: 'Flower', isCorrect: false },
            { answerText: 'Tree', isCorrect: false },
            { answerText: 'Evergreen', isCorrect: true },
        ],
    },
    {
        id: 2,
        image: flowers[1],
        questionText: 'How Many Seeds are in a cell?',
        answerOptions: [
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '1', isCorrect: true },
        ],
    },

    {
        id: 3,
        image: flowers[2],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Amaryllis', isCorrect: true },
            
        ],
    },
    {
        id: 3,
        image: flowers[2],
        questionText: 'What is this flower known to symbolize?',
        answerOptions: [
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: true },
            { answerText: 'Hate', isCorrect: false },
        ],
    },
    {
        id: 3,
        image: flowers[2],
        questionText: "How long is this flower's lifespan?",
        answerOptions: [
            { answerText: '6 weeks', isCorrect: true },
            { answerText: '2 weeks', isCorrect: false },
            { answerText: '5 months', isCorrect: false },
        ],
    },
    {
        id: 3,
        image: flowers[2],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Only to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
        ],
    },
    {
        id: 3,
        image: flowers[2],
        questionText: 'How tall do these grow?',
        answerOptions: [
            
            { answerText: '0-12 inches', isCorrect: false },
            { answerText: '36-48 inches', isCorrect: false },
            { answerText: '18-36 inches', isCorrect: true },
        ],
    },
    {
        id: 3,
        image: flowers[2],
        questionText: 'Where are these native to?',
        answerOptions: [
            { answerText: 'Austrailia', isCorrect: false },
            { answerText: 'Europe', isCorrect: false },
            { answerText: 'Africa', isCorrect: true },
        ],
    },

    {
        id: 4,
        image: flowers[3],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Aster', isCorrect: true },
            
        ],
    },
    {
        id: 4,
        image: flowers[3],
        questionText: 'When does this flower bloom?',
        answerOptions: [
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Fall', isCorrect: true },
            { answerText: 'Winter', isCorrect: false },
        ],
    },
    {
        id: 4,
        image: flowers[3],
        questionText: "How long is this flower's lifespan?",
        answerOptions: [
            { answerText: '6 weeks', isCorrect: true },
            { answerText: '2 weeks', isCorrect: false },
            { answerText: '5 months', isCorrect: false },
        ],
    },
    {
        id: 4,
        image: flowers[3],
        questionText: 'How long is the germination period of this?',
        answerOptions: [
            { answerText: '30-40 days', isCorrect: false },
            { answerText: '0-10 days', isCorrect: false },
            { answerText: '10-20 days', isCorrect: true },
        ],
    },
    {
        id: 4,
        image: flowers[3],
        questionText: 'When does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Hate', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Love', isCorrect: true },
        ],
    },
    {
        id: 4,
        image: flowers[3],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },
    {
        id: 5,
        image: flowers[4],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Azalea', isCorrect: true },
            
        ],
    },
    {
        id: 5,
        image: flowers[4],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 year', isCorrect: false },
            { answerText: '50 years', isCorrect: true },
            { answerText: '20 years', isCorrect: false },
        ],
    },
    {
        id: 5,
        image: flowers[4],
        questionText: "How long is this flower's lifespan?",
        answerOptions: [
            { answerText: '6 weeks', isCorrect: true },
            { answerText: '2 weeks', isCorrect: false },
            { answerText: '5 months', isCorrect: false },
        ],
    },
    {
        id: 5,
        image: flowers[4],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Asia', isCorrect: false },
            { answerText: 'All over the world', isCorrect: true },
        ],
    },
    {
        id: 5,
        image: flowers[4],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Hate', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Love', isCorrect: true },
        ],
    },
    {
        id: 5,
        image: flowers[4],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },

    {
        id: 6,
        image: flowers[5],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Begonia', isCorrect: true },
            
        ],
    },
    {
        id: 6,
        image: flowers[5],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 year', isCorrect: false },
            { answerText: '2-3 years', isCorrect: true },
            { answerText: '4-5 years', isCorrect: false },
        ],
    },
    {
        id: 6,
        image: flowers[5],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Summer', isCorrect: true },
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 6,
        image: flowers[5],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Asia', isCorrect: false },
            { answerText: 'Central America', isCorrect: true },
        ],
    },
    {
        id: 6,
        image: flowers[5],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Hate', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Caution', isCorrect: true },
        ],
    },
    {
        id: 6,
        image: flowers[5],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },
    {
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Buttercup', isCorrect: true },
            
        ],
    },
    {
        id: 7,
        image: flowers[6],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 year', isCorrect: false },
            { answerText: '10 years', isCorrect: true },
            { answerText: '4-5 years', isCorrect: false },
        ],
    },
    {
        id: 7,
        image: flowers[6],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 7,
        image: flowers[6],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Asia', isCorrect: false },
            { answerText: 'Europe', isCorrect: true },
        ],
    },
    {
        id: 7,
        image: flowers[6],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Hate', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Humility', isCorrect: true },
        ],
    },
    {
        id: 7,
        image: flowers[6],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },

    
    {
        id: 8,
        image: flowers[7],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Calluna', isCorrect: true },
            
        ],
    },
    {
        id: 8,
        image: flowers[7],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '20 year', isCorrect: false },
            { answerText: '30-40 years', isCorrect: true },
            { answerText: '10 years', isCorrect: false },
        ],
    },
    {
        id: 8,
        image: flowers[7],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Summer', isCorrect: true },
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 8,
        image: flowers[7],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Asia', isCorrect: false },
            { answerText: 'Europe', isCorrect: true },
        ],
    },
    {
        id: 8,
        image: flowers[7],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Hate', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Good Luck', isCorrect: true },
        ],
    },
    {
        id: 8,
        image: flowers[7],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
        ],
    },

    {
        id: 9,
        image: flowers[8],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Camellia', isCorrect: true },
            
        ],
    },
    {
        id: 9,
        image: flowers[8],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '50 years', isCorrect: false },
            { answerText: '100 years', isCorrect: true },
            { answerText: '70 years', isCorrect: false },
        ],
    },
    {
        id: 9,
        image: flowers[8],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Winter', isCorrect: true },
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 9,
        image: flowers[8],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Europe', isCorrect: false },
            { answerText: 'Asia', isCorrect: true },
        ],
    },
    {
        id: 9,
        image: flowers[8],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Hate', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Love', isCorrect: true },
        ],
    },
    {
        id: 9,
        image: flowers[8],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
        ],
    },

    {
        id: 10,
        image: flowers[9],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Cardinal', isCorrect: true },
            
        ],
    },
    {
        id: 10,
        image: flowers[9],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '10 years', isCorrect: false },
            { answerText: '3-4 years', isCorrect: true },
            { answerText: '20 years', isCorrect: false },
        ],
    },
    {
        id: 10,
        image: flowers[9],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Summer', isCorrect: true },
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 10,
        image: flowers[9],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Europe', isCorrect: false },
            { answerText: 'North America', isCorrect: true },
        ],
    },
    {
        id: 10,
        image: flowers[9],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Hate', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Love', isCorrect: true },
        ],
    },
    {
        id: 10,
        image: flowers[9],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },

    {
        id: 11,
        image: flowers[10],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Carnation', isCorrect: true },
            
        ],
    },
    {
        id: 11,
        image: flowers[10],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '10 years', isCorrect: false },
            { answerText: '3-4 years', isCorrect: true },
            { answerText: '20 years', isCorrect: false },
        ],
    },
    {
        id: 11,
        image: flowers[10],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 11,
        image: flowers[10],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Europe', isCorrect: false },
            { answerText: 'Mediterranean', isCorrect: true },
        ],
    },
    {
        id: 11,
        image: flowers[10],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Hate', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Love', isCorrect: true },
        ],
    },
    {
        id: 11,
        image: flowers[10],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
        ],
    },
    {
        id: 12,
        image: flowers[11],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Clover', isCorrect: true },
            
        ],
    },
    {
        id: 12,
        image: flowers[11],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '10 years', isCorrect: false },
            { answerText: '2 years', isCorrect: true },
            { answerText: '5 years', isCorrect: false },
        ],
    },
    {
        id: 12,
        image: flowers[11],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 12,
        image: flowers[11],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Europe', isCorrect: false },
            { answerText: 'South America', isCorrect: true },
        ],
    },
    {
        id: 12,
        image: flowers[11],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Hate', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Good Luck', isCorrect: true },
        ],
    },
    {
        id: 12,
        image: flowers[11],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
        ],
    },
    {
        id: 13,
        image: flowers[12],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Crown Imperial', isCorrect: true },
            
        ],
    },
    {
        id: 13,
        image: flowers[12],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '2-3 weeks', isCorrect: true },
            { answerText: '1 year', isCorrect: false },
        ],
    },
        
    {
        id: 13,
        image: flowers[12],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 13,
        image: flowers[12],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Europe', isCorrect: false },
            { answerText: 'Turkey', isCorrect: true },
        ],
    },
    {
        id: 13,
        image: flowers[12],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Royalty', isCorrect: true },
        ],
    },
    {
        id: 13,
        image: flowers[12],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },
    {
        id: 14,
        image: flowers[13],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Daffodil', isCorrect: true },
            
        ],
    },
    {
        id: 14,
        image: flowers[13],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '6 months', isCorrect: true },
            { answerText: '1 year', isCorrect: false },
        ],
    },
    {
        id: 14,
        image: flowers[13],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 14,
        image: flowers[13],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Europe', isCorrect: true },
            { answerText: 'Asia', isCorrect: false },
        ],
    },
    {
        id: 14,
        image: flowers[13],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Rebirth', isCorrect: true },
        ],
    },
    {
        id: 14,
        image: flowers[13],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },
    {
        id: 15,
        image: flowers[14],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Dahlia', isCorrect: true },
            
        ],
    },
    {
        id: 15,
        image: flowers[14],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '4-6 days', isCorrect: true },
            { answerText: '2 weeks', isCorrect: false },
        ],
    },
    {
        id: 15,
        image: flowers[14],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 15,
        image: flowers[14],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'North America', isCorrect: true },
            { answerText: 'Asia', isCorrect: false },
        ],
    },
    {
        id: 15,
        image: flowers[14],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Elegance', isCorrect: true },
        ],
    },
    {
        id: 15,
        image: flowers[14],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },
    {
        id: 16,
        image: flowers[15],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: true },
            { answerText: 'Dahlia', isCorrect: false },
            
        ],
    },
    {
        id: 16,
        image: flowers[15],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '3 months', isCorrect: false },
            { answerText: '4-6 weeks', isCorrect: true },
            { answerText: '2 weeks', isCorrect: false },
        ],
    },
    {
        id: 16,
        image: flowers[15],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 16,
        image: flowers[15],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'North America', isCorrect: true },
            { answerText: 'Asia', isCorrect: false },
        ],
    },
    {
        id: 16,
        image: flowers[15],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Purity', isCorrect: true },
        ],
    },
    {
        id: 16,
        image: flowers[15],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },

    {
        id: 17,
        image: flowers[16],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Gladiolus', isCorrect: true },
            { answerText: 'Dahlia', isCorrect: false },
            
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '3 months', isCorrect: false },
            { answerText: '90 days', isCorrect: true },
            { answerText: '2 weeks', isCorrect: false },
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: true },
            { answerText: 'North America', isCorrect: false },
            { answerText: 'Asia', isCorrect: false },
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Gladiators', isCorrect: true },
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },
    {
        id: 18,
        image: flowers[17],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Lantana', isCorrect: true },
            { answerText: 'Dahlia', isCorrect: false },
            
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '4 months', isCorrect: true },
            { answerText: '2 weeks', isCorrect: false },
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Summer', isCorrect: true },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'South America', isCorrect: true },
            { answerText: 'North America', isCorrect: false },
            { answerText: 'Asia', isCorrect: false },
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Rigor', isCorrect: true },
        ],
    },
    {
        id: 17,
        image: flowers[16],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },
    {
        id: 18,
        image: flowers[17],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Lantana', isCorrect: true },
            { answerText: 'Dahlia', isCorrect: false },
            
        ],
    },
    {
        id: 18,
        image: flowers[17],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '4 months', isCorrect: true },
            { answerText: '2 weeks', isCorrect: false },
        ],
    },
    {
        id: 18,
        image: flowers[17],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Summer', isCorrect: true },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 18,
        image: flowers[17],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'South America', isCorrect: true },
            { answerText: 'North America', isCorrect: false },
            { answerText: 'Asia', isCorrect: false },
        ],
    },
    {
        id: 18,
        image: flowers[17],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Rigor', isCorrect: true },
        ],
    },
    {
        id: 18,
        image: flowers[17],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },
    {
        id: 19,
        image: flowers[18],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: true },
            { answerText: 'Lantana', isCorrect: false },
            { answerText: 'Dahlia', isCorrect: false },
            
        ],
    },
    {
        id: 19,
        image: flowers[18],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '4 months', isCorrect: false },
            { answerText: '2 weeks', isCorrect: true },
        ],
    },
    {
        id: 19,
        image: flowers[18],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Summer', isCorrect: true },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 19,
        image: flowers[18],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Northern Hemisphere', isCorrect: true },
            { answerText: 'North America', isCorrect: false },
            { answerText: 'Asia', isCorrect: false },
        ],
    },
    {
        id: 19,
        image: flowers[18],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Purity', isCorrect: true },
        ],
    },
    {
        id: 19,
        image: flowers[18],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },

    {
        id: 20,
        image: flowers[19],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lotus', isCorrect: true },
            { answerText: 'Lantana', isCorrect: false },
            { answerText: 'Dahlia', isCorrect: false },
            
        ],
    },
    {
        id: 20,
        image: flowers[19],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '4 months', isCorrect: false },
            { answerText: '1000+ years', isCorrect: true },
        ],
    },
    {
        id: 20,
        image: flowers[19],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Summer', isCorrect: true },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 20,
        image: flowers[19],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'North America', isCorrect: false },
            { answerText: 'Asia', isCorrect: true },
        ],
    },
    {
        id: 20,
        image: flowers[19],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Purity', isCorrect: true },
        ],
    },
    {
        id: 20,
        image: flowers[19],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },

    {
        id: 21,
        image: flowers[20],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Marigold', isCorrect: true },
            { answerText: 'Lantana', isCorrect: false },
            { answerText: 'Dahlia', isCorrect: false },
            
        ],
    },
    {
        id: 21,
        image: flowers[20],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '4 months', isCorrect: false },
            { answerText: '2 months', isCorrect: true },
        ],
    },
    {
        id: 21,
        image: flowers[20],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: false },
            { answerText: 'Summer', isCorrect: true },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 21,
        image: flowers[20],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'North America', isCorrect: false },
            { answerText: 'Central America', isCorrect: true },
        ],
    },
    {
        id: 21,
        image: flowers[20],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Passion', isCorrect: true },
        ],
    },
    {
        id: 21,
        image: flowers[20],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
        ],
    },
    {
        id: 22,
        image: flowers[21],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Orchid', isCorrect: true },
            { answerText: 'Lantana', isCorrect: false },
            { answerText: 'Dahlia', isCorrect: false },
            
        ],
    },
    {
        id: 22,
        image: flowers[21],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '1 year', isCorrect: false },
            { answerText: '100 years', isCorrect: true },
        ],
    },
    {
        id: 22,
        image: flowers[21],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 22,
        image: flowers[21],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'North America', isCorrect: true},
            { answerText: 'Central America', isCorrect: false },
        ],
    },
    {
        id: 22,
        image: flowers[21],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Fertility', isCorrect: true },
        ],
    },
    {
        id: 22,
        image: flowers[21],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
        ],
    },
    {
        id: 23,
        image: flowers[22],
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Primrose', isCorrect: true },
            { answerText: 'Lantana', isCorrect: false },
            { answerText: 'Dahlia', isCorrect: false },
            
        ],
    },
    {
        id: 23,
        image: flowers[22],
        questionText: 'How long do these live for?',
        answerOptions: [
            { answerText: '1 month', isCorrect: false },
            { answerText: '1 year', isCorrect: false },
            { answerText: '5-6 years', isCorrect: true },
        ],
    },
    {
        id: 23,
        image: flowers[22],
        questionText: "When do these bloom?",
        answerOptions: [
            { answerText: 'Spring', isCorrect: true },
            { answerText: 'Summer', isCorrect: false },
            { answerText: 'Fall', isCorrect: false },
        ],
    },
    {
        id: 23,
        image: flowers[22],
        questionText: 'Where is this found?',
        answerOptions: [
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Europe', isCorrect: true},
            { answerText: 'Central America', isCorrect: false },
        ],
    },
    {
        id: 23,
        image: flowers[22],
        questionText: 'What does this flower symbolize?',
        answerOptions: [
            
            { answerText: 'Love', isCorrect: true },
            { answerText: 'Strength', isCorrect: false },
            { answerText: 'Fertility', isCorrect: false },
        ],
    },
    {
        id: 23,
        image: flowers[22],
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Not to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
            { answerText: 'No', isCorrect: false },
        ],
    },
        { 
            id: 24,
            image: flowers[23],
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Sunflower', isCorrect: true },
                { answerText: 'Lantana', isCorrect: false },
                { answerText: 'Dahlia', isCorrect: false },
                
            ],
        },
        {
            id: 24,
            image: flowers[23],
            questionText: 'How long do these live for?',
            answerOptions: [
                { answerText: '1 month', isCorrect: false },
                { answerText: '1 year', isCorrect: false },
                { answerText: '8-12 weeks', isCorrect: true },
            ],
        },
        {
            id: 24,
            image: flowers[23],
            questionText: "When do these bloom?",
            answerOptions: [
                { answerText: 'Spring', isCorrect: false },
                { answerText: 'Summer', isCorrect: true },
                { answerText: 'Fall', isCorrect: false },
            ],
        },
        {
            id: 24,
            image: flowers[23],
            questionText: 'Where is this found?',
            answerOptions: [
                { answerText: 'Africa', isCorrect: false },
                { answerText: 'North America', isCorrect: true},
                { answerText: 'Europe', isCorrect: false },
            ],
        },
        {
            id: 24,
            image: flowers[23],
            questionText: 'What does this flower symbolize?',
            answerOptions: [
                
                { answerText: 'Loyalty', isCorrect: true },
                { answerText: 'Strength', isCorrect: false },
                { answerText: 'Fertility', isCorrect: false },
            ],
        },
        {
            id: 24,
            image: flowers[23],
            questionText: 'Are these poisonous?',
            answerOptions: [
                { answerText: 'Not to Humans', isCorrect: false },
                { answerText: 'Yes', isCorrect: false },
                { answerText: 'No', isCorrect: true },
            ],
        },
        {
            id: 25,
            image: flowers[24],
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Tickseed', isCorrect: true },
                { answerText: 'Lantana', isCorrect: false },
                { answerText: 'Dahlia', isCorrect: false },
                
            ],
        },
        {
            id: 25,
            image: flowers[24],
            questionText: 'How long do these live for?',
            answerOptions: [
                { answerText: '1 month', isCorrect: false },
                { answerText: '1 year', isCorrect: false },
                { answerText: '3-4 years', isCorrect: true },
            ],
        },
        {
            id: 25,
            image: flowers[24],
            questionText: "When do these bloom?",
            answerOptions: [
                { answerText: 'Spring', isCorrect: false },
                { answerText: 'Summer', isCorrect: true },
                { answerText: 'Fall', isCorrect: false },
            ],
        },
        {
            id: 25,
            image: flowers[24],
            questionText: 'Where is this found?',
            answerOptions: [
                { answerText: 'Africa', isCorrect: false },
                { answerText: 'North America', isCorrect: true},
                { answerText: 'Europe', isCorrect: false },
            ],
        },
        {
            id: 25,
            image: flowers[24],
            questionText: 'What does this flower symbolize?',
            answerOptions: [
                
                { answerText: 'Cheerfulness', isCorrect: true },
                { answerText: 'Strength', isCorrect: false },
                { answerText: 'Fertility', isCorrect: false },
            ],
        },
        {
            id: 25,
            image: flowers[24],
            questionText: 'Are these poisonous?',
            answerOptions: [
                { answerText: 'Not to Humans', isCorrect: false },
                { answerText: 'Yes', isCorrect: false },
                { answerText: 'No', isCorrect: true },
            ],
        },
        {
            id: 26,
            image: flowers[25],
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Tulip', isCorrect: true },
                { answerText: 'Lantana', isCorrect: false },
                { answerText: 'Dahlia', isCorrect: false },
                
            ],
        },
        {
            id: 26,
            image: flowers[25],
            questionText: 'How long do these live for?',
            answerOptions: [
                { answerText: '1 month', isCorrect: false },
                { answerText: '1 year', isCorrect: false },
                { answerText: '1-2 weeks', isCorrect: true },
            ],
        },
        {
            id: 26,
            image: flowers[25],
            questionText: "When do these bloom?",
            answerOptions: [
                { answerText: 'Spring', isCorrect: true },
                { answerText: 'Summer', isCorrect: false },
                { answerText: 'Fall', isCorrect: false },
            ],
        },
        {
            id: 26,
            image: flowers[25],
            questionText: 'Where is this found?',
            answerOptions: [
                { answerText: 'Africa', isCorrect: false },
                { answerText: 'North America', isCorrect: false},
                { answerText: 'Europe', isCorrect: true },
            ],
        },
        {
            id: 26,
            image: flowers[25],
            questionText: 'What does this flower symbolize?',
            answerOptions: [
                
                { answerText: 'Love', isCorrect: true },
                { answerText: 'Strength', isCorrect: false },
                { answerText: 'Fertility', isCorrect: false },
            ],
        },
        {
            id: 26,
            image: flowers[25],
            questionText: 'Are these poisonous?',
            answerOptions: [
                { answerText: 'Not to Humans', isCorrect: false },
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },
            ],
        },
        {
            id: 27,
            image: flowers[26],
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Zinnia', isCorrect: true },
                { answerText: 'Lantana', isCorrect: false },
                { answerText: 'Dahlia', isCorrect: false },
                
            ],
        },
        {
            id: 27,
            image: flowers[26],
            questionText: 'How long do these live for?',
            answerOptions: [
                { answerText: '1 month', isCorrect: false },
                { answerText: '1 year', isCorrect: false },
                { answerText: '7-12 days', isCorrect: true },
            ],
        },
        {
            id: 27,
            image: flowers[26],
            questionText: "When do these bloom?",
            answerOptions: [
                { answerText: 'Spring', isCorrect: true },
                { answerText: 'Summer', isCorrect: false },
                { answerText: 'Fall', isCorrect: false },
            ],
        },
        {
            id: 27,
            image: flowers[26],
            questionText: 'Where is this found?',
            answerOptions: [
                { answerText: 'Africa', isCorrect: false },
                { answerText: 'North and Central America', isCorrect: false},
                { answerText: 'Europe', isCorrect: true },
            ],
        },
        {
            id: 27,
            image: flowers[26],
            questionText: 'What does this flower symbolize?',
            answerOptions: [
                
                { answerText: 'Saying Goodbye', isCorrect: true },
                { answerText: 'Strength', isCorrect: false },
                { answerText: 'Fertility', isCorrect: false },
            ],
        },
        {
            id: 27,
            image: flowers[26],
            questionText: 'Are these poisonous?',
            answerOptions: [
                { answerText: 'Not to Humans', isCorrect: false },
                { answerText: 'Yes', isCorrect: false },
                { answerText: 'No', isCorrect: true},
            ],
        },

];

let scores = [];
module.exports = { flowers, quiz, scores }

