function Translate(word, language) {
    this.apikey = "trnsl.1.1.20210427T101006Z.a52d9801f5217139.b0eb841030d0f3d079016f5f864c5119eda3abd7";
    this.word = word;
    this.language = language;

    // XHR object  

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.tranlateWord = function(callback) {


    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;


    this.xhr.open('GET', endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            // console.log(text);

            callback(null, text);
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
        } else {
            callback('Bir xeta oldu', null);
        }
    };


    this.xhr.send();
};


Translate.prototype.changeParameters = function(newWord, newLangualge) {
    this.word = newWord;
    this.language = newLangualge;
};