let question
fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple', {
    methods: 'GET',
    mode: 'cors'
}).then(response => response.json())
    .then(data => {
        question = data
        console.log(question)
        view = {
            renderQuestion: function () {
                for (let i = 0; i < question.results.length; i++) {
                    
                }
            }
        }
        view.renderQuestion()

    }
    )