import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';
import './style.css';

const commonStatements = ['i love you!!', 'mwah mwah mwah'];
const singleCatStatements = [...commonStatements, 'you!!', 'yippee!!'];
const multipleCatStatements = [...commonStatements, 'us!!'];
const allStatements = Array.from(
  new Set([...singleCatStatements, ...multipleCatStatements])
);

// tags used in the cat image api, provided by https://cataas.com/api/tags
const possibilities = {
  cute: commonStatements,
  kiss: multipleCatStatements,
  hug: multipleCatStatements,
  jump: singleCatStatements,
  sleepy: allStatements,
  food: singleCatStatements,
  grumpy: singleCatStatements,
  friends: multipleCatStatements,
  lay: singleCatStatements,
  relaxed: singleCatStatements,
  outside: singleCatStatements,
  wet: singleCatStatements,
  angel: singleCatStatements,
  artist: singleCatStatements,
  attention: singleCatStatements,
  baby: singleCatStatements,
  basket: singleCatStatements,
  bath: singleCatStatements,
  bed: singleCatStatements,
  beautiful: singleCatStatements,
  biscuit: singleCatStatements,
  blanket: singleCatStatements,
  blep: singleCatStatements,
  box: singleCatStatements,
  bread: singleCatStatements,
  bun: singleCatStatements,
  burrito: singleCatStatements,
  cake: singleCatStatements,
  calico: singleCatStatements,
  car: singleCatStatements,
  cat: singleCatStatements,
  cats: singleCatStatements,
  catto: singleCatStatements,
  chair: singleCatStatements,
  chaos: commonStatements,
  close: singleCatStatements,
  closeup: singleCatStatements,
  clothes: singleCatStatements,
  coat: singleCatStatements,
  colorful: singleCatStatements,
  comfy: singleCatStatements,
  computer: singleCatStatements,
  confused: singleCatStatements,
  cooking: singleCatStatements,
  cucumber: singleCatStatements,
  cuddle: multipleCatStatements,
  cuddles: multipleCatStatements,
  cup: singleCatStatements,
  curl: singleCatStatements,
  cutie: singleCatStatements,
  daisy: singleCatStatements,
  dance: singleCatStatements,
  dev: singleCatStatements,
  devcat: singleCatStatements,
  dj: singleCatStatements,
  dogstyle: singleCatStatements,
  donna: singleCatStatements,
  dumb: singleCatStatements,
  ears: singleCatStatements,
  engineer: singleCatStatements,
  excited: singleCatStatements,
  eye: singleCatStatements,
  eyes: singleCatStatements,
  facecat: singleCatStatements,
  floof: singleCatStatements,
  flowers: singleCatStatements,
  fluffy: singleCatStatements,
  flying: singleCatStatements,
  focused: singleCatStatements,
  fun: singleCatStatements,
  funn: singleCatStatements,
  funny: singleCatStatements,
  gamer: singleCatStatements,
  gaming: singleCatStatements,
  gg: singleCatStatements,
  goodness_gracious: singleCatStatements,
  goofy: singleCatStatements,
  grooming: singleCatStatements,
  happy: singleCatStatements,
  headinacup: singleCatStatements,
  headphones: singleCatStatements,
  hedgehog: singleCatStatements,
  held: singleCatStatements,
  hello: singleCatStatements,
  hi: singleCatStatements,
  hide: singleCatStatements,
  high_quality: singleCatStatements,
  hot: singleCatStatements,
  hug: multipleCatStatements,
  hunger: singleCatStatements,
  hungry: singleCatStatements,
  icecream: singleCatStatements,
  jump: singleCatStatements,
  jumping: singleCatStatements,
  kick: singleCatStatements,
  kitten: singleCatStatements,
  kittens: multipleCatStatements,
  kitty: singleCatStatements,
  laughing: singleCatStatements,
  laying: singleCatStatements,
  lazy_fuck: singleCatStatements,
  legs: singleCatStatements,
  lick: singleCatStatements,
  licking: singleCatStatements,
  loaf: singleCatStatements,
  looking: singleCatStatements,
  lustful: singleCatStatements,
  nicecat: singleCatStatements,
  nose: singleCatStatements,
  mama: singleCatStatements,
  manspreading: singleCatStatements,
  mask: singleCatStatements,
  melon: singleCatStatements,
  meow: singleCatStatements,
  mew: singleCatStatements,
  pancakes: singleCatStatements,
  party: singleCatStatements,
  paw: singleCatStatements,
  pc: singleCatStatements,
  petting: singleCatStatements,
  pic: singleCatStatements,
  pillow: singleCatStatements,
  pingu: singleCatStatements,
  play: singleCatStatements,
  playful: singleCatStatements,
  please: singleCatStatements,
  pleasing: singleCatStatements,
  plushie: singleCatStatements,
  praise: singleCatStatements,
  pretty: singleCatStatements,
  professional: singleCatStatements,
  programmer: singleCatStatements,
  quality: singleCatStatements,
  rainbow: singleCatStatements,
  reading: singleCatStatements,
  relaxing: singleCatStatements,
  resting: singleCatStatements,
  rich: singleCatStatements,
  roll: singleCatStatements,
  rolling: singleCatStatements,
  running: singleCatStatements,
  sassy: singleCatStatements,
  scream: singleCatStatements,
  selfie: singleCatStatements,
  serious: singleCatStatements,
  several: multipleCatStatements,
  shark: singleCatStatements,
  shirt: singleCatStatements,
  shit: singleCatStatements,
  shocked: singleCatStatements,
  shoe: singleCatStatements,
  siamese: singleCatStatements,
  sideways: singleCatStatements,
  silly: singleCatStatements,
  sing: singleCatStatements,
  sit: singleCatStatements,
  sitting: singleCatStatements,
  sleep: singleCatStatements,
  sleeping: singleCatStatements,
  slick: singleCatStatements,
  slide: singleCatStatements,
  slip: singleCatStatements,
  small: singleCatStatements,
  smile: singleCatStatements,
  smirk: singleCatStatements,
  smol: singleCatStatements,
  snow: singleCatStatements,
  sock: singleCatStatements,
  soda: singleCatStatements,
  soft: singleCatStatements,
  sound: multipleCatStatements,
  space: singleCatStatements,
  spicy: singleCatStatements,
  spin: singleCatStatements,
  spooked: singleCatStatements,
  standing: singleCatStatements,
  stare: singleCatStatements,
  staring: singleCatStatements,
  startled: singleCatStatements,
  stealing: singleCatStatements,
  strawberry: singleCatStatements,
  strech: singleCatStatements,
  stretch: singleCatStatements,
  stripes: singleCatStatements,
  strong: singleCatStatements,
  stuck: singleCatStatements,
  stupid: singleCatStatements,
  sunglass: singleCatStatements,
  sunglasses: singleCatStatements,
  sunshi: singleCatStatements,
  sunshibamgu: singleCatStatements,
  supermodel: singleCatStatements,
  surprised: singleCatStatements,
  sushi: singleCatStatements,
  swimming: singleCatStatements,
  tabby: singleCatStatements,
  tired: singleCatStatements,
  tongue: singleCatStatements,
  tortie: singleCatStatements,
  tortoiseshell: singleCatStatements,
  toys: singleCatStatements,
  transparent: singleCatStatements,
  trapped: singleCatStatements,
  tree: singleCatStatements,
  turntable: singleCatStatements,
  tux: singleCatStatements,
  tuxedo: singleCatStatements,
  twitter: singleCatStatements,
  two: multipleCatStatements,
  twocats: multipleCatStatements,
  twoface: singleCatStatements,
  typing: singleCatStatements,
  unicorn: singleCatStatements,
  uwu: singleCatStatements,
  vacuum: singleCatStatements,
  vegetable: singleCatStatements,
  victory: singleCatStatements,
  waiting: singleCatStatements,
  wakup: singleCatStatements,
  walking: singleCatStatements,
  water: singleCatStatements,
  white: singleCatStatements,
  white_fur: singleCatStatements,
  why: singleCatStatements,
  window: singleCatStatements,
  witch: singleCatStatements,
  worker: singleCatStatements,
  xena: multipleCatStatements,
  yang: multipleCatStatements,
  yawn: singleCatStatements,
  yawning: singleCatStatements,
  yeay: singleCatStatements,
  ying: multipleCatStatements,
  yoga: singleCatStatements,
  zusia: singleCatStatements,
};

const tags = Object.keys(possibilities);

const loadingStatements = [
  'Loading...',
  'Luring cats...',
  'Hugging cats...',
  'Waking cats up...',
  'Fetching cats...',
];

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomArrayElement = (arr) => {
  return arr[randomInt(0, arr.length - 1)];
};

export default function App() {
  const [cat, setCat] = React.useState();
  const [previousCats, setPreviousCats] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const content = loading ? (
    <h1 className="note">{randomArrayElement(loadingStatements)}</h1>
  ) : cat ? (
    <div className="cat-img-container">
      <img
        src={cat}
        alt="cute cat"
        className={previousCats.length > 0 ? 'cat-img-small' : 'cat-img'}
      />
    </div>
  ) : (
    <h1 className="note">Press the button below to generate a cat.</h1>
  );

  const handleFetchCat = async () => {
    try {
      setLoading(true);
      const randomTag = randomArrayElement(tags);
      const randomText = randomArrayElement(possibilities[randomTag]);

      const url = `https://cataas.com/cat/${randomTag}/says/${randomText}`;
      const res = await fetch(url);
      const imgBlob = await res.blob();
      const imgUrl = URL.createObjectURL(imgBlob);
      console.log({ tag: randomTag });

      setPreviousCats((prev) => [...prev, imgBlob]);
      setCat(imgUrl);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert('There was an error fetching cats :(');
    }
  };

  const scrollRef = useHorizontalScroll();

  return (
    <main>
      <div className="header">
        <h1>Cats That Love You.</h1>
      </div>
      <div className="content">
        <div className="cat-container">{content}</div>
        <div className="rest">
          <button className="generate-btn" onClick={handleFetchCat}>
            <div className="paw-container">
              <FaPaw fill="#1f1f1f" />
            </div>
            <h2>Generate :3</h2>
          </button>
        </div>
      </div>
      {previousCats.length > 0 ? (
        <div className="gallery">
          {previousCats.slice(0, previousCats.length).map((blob) => {
            const url = URL.createObjectURL(blob);
            return (
              <a
                key={url}
                className="gallery-cat-container"
                href={url}
                download
              >
                <img className="gallery-cat" src={url} alt="cute cat" />
              </a>
            );
          })}
        </div>
      ) : (
        <div className="gallery-empty">
          <span className="note">Generated cats will show up here!!</span>
        </div>
      )}
      <div className="footer">
        <span>
          <FiGithub />
          <a
            className="github-link"
            href="https://github.com/andouu"
            target="_blank"
          >
            andouu
          </a>
        </span>
        <span>I love Soap!!!</span>
        <span>Made in 2023.</span>
      </div>
    </main>
  );
}
