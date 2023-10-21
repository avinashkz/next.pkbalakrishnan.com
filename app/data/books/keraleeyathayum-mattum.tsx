import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5">
        Keraleeyatayum Mattum is a collection of 20 articles published in
        various periodicals over a time. This book owes its origin to the
        efforts of a group of young men who got together to form
        &apos;Pakshikkoottam Books&apos; and decided to have among others, one
        on P.K.Balakrishnan which they titled &apos;The Heart of a Storm&apos;.
        Though their project did not materialise, it resulted in this
        collection.
      </p>
      <p className="mb-2 mt-5">The articles included are:</p>
      <ol className="list-inside list-decimal">
        <li> Some Unbridled Observations on Kunjan Nambiar</li>
        <li>Asan&apos;s Poetic Essence and Problem of life and Death</li>
        <li> Poetry of Kunjunni</li>
        <li> On the essence of Kerala</li>
        <li> Caste and Tribe</li>
        <li> The Components of Advancement</li>
        <li> A lead to the Origins of Sahodaraprasthanam</li>
        <li> Backward Communities: A Lesson in History</li>
        <li> Our Approach to Communalism</li>
        <li>
          Kochappa Komma Union (An article on the prevailing political approach
          to an unified Kerala state, written-July 1953)
        </li>
        <li> Today is August 15th</li>
        <li> Some New Paternal Positions for Bappuji</li>
        <li> Gandhiji and the Marxists</li>
        <li> My Dear Kaliyanrathinam! You Live Long</li>
        <li> An approach to Kuttipuzha</li>
        <li> Tolstoy</li>
        <li> Vyloppilli Sreedhara Menon</li>
        <li> A Great Human being I Saw (on Prof. N. Krishna Pillai)</li>
        <li> Parvathy Ayyappan</li>
        <li> On Mathai Manjooran</li>
      </ol>
    </div>
  );
};
const keraleeyathayumMattum: Book = {
  id: 'keraleeyathayum-mattum',
  title: 'Keraleeyathayum Mattum',
  shortTitle: 'Keraleeyathayum Mattum',
  subtitle: 'Category : ESSAYS',
  overview:
    'This a compilation of articles published in various periodicals over a period of time.',
  description: '',
  link: 'https://dcbookstore.com/books/keraleeyathayum-mattum-p-k-balakrishnante-asamahrutha-rachanakal',
  thumbnail: '/books-thumbnail/keraleeyathayum-mattum.jpg',
  cover: '/books-cover/keraleeyathayum-mattum.jpg',
  contents: Contents,
  publisher: 'D.C Books',
};

export default keraleeyathayumMattum;
