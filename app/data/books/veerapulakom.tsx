import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5">
        Veerapulakathinte Katha is a collection of though provoking essays
        written by PK Balakrishnan. The credit for this book goes to Poorna
        Printing & Publishing house, Varkala and Dr S Shaji. Of the compilation
        of 25 articles, 20 are related to history. The evolution of the caste
        sytem in India, the fatal blow the British rule dealt to it and the
        skewed manifestations of the attempts to tilt back the clock come up
        repeatedly in many of these essays. Our failure to appreciate the depths
        to which caste influences our thinking denies the ability to confront
        reality and to come out of its clutches. What started as social reform
        movements is soon overshadowed by regressive counter-movements that seek
        to fight the forces that strike at the roots of the injustices of the
        cast system. It is a tragedy that we are unable to distinguish in our
        freedom struggle these forces from the aspiration and confidence of a
        new thinking striving for self-determination. The articles deal with
        this complex subject in different contexts and levels, Kerala History,
        literature etc.
      </p>
      <p className="mt-5">The book consists of the following collection:</p>
      <ol className="mt-5 list-inside list-decimal">
        <li>What is Narayana Guru?</li>
        <li>The Relevance of the School at Shivagiri</li>
        <li>Asan and Vallathol</li>
        <li>N Kumaranasan</li>
        <li>The Social Vision of Kumaranasan</li>
        <li>The Fear of Death, Simple Death and Real Death</li>
        <li>The Altar of Poetry</li>
        <li>
          The Social Revolution that was Stitched Instead of the Silk Blouse.
        </li>
        <li>The Story of a Heroic Thrill</li>
        <li>About a Great Man Whom I Have Not Met</li>
        <li>A Play that Wrote History by Itself.</li>
        <li>Parasuram the Paper Tiger and Aaromal, the Hero.</li>
        <li>Me, Zamorin, Gama et al</li>
        <li>Our Great Tradition of Peace</li>
        <li>An Introduction to the Study of Tradition in Kerala</li>
        <li>Marxism and Literature</li>
        <li>Decadent Writing and Socialist Realism</li>
        <li>The Feudal Literature of Communist Leaders</li>
        <li>Some Regtrograde Thoughts about Literary Criticism</li>
        <li>Citicism of Literature of Kerala</li>
        <li>Our Revolutionary System and Feudalism</li>
        <li>Some General Facts About History</li>
        <li>The State of Kerala History and the Basis of Approach of EMS</li>
        <li>An Introduction to the History of Namboodiris</li>
        <li>Namboodiri and The Society of Kerala</li>
      </ol>
    </div>
  );
};

const veerapulakom: Book = {
  id: 'veerapulakom',
  title: 'Oru Veerapulakathinte Katha',
  subtitle: 'Category : HISTORY',
  overview:
    'This is a compilation of articles on a variety of subjects.  Some of them were part of lively discussions in the intellectual space of Kerala when healthy dissent was still an accepted norm.',
  description: '',
  link: '',
  thumbnail: '/books-thumbnail/veerapulakom.jpg',
  cover: '/books-cover/veerapulakom.jpg',
  contents: Contents,
  firstPublished: 2015,
  publisher: 'D.C Books',
};

export default veerapulakom;
