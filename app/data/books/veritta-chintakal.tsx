import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5">
        Veritta Chintakal is a collection of articles on Indian history and
        social history of Kerala which Balakrishnan wrote in Madhyamam Daily
        when he was Chief Editor which he had titled &apos;Sermons From The
        Mount&apos;. These were reflections triggered by contemporary events in
        the political space.
      </p>

      <p className="mt-5">The articles are:</p>
      <ol className="mt-5 list-inside list-decimal">
        <li> India: From Gandhiji to Ambedkar</li>
        <li> The White Looters, Independent India etc</li>
        <li> Gandhiji, Cabinet Mission Plan and Partition of India</li>
        <li> On Demon, Structure of Nation etc</li>
        <li> Ambedkar and Governance Mechanism of India</li>
        <li> The Great Transition of India</li>
        <li> A Tribute to the Non violent (Dis)order in the land of Bharath</li>
        <li> I am a Communalist</li>
        <li> A Mirage in the name of Roop Kanwar</li>
        <li> An Index to Anti reservation and Reservation Strikes</li>
        <li> Caste Society of India- A glance through History</li>
        <li> Sonny Boy and the Egg – A childhood Memory</li>
        <li> A Footnote to Gorbachev and Peristroika</li>
        <li> Tippu and Historians</li>
        <li> The Guru who Undertook a Pilgrimage to Humanity</li>
        <li> Sahodaran Ayyappan</li>
        <li> Swamy Satyavirthan – A Symbol of Sree Narayana Guru’s Vision</li>
      </ol>
    </div>
  );
};

const verittaChintakal: Book = {
  id: 'veritta-chintakal',
  title: 'Veritta Chintakal',
  subtitle: 'Category : COLLECTIONS & SELECTED WORKS',
  overview:
    "A collection of articles on Indian history and social history of Kerala written in Madhyamam Daily titled 'Sermons From The Mount'.  These were reflections triggered by contemporary events in the political space.",
  description: '',
  link: '',
  thumbnail: '/books-thumbnail/veritta-chintakal.jpg',
  cover: '/books-cover/veritta-chintakal.jpg',
  contents: Contents,
  firstPublished: 2011,
  publisher: 'D.C Books',
};

export default verittaChintakal;
