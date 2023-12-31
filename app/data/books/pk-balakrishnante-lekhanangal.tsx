import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <h2 className="mt-10 text-xl font-semibold">
        MAAYAATHA SANDHYAKAL <small>UNFADING TWILIGHTS</small>
      </h2>
      <p className="mt-5">
        The studies in the anthology originally published under the title
        Maayatha Sandhyakal were written over a span of 18 years from 1960. They
        were born out of a sense of duty impelled by the warmth of his personal
        affection.
      </p>
      <p className="mt-5">
        The book is a collection of 8 essays. The first is a discourse on beauty
        as a value concept. The remaining articles are on well figures and
        people dear to him. There are two essays each on Karoor Neelakanta
        Pillai and C.J. Thomas and one each on Kuttykrishna Marar, C.N.Srikandan
        Nair and P.K. Vikraman Nair.
      </p>

      <p className="mt-5">The articles are:</p>
      <ol className="list-inside list-decimal">
        <li>Society and &apos;beauty&apos; as a value</li>
        <li>On Kuttykrishna Marar</li>
        <li>Karoor - the individual and artist.</li>
        <li>&apos;Desire&apos; in stories of Karoor</li>
        <li>The tragedy of perfection</li>
        <li>Drama literature and C.J. Thomas</li>
        <li>C.N. Srikandan Nair and plays on Ramayana</li>
        <li>P.K.Vikraman Nair</li>
      </ol>

      <h2 className="mt-10 text-xl font-semibold">
        NIDRA SAHCHARANGAL <small>SLEEP WALKINGS</small>
      </h2>

      <p className="mt-5">
        The anthology originally published as Nidrasancharangal owes its
        existence to the loving encouragement of Poorna Publications.
      </p>
      <p className="mt-5">The book contains 15 articles as follows:</p>
      <ol className="mt-5 list-inside list-decimal">
        <li>Good Novel and Great Novel</li>
        <li>C.V the Novelist. (On C.V. Raman Pillai)</li>
        <li>Chandu Menon and the Social Background.</li>
        <li>
          A Lead to Takazhi&apos;s &quot;Kayar&quot;(On Takazhi Sivasankara
          Pillai&apos;s novel &quot;Kayar&quot;)
        </li>
        <li>Jane Austin - a new note.</li>
        <li>A letter of Changampuzha and Some Obsevations on Changampuzha.</li>
        <li>Daily life Through Moments (an article on Changampuzha)</li>
        <li>
          Marble Path to Hell (some observations on European and Indian history)
        </li>
        <li>An Introduction to the Phenomenon of Ambedkar.</li>
        <li>Gandhiji and Ambedkar</li>
        <li>Kumaran Asan -The Political Worker.</li>
        <li>Nehru- A poser to the Biographical Art.</li>
        <li>The Wealth we Should Receive From Other Languages.</li>
        <li>Works of Other Languages in Malayalam.</li>
        <li>A Poser in the history of Journalisam</li>
      </ol>

      <p className="mt-5">First Reprinted April 2004 - Publisher DC Books</p>
    </div>
  );
};
const balakrishnanteLekhanangal: Book = {
  id: 'pk-balakrishnante-lekhanangal',
  title: 'P K Balakrishnante Lekhanangal',
  subtitle: 'Category : COLLECTIONS & SELECTED WORKS',
  overview:
    'This book was originally published as two different books Mayaathasandyakal and Nidrasanchangal. The first contains the warm reflections on 8 people who was close to him; whom he loved and respected.  The second is a compilation of various articles written over a period of time.',
  description: '',
  link: 'https://dcbookstore.com/books/p-k-balakrishnante-lekhanangal',
  thumbnail: '/books-thumbnail/pk-balakrishnante-lekhanangal.jpg',
  cover: '/books-cover/pk-balakrishnante-lekhanangal.jpg',
  contents: Contents,
  firstPublished: 'Mayathasandhyakal 1978 & Nidrasancharangal 1989',
  publisher: 'D.C Books',
};

export default balakrishnanteLekhanangal;
