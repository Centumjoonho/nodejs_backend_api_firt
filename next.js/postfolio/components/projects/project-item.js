import Image from "next/image";
import Layout from "../layout";

export default function ProjectItem({ data }) {
  const Title = data.properties.Name.title[0]?.plain_text;
  const GitHub = data.properties.GitHub.url;
  const Blog = data.properties.Blog.url;
  const Description = data.properties.Description.rich_text[0]?.plain_text;
  const ImageSrc = data.cover.file?.url || data.cover.external.url;

  return (
    <div className="flex flex-col m-3 bg-slate-600 rounded-xl">
      <Image
        className="rounded-t-xl"
        src={ImageSrc}
        alt="cover"
        width="50"
        height={"50"}
        layout="responsive"
        objectFit="none"
        quality={100}
      />

      <h1>{Title}</h1>
      <h3>{Description}</h3>
      <a href={GitHub}>GitHub check</a>
      <a href={Blog}>센텀준호 Blog </a>
    </div>
  );
}
