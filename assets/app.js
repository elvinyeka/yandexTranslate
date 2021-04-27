// * Prototype,Ajax, CallBack


eventListeners();

function eventListeners() {
    document.querySelector('#translate-form').addEventListener('submit', translateWord);

    document.querySelector('#language').onchange = function() {
        // Code Here
        console.log('Event');
        ui.changeUI();
    };
}

const translate = new Translate(document.querySelector('#word').value, document.querySelector('#language').value);
const ui = new UI();

function translateWord(e) {
    const word = document.querySelector('#word').value;
    const language = document.querySelector('#language').value;
    e.preventDefault();
    translate.changeParameters(word, language);
    translate.tranlateWord(function(err, response) {
        if (err) {
            console.log(err);
        } else {

            ui.displayTranslate(response);

        }
    });

}