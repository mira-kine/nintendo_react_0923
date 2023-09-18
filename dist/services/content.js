"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// assume receiving content according to params or id, setting up shape of given content for now
// hardcoding mock data for now
const fetchMockContentData = async () => {
    try {
        const content = {
            heading: 'Heading text here',
            imageUrl: '',
            date: '5/01/22',
            title: 'Title copy lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            description: 'Article copy lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lorem ipsum...',
            link: { text: 'Read more', url: '#' },
            buttonSpan1: 'Button',
            buttonSpan2: 'Button',
        };
        return content;
    }
    catch (error) {
        console.error('Error fetching data', error);
        return {};
    }
};
exports.default = fetchMockContentData;
//# sourceMappingURL=content.js.map