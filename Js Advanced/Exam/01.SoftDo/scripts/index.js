function mySolution() {
    const replyQuestion = (ev) => {
        const parent = ev.target.parentElement.parentElement;
        const replySection = parent.querySelector('.replySection');

        if (ev.target.textContent === 'Back') {
            replySection.style.display = 'none';
            ev.target.textContent = 'Reply';
        } else {
            replySection.style.display = 'block';
            ev.target.textContent = 'Back';
        }
    };

    const answerQuestion = (ev) => {
        const parent = ev.target.parentElement.parentElement;
        const replyInput = parent.querySelector('.replyInput');
        const ol = parent.querySelector('.replySection .reply');

        if (replyInput) {
            const liItem = document.createElement('li');
            liItem.textContent = replyInput.value;

            ol.appendChild(liItem);

            parent.querySelector('.replySection .replyInput').value = '';
        }
    };

    const openQuestion = (ev) => {
        const parentDiv = ev.target.parentElement.parentElement;

        const question = parentDiv.querySelector('p').textContent;
        const name = parentDiv.querySelector('span').textContent;

        removeQuestion(ev);

        const divOpenQuestion = document.createElement('div');
        divOpenQuestion.className = 'openQuestion';

        const userImg = document.createElement('img');
        userImg.src = './images/user.png';
        userImg.width = 32;
        userImg.height = 32;

        const spanName = document.createElement('span');
        spanName.textContent = name;

        const pQuestion = document.createElement('p');
        pQuestion.textContent = question;

        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'actions';

        const replyButton = document.createElement('button');
        replyButton.className = 'reply';
        replyButton.textContent = 'Reply';
        replyButton.addEventListener('click', replyQuestion);

        buttonWrapper.appendChild(replyButton);

        const replySection = document.createElement('div');
        replySection.className = 'replySection';

        const replyInput = document.createElement('input');
        replyInput.className = 'replyInput';
        replyInput.type = 'text';
        replyInput.placeholder = 'Reply to this question here...';

        const answerButton = document.createElement('button');
        answerButton.className = 'replyButton';
        answerButton.textContent = 'Send';
        answerButton.addEventListener('click', answerQuestion);

        const orderedList = document.createElement('ol');
        orderedList.className = 'reply';
        orderedList.type = '1';

        replySection.appendChild(replyInput);
        replySection.appendChild(answerButton);
        replySection.appendChild(orderedList);

        replySection.style.display = 'none';

        divOpenQuestion.appendChild(userImg);
        divOpenQuestion.appendChild(spanName);
        divOpenQuestion.appendChild(pQuestion);
        divOpenQuestion.appendChild(buttonWrapper);
        divOpenQuestion.appendChild(replySection);

        openQuestionsSection.appendChild(divOpenQuestion);
    };

    const removeQuestion = (ev) => {
        const buttonWrapper = ev.target.parentElement;
        pendingQuestionsSection.removeChild(buttonWrapper.parentElement);
    };

    const askQuestion = (ev) => {
        let realName = '';
        const question = textareaQuestion.value;
        const name = inputName.value;

        if (question !== '') {
            if (name === '') {
                realName = 'Anonymous';
            } else {
                realName = name;
            }

            const divPendingQuestion = document.createElement('div');
            divPendingQuestion.className = 'pendingQuestion';

            const userImg = document.createElement('img');
            userImg.src = './images/user.png';
            userImg.width = 32;
            userImg.height = 32;

            const spanName = document.createElement('span');
            spanName.textContent = realName;

            const pQuestion = document.createElement('p');
            pQuestion.textContent = question;

            const buttonWrapper = document.createElement('div');
            buttonWrapper.className = 'actions';

            const archiveButton = document.createElement('button');
            archiveButton.className = 'archive';
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', removeQuestion);

            const openButton = document.createElement('button');
            openButton.className = 'open';
            openButton.textContent = 'Open';
            openButton.addEventListener('click', openQuestion);

            buttonWrapper.appendChild(archiveButton);
            buttonWrapper.appendChild(openButton);

            divPendingQuestion.appendChild(userImg);
            divPendingQuestion.appendChild(spanName);
            divPendingQuestion.appendChild(pQuestion);
            divPendingQuestion.appendChild(buttonWrapper);

            pendingQuestionsSection.appendChild(divPendingQuestion);

            textareaQuestion.value = '';
            inputName.value = '';
        }
    };

    const pendingQuestionsSection = document.querySelector('#pendingQuestions');
    const openQuestionsSection = document.querySelector('#openQuestions')

    const textareaQuestion = document.querySelector('#inputSection textarea');
    const inputName = document.querySelector('#inputSection input');

    const sendButton = document.querySelector('#inputSection button');
    sendButton.addEventListener('click', askQuestion);
}
