const words = [
    {num: 1, word: "alice", definition: "A curious girl from a famous story."},
    {num: 2, word: "alligator", definition: "A big green animal that lives in water and has many teeth."},
    {num: 3, word: "art", definition: "A school subject where you draw and paint."},
    {num: 4, word: "ask", definition: "To say words to get information or a question."},
    {num: 5, word: "aunt", definition: "The sister of your mother or father."},
    {num: 6, word: "baby", definition: "A very young child."},
    {num: 7, word: "backpack", definition: "A bag you carry on your back."},
    {num: 8, word: "bird", definition: "An animal with wings that can fly."},
    {num: 9, word: "board", definition: "The big surface where the teacher writes in class."},
    {num: 10, word: "book", definition: "Many pages together that you read."},
    {num: 11, word: "brave", definition: "Not afraid in a difficult situation."},
    {num: 12, word: "brother", definition: "A boy who has the same parents as you."},
    {num: 13, word: "cat", definition: "A small animal that says \"meow\"."},
    {num: 14, word: "chair", definition: "You sit on this at a table or desk."},
    {num: 15, word: "class", definition: "A group of students who study together."},
    {num: 16, word: "clock", definition: "An object that shows the time."},
    {num: 17, word: "clumsy", definition: "A person who often drops things or falls."},
    {num: 18, word: "coat", definition: "A warm piece of clothing you wear outside."},
    {num: 19, word: "cook", definition: "The person who prepares food in a restaurant."},
    {num: 20, word: "cooking", definition: "Making food in the kitchen."},
    {num: 21, word: "cousin", definition: "The child of your aunt or uncle."},
    {num: 22, word: "dance", definition: "To move your body to music."},
    {num: 23, word: "desk", definition: "A table where you work or study."},
    {num: 24, word: "dog", definition: "An animal that says \"woof\"."},
    {num: 25, word: "door", definition: "You open this to go in or out of a room."},
    {num: 26, word: "drawing", definition: "Making a picture with a pencil or pen."},
    {num: 27, word: "drink", definition: "To put water, juice or another liquid in your mouth."},
    {num: 28, word: "drug", definition: "A strong medicine or illegal chemical people take."},
    {num: 29, word: "elephant", definition: "A very big grey animal with a long trunk."},
    {num: 30, word: "english", definition: "The language you are studying now."},
    {num: 31, word: "father", definition: "The man who is your parent."},
    {num: 32, word: "films", definition: "Stories you watch on TV or at the cinema."},
    {num: 33, word: "fish", definition: "An animal that lives in water and swims."},
    {num: 34, word: "floor", definition: "The part of the room you walk on."},
    {num: 35, word: "football", definition: "A sport where you kick a ball and try to score goals."},
    {num: 36, word: "geography", definition: "A school subject about countries, maps and places."},
    {num: 37, word: "glue", definition: "A sticky thing that joins paper together."},
    {num: 38, word: "go", definition: "To move from one place to another."},
    {num: 39, word: "grandfather", definition: "The father of your mother or father."},
    {num: 40, word: "grandmother", definition: "The mother of your mother or father."},
    {num: 41, word: "guitar", definition: "A musical instrument with strings."},
    {num: 42, word: "hard-working", definition: "A person who studies or works a lot."},
    {num: 43, word: "have lunch", definition: "Eat a meal in the middle of the day."},
    {num: 44, word: "help", definition: "To do something so another person's work is easier."},
    {num: 45, word: "high", definition: "Not low; at a big level or far from the ground."},
    {num: 46, word: "history", definition: "A school subject about the past."},
    {num: 47, word: "horse", definition: "A big animal that people can ride."},
    {num: 48, word: "kind", definition: "A person who is nice and helps people."},
    {num: 49, word: "lazy", definition: "A person who doesn't like working or studying."},
    {num: 50, word: "lion", definition: "A big wild cat, the \"king of the jungle\"."},
    {num: 51, word: "listen", definition: "Use your ears to hear sounds or people."},
    {num: 52, word: "love", definition: "To like someone or something very, very much."},
    {num: 53, word: "maths", definition: "A school subject with numbers and calculations."},
    {num: 54, word: "marx", definition: "A famous thinker about workers and politics."},
    {num: 55, word: "money", definition: "Coins and notes that you use to buy things."},
    {num: 56, word: "mother", definition: "The woman who is your parent."},
    {num: 57, word: "mouse", definition: "A very small animal that likes cheese."},
    {num: 58, word: "ms Fatigato", definition: "The name of your teacher."},
    {num: 59, word: "music", definition: "Sounds with rhythm that you like to listen to."},
    {num: 60, word: "neighbor", definition: "A person who lives near your house."},
    {num: 61, word: "noisy", definition: "Making a lot of loud sounds."},
    {num: 62, word: "notebook", definition: "A small book where you write notes."},
    {num: 63, word: "open", definition: "To move a door, window or book so it is not closed."},
    {num: 64, word: "pay", definition: "Give money when you buy something."},
    {num: 65, word: "pe", definition: "A school subject where you do sport and exercise."},
    {num: 66, word: "pen", definition: "You use it with ink to write."},
    {num: 67, word: "Persephone", definition: "The greek queen of the Underworld."},
    {num: 68, word: "play", definition: "Have fun with a game or toy."},
    {num: 69, word: "rabbit hole", definition: "A deep hole where a rabbit lives."},
    {num: 70, word: "read", definition: "Look at words in a book and understand them."},
    {num: 71, word: "religion", definition: "Ideas about God and different beliefs."},
    {num: 72, word: "revolution", definition: "A big change in government or society."},
    {num: 73, word: "ruler", definition: "A long, flat tool you use to measure or draw lines."},
    {num: 74, word: "run", definition: "To move faster than walking."},
    {num: 75, word: "schoolbag", definition: "A bag where you carry books to school."},
    {num: 76, word: "science", definition: "A school subject about nature and experiments."},
    {num: 77, word: "schizophrenia", definition: "A serious mental illness of the brain."},
    {num: 78, word: "scissors", definition: "A small tool with two blades to cut paper."},
    {num: 79, word: "selfish", definition: "A person who only thinks about themselves."},
    {num: 80, word: "serious", definition: "A person who doesn't smile much and is not playful."},
    {num: 81, word: "sharpener", definition: "A small tool to make a pencil sharp."},
    {num: 82, word: "shy", definition: "A person who is quiet and afraid to speak to people."},
    {num: 83, word: "sister", definition: "A girl who has the same parents as you."},
    {num: 84, word: "sleep", definition: "To rest at night with your eyes closed."},
    {num: 85, word: "speak", definition: "To say words with your mouth."},
    {num: 86, word: "student", definition: "A person who goes to school to learn."},
    {num: 87, word: "stressed", definition: "Feeling very worried and under pressure."},
    {num: 88, word: "sweather", definition: "A warm top you wear over a shirt in cold weather."},
    {num: 89, word: "take", definition: "To pick something up and hold or move it."},
    {num: 90, word: "talkative", definition: "A person who likes speaking a lot."},
    {num: 91, word: "teacher", definition: "A person who helps students learn."},
    {num: 92, word: "tiger", definition: "A big orange and black wild cat."},
    {num: 93, word: "uncle", definition: "The brother of your mother or father."},
    {num: 94, word: "video games", definition: "Games you play on a console, phone or computer."},
    {num: 95, word: "wake up", definition: "Stop sleeping and open your eyes."},
    {num: 96, word: "walk", definition: "To move on your feet, not fast."},
    {num: 97, word: "wall", definition: "The vertical part around a room."},
    {num: 98, word: "window", definition: "The glass part of a wall you can see through."},
    {num: 99, word: "young", definition: "A person who is not old."},
    {num: 100, word: "Yayoy", definition: "The name of an artist who draws dots."}
];

let extractedNumbers = [];
let isSpinning = false;
let playerCards = {card1: [], card2: [], card3: []};

// Generate colors for 100 segments
const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788',
    '#E74C3C', '#3498DB', '#9B59B6', '#1ABC9C', '#F39C12',
    '#D35400', '#C0392B', '#8E44AD', '#2980B9', '#27AE60'
];

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}

function createBoard() {
    const board = document.getElementById('board');
    words.forEach(item => {
        const cell = document.createElement('div');
        cell.className = 'board-cell';
        cell.innerHTML = `<div class="number">${item.num}</div><div class="word">${item.word}</div>`;
        cell.id = `cell-${item.num}`;
        board.appendChild(cell);
    });
}

function createWheel() {
    const wheel = document.getElementById('wheel');
    if (!wheel) return;
    
    const segmentAngle = 360 / 100;
    
    let gradientStops = [];
    for (let i = 0; i < 100; i++) {
        const colorIndex = i % colors.length;
        const startAngle = i * segmentAngle;
        const endAngle = (i + 1) * segmentAngle;
        gradientStops.push(`${colors[colorIndex]} ${startAngle}deg ${endAngle}deg`);
    }
    
    wheel.style.background = `conic-gradient(${gradientStops.join(', ')})`;
}

function spinWheel() {
    if (isSpinning || extractedNumbers.length === 100) return;
    
    isSpinning = true;
    document.getElementById('spinBtn').disabled = true;
    
    let availableNumbers = [];
    for (let i = 1; i <= 100; i++) {
        if (!extractedNumbers.includes(i)) {
            availableNumbers.push(i);
        }
    }
    
    const randomNum = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    
    const wheel = document.getElementById('wheel');
    const spins = 5 + Math.random() * 3;
    const rotation = spins * 360 + Math.random() * 360;
    wheel.style.transform = `rotate(${rotation}deg)`;
    
    setTimeout(() => {
        extractedNumbers.push(randomNum);
        const wordObj = words.find(w => w.num === randomNum);
        
        document.getElementById('extractedNumber').textContent = randomNum;
        document.getElementById('extractedWord').textContent = wordObj.word;
        document.getElementById('extractedDefinition').textContent = wordObj.definition;
        
        const cell = document.getElementById(`cell-${randomNum}`);
        cell.classList.add('extracted');
        
        isSpinning = false;
        document.getElementById('spinBtn').disabled = false;
        
        if (extractedNumbers.length === 100) {
            document.getElementById('spinBtn').textContent = '✅ All Done!';
            document.getElementById('spinBtn').disabled = true;
        }
    }, 3000);
}

function generatePlayerCards() {
    const cardSizes = [14, 15, 16];
    
    ['card1', 'card2', 'card3'].forEach((cardId, idx) => {
        const size = cardSizes[idx];
        let availableWords = [...words];
        let selectedWords = [];
        
        for (let i = 0; i < size; i++) {
            const randomIdx = Math.floor(Math.random() * availableWords.length);
            selectedWords.push(availableWords[randomIdx]);
            availableWords.splice(randomIdx, 1);
        }
        
        playerCards[cardId] = selectedWords;
        renderCard(cardId);
    });
}

function renderCard(cardId) {
    const cardEl = document.getElementById(cardId);
    cardEl.innerHTML = '';
    
    playerCards[cardId].forEach(item => {
        const cell = document.createElement('div');
        cell.className = 'card-cell';
        cell.textContent = item.word;
        cell.onclick = () => cell.classList.toggle('covered');
        cardEl.appendChild(cell);
    });
}

function resetCards() {
    document.querySelectorAll('.card-cell').forEach(cell => {
        cell.classList.remove('covered');
    });
}

// Initialize
createBoard();
createWheel();
generatePlayerCards();