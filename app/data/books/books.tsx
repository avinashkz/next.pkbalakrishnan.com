import battleBeyondKurukshetra from './battle-beyond-kurukshetra';
import iniNjanUrangatte from './ini-njan-urangatte';
import jaathivyavasthithiumKeralacharithravum from './jaathivyavasthithium-keralacharithravum';
import narayanaguru from './narayanaguru';
import tippuSultan from './tippu-sultan';
import pkBalakrishnanteLekhanangal from './pk-balakrishnante-lekhanangal';
import plutoPriyappettaPluto from './pluto-priyappetta-pluto';
import chanduMenonOruPadanam from './chandu-menon-oru-padanam';
import ezhuthachanteKala from './ezhuthachante-kala';
import kavyakalaKumaranasaniloode from './kavyakala-kumaranasaniloode';
import keraleeyathayumMattum from './keraleeyathayum-mattum';
import novelSiddhiyumSadhanayum from './novel-siddhiyum-sadhanayum';
import veerapulakom from './veerapulakom';
import verittaChintakal from './veritta-chintakal';
import Book from '@/types/book';

interface StringMap {
  [key: string]: Book;
}

export const books: StringMap = {
  'battle-beyond-kurukshetra': battleBeyondKurukshetra,
  'ini-njan-urangatte': iniNjanUrangatte,
  'jaathivyavasthithium-keralacharithravum':
    jaathivyavasthithiumKeralacharithravum,
  narayanaguru: narayanaguru,
  'tippu-sultan': tippuSultan,
  'pk-balakrishnante-lekhanangal': pkBalakrishnanteLekhanangal,
  'pluto-priyappetta-pluto': plutoPriyappettaPluto,
  'chandu-menon-oru-padanam': chanduMenonOruPadanam,
  'ezhuthachante-kala': ezhuthachanteKala,
  'kavyakala-kumaranasaniloode': kavyakalaKumaranasaniloode,
  'keraleeyathayum-mattum': keraleeyathayumMattum,
  'novel-siddhiyum-sadhanayum': novelSiddhiyumSadhanayum,
  veerapulakom: veerapulakom,
  'veritta-chintakal': verittaChintakal,
};

export function getBookById(id: string) {
  return books[id];
}

const booksList = [
  battleBeyondKurukshetra,
  iniNjanUrangatte,
  jaathivyavasthithiumKeralacharithravum,
  narayanaguru,
  tippuSultan,
  pkBalakrishnanteLekhanangal,
  plutoPriyappettaPluto,
  chanduMenonOruPadanam,
  ezhuthachanteKala,
  kavyakalaKumaranasaniloode,
  keraleeyathayumMattum,
  novelSiddhiyumSadhanayum,
  veerapulakom,
  verittaChintakal,
];

export default booksList;
