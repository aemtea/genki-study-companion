export const conjugateJapanese = (vocab, tense) => {
    switch(tense) {
        case 'present':
        case 'past':
            const suffix = tense === 'present' ? 'ます' : 'ました';
            const base = vocab.kanji.substring(0, vocab.kanji.length - 1);
            const replaceCharacter = getReplaceCharacter(vocab);
            return `${base}${replaceCharacter}${suffix}`;
    }
};

export const conjugateEnglish = (vocab, tense) => {
    switch(tense) {
        case 'present':
            return vocab.english.present;
        case 'past':
            return vocab.english.past;
    }
};

const getReplaceCharacter = (vocab) => {
    let lastCharacter = vocab.kanji.substring(vocab.kanji.length - 1);
        
    if (containsLabels(vocab, ['ichidan'])) return '';
    if (containsLabels(vocab, ['godan'])) {
        if (lastCharacter === 'く') return 'き';
        if (lastCharacter === 'る') return 'り';
        if (lastCharacter === 'む') return 'み';
        if (lastCharacter === 'す') return 'し';
        if (lastCharacter === 'う') return 'い';
        if (lastCharacter === 'つ') return 'ち';
        if (lastCharacter === 'ぬ') return 'に';
    }

    return null;
}

const containsLabels = (vocab, labels) => {
    return labels.every(label => {
        return vocab.labels.includes(label);
    });
}