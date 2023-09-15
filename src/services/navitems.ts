export interface NavItem {
  title: string;
  href: string;
  tabIndex: number;
  selected: boolean;
}
// skeleton navItems hardcoded as mock data

export type NavItemListProps = NavItem[];

const fetchMockNavData = async (): Promise<any> => {
  try {
    const navItems: NavItemListProps = [
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
  } catch (error) {
    console.error('Error fetching data', error);
    return [];
  }
};

export default fetchMockNavData;
