import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5">
        Chandumenon Oru Padanam by Balakrishnan is a study on the first
        Malayalam novelist Oyyarathu Chandu Menon. &quot;It was not the
        greatness of the literary figure of Chandumenon that first attracted me
        to him. His personality is much bigger than his writings. My contact
        with his literature is as a tool that reveals his special personality.
        His personality has many useful facets if understood in the context of
        the prevailing social milieu. My main attempt in this book is to present
        that vast personality which I perceived. It means that this book is not
        strictly a literary criticism. Exclusive essays on literature itself are
        handled through this view point.&quot;
      </p>

      <p className="mt-5">
        The preface to this book is written by the author&apos;s friend Prof. M.
        K. Sanoo.
      </p>

      <p className="mt-5">
        The book is dedicated to his teacher Sri.K.J. Alexander.
      </p>
    </div>
  );
};

const chanduMenonOruPadanam: Book = {
  id: 'chandu-menon-oru-padanam',
  title: 'Chandu Menon Oru Padanam',
  subtitle: 'Category : STUDY',
  overview:
    "A critical study on the first Malayalam novelist and the silent social revolution wrought by the novel Indulekha.  Chandu Menon's personality is bigger than his writings.  The book presents this personality and hence in a strict sense cannot be called a literary criticism.",
  description: '',
  link: 'https://dcbookstore.com/books/chandu-menon-oru-padanam',
  thumbnail: '/books-thumbnail/chandu-menon-oru-padanam.jpg',
  cover: '/books-cover/chandu-menon-oru-padanam.jpg',
  contents: Contents,
  firstPublished: 1957,
  publisher: 'D.C Books',
};

export default chanduMenonOruPadanam;
