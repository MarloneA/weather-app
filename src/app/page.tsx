import Aside from "./components/templates/aside";
import Main from "./components/templates/main";

export default function Home() {
  return (
    <main className="bg-[url('/image/clouds.jpg')] flex flex-row w-screen h-screen">
      <Aside />
      <Main />
    </main>
  );
}
