export const toPolitePresent = (vocab) => {
    let base = vocab.kanji.substring(0, vocab.kanji.length - 1);
    
    let replaceCharacter = getPolitePresentReplaceCharacter(vocab);

    return `${base}${replaceCharacter}ます`;
};

const getPolitePresentReplaceCharacter = (vocab) => {
    let lastCharacter = vocab.kanji.substring(vocab.kanji.length - 1);
        
    if (vocab.type === 'ichidan verb') return '';    
    if (vocab.type === 'godan verb') {
        if (lastCharacter === 'く') return 'き';    
        if (lastCharacter === 'る') return 'り';    
        if (lastCharacter === 'む') return 'み';    
        if (lastCharacter === 'す') return 'し';    
        if (lastCharacter === 'う') return 'い';    
        if (lastCharacter === 'つ') return 'ち';    
        if (lastCharacter === 'ぬ') return 'に';
    }

    return '';
}