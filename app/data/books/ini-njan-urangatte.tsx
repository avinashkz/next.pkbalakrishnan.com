import Book from '@/types/book';

const Contents = () => {
  return (
    <div className="">
      <p className="mt-5">
        Ini Njan Urangatte by P K Balakrishnan is an epic novel which is counted
        as one of the best novels of Malayalam literature. It was first
        published in 1973.
      </p>
      <p className="mt-5">
        The book subsists on the great epic ‘The Mahabharath’ that has
        flourished over two thousand years. The main element of the novel is the
        story of Karna woven into a delicately and imaginatively developed
        parallel story of Draupadi. Maintaining the original epic atmosphere,
        the story, events and characters are structured in the strains of
        thought of Draupadi, imaginatively constructed. The details of the story
        of Karna closely follows the original epic.
      </p>
      <p className="mt-5">
        The parallel strands of the story of Karna and the recreated story of
        Draupadi flows through the novel, sometimes intertwining. One can behold
        in this flow, the main characters and events of the Mahabharath. The
        book thus has three different foci. It is hoped that an ‘out of focus’
        image thus formed, will have a contour of its own.
      </p>
      <p className="mt-5">
        A timeless classic, the novel has earned for Balakrishnan, the Kerala
        Sahitya Akademi award (1974), Sahitya Pravarthaka Benefit Fund award,
        and the Vayalar award (1978). A constant best seller of the language
        ever since it was published, it has also been translated to different
        Indian languages under the scheme for classics by Kendra Sahitya Akademi
      </p>
      <h3 className="mb-5 mt-10 text-2xl font-medium">Translations</h3>
      <ol>
        <li>
          <p>
            <strong>English</strong>: Battle Beyond Kurukshetra, 2017
          </p>
          <p>Translator: Jayalekshmy P K</p>
          <p>Publisher: Oxford Unviersity Press</p>
          <p> Previous Translation: And Now Let Me Sleep, 1999</p>
          <p>Translator: Dr. K.C. Sarsamma</p>
          <p>Publisher: Kendra Sahitya Akademi</p>
        </li>
        <li>
          <p>
            <strong>Tamil</strong>: Ini Njan Urangattum, 2001
          </p>
          <p>Translator: A. Madhavan</p>
          <p>Publisher: Kendra Sahitya Akademi</p>
        </li>
        <li>
          <p>
            <strong>Kannada</strong>: Naninnu Nidrisuve, 2000
          </p>
          <p>Translator: Sara Aboobacker</p>
          <p>Publisher: Kendra Sahitya Akademi</p>
        </li>
        <li>
          <p>
            <strong>Hindi</strong>: Ab Mujhe Sone Do, 2016
          </p>
          <p>Translator: G. Gopinathan</p>
          <p>Publisher: Kendra Sahitya Akademi</p>
        </li>
      </ol>
    </div>
  );
};

const iniNjanUrangatte: Book = {
  id: 'ini-njan-urangatte',
  title: 'Ini Njan Urangatte',
  subtitle: 'And Now Let Me Sleep (1973)',
  overview:
    'One of the most widely read books in the Malayalam language, it is the story of Karna developed through the thought process of Draupadi and her life.  Without deviating from the story, situations or the epic grandeour of the Mahabharata, it lends a new interpretation to their story.',
  description: '',
  link: 'https://dcbookstore.com/books/ini-njan-urangatte',
  thumbnail: '/books-thumbnail/ini-njan-urangatte.jpg',
  cover: '/books-cover/ini-njan-urangatte.jpg',
  contents: Contents,
  firstPublished: 1973,
  publisher: 'D.C Books',
};

export default iniNjanUrangatte;
