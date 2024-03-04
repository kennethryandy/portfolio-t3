import { type FC } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ReachOutSection: FC = ({}) => {
  return (
    <section id="reach-out" className="section mb-96 lg:scroll-mt-28">
      <div className="block lg:hidden py-4 sticky -top-1 z-50 bg-background bg-opacity-85 backdrop-blur-sm -mx-6 px-6 border rounded-none border-b-0 border-x-0">
        <h2 className="font-bold uppercase text-sm tracking-wide">Reach Out</h2>
      </div>
      <div className="lg:max-w-6xl mx-auto lg:px-4">
        <h2 className="text-4xl font-bold">Get in touch</h2>
        <div className="mt-8">
          <div>
            <p className="text-gray-400">
              Want to work together or have any questions? Have a question or
              want to work together?
            </p>
          </div>
          <form className="space-y-4 mt-4">
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Subject" type="text" />
            <Textarea placeholder="Message" />
            <Button className="w-full">Hit me up!</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReachOutSection;
