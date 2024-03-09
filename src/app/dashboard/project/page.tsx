"use client";
import { type FC, type ChangeEvent, type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { UploadResponseData } from "@/types/api-types";
import { api } from "@/trpc/react";

type Data = {
  order: number;
  title: string;
  url: string;
  sourceCode: string;
  type: "featured" | "archived";
  description: string;
  technologies: string[];
};

const ExperiencePage: FC = () => {
  const projectMutation = api.project.new.useMutation();

  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<Data>({
    order: 0,
    title: "",
    url: "",
    sourceCode: "",
    type: "featured",
    description: "",
    technologies: [],
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setData((currState) => ({
      ...currState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (file) {
      const formData = new FormData();
      formData.set("file", file);
      const res = (await fetch("/api/upload", {
        method: "POST",
        body: formData,
      }).then((res) => res.json())) as UploadResponseData;
      if (res.success) {
        const projectData = {
          ...data,
          image: res.data.id,
        };
        projectMutation.mutate(projectData, {
          onSettled() {
            setData({
              order: 0,
              title: "",
              url: "",
              sourceCode: "",
              type: "featured",
              description: "",
              technologies: [],
            });
            setIsLoading(false);
          },
        });
      }
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2 mt-8">
          <div>
            <label className="text-xs font-medium" htmlFor="image">
              Image
            </label>
            <Input
              onChange={(e) => {
                setFile(e.target.files?.[0] ?? null);
              }}
              required
              name="image"
              id="image"
              type="file"
            />
          </div>
          <div>
            <label className="text-xs font-medium" htmlFor="order">
              Order
            </label>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData((currState) => ({
                  ...currState,
                  order: parseInt(e.target.value) ?? 0,
                }));
              }}
              required
              name="order"
              value={data.order}
              id="order"
              type="number"
              placeholder="Order"
            />
          </div>
          <div>
            <label className="text-xs font-medium" htmlFor="title">
              Title
            </label>
            <Input
              onChange={handleChange}
              required
              value={data.title}
              name="title"
              id="title"
              placeholder="Title"
            />
          </div>
          <div>
            <label className="text-xs font-medium" htmlFor="url">
              Url
            </label>
            <Input
              onChange={handleChange}
              required
              name="url"
              value={data.url}
              id="url"
              placeholder="Url"
            />
          </div>
          <div>
            <label className="text-xs font-medium" htmlFor="sourceCode">
              Source Code
            </label>
            <Input
              value={data.sourceCode}
              onChange={handleChange}
              name="sourceCode"
              id="sourceCode"
              placeholder="Source Code"
            />
          </div>
          <div>
            <label className="text-xs font-medium">Type</label>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <label className="text-xs font-medium" htmlFor="featured">
                  Featured
                </label>
                <Input
                  onChange={handleChange}
                  className="w-fit h-fit"
                  type="radio"
                  name="type"
                  id="featured"
                  value="featured"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-xs font-medium" htmlFor="archived">
                  Archived
                </label>
                <Input
                  onChange={handleChange}
                  className="w-fit h-fit"
                  type="radio"
                  name="type"
                  id="archived"
                  value="archived"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium" htmlFor="description">
              Description
            </label>
            <Textarea
              onChange={(e) => {
                setData((currState) => ({
                  ...currState,
                  description: e.target.value,
                }));
              }}
              value={data.description}
              required
              name="description"
              id="description"
              placeholder="Type here..."
            ></Textarea>
          </div>
          <div>
            <label htmlFor="technologies">Technologies</label>
            <Input
              value={data.technologies.join(",")}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData((currState) => ({
                  ...currState,
                  technologies: e.target.value.split(","),
                }));
              }}
              required
              name="technologies"
              id="technologies"
              placeholder="Technologies"
            />
          </div>
        </div>
        <Button type="submit" className="w-full mt-4" disabled={isLoading}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ExperiencePage;
