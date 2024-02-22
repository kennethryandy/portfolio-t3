/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div>
      <section className="py-20" id="about">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold">Me, Myself and I</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8">
            <p className="text-gray-400 max-w-lg">
              Hi, I&apos;m Kenneth and I love to build cool things on the web
              with great user experiences. I&apos;m a web developer from the
              Philippines who doesn&apos;t drink coffee but loves tea. My
              favorite tea is a good oolong tea. I started my web dev career
              self-taught making websites by hand using HTML, CSS, and JS. I
              decided to take it up a notch and learned various back-end
              technologies to be more versatile.
            </p>
            <div className="flex flex-wrap items-center justify-center mt-8 md:mt-0">
              {/* <FacebookIcon className="text-[#E34F26] mx-2 my-1" />
              <CodepenIcon className="text-[#1572B6] mx-2 my-1" />
              <CodepenIcon className="text-[#F7DF1E] mx-2 my-1" />
              <TypeIcon className="text-[#3178C6] mx-2 my-1" />
              <DribbbleIcon className="text-[#61DAFB] mx-2 my-1" />
              <CodepenIcon className="text-[#339933] mx-2 my-1" />
              <WholeWordIcon className="text-[#21759B] mx-2 my-1" />
              <GitCommitIcon className="text-[#F05032] mx-2 my-1" />
              <GithubIcon className="text-[#181717] mx-2 my-1" />
              <GithubIcon className="text-[#CB3837] mx-2 my-1" />
              <CodepenIcon className="text-[#000000] mx-2 my-1" />
              <GlassesIcon className="text-[#663399] mx-2 my-1" />
              <QrCodeIcon className="text-[#E10098] mx-2 my-1" />
              <DatabaseIcon className="text-[#47A248] mx-2 my-1" /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" id="work">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white">
            Some Things I&apos;ve Built
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <Card className="p-6">
              <div className="mb-4">
                <img
                  alt="Project screenshot"
                  className="rounded-md"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
              <h3 className="text-xl font-semibold dark:text-gray-300">
                Project Title
              </h3>
              <p className="text-gray-500 mt-2">
                A brief description of the project. What it does, the
                technologies used, and any other relevant information.
              </p>
              <div className="flex space-x-2 mt-4">
                <Badge variant="secondary">Tech 1</Badge>
                <Badge variant="secondary">Tech 2</Badge>
                <Badge variant="secondary">Tech 3</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400">
                Want to work together or have any questions? Have a question or
                want to work together?
              </p>
            </div>
            <form className="space-y-4">
              <Input placeholder="Name" type="text" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Subject" type="text" />
              <Textarea placeholder="Message" />
              <Button className="w-full">Hit me up!</Button>
            </form>
          </div>
        </div>
      </section>
      {/* <footer className="bg-[#0a192f] py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">Handcrafted by me © Kenneth Ryan Dy</p>
        </div>
      </footer> */}
    </div>
  );
}
