import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5">
        Tippu Sultan is one of P K Balarishnan’s earliest works on one of
        India’s prominent historical personalities sometimes loosely described
        as a religious fanatic. Tippu&apos;s life is an unusual tragedy. Anybody
        who comes into contact with the facts of his life will be attracted by
        the drama of his tragic life. This has lead to various dramas and novels
        on his life in different languages. And histories doing factual justice
        to his life were practically non-existent.
      </p>
      <p className="mt-5">
        Tippu Sultan who fought the British relentlessly is however neither
        included in the regional loyalists category nor the national
        champions&apos;. In Tippu Sultan, Balakrishnan studies Indian history in
        a rare light that reflects on other champions of our national cause and
        also takes a look at the ugly side of our national pride.
      </p>
      <p className="mt-5">
        Tippu Sultan&apos;s contact with Malabar is a very small portion of his
        history. To correctly assess Tippu Sultan and Malabar invasion, it is
        necessary to have a proper understanding of Indian history. More than
        two thirds of this book contains Indian history. In that larger Context,
        relevant Kerala history is described as a &apos;close up&apos;.
      </p>
      <p className="mt-5">
        This book is dedicated to the memory of the author&apos;s friend P.K.
        Abdul Khader.
      </p>
    </div>
  );
};

const tippuSultan: Book = {
  id: 'tippu-sultan',
  title: 'Tippu Sulthan',
  subtitle: 'Category : HISTORY',
  overview:
    'Tippu Sultan was an able administrator and one of the rare Indian rulers who could stand up to the British.  His life is an unnatural tragedy that would fascinate anyone trying to know him.  This book examines how the British and Western historians and the natives alike painted him with the brush of religious fanaticism.',
  description: '',
  link: 'https://dcbookstore.com/books/tippu-sulthan',
  thumbnail: '/books-thumbnail/tippu-sultan.jpg',
  cover: '/books-cover/tippu-sultan.jpg',
  contents: Contents,
  firstPublished: 1959,
  publisher: 'D.C Books',
};

export default tippuSultan;
