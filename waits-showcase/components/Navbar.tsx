import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const changeLang = (lang: string) => router.push(router.pathname, router.asPath, { locale: lang });

  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-black/40 backdrop-blur-sm text-white z-50">
      <div className="font-bold text-xl">THE WAITS</div>
      <div className="space-x-4">
        <button onClick={() => changeLang('en')}>EN</button>
        <button onClick={() => changeLang('ja')}>JP</button>
      </div>
    </nav>
  );
}
