import { profile } from '../../config/profile';

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <h1>Contact</h1>
          <p className="muted">ご連絡はこちらから。</p>
        </div>

        <div className="about">
          <div className="aboutText">
            <p>
              お問い合わせはメール、またはInstagramのDMからお願いします。
            </p>
            <div style={{ marginTop: 12 }}>
              <a className="button" href={`mailto:${profile.contactEmail}`}>
                メールする
              </a>
            </div>
          </div>

          <aside className="aboutPanel">
            <h2 className="panelTitle">Links</h2>
            <div className="panelLinks">
              <a className="link" href={`mailto:${profile.contactEmail}`}>
                {profile.contactEmail}
              </a>
              <a className="link" href={profile.links.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="link" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
