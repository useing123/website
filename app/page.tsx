import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-700 w-full h-vw">
      <h1 className="font-bold text-9xl text-white">Hello! My name is Ossein. This v0 of my website</h1>
      <Link href="https://x.com/useing2">
        <h1 className="font-bold text-9xl text-blue-400">Twitter page</h1>
      </Link>
    </div>
  );
}
