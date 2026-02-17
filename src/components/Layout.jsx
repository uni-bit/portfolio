import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { profile } from '../config/profile';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem(profile.themeStorageKey);
  return saved === 'dark' || saved === 'light' ? saved : 'light';
}

export default function Layout() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(profile.themeStorageKey, theme);
  }, [theme]);

  useEffect(() => {
    const isJsdom = typeof navigator !== 'undefined' && /jsdom/i.test(navigator.userAgent);
    const isTest = typeof process !== 'undefined' && process.env?.NODE_ENV === 'test';
    if (isJsdom || isTest) return;

    if (typeof window.scrollTo !== 'function') return;
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app" id="top">
      <a className="skipLink" href="#main">
        本文へスキップ
      </a>

      <header className="header">
        <div className="container headerInner">
          <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
            <div className="brandTitle">{profile.displayNameJa}</div>
            <div className="brandSub">
              {profile.displayNameEn} / {profile.roleLabel}
            </div>
          </Link>

          <nav className="nav" aria-label="ナビゲーション">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/works">Works</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <button
            type="button"
            className="themeToggle"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label="ダークモード切替"
          >
            {isDark ? 'Dark' : 'Light'}
          </button>
        </div>
      </header>

      <main id="main" className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">
            © {new Date().getFullYear()} {profile.displayNameEn}
          </span>
          <a className="link" href="#top">
            Top
          </a>
        </div>
      </footer>
    </div>
  );
}
