import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/client", label: "Client" },
  { href: "/ssr", label: "SSR" },
];

export default function Nav() {
  return (
    <nav className="w-full bg-zinc-900 text-zinc-100 px-6 py-3">
      <ul className="flex gap-6 text-sm font-medium">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
