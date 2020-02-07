function encodeAndDecodeMessages() {
    const decodeMessage = (ev) => {
        let text = textareaOutput.value;
        textareaOutput.value = '';
        let result = '';

        for (let i = 0; i < text.length; i++) {
            let code = text[i].charCodeAt(0);
            code -= 1;
            let symbol = String.fromCharCode(code);
            result += symbol;
        }

        textareaOutput.value = result;
    };

    const encodeMessage = (ev) => {
        let text = textareaInput.value;
        let result = '';
        
        for (let i = 0; i < text.length; i++) {
            let code = text[i].charCodeAt(0);
            code += 1;
            let symbol = String.fromCharCode(code);
            result += symbol;
        }

        textareaInput.value = '';
        textareaOutput.value = result;
    };

    let textareaInput = document.querySelector('textarea');
    let textareaOutput = document.getElementsByTagName('textarea')[1];
    
    let encodeButton = document.querySelector('button');
    let decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);
}