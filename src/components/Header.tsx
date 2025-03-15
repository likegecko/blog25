import { SITE_TITLE } from '../consts';

const Header = () => {
  return (
    <header className="drop-shadow-sm w-full bg-white h-[60px] flex justify-center">
      <div className="w-full max-w-4xl h-full flex items-center justify-between px-4">
        <a href="/">
          <h1 className="text-xl font-bold">{SITE_TITLE}</h1>
        </a>
        <nav className="flex items-center gap-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
