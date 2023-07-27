import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-[#9ca3af]">
      <Image
        src="/logo.png"
        alt="Next.js Logo"
        width={800}
        height={400}
        className="shadow-xl rounded-lg"
        priority
      />
    </main>
  );
}
