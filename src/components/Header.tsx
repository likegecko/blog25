import { SITE_TITLE } from '../consts';

const Header = () => {
  return (
    <header className="drop-shadow-lg w-full bg-white h-[40px] flex justify-center">
      <div className="w-full max-w-4xl bg-red-100 h-full flex items-center justify-between px-4">
        <h1 className="text-xl font-bold">{SITE_TITLE}</h1>
        <nav className="flex items-center gap-4">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
