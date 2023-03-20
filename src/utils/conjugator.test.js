import { toPolitePresent } from "./conjugator";
describe('conjugator', () => {
    it.each([
        [{ kanji: '起きる', type: 'ichidan verb' }, '起きます' ],
        [{ kanji: '食べる', type: 'ichidan verb' }, '食べます' ],
        [{ kanji: '寝る', type: 'ichidan verb'}, '寝ます' ],
        [{ kanji: '見る', type: 'ichidan verb'}, '見ます' ]
    ])('conjugates ichidan verbs to polite present form', (vocab, expected) => {
        expect(toPolitePresent(vocab)).toBe(expected);
    });

    it.each([
        [{ kanji: '行く', type: 'godan verb'}, '行きます' ],
        [{ kanji: '帰る', type: 'godan verb'}, '帰ります' ],
        [{ kanji: '飲む', type: 'godan verb'}, '飲みます' ],
        [{ kanji: '話す', type: 'godan verb'}, '話します' ],
        [{ kanji: '会う', type: 'godan verb'}, '会います' ],
        [{ kanji: '待つ', type: 'godan verb'}, '待ちます' ],
        [{ kanji: '死ぬ', type: 'godan verb'}, '死にます' ],
        [{ kanji: '死ぬ', type: 'godan verb'}, '死にます' ]
    ])('conjugates godan verbs to polite present form', (vocab, expected) => {
        expect(toPolitePresent(vocab)).toBe(expected);
    });
});