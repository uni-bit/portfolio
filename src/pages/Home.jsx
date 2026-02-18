import { Link } from 'react-router-dom';
import { profile } from '../config/profile';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container heroInner">
          <h1 className="heroTitle">{profile.hero.title}</h1>
          <p className="heroLead">{profile.hero.lead}</p>

          <div className="heroCtas">
            <Link className="button" to="/works">
              作品を見る
            </Link>
            <Link className="button buttonSecondary" to="/contact">
              連絡する
            </Link>
          </div>

          <ul className="heroMeta" aria-label="補足情報">
            <li>Location: {profile.hero.location}</li>
            <li>Focus: {profile.hero.focus}</li>
            <li>
              Links:{' '}
              <a className="link" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {' '} /{' '}
              <a className="link" href={profile.links.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>About</h2>
          </div>

          <div className="about">
            <div className="aboutText">
              <p className="bodyText">
                2005/11/26日生まれ。<br />
                埼玉県出身。<br />
                芝浦工業大学 工学部 情報通信コースに所属しています。<br />
                ソフトウェアとハードウェアの両方を学んでいます。<br />
                子どものころからPCとゲームが趣味で、これらを学べる情報系の学部に進学しました。<br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>経歴</h2>
          </div>

          <ul className="timeline">
            <li>2021年 4月 和光国際高校 入学</li>
            <li>2024年 3月 和光国際高校 卒業</li>
            <li>2024年 4月 芝浦工業大学 工学部 情報通信コース 入学</li>
            <li>2025年 7月 TOEIC 820点取得</li>
            <li>2028年 3月 芝浦工業大学 工学部 情報通信コース 卒業予定</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>サークル</h2>
          </div>

          <p className="bodyText">
            デジタルインタラクティブアート作品を製作・展示するサークル「ShibaLab」に所属。<br />
            作品制作、勉強会、コンテストの開催など、積極的に活動しています。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>アルバイト</h2>
          </div>

          <p className="bodyText">
            1年次半ばから2年次まで個人塾講師をしていました。<br />
            生徒が今どこまで理解できているかを都度確認し、レベルに合った指導ができるよう心がけてきました。
          </p>
        </div>
      </section>
    </>
  );
}
