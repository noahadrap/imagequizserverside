


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
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Acaia', isCorrect: true },
            
        ],
    },
    {
        id: 1,
        questionText: 'How Long Do Acaia Trees live?',
        answerOptions: [
            { answerText: '10-20 years', isCorrect: false },
            { answerText: '20-30 years', isCorrect: true },
            { answerText: '30-40 years', isCorrect: false },
        ],
    },
    {
        id: 1,
        questionText: 'What animals feed off this?',
        answerOptions: [
            { answerText: 'Both of these', isCorrect: true },
            { answerText: 'Elephants', isCorrect: false },
            { answerText: 'Giraffes', isCorrect: false },
        ],
    },
    {
        id: 1,
        questionText: 'Where do these trees grow?',
        answerOptions: [
            { answerText: 'Austrailia', isCorrect: false },
            { answerText: 'South Africa', isCorrect: false },
            { answerText: 'both of these', isCorrect: true },
        ],
    },
    {
        id: 1,
        questionText: 'What protection do these trees have for herbivores?',
        answerOptions: [
            
            { answerText: 'Termites', isCorrect: false },
            { answerText: 'Poisonous leaves', isCorrect: false },
            { answerText: 'Thorns', isCorrect: true },
        ],
    },
    {
        id: 1,
        questionText: 'What color do these leaves have when blooming?',
        answerOptions: [
            { answerText: 'Red', isCorrect: false },
            { answerText: 'Green', isCorrect: false },
            { answerText: 'Yellow', isCorrect: true },
        ],
    },
     
    {
        id: 2,
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Alyssum', isCorrect: true },
            
        ],
    },
    {
        id: 2,
        questionText: 'How are the smell of these best described?',
        answerOptions: [
            { answerText: 'No smell', isCorrect: false },
            { answerText: 'Sweet', isCorrect: true },
            { answerText: 'Sour', isCorrect: false },
        ],
    },
    {
        id: 2,
        questionText: 'How long do these spread?',
        answerOptions: [
            { answerText: '3 to 6 inches', isCorrect: true },
            { answerText: '6 to 9 inches', isCorrect: false },
            { answerText: '9 to 12 inches', isCorrect: false },
        ],
    },
    {
        id: 2,
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Only to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
        ],
    },
    {
        id: 2,
        questionText: 'What does this classify as?',
        answerOptions: [
            
            { answerText: 'Flower', isCorrect: false },
            { answerText: 'Tree', isCorrect: false },
            { answerText: 'Evergreen', isCorrect: true },
        ],
    },
    {
        id: 2,
        questionText: 'How Many Seeds are in a cell?',
        answerOptions: [
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '1', isCorrect: true },
        ],
    },

    {
        id: 3,
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Amaryllis', isCorrect: true },
            
        ],
    },
    {
        id: 3,
        questionText: 'What is this flower known to symbolize?',
        answerOptions: [
            { answerText: 'Love', isCorrect: false },
            { answerText: 'Strength', isCorrect: true },
            { answerText: 'Hate', isCorrect: false },
        ],
    },
    {
        id: 3,
        questionText: "How long is this flower's lifespan?",
        answerOptions: [
            { answerText: '6 weeks', isCorrect: true },
            { answerText: '2 weeks', isCorrect: false },
            { answerText: '5 months', isCorrect: false },
        ],
    },
    {
        id: 3,
        questionText: 'Are these poisonous?',
        answerOptions: [
            { answerText: 'Only to Humans', isCorrect: false },
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
        ],
    },
    {
        id: 3,
        questionText: 'How tall do these grow?',
        answerOptions: [
            
            { answerText: '0-12 inches', isCorrect: false },
            { answerText: '36-48 inches', isCorrect: false },
            { answerText: '18-36 inches', isCorrect: true },
        ],
    },
    {
        id: 3,
        questionText: 'Where are these native to?',
        answerOptions: [
            { answerText: 'Austrailia', isCorrect: false },
            { answerText: 'Europe', isCorrect: false },
            { answerText: 'Africa', isCorrect: true },
        ],
    },


];

module.exports = { flowers, quiz }

