import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p>
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
    'A timeless classic, the novel has received the Kerala Sahitya Akademi award (1974), Sahitya Pravarthaka Benefit Fund award, and the Vayalar award (1978).This novel is counted as one of the best novels of Malayalam literature and constant best seller since it was first published in 1973.',
  description: '',
  link: 'https://dcbookstore.com/books/pluto-priyappetta-pluto',
  thumbnail: '/books-thumbnail/pluto-priyappetta-pluto.jpg',
  cover: '/books-cover/pluto-priyappetta-pluto.jpg',
  contents: Contents,
};

export default plutoPriyappettaPluto;
