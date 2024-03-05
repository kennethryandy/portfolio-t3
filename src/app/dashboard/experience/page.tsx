import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/server";
import { type FC } from "react";

const ExperiencePage: FC = () => {
  const experienceAction = async (formData: FormData) => {
    "use server";
    const technologies =
      formData.get("technologies")?.toString().split(",") ?? [];
    const data = {
      order: parseInt(formData.get("order")?.toString() ?? "0"),
      title: formData.get("title")?.toString() ?? "",
      year: formData.get("year")?.toString() ?? "",
      role: formData.get("role")?.toString() ?? "",
      description: formData.get("description")?.toString() ?? "",
      technologies,
    };
    await api.experience.new.mutate(data);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Experience Dashboard</h1>
      <form action={experienceAction}>
        <div className="space-y-2 mt-8">
          <div>
            <label className="text-xs font-medium" htmlFor="order">
              Order
            </label>
            <Input
              required
              name="order"
              id="order"
              type="number"
              placeholder="Order"
            />
          </div>
          <div>
            <label className="text-xs font-medium" htmlFor="title">
              Title
            </label>
            <Input required name="title" id="title" placeholder="Title" />
          </div>
          <div>
            <label className="text-xs font-medium" htmlFor="year">
              Year
            </label>
            <Input required name="year" id="year" placeholder="Year" />
          </div>
          <div>
            <label className="text-xs font-medium" htmlFor="role">
              Role
            </label>
            <Input required name="role" id="role" placeholder="Role" />
          </div>
          <div>
            <label className="text-xs font-medium" htmlFor="description">
              Description
            </label>
            <Textarea
              required
              name="description"
              id="description"
              placeholder="Type here..."
            ></Textarea>
          </div>
          <div>
            <label htmlFor="technologies">Technologies</label>
            <Input
              required
              name="technologies"
              id="technologies"
              placeholder="Technologies"
            />
          </div>
        </div>
        <Button type="submit" className="w-full mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ExperiencePage;
