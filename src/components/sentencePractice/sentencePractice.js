import { useState } from "react";
import { toEnglish, toJapanese } from "../../utils/translator";

const SentencePractice = (props) => {
    const templates = props.templates.slice();

    const [templatePool, setTemplatePool] = useState(templates);
    const [currentTemplate, setCurrentTemplate] = useState(templates[0]);
    const [currentEnglish, setCurrentEnglish] = useState(toEnglish(templates[0], 'present'));
    const [currentJapanese, setCurrentJapanese] = useState(toJapanese(templates[0], 'present'));
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const onCheckAnswer = () => {
        if (input === currentJapanese) {
            setInput('');
            const currentTemplateIndex = templatePool.indexOf(currentTemplate);
            templatePool.splice(currentTemplateIndex, 1);
            const nextTemplate = templatePool[0];

            setTemplatePool(templatePool);
            setCurrentTemplate(nextTemplate);

            if (nextTemplate) {
                setCurrentEnglish(toEnglish(nextTemplate, 'present'));
                setCurrentJapanese(toJapanese(nextTemplate, 'present'));
            } else {
                setCurrentEnglish('');
                setCurrentJapanese('');

                setOutput('No more sentences to study.');
            }

        } else {
            setOutput('Inorrect!');
        }
    }

    return(
        <div>
            {currentEnglish}
            <input 
                value={input}
                onChange={e => {
                    setInput(e.target.value);
                    setOutput('');
                }} />
            <button type='button' onClick={onCheckAnswer}>Check Answer</button>
            <p>{output}</p>
        </div>
    );
}

export default SentencePractice;