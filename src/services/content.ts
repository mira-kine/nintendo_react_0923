export interface ContentProps {
  heading: string;
  image: string | null;
  date: string;
  title: string;
  description: string;
  link: string | null;
  buttonSpan1: string;
  buttonSpan2: string;
}

// assume receiving content according to params or id, setting up shape of given content for now
// hardcoding mock data for now
const fetchMockContentData = async (): Promise<any> => {
  try {
    const content: ContentProps = {
      heading: 'Heading text here',
      image: '',
      date: '5/01/22',
      title:
        'Title copy lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      description:
        'Article copy lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lorem ipsum...',
      link: 'Read more',
      buttonSpan1: 'Button',
      buttonSpan2: 'Button',
    };
    return content;
  } catch (error) {
    console.error('Error fetching data', error);
    return {};
  }
};

export default fetchMockContentData;
