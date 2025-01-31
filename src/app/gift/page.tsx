import dynamic from "next/dynamic";

const Thanks = dynamic(() => import("../_components/Thanks"), { ssr: false });

export default function EmailCapture() {
  return (
    <main className="flex flex-col space-y-5 w-screen h-screen justify-center items-center">
      <Thanks></Thanks>
    </main>
  );
}
