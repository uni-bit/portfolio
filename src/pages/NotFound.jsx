import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <h1>Not Found</h1>
          <p className="muted">ページが見つかりませんでした。</p>
        </div>
        <Link className="link" to="/">Homeへ戻る</Link>
      </div>
    </section>
  );
}
