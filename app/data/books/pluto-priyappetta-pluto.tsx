import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5">
        Balakrishnan on Pluto Priyapetta Pluto:&quot;The first reason why the
        story of a dog becomes a part of my autobiography is not only because
        the narrator is myself, but also because the character outline of Pluto
        is that of mine. At the same time the truth remains that the story of
        this dog is a real life incident. The mother and children here are my
        mother and nephews. Similarly other characters are my close
        friends.&quot;
      </p>
    </div>
  );
};
const plutoPriyappettaPluto: Book = {
  id: 'pluto-priyappetta-pluto',
  title: 'Pluto Priyappetta Pluto',
  subtitle: 'Category : NOVEL',
  overview:
    'The only other novel written by the author, it captures the rustic charm and liveliness of his native village, which forms the background for the exploits of his dog Pluto.',
  description: '',
  link: 'https://dcbookstore.com/books/pluto-priyappetta-pluto',
  thumbnail: '/books-thumbnail/pluto-priyappetta-pluto.jpg',
  cover: '/books-cover/pluto-priyappetta-pluto.jpg',
  contents: Contents,
  firstPublished: 1963,
  publisher: 'D.C Books',
};

export default plutoPriyappettaPluto;
