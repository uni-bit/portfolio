import { Link, useParams } from 'react-router-dom';
import { works } from '../../data/works';
import { ImageMedia, VideoMedia } from '../../components/WorkMedia';

export default function WorkDetail() {
  const { slug } = useParams();
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return (
      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h1>Not Found</h1>
            <p className="muted">指定された作品が見つかりませんでした。</p>
          </div>
          <Link className="link" to="/works">
            Works一覧へ戻る
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <h1>{work.title}</h1>
          <p className="muted">
            {work.year} / {work.category}
          </p>
        </div>

        <div className="workMedia">
          <ImageMedia src={work.media?.cover?.src} alt={work.media?.cover?.alt || work.title} />
          <VideoMedia
            sources={work.media?.video?.sources}
            poster={work.media?.video?.poster}
            caption={work.media?.video?.caption}
          />
        </div>

        <div className="about" style={{ alignItems: 'start' }}>
          <div className="aboutText">
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>Overview</h2>
            <p className="muted">
              {typeof work.overview === 'string' ? work.overview : <>{work.overview}</>}
            </p>

            {work.highlights?.length ? (
              <>
                <h2 style={{ fontSize: 18, margin: '18px 0 8px' }}>Highlights</h2>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {work.highlights.map((h) => (
                    <li key={h} className="muted">
                      {h}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            <div style={{ marginTop: 18 }}>
              <Link className="link" to="/works">
                ← Works一覧へ
              </Link>
            </div>
          </div>

          <aside className="aboutPanel">
            <h3 className="panelTitle">Stack</h3>
            <div className="chipRow" aria-label="技術スタック">
              {work.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
