export const toPolitePresent = (vocab) => {
    let base = vocab.kanji.substring(0, vocab.kanji.length - 1);
    
    let replaceCharacter = getPolitePresentReplaceCharacter(vocab);

    return `${base}${replaceCharacter}ます`;
};

const getPolitePresentReplaceCharacter = (vocab) => {
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