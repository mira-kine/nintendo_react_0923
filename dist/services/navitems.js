"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// skeleton navItems hardcoded as mock data
const fetchMockNavData = async () => {
    try {
        const navItems = [
            {
                title: 'Section 1',
                href: '/section1',
                tabIndex: 1,
                selected: true,
            },
            {
                title: 'Section 2',
                href: '/section2',
                tabIndex: 2,
                selected: false,
            },
            {
                title: 'Section 3',
                href: '/section3',
                tabIndex: 3,
                selected: false,
            },
            {
                title: 'Section 4',
                href: '/section4',
                tabIndex: 4,
                selected: false,
            },
            {
                title: 'Section 5',
                href: '/section5',
                tabIndex: 5,
                selected: false,
            },
        ];
        return navItems;
    }
    catch (error) {
        console.error('Error fetching data', error);
        return [];
    }
};
exports.default = fetchMockNavData;
//# sourceMappingURL=navitems.js.map