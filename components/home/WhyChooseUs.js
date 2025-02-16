import { aboutArticles } from "@/utils/constant";
import CupIcon from "../icons/CupIcon";
import OneIcon from "../icons/OneIcon";
import IndustryIcon from "../icons/IndustryIcon";

export default function WhyChooseUs() {
  return (
    <section id="about" className="mx-auto max-w-[1368px] space-y-10 px-4">
      <header className="items-center gap-6 space-y-4 md:flex">
        <h2 className="main--heading-2 flex-1">
          Why Choose Us for Your
          <br />
          <span className="text-primary">Halal</span> Products?
        </h2>
        <p
          itemProp="description"
          role="contentinfo"
          aria-label="Important information"
          className="flex-1 text-xl font-bold leading-8 text-body md:text-[22px] md:leading-snug"
        >
          We are committed to providing the highest quality halal meats and a
          diverse range of grocery products, ensuring adherence to Islamic
          principles and delivering the exceptional quality you deserve.
        </p>
      </header>
      <div className="grid justify-items-center gap-9 md:grid-cols-2 lg:grid-cols-3">
        {aboutArticles.map((item) => (
          <ArticleItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
}

function ArticleItem({ icon, title, content }) {
  const Icons = { CupIcon, OneIcon, IndustryIcon };
  const Icon = Icons[icon];
  return (
    <article className="flex max-w-lg flex-col items-center justify-between space-y-4 rounded-[52px] border border-[#fff0da] bg-white px-8 py-6 text-center transition hover:border-transparent hover:shadow-article md:items-start md:space-y-10 md:text-start">
      <Icon className="h-32 w-32" />

      <div className="space-y-4 md:space-y-2">
        <h3 className="mb-4 text-2xl font-bold leading-[1.8]">{title}</h3>
        <p
          itemProp="description"
          role="contentinfo"
          aria-label="Important information"
          className="text-xl leading-[1.8] tracking-tighter text-[#575757]"
        >
          {content}
        </p>
      </div>
    </article>
  );
}
