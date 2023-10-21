import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <h1>CHILA VYASABHARATHA PADANANGALUM</h1>
      <p>
        P K Balakrishnan has studied the Indian epics in great depth. He had
        Malayalam and English translations of the Mahabharata, some summary
        translations as also a few of the regional variants of both epics in his
        personal library. Ezhuthachan is considered as the father of Malayalam
        literature. Though serious studies have been conducted, no one has dealt
        with how a &apos;translator&apos; of Mahabharath becomes the foremost
        poet and father of Malayalam literature. Ezhuthachan&apos;s Bharatham is
        totally different from the Mahabharth in its perception of life and the
        character structures. The story and event sequence with their relative
        importance in the original is totally rejected by Ezhuthachan. The first
        nine chapters of the book deal with this vital distinction. This is
        followed by a chapter on Adhyatma Ramayanam. The next four chapters deal
        with the peculiarities of the artistic genius of Ezhuthachan. To
        complement the early references to the Vyasabharath, the last chapter
        deals with the evolution of the Vyasabharath.
      </p>
      <p>
        The preface to the book is written by the author&apos;s poet friend Mr.
        Neelamperur Madhudoodanan Nair.
      </p>
    </div>
  );
};

const ezhuthachanteKala: Book = {
  id: 'ezhuthachante-kala',
  title: 'Ezhuthachante Kala',
  shortTitle: 'Ezhuthachante Kala',
  subtitle: 'Category : COLLECTIONS & SELECTED WORKS',
  overview:
    'Mahabharath has lend itself to several rewrites in all languages.  The book explores the magic of the translation that catapults Ezhuthachan as one of the greatest poets and the father of Malayalam literature.  The book also has some critical studies on the original epic itself.',
  description: '',
  link: 'https://dcbookstore.com/books/ezhuthachante-kala-chila-vyasabharatha-patanangalum',
  thumbnail: '/books-thumbnail/ezhuthachante-kala.jpg',
  cover: '/books-cover/ezhuthachante-kala.jpg',
  contents: Contents,
  firstPublished: 1982,
  publisher: 'D.C Books',
};

export default ezhuthachanteKala;
