function focus() {
    const focusDiv = (ev) => {
        let parent = ev.target.parentElement;
        parent.className = 'focused';
    };

    const blurDiv = (ev) => {
        let parent = ev.target.parentElement;
        parent.removeAttribute('class');
    };
    
    let inputFields = Array.from(document.querySelectorAll('input'));

    for (let element of inputFields) {
        element.addEventListener('focus', focusDiv);
        element.addEventListener('blur', blurDiv);
    }
}