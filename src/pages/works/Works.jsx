import { Link } from 'react-router-dom';
import { works } from '../../data/works';

export default function Works() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <h1>Works</h1>
          <p className="muted">制作物一覧。</p>
        </div>

        <div className="grid">
          {works.map((w) => (
            <article key={w.slug} className="card">
              {w.media?.cover?.src ? (
                <Link to={`/works/${w.slug}`} className="mediaLink" aria-label={`${w.title}の詳細へ`}>
                  <img className="cardThumb" src={w.media.cover.src} alt={w.media.cover.alt || w.title} loading="lazy" />
                </Link>
              ) : null}

              <div className="cardHeader">
                <h2 className="cardTitle" style={{ fontSize: 18 }}>
                  <Link className="link" to={`/works/${w.slug}`}>
                    {w.title}
                  </Link>
                </h2>
                <div className="tagRow" aria-label="技術タグ">
                  {w.stack.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="cardDesc">{w.subtitle}</p>

              <p className="muted" style={{ margin: '0 0 12px', fontSize: 13 }}>
                {w.year} / {w.category}
              </p>

              <div className="cardLinks" aria-label="作品詳細へ">
                <Link className="link" to={`/works/${w.slug}`}>
                  詳細を見る
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
