import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-4 border-b border-gray-200 pb-2">
          Agnos Assignment
        </h1>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/patient"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Go to Patient
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/staff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Go to Staff
        </a>
      </main>
    </div>
  );
}
