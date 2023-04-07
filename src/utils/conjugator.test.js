import { conjugateEnglish, conjugateJapanese } from "./conjugator";
describe('conjugator', () => {
    it.each([
        [{ kanji: '起きる', labels: ['verb', 'ichidan'] }, '起きます', '起きました' ],
        [{ kanji: '食べる', labels: ['verb', 'ichidan'] }, '食べます', '食べました' ],
        [{ kanji: '寝る', labels: ['verb', 'ichidan']}, '寝ます', '寝ました' ],
        [{ kanji: '見る', labels: ['verb', 'ichidan']}, '見ます', '見ました' ]
    ])('conjugates ichidan verbs to tense', (vocab, expectedPresent, expectedPast) => {
        expect(conjugateJapanese(vocab, 'present')).toBe(expectedPresent);
        expect(conjugateJapanese(vocab, 'past')).toBe(expectedPast);
    });

    it.each([
        [{ kanji: '行く', labels: ['verb', 'godan']}, '行きます', '行きました' ],
        [{ kanji: '帰る', labels: ['verb', 'godan']}, '帰ります', '帰りました' ],
        [{ kanji: '飲む', labels: ['verb', 'godan']}, '飲みます', '飲みました' ],
        [{ kanji: '話す', labels: ['verb', 'godan']}, '話します', '話しました' ],
        [{ kanji: '会う', labels: ['verb', 'godan']}, '会います', '会いました' ],
        [{ kanji: '待つ', labels: ['verb', 'godan']}, '待ちます', '待ちました' ],
        [{ kanji: '死ぬ', labels: ['verb', 'godan']}, '死にます', '死にました' ],
        [{ kanji: '死ぬ', labels: ['verb', 'godan']}, '死にます', '死にました' ]
    ])('conjugates godan verbs to tense', (vocab, expectedPresent, expectedPast) => {
        expect(conjugateJapanese(vocab, 'present')).toBe(expectedPresent);
        expect(conjugateJapanese(vocab, 'past')).toBe(expectedPast);
    });

    it.each([
        [{ english: { present: 'eat', past: 'ate' } }, 'eat', 'ate' ],
    ])('conjugates english verbs to tense', (vocab, expectedPresent, expectedPast) => {
        expect(conjugateEnglish(vocab, 'present')).toBe(expectedPresent);
        expect(conjugateEnglish(vocab, 'past')).toBe(expectedPast);
    });
});