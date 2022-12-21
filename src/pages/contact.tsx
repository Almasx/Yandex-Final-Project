import type { ChangeEvent } from "react";
import { useState } from "react";
import { literal } from "zod";
import { object, string } from "zod";
import Button from "../components/atoms/Button";
import CheckBox from "../components/atoms/CheckBox";
import Input from "../components/atoms/Input";
import { trpc } from "../utils/trpc";

const formSchema = object({
  clientName: string({ required_error: "Name is required" }),
  email: string({ required_error: "Email is required" }).email(
    "Must be a valid email"
  ),
  message: string({ required_error: "Message is required" }),
  permission: literal(true),
});

const Contact = () => {
  const postOffer = trpc.offer.postOffer.useMutation();
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    message: "",
    permission: false,
  });

  const onSubmit = (event: any) => {
    event.preventDefault();

    const form = formSchema.parse(formData);
    postOffer.mutate(form);
    console.log(form);

    setFormData({
      clientName: "",
      email: "",
      message: "",
      permission: false,
    });
  };

  return (
    <>
      <section className="col-span-12 flex flex-col gap-10 py-16">
        <div
          className=" flex w-screen animate-scroll-infinite flex-row items-center gap-16
      "
        >
          {Array(4).fill(
            <>
              <header className="box-content whitespace-nowrap text-[160px] ">
                WORK WITH US
              </header>
              <img src="./Circle.svg" alt="" />
            </>
          )}
        </div>
        <h3 className=" text-5xl">
          Always good to see you. Drop us a note about a application, or landing
          project.
        </h3>
      </section>
      <div className="col-span-12 bg-gradient-to-r from-white via-black/30  to-white pt-[1px] dark:from-black dark:via-white/30 dark:to-black">
        <form
          className="grid grid-cols-2 gap-8 bg-light-bg py-16 dark:bg-dark-bg"
          onSubmit={onSubmit}
        >
          <Input
            label="Your name"
            name="name"
            value={formData.clientName}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientName: (e as ChangeEvent<HTMLInputElement>).target.value,
              })
            }
          />
          <Input
            label="Your email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: (e as ChangeEvent<HTMLInputElement>).target.value,
              })
            }
          />
          <Input
            label="Tell Us About The Project (Scope, Timeline, Budget)"
            name="message"
            type="textarea"
            className="col-span-full"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: (e as ChangeEvent<HTMLInputElement>).target.value,
              })
            }
          />
          <CheckBox
            active={formData.permission || false}
            onClick={() =>
              setFormData((previos) => ({
                ...previos,
                permission: !previos.permission,
              }))
            }
          >
            I give permission for analyzing data
          </CheckBox>
          <div className="col-span-full">
            <Button
              className="mt-16 w-56 rounded-full py-4 text-2xl font-normal"
              variant="secondary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
