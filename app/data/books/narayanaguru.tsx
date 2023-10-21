import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5">
        Narayana Guru written and compiled by P K Balakrishnan is an exceptional
        work on the great social reformer of Kerala and spiritual leader Sri.
        Narayana Guru published on the event of his birth centenary. It gives a
        rare insight into the person that he was and the activities of the
        visionary. The book is carefully crafted with a selection of essays by
        many eminent personalities and essays written by Balakrishnan himself.
        The essays are classified into eight parts as follows:
      </p>
      <ol className="mt-5 list-inside list-disc">
        <li>
          <span className="font-semibold">
            Dark Background and Some Resplendent Documents:
          </span>
          <p className="pl-5">
            This section contains 38 documents consisting of articles by
            prominent personalities, proclamations, extracts from other
            documents etc. Greatness cannot be de-linked from space and time.
            Seen in this context, a life history not linked to a historical
            background will be incomplete. Swami&apos;s activities and the
            ascendancy of Ezhavas ( A hindu community of kerala) are
            interlinked. The effort in this section is to give a brief of the
            historical background necessary for this study.
          </p>
        </li>

        <li>
          <span className="font-semibold">
            A Life Changed Without Knowing Challenge:{' '}
          </span>
          <p className="pl-5">
            It is not the intention of the book to chronologically describe the
            life of the saint. Depending on the interest and ability of the
            reader a concept of the saint will get imprinted in their minds from
            the book. This section also contains the brief anecdotes/ sayings of
            the Sri Narayana Guru.
          </p>
        </li>

        <li>
          <span className="font-semibold">The Mirror of Memories:</span>
          <p className="pl-5">
            This section contains seven commemorative articles by people who
            were closely associated with Narayana Guru.
          </p>
        </li>

        <li>
          <span className="font-semibold">Biographical Setting: </span>
          <p className="pl-5">
            These are articles by Balakrishnan himself on the life of seven of
            Gurudev&apos;s disciples who were versatile in nature and beliefs
            and yet worked together without compromising their beliefs. And that
            ability to work together getting beyond their inherent
            contradictions is Narayana Guru.
          </p>
        </li>

        <li>
          <span className="font-semibold">
            The Poetry of Vision and the Poet&apos;s Vision:
          </span>
          <p className="pl-5">
            This section intents to give a picture of Narayana Guru as a poet.
            Though he was never reputed as a poet, he wrote some of the best
            hymns in the language. The preface to the hymns and instructions
            regarding the selections were given by Dr. Sukumar Azhicode
          </p>
        </li>

        <li>
          <span className="font-semibold">Contemporary Narayana Guru:</span>
          <p className="pl-5">
            We are products of contemporary times. The events we see are also
            coloured by this subconscious &apos;political&apos; beliefs. This
            section contains such contemporary studies of the Guru. This direct
            transition in time may help to understand history better. This
            section contains six studies.
          </p>
        </li>

        <li>
          <span className="font-semibold">
            A Reformer in the Arena of Religion:
          </span>
          <p className="pl-5">
            This section contains nine articles on what the authors perceived as
            the religious beliefs of Narayana Guru. Whether the Guru was an
            inventor of a new religious philosophy or a religious reformer is an
            open question.
          </p>
        </li>

        <li>
          <span className="font-semibold">
            Narayana Guru and Social Transition:
          </span>
          <p className="pl-5">
            The Narayana Guru we know today primarily is a social reformer. Any
            study that does not touch the social aspect will be unrealistic.
            This section contains six articles that predominantly deal with the
            social angle.
          </p>
        </li>
      </ol>
    </div>
  );
};
const narayanaguru: Book = {
  id: 'narayanaguru',
  title: 'Narayanaguru',
  subtitle: 'Category : COLLECTIONS & SELECTED WORKS',
  overview:
    'The book is a collection of essays on the great social reformer of Kerala and spiritual leader Sri. Narayana Guru published on the event of his birth centenary. It gives a rare insight into the person and activities of a visionary.',
  description: '',
  link: 'https://dcbookstore.com/books/narayanaguru',
  thumbnail: '/books-thumbnail/narayanaguru.jpg',
  cover: '/books-cover/narayanaguru.jpg',
  contents: Contents,
  firstPublished: 1954,
  publisher: 'D.C Books',
};

export default narayanaguru;
