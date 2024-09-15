import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Home page</h1>
      <Link href="/dashboard">Go to dashboard</Link>
    </div>
  );
}
