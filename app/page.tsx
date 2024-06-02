import Header from "./_components/Header";
import MyProficients from "./_components/MyProficients";
import ProminentServices from "./_components/ProminentServices";
import RecentProjects from "./_components/RecentProjects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MyProficients />
        <RecentProjects />
        <ProminentServices />
        <div className="h-20"></div>
      </main>
    </>
  );
}
