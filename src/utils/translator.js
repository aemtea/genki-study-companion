import { conjugateEnglish, conjugateJapanese } from './conjugator';
import vocab from "../data/vocab";

if (!String.format) {
    String.format = function(format) {
        var input = [];

        if (Array.isArray(arguments[1])) {
            input.push(arguments[0]);
            arguments[1].forEach(arg => {
                input.push(arg);
            });
        } else {
            input = arguments;
        }

        var args = Array.prototype.slice.call(input, 1);
        return format.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
            ? args[number] 
            : match;
        });
    };
}

export const toJapanese = (template, tense) => {
    const vocab =  getLessonVocab(template.jpLabels);
    const conjugatedVocab = vocab.map(v => v.labels.includes('verb') ? conjugateJapanese(v, tense) : v.kanji);
    return String.format(template.jpTemplate, conjugatedVocab);
};

export const toEnglish = (template, tense) => {
    const vocab =  getLessonVocab(template.enLabels);
    const conjugatedVocab = vocab.map(v => v.labels.includes('verb') ? conjugateEnglish(v, tense) : v.english);
    return String.format(template.enTemplate, conjugatedVocab);
}

export const getLessonVocab = (labels) => {
    const matches = vocab.filter(v => labels.includes(v.kanji) || v.labels.some(label => labels.includes(label)));
    const orderedMatches = labels.map(label => matches.filter(match => match.kanji == label || match.labels.includes(label))[0]);
    return orderedMatches;
};