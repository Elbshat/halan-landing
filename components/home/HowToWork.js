import { workItems } from "@/utils/constant";
import CartIcon from "../icons/CartIcon";
import TimerIcon from "../icons/TimerIcon";
import FoodIcon from "../icons/FoodIcon";

export default function HowToWork() {
  return (
    <section id="howToWork" className="mx-auto max-w-[1336px] space-y-8 px-4">
      <header className="text-center">
        <h3 className="text-xl font-medium leading-8 text-primary md:font-normal md:leading-[1.8] md:tracking-tighter">
          How to work
        </h3>
        <h2 className="main--heading-2">
          From <span className="text-primary">Order to Doorstep</span> in 20
          Minutes
        </h2>
      </header>
      <ul className="grid place-content-center gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20">
        {workItems.map(({ title, description, icon }) => (
          <WorkItem
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </ul>
    </section>
  );
}

function WorkItem({ title, description, icon }) {
  const icons = { CartIcon, TimerIcon, FoodIcon };
  const Icon = icons[icon];
  return (
    <li className="flex flex-col items-center text-center max-md:max-w-sm">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[15%] bg-primary/5 md:h-28 md:w-32">
        <Icon className="h-6 w-6 md:h-12 md:w-12" />
      </div>
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <p
        itemProp="description"
        role="contentinfo"
        aria-label="Important information"
        className="text-xl leading-8 md:leading-[1.8]"
      >
        {description}
      </p>
    </li>
  );
}
