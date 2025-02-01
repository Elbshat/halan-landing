import { workItems } from "@/utils/constant";
import CartIcon from "../icons/CartIcon";
import TimerIcon from "../icons/TimerIcon";
import FoodIcon from "../icons/FoodIcon";

export default function HowToWork() {
  return (
    <section id="howToWork" className="max-w-[1368px] mx-auto px-4 space-y-8">
      <header>
        <h3 className="text-center text-primary text-xl font-medium md:font-normal leading-8 md:leading-[1.8] md:tracking-tighter">
          How to work
        </h3>
        <h2 className="text-center">
          From <span className="text-primary">Order to Doorstep</span> in 20
          Minutes
        </h2>
      </header>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-20 place-content-center">
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
      <div className="flex items-center justify-center bg-primary/5 w-12 h-12 md:w-32 md:h-28 rounded-[15%] mb-6">
        <Icon className="w-6 h-6 md:w-12 md:h-12" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-xl leading-8 md:leading-[1.8]">{description}</p>
    </li>
  );
}
