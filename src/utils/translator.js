import { toPolitePresent } from './conjugator';
import vocab from "../data/vocab";

if (!String.format) {
    String.format = function(format) {
      var args = Array.prototype.slice.call(arguments, 1);
      return format.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number] 
          : match
        ;
      });
    };
  }

export const toJapanese = (template) => {
    // return getLessonVocab(template.jpLabels);

    return '私は昼ご飯を食べます';
};

export const getLessonVocab = (labels) => {
    var matches = vocab.filter(v => labels.includes(v.kanji) || v.labels.some(label => labels.includes(label)));
    var orderedMatches = labels.map(label => matches.filter(match => match.kanji == label || match.labels.includes(label))[0]);
    return orderedMatches;
};