import { profile } from '../config/profile';

import cover24shibafes from '../assets/works/24shibaFes.png';
import video24shibafes from '../assets/works/24shibaFes.mp4';
import cover24shinkan from '../assets/works/24shinkan.png';
import video24shinkan from '../assets/works/24shinkan.mp4';
import cover25omiyafes from '../assets/works/25omiyaFes.png';
import video25omiyafes from '../assets/works/25omiyaFes.mp4';
import cover25shibafes from '../assets/works/25shibaFes.jpg';
import video25shibafes from '../assets/works/25shibaFes.MP4';

import { guessVideoType } from '../utils/mediaTypes';

export const works = [
  {
    // ref: 新規 テキスト ドキュメント.txt
    slug: '24shibafes',
    title: '触れる風　消える葉',
    subtitle: 'サークル制作作品',
    year: '2024',
    category: '制作',
    overview: (
      <>
        ShibaLabに所属して初めて制作した作品。<br />
        「魔法」をテーマに、風や葉の動きを通じて「触れる風　消える葉」という情景を表現しました。<br />
        openFrameworksとC++で実装し、Blenderでモデリングを行いました。
      </>
    ),
    stack: ['openFrameworks', 'C++', 'Blender'],
    media: {
      cover: { src: cover24shibafes, alt: '触れる風　消える葉' },
      video: {
        poster: cover24shibafes,
        sources: [{ src: video24shibafes, type: guessVideoType(video24shibafes) }],
        caption: '動画はミュートで再生されます。',
      },
    },
    links: [
      { label: 'GitHub', href: profile.links.github },
      { label: 'Instagram', href: profile.links.instagram },
    ],
  },
  {
    // ref: 新規 テキスト ドキュメント.txt
    slug: '24shinkan',
    title: '時間旅行',
    subtitle: 'サークル制作作品',
    year: '2024',
    category: '制作',
    overview: (
      <>
        ArduinoとUnityを組み合わせたインタラクティブな作品。<br />
        体験者が時計の針を回すと、映像内の時間を操作できる仕組みになっています。<br />
        時間の流れを視覚的に表現するために、映像制作とプログラミングの両方に取り組みました。
      </>
    ),
    stack: ['Unity', 'Arduino'],
    media: {
      cover: { src: cover24shinkan, alt: '時間旅行' },
      video: {
        poster: cover24shinkan,
        sources: [{ src: video24shinkan, type: guessVideoType(video24shinkan) }],
        caption: '動画はミュートで再生されます。',
      },
    },
    links: [
      { label: 'GitHub', href: profile.links.github },
      { label: 'Instagram', href: profile.links.instagram },
    ],
  },
  {
    // ref: 新規 テキスト ドキュメント.txt
    slug: '25omiyafes',
    title: '言葉の成る木',
    subtitle: 'サークル制作作品',
    year: '2025',
    category: '制作',
    overview: (
      <>
        標準入力された音声をリアルタイムでテキスト化し、<br />
        そのテキストが木の葉のように画面上に成るインタラクティブな作品。<br />
        Unityで映像表現を行い、Blenderでモデリングを行いました。
      </>
    ),
    stack: ['Unity', 'Blender'],
    media: {
      cover: { src: cover25omiyafes, alt: '言葉の成る木' },
      video: {
        poster: cover25omiyafes,
        sources: [{ src: video25omiyafes, type: guessVideoType(video25omiyafes) }],
        caption: '動画はミュートで再生されます。',
      },
    },
    links: [
      { label: 'GitHub', href: profile.links.github },
      { label: 'Instagram', href: profile.links.instagram },
    ],
  },
  {
    // ref: 新規 テキスト ドキュメント.txt
    slug: '25shibafes',
    title: '夜空のキャンバス',
    subtitle: 'サークル制作作品',
    year: '2025',
    category: '制作',
    overview: (
      <>
        体験者がタブレットに描いた星座が、天井に投影された夜空に現れるインタラクティブな作品。<br />
        デザイン以外を全てUnityで実装し、UIや星の動きなど、細部の表現にこだわりました。
      </>
    ),
    stack: ['Unity'],
    media: {
      cover: { src: cover25shibafes, alt: '夜空のキャンバス' },
      video: {
        poster: cover25shibafes,
        sources: [{ src: video25shibafes, type: guessVideoType(video25shibafes) }],
        caption: '動画はミュートで再生されます。',
      },
    },
    links: [
      { label: 'GitHub', href: profile.links.github },
      { label: 'Instagram', href: profile.links.instagram },
    ],
  },
];
