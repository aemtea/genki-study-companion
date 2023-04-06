import { getLessonVocab, toJapanese } from "./translator";

describe('translator', () => {
    it('should return appropriate vocab', () => {
        var actualVocab = getLessonVocab(['food', 'person', '食べる']);

        expect(actualVocab[0].labels).toContain('food');
        expect(actualVocab[1].labels).toContain('person');
        expect(actualVocab[2].kanji).toBe('食べる');
    });

    it('should translate', () => {
        const expectedTranslation = '私は昼ご飯を食べます';
        const template = { lesson: 'lesson3', enTemplate: '{0} {1} {2}', jpTemplate: '{0}は{1}を{2}', enLabels: ['person', 'verb', 'food'], jpLabels: ['person', 'food', 'verb']};

        const actualTranslation = toJapanese(template);

        expect(actualTranslation).toBe(expectedTranslation);
    });
});