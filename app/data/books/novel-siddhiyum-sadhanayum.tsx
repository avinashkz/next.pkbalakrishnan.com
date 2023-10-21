import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5">
        Sidhiyum Sadhanayum is an acclaimed critical work on novel writing. This
        book is a product of Balakrishnan&apos;s desire to write a role model
        for criticism in Malayalam literature. It conveys the peculiarities and
        special possibilities of novel to the malayali reader. Novel is an art
        form that is not bound by any rules. It changes form in hands of each
        genius. To reduce the specialities of novel as an art form to a
        prescriptive code will be a mistake. But compiling the principles of the
        peculiarities of novel is unavoidable to the growth of the art form in
        any literature.
      </p>
      <p className="mt-5">
        The art and craft of novel writing is discussed based on the novels
        written by three great novelists -Tarasankar Banerjee, the Bengali
        novelist and author of &quot;Aarogyanikethanam&quot;, English novelist
        Jane Austin, and the Russian novelist Fyodor Dostoyevsky
      </p>
      <p className="mt-5">
        The preface to the book is written by Dr. K. Ayyappa Panicker, the
        father of modern Malayalam poetry and the author&apos;s friend.
      </p>
      <p className="mt-5">
        The book is dedicated to the loving memory of his father Kesavanasan.
      </p>
    </div>
  );
};

const novelSiddhiyumSadhanayum: Book = {
  id: 'novel-siddhiyum-sadhanayum',
  title: 'Novel Siddhiyum Sadhanayum',
  subtitle: 'Category : STUDY',
  overview:
    'This is a comprehensive study on the art of novel writing.  It studies three novelists - Bankim Chandra Chatterjee, Jane Austin and Fyodor Dostoyevsky to explore the art of the novel.',
  description: '',
  link: 'https://dcbookstore.com/books/novel-siddhiyum-sadhanayum',
  thumbnail: '/books-thumbnail/novel-siddhiyum-sadhanayum.jpg',
  cover: '/books-cover/novel-siddhiyum-sadhanayum.jpg',
  contents: Contents,
  firstPublished: 1965,
  publisher: 'D.C Books',
};

export default novelSiddhiyumSadhanayum;
