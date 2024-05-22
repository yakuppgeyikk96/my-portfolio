import Header from "./_components/Header";
import MyProficients from "./_components/MyProficients";
import RecentProjects from "./_components/RecentProjects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MyProficients />
        <RecentProjects />
      </main>
    </>
  );
}
