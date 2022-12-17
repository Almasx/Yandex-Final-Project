import Image from "next/image";
import Button from "../components/atoms/Button";
import CheckBox from "../components/atoms/CheckBox";
import Input from "../components/atoms/Input";

const Contact = () => {
  return (
    <>
      <section className="col-span-12 flex  flex-col gap-10 py-16">
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
      <div className="col-span-12 bg-gradient-to-r from-black via-white/30  to-black pt-[1px]">
        <form action="#" className="grid grid-cols-2 gap-8 bg-dark-bg py-16">
          <Input label="Your name" name="name" />
          <Input label="Your email" name="email" type="email" />
          <Input
            label="Tell Us About The Project (Scope, Timeline, Budget)"
            name="message"
            type="textarea"
            className="col-span-full"
          />
          <CheckBox active={false}>
            I give permission for analyzing data
          </CheckBox>
          <div className="col-span-full">
            <Button
              className="mt-16 w-56 rounded-full py-4 text-2xl font-normal"
              variant="secondary"
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
