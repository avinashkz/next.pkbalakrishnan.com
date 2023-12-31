import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5 font-bold">
        Light from the fire burning afar mingled with the moonlight in
        Kurukshetra to create a terrible twilight. Scattered corpses ... broken
        chariots ... sporadic death cries ... prowling scavengers ... the
        battlefield stretched endlessly.
      </p>
      <p className="mt-5">
        The victorious Pandava camps burst into deafening cheers amidst burning
        funeral pyres. The Great War was finally over. But soon enough, when
        everyone learns the truth about the hated enemy, Karna, that towering
        figure with the golden glow, another battle starts. Everyone stands
        stunned, forgetting to even cry. Torn by the guilt of fratricide,
        Yudhishtira becomes a recluse. Draupadi becomes restless: her tryst with
        reality begins. What seemed a justifiable end to an ignominious
        character completely overturns. Her pride for her husbands’ valour
        erodes. Life as she had understood slowly begins to lose meaning.
      </p>
      <p className="mt-5">
        This Malayalam classic centres on Karna, the most criticized yet admired
        character of the Mahabharata, treacherously killed by his half- brother
        Arjuna. His life story unfolds through the eyes of Draupadi, in
        flashbacks and tales she hears from those around her in the aftermath of
        the battle of Kurukshetra.
      </p>
    </div>
  );
};

const battleBeyondKurukshetra: Book = {
  id: 'battle-beyond-kurukshetra',
  title: 'Battle Beyond Kurukshetra',
  subtitle: 'A Mahabharata Novel',
  overview:
    'This is the English translation of the Malayalam classic of Balakrishnan’s Ïni Njan Urangatte, a work originating from the Vyasabharatha. The novel is the journey of Draupadi’s realisation.  The novel is enriched by its insightful take on life which is complemented by beautiful imagery and lyrical prose.',
  description: '',
  link: 'https://www.amazon.in/Battle-Beyond-Kurukshetra-Balakrishnan-Jayalekshmy/dp/0199480168',
  thumbnail: '/books-thumbnail/battle-beyond-kurukshetra.jpg',
  cover: '/books-cover/battle-beyond-kurukshetra.jpg',
  contents: Contents,
  firstPublished: 'First Published as Ebook by DC Books in 2014',
  publisher: 'Oxford University Press',
};

export default battleBeyondKurukshetra;
