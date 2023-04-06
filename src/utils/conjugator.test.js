import { toPolitePresent } from "./conjugator";
describe('conjugator', () => {
    it.each([
        [{ kanji: '起きる', labels: ['verb', 'ichidan'] }, '起きます' ],
        [{ kanji: '食べる', labels: ['verb', 'ichidan'] }, '食べます' ],
        [{ kanji: '寝る', labels: ['verb', 'ichidan']}, '寝ます' ],
        [{ kanji: '見る', labels: ['verb', 'ichidan']}, '見ます' ]
    ])('conjugates ichidan verbs to polite present form', (vocab, expected) => {
        expect(toPolitePresent(vocab)).toBe(expected);
    });

    it.each([
        [{ kanji: '行く', labels: ['verb', 'godan']}, '行きます' ],
        [{ kanji: '帰る', labels: ['verb', 'godan']}, '帰ります' ],
        [{ kanji: '飲む', labels: ['verb', 'godan']}, '飲みます' ],
        [{ kanji: '話す', labels: ['verb', 'godan']}, '話します' ],
        [{ kanji: '会う', labels: ['verb', 'godan']}, '会います' ],
        [{ kanji: '待つ', labels: ['verb', 'godan']}, '待ちます' ],
        [{ kanji: '死ぬ', labels: ['verb', 'godan']}, '死にます' ],
        [{ kanji: '死ぬ', labels: ['verb', 'godan']}, '死にます' ]
    ])('conjugates godan verbs to polite present form', (vocab, expected) => {
        expect(toPolitePresent(vocab)).toBe(expected);
    });
});