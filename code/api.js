const API = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'

fetch(API)
    .then((response) => response.json())
    .then((data) => console.log(data.results[0].correct_answer))
    .then((data) => console.log(data.results[1].incorrect_answers))
    .then((data) => console.log(data.results[2].question))
    .catch((error) => console.log(error))