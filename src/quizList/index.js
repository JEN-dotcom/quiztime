const quizList = [
  {
    question:
      " What does Dozen mean? ",
    answers: ["11", "12", "13", "14"],
    correct: "12",
    questionId: "1"
  },
  {
    question:
      'What country is sushi from?',
    answers: ["Wales", "Moldova", "Japan", "Denmark"],
    correct: "Japan",
    questionId: "2"
  },
  {
    question:
      "How Long Is A Fortnight?",
    answers: ["One week", "One month", "27 days", "Two weeks"],
    correct: "Two weeks",
    questionId: "3"
  },
  {
    question: "How long is the lifespan of an average housefly?",
    answers: [
      "28 days",
      "26 days",
      "27 days",
      "29 days"
    ],
    correct: "28 days",
    questionId: "4"
  },
  {
    question: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
    answers: ["8", "5", "6", "7"],
    correct: "6",
    questionId: "5"
  },
  {
    question:
      "How many days are in a year?",
    answers: [
      "364",
      "367",
      "366",
      "365"
    ],
    correct: "365",
    questionId: "10"
  },
  {
    question:
      'According to the Old Testament, how many days did it take God to create the world??',
    answers: ["6", "5", "4", "7"],
    correct: "6",
    questionId: "11"
  },
  {
    question: "How many different kinds of chemical bonds are there?",
    answers: ["3", "4", "2", "5"],
    correct: "3",
    questionId: "13"
  },
  {
    question:
      "How many soccer players should each team have on the field at the start of each match?",
    answers: ["10", "11", "9", "12"],
    correct: "11",
    questionId: "14"
  },
  {
    question:
      "How many countries still have the shilling as currency?",
    answers: [
      "3",
      "6",
      "4",
      "5"
    ],
    correct: "4",
    questionId: "15"
  },
  {
    question: "What is the square root of 144?",
    answers: ["11", "10", "13", "12"],
    correct: "12",
    questionId: "16"
  },
  {
    question: "How many of Henry VIII’s wives were called Catherine?",
    answers: ["2", "3", "5", "4"],
    correct: "3",
    questionId: "17"
  },
  {
    question: "In what US State is the city Nashville?",
    answers: ["Nevada", "Arizona", "Tennessee", "Utah"],
    correct: "Tennessee",
    questionId: "26"
  },
  {
    question: "How many times has Andy Murray won Wimbledon playing singles?",
    answers: ["0", " 3", "2", "1"],
    correct: "2",
    questionId: "18"
  },
  {
    question: "Who owns Google.com?",
    answers: ["Number", "Letter", "Sign", "Alphabet"],
    correct: "Alphabet",
    questionId: "19"
  },
  {
    question: "Which is the world's most populous country?",
    answers: ["India", "China", "Brazil", "America"],
    correct: "China",
    questionId: "20"
  },
  {
    question: "How Long Should You Boil A Hard-Boiled Egg?",
    answers: ["19", "20", "12", "15"],
    correct: "12",
    questionId: "12"
  },
  {
    question:
      "A Broken Clock Is Still Right ___ A Day?",
    answers: ["thrice", "once", "twice", "four times"],
    correct: "twice",
    questionId: "21"
  },
  {
    question:
      "How many World Wars did Switzerland take part in?",
    answers: ["3", "2", "1", "0"],
    correct: "0",
    questionId: "22"
  },
  {
    question: "What year was the very first model of the iPhone released?",
    answers: [
      "2007",
      "2008",
      "2006",
      "2005"
    ],
    correct: "2007",
    questionId: "23"
  },
  {
    question: 'Which is the only vowel not used as the first letter in a US State?',
    answers: ["I", "E", "A", "O"],
    correct: "E",
    questionId: "24"
  },
  {
    question: "At what temperature Fahrenheit does water boil?",
    answers: ["211", "210", "212", "213"],
    correct: "212",
    questionId: "25"
  },
  {
    question: "What year was Heinz established?",
    answers: [
      "1871",
      "1870",
      "1868",
      "1869"
    ],
    correct: "1869",
    questionId: "27"
  },
  {
    question:
      "What's the biggest animal in the world??",
    answers: ["The blue whale", "Tiger", "Panda", "Crocodile"],
    correct: "The blue whale",
    questionId: "9"
  },
  {
    question: " How many countries are in the world?",
    answers: ["195", "194", "193", "196"],
    correct: "195",
    questionId: "28"
  },
  {
    question: "What is the nickname of the US state of Florida?",
    answers: ["Golden State", "Sunshine State", "Bay State", "Treasure State"],
    correct: "Sunshine State",
    questionId: "30"
  },
  {
    question: "About what percentage of the earth's surface is water?",
    answers: [
      "80",
      "60",
      "70",
      "90"
    ],
    correct: "70",
    questionId: "29"
  },
  {
    question:
      "What Insects Can Chew Through Wood And Destroy Your Home?",
    answers: ["Larvae", "Beetles", "Termites", "Ants"],
    correct: "Termites",
    questionId: "31"
  },
  {
    question: "How many players are there in a rugby league team?",
    answers: ["12", "14", "11", "13"],
    correct: "13",
    questionId: "50"
  },
  {
    question: 'How many wonders of the ancient world are there?',
    answers: ["5", "8", " 6", "7"],
    correct: "7",
    questionId: "32"
  },
  {
    question: " How many countries are in Africa??",
    answers: ["100", "54", "25", "68"],
    correct: "54",
    questionId: "37"
  },
  {
    question: "What’s the shortcut for the “copy” function on most computers?",
    answers: [
      "ctrl c",
      "ctrl a",
      "ctrl d",
      "ctrl b"
    ],
    correct: "ctrl c",
    questionId: "33"
  },
  {
    question: "In which year was Joan of Arc burned at the stake?",
    answers: [
      "1433",
      "1431",
      "1432",
      "1430"
    ],
    correct: "1431",
    questionId: "34"
  },
  {
    question: "How many branches are in the U.S. government?",
    answers: ["2", "5", "3", "4"],
    correct: "3",
    questionId: "35"
  },
  {
    question:
      'What year did Margaret Thatcher die?',
    answers: ["2014", "2012", "2011", "2013"],
    correct: "2013",
    questionId: "36"
  },
  {
    question: "How many moons does the earth have?",
    answers: ["1", "0", "2", "3"],
    correct: "1",
    questionId: "38"
  },
  {
    question: "How Many Days Are In February During A Leap Year",
    answers: ["27", "29", "30", "28"],
    correct: "29",
    questionId: "40"
  },
  {
    question: "When was Earth formed?",
    answers: [
      "3.5 billion years ago",
      "2.5 billion years ago",
      "4.5 billion years ago",
      "5.5 billion years ago"
    ],
    correct: "4.5 billion years ago",
    questionId: "41"
  },
  {
    question: "Which planet is the hottest in the solar system?",
    answers: ["Earth", "Jupiter", "Venus", "Mars"],
    correct: "Venus",
    questionId: "42"
  },
  {
    question: "Which isn't a colour of the olympic ring?",
    answers: ["Green", "Red", "Blue", "Orange"],
    correct: "Orange",
    questionId: "43"
  },
  {
    question: "How many films have Al Pacino and Robert De Niro appeared in together?",
    answers: ["2", "1", "4", "3"],
    correct: "4",
    questionId: "44"
  },
  {
    question:
      "Which planet is closest to the sun?",
    answers: ["Earth", "Mars", "Jupiter", "Mercury"],
    correct: "Mercury",
    questionId: "45"
  },
  {
    question:
      "How many valves does the heart have?",
    answers: ["5", "3", "6", "4"],
    correct: "4",
    questionId: "46"
  },
  {
    question: "How many countries are in Europe?",
    answers: ["44", "42", "45", "43"],
    correct: "44",
    questionId: "47"
  },
  {
    question: "Which of these is not a major world ocean?",
    answers: [
      "Pacific",
      "Indian",
      "American",
      "Artic"
    ],
    correct: "American",
    questionId: "39"
  },
  {
    question: "Prunes Were Once Which Kind Of Fruit?",
    answers: [
      "Plums",
      "Apricots",
      "Pears",
      "Figs"
    ],
    correct: "Plums",
    questionId: "48"
  },
  {
    question: "Which planet has the most gravity?",
    answers: ["Mecury", "Saturn", "Jupiter", "Mars"],
    correct: "Jupiter",
    questionId: "49"
  },
  {
    question:
      "What is the smallest country in the world?",
    answers: ["Brazil", "China", "South Korea", "Vatican city"],
    correct: "Vatican city",
    questionId: "6"
  },
  {
    question: "The Great Lakes lie along the Canada/US border. How many are they?",
    answers: ["5", "3", "4", "6"],
    correct: "5",
    questionId: "7"
  },
  {
    question: "Where would you find the cruciate ligament?",
    answers: ["Head", "Shoulder", "Knees", "Toe"],
    correct: "Knees",
    questionId: "8"
  }
];

export default (n = 5) =>
  Promise.resolve(quizList.sort(() => 0.5 - Math.random()).slice(0, n));
