import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import MyProficients from "./_components/MyProficients";
import ProminentServices from "./_components/ProminentServices";
import RecentBlogPosts from "./_components/RecentBlogPosts";
import RecentProjects from "./_components/RecentProjects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <RecentBlogPosts />
        <RecentProjects />
        <MyProficients />
        <ProminentServices />
        <div className="h-20"></div>
        <Button>Button</Button>
      </main>
    </>
  );
}
