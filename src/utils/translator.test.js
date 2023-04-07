import { getLessonVocab, toEnglish, toJapanese } from "./translator";

describe('translator', () => {
    it('should return appropriate vocab', () => {
        var actualVocab = getLessonVocab(['food', 'person', '食べる']);

        expect(actualVocab[0].labels).toContain('food');
        expect(actualVocab[1].labels).toContain('person');
        expect(actualVocab[2].kanji).toBe('食べる');
    });

    it('should translate to japanese', () => {
        const expectedTranslation = '私は昼ご飯を食べます';
        const template = { lesson: 'lesson3', enTemplate: '{0} {1} {2}', jpTemplate: '{0}は{1}を{2}', enLabels: ['person', '食べる', 'food'], jpLabels: ['person', 'food', '食べる']};

        const actualTranslation = toJapanese(template, 'present');

        expect(actualTranslation).toBe(expectedTranslation);
    });

    it('should translate to english', () => {
        const expectedTranslation = 'I eat lunch';
        const template = { lesson: 'lesson3', enTemplate: '{0} {1} {2}', jpTemplate: '{0}は{1}を{2}', enLabels: ['person', '食べる', 'food'], jpLabels: ['person', 'food', '食べる']};

        const actualTranslation = toEnglish(template, 'present');

        expect(actualTranslation).toBe(expectedTranslation);
    });
});