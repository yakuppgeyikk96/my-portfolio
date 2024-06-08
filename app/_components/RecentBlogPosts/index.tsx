"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionTitle from "../SectionTitle";
import PrimaryCard from "../PrimaryCard";
import { recentBlogPosts } from "./constants";

export default function RecentBlogPosts() {
  return (
    <section className="container mx-auto px-16 py-12">
      <SectionTitle title="Recent Blog Posts" />
      <div>
        <Carousel className="w-full">
          <CarouselContent>
            {recentBlogPosts.map((post) => (
              <CarouselItem
                key={post.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <PrimaryCard
                  title={post.title}
                  description={post.description}
                  imageSrc={post.imageSrc}
                  tags={post.tags}
                  actions={[
                    {
                      text: "Read More",
                      onClick: () => {},
                    },
                  ]}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
