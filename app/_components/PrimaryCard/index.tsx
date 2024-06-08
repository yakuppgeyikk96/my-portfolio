"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PrimaryCardProps } from "./models";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PrimaryCard({
  title,
  description,
  imageSrc,
  actions,
  links,
  tags,
}: PrimaryCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between">
      {imageSrc ? (
        <CardHeader>
          <Image
            src="/images/test-image.avif"
            alt="blog-post-1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-t-lg"
          />
        </CardHeader>
      ) : null}
      <CardContent className="flex flex-col justify-center pt-4 pb-8 gap-4">
        <h4 className="text-xl font-bold text-dark-500 dark:text-light">
          {title}
        </h4>
        <p className="text-xs font-semibold text-dark-300">{description}</p>
        {links && links.length > 0 ? (
          <div className="flex space-x-4 mt-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="text-dark-500 hover:text-primary-400 dark:text-light dark:hover:text-primary-400 transition duration-300"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        ) : null}
        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
      {actions && actions.length > 0 ? (
        <CardFooter>
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={action.onClick}
              size="sm"
              className="w-full"
            >
              {action.text}
            </Button>
          ))}
        </CardFooter>
      ) : null}
    </Card>
  );
}
