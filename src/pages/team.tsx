import { YMaps, GeoObject, Map } from "react-yandex-maps";
import MemberCard from "../components/molecules/MemberCard";
import Location from "../components/molecules/Location";

const Team = () => {
  return (
    <>
      <section className="relative col-span-full h-screen ">
        <div className="absolute h-full w-full scale-110">
          <div className="absolute inset-0 m-auto aspect-square h-5/6 object-cover">
            <svg
              fill="none"
              className="circle absolute top-[50%] left-[50%] h-[85%] w-[85%] translate-y-[-50%] translate-x-[-50%] opacity-70"
              viewBox="0 0 479 477"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M239.519 476.587C371.259 476.587 478.057 369.912 478.057 238.321C478.057 106.73 371.259 0.0539551 239.519 0.0539551C107.779 0.0539551 0.981445 106.73 0.981445 238.321C0.981445 369.912 107.779 476.587 239.519 476.587Z"
                fill="url(#linear_1)"
                fill-opacity="0.01"
              />
              <path
                d="M477.557 238.321C477.557 369.635 370.984 476.087 239.519 476.087C108.055 476.087 1.48145 369.635 1.48145 238.321C1.48145 107.006 108.055 0.553955 239.519 0.553955C370.984 0.553955 477.557 107.006 477.557 238.321Z"
                className="stroke-[url(#linear_3)] dark:stroke-[url(#linear_2)]"
                stroke-opacity="0.36"
              />
              <defs>
                <linearGradient
                  id="linear_1"
                  x1="239.519"
                  y1="0.0539551"
                  x2="240"
                  y2="477"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="linear_2"
                  x1="239.518"
                  y1="-0.224147"
                  x2="239.518"
                  y2="476.865"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#8D8D8D" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="linear_3"
                  x1="239.518"
                  y1="-0.224147"
                  x2="239.518"
                  y2="476.865"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stop-color="#8D8D8D" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="sun">
              <div className="dot">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      opacity="0.9"
                      d="M5.03955 9.91162L4.63223 10.8767L23.9336 19.0233L24.3409 18.0583L5.03955 9.91162Z"
                      className="fill-[url(#paint0_linear_27_1118)] dark:fill-[url(#paint2_linear_27_1118)]"
                    />
                    <path
                      opacity="0.9"
                      d="M10.8966 24.322L9.93148 23.9147L18.0781 4.61328L19.0432 5.02063L10.8966 24.322Z"
                      className="fill-[url(#paint1_linear_27_1118)] dark:fill-[url(#paint3_linear_27_1118)]"
                    />
                    <path
                      d="M14.8804 15.4383C15.4162 15.2205 15.6742 14.6094 15.4563 14.0735C15.2386 13.5375 14.6275 13.2796 14.0916 13.4974C13.5556 13.7152 13.2977 14.3262 13.5155 14.8622C13.7333 15.3982 14.3444 15.6561 14.8804 15.4383Z"
                      className="fill-black dark:fill-white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_27_1118"
                      x1="4.83572"
                      y1="10.3945"
                      x2="24.1369"
                      y2="18.5411"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" />
                      <stop offset="0.5" />
                      <stop
                        offset="0.875"
                        stop-color="#131313"
                        stop-opacity="0.25"
                      />
                      <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_27_1118"
                      x1="10.414"
                      y1="24.1183"
                      x2="18.5607"
                      y2="4.81695"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" />
                      <stop offset="0.5" />
                      <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_27_1118"
                      x1="4.83572"
                      y1="10.3945"
                      x2="24.1369"
                      y2="18.5411"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" stop-color="#fff" />
                      <stop offset="0.5" stop-color="#fff" />
                      <stop
                        offset="0.875"
                        stop-color="#fff"
                        stop-opacity="0.25"
                      />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_27_1118"
                      x1="10.414"
                      y1="24.1183"
                      x2="18.5607"
                      y2="4.81695"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" stop-color="#fff" />
                      <stop offset="0.5" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <svg
              fill="none"
              className="absolute top-[50%] left-[50%] h-[65%] w-[65%] translate-y-[-50%] translate-x-[-50%]"
              viewBox="0 0 479 477"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M239.519 476.587C371.259 476.587 478.057 369.912 478.057 238.321C478.057 106.73 371.259 0.0539551 239.519 0.0539551C107.779 0.0539551 0.981445 106.73 0.981445 238.321C0.981445 369.912 107.779 476.587 239.519 476.587Z"
                fill="url(#linear_1)"
                fill-opacity="0.01"
              />
              <path
                d="M477.557 238.321C477.557 369.635 370.984 476.087 239.519 476.087C108.055 476.087 1.48145 369.635 1.48145 238.321C1.48145 107.006 108.055 0.553955 239.519 0.553955C370.984 0.553955 477.557 107.006 477.557 238.321Z"
                className="stroke-[url(#linear_3)] dark:stroke-[url(#linear_2)]"
                stroke-opacity="0.36"
              />
              <defs>
                <linearGradient
                  id="linear_1"
                  x1="239.519"
                  y1="0.0539551"
                  x2="240"
                  y2="477"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="linear_2"
                  x1="239.518"
                  y1="-0.224147"
                  x2="239.518"
                  y2="476.865"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#8D8D8D" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="linear_3"
                  x1="239.518"
                  y1="-0.224147"
                  x2="239.518"
                  y2="476.865"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stop-color="#8D8D8D" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="sun-min sun">
              <div className="dot">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      opacity="0.9"
                      d="M5.03955 9.91162L4.63223 10.8767L23.9336 19.0233L24.3409 18.0583L5.03955 9.91162Z"
                      className="fill-[url(#paint0_linear_27_1118)] dark:fill-[url(#paint2_linear_27_1118)]"
                    />
                    <path
                      opacity="0.9"
                      d="M10.8966 24.322L9.93148 23.9147L18.0781 4.61328L19.0432 5.02063L10.8966 24.322Z"
                      className="fill-[url(#paint1_linear_27_1118)] dark:fill-[url(#paint3_linear_27_1118)]"
                    />
                    <path
                      d="M14.8804 15.4383C15.4162 15.2205 15.6742 14.6094 15.4563 14.0735C15.2386 13.5375 14.6275 13.2796 14.0916 13.4974C13.5556 13.7152 13.2977 14.3262 13.5155 14.8622C13.7333 15.3982 14.3444 15.6561 14.8804 15.4383Z"
                      className="fill-black dark:fill-white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_27_1118"
                      x1="4.83572"
                      y1="10.3945"
                      x2="24.1369"
                      y2="18.5411"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" />
                      <stop offset="0.5" />
                      <stop
                        offset="0.875"
                        stop-color="#131313"
                        stop-opacity="0.25"
                      />
                      <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_27_1118"
                      x1="10.414"
                      y1="24.1183"
                      x2="18.5607"
                      y2="4.81695"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" />
                      <stop offset="0.5" />
                      <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_27_1118"
                      x1="4.83572"
                      y1="10.3945"
                      x2="24.1369"
                      y2="18.5411"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" stop-color="#fff" />
                      <stop offset="0.5" stop-color="#fff" />
                      <stop
                        offset="0.875"
                        stop-color="#fff"
                        stop-opacity="0.25"
                      />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_27_1118"
                      x1="10.414"
                      y1="24.1183"
                      x2="18.5607"
                      y2="4.81695"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" stop-color="#fff" />
                      <stop offset="0.5" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <svg
              fill="none"
              className="circle-lg circle absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] opacity-50"
              viewBox="0 0 479 477"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M239.519 476.587C371.259 476.587 478.057 369.912 478.057 238.321C478.057 106.73 371.259 0.0539551 239.519 0.0539551C107.779 0.0539551 0.981445 106.73 0.981445 238.321C0.981445 369.912 107.779 476.587 239.519 476.587Z"
                fill="url(#linear_1)"
                fill-opacity="0.01"
              />
              <path
                d="M477.557 238.321C477.557 369.635 370.984 476.087 239.519 476.087C108.055 476.087 1.48145 369.635 1.48145 238.321C1.48145 107.006 108.055 0.553955 239.519 0.553955C370.984 0.553955 477.557 107.006 477.557 238.321Z"
                className="stroke-[url(#linear_3)] dark:stroke-[url(#linear_2)]"
                stroke-opacity="0.36"
              />
              <defs>
                <linearGradient
                  id="linear_1"
                  x1="239.519"
                  y1="0.0539551"
                  x2="240"
                  y2="477"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="linear_2"
                  x1="239.518"
                  y1="-0.224147"
                  x2="239.518"
                  y2="476.865"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#8D8D8D" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="linear_3"
                  x1="239.518"
                  y1="-0.224147"
                  x2="239.518"
                  y2="476.865"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stop-color="#8D8D8D" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        {/*<div className='absolute w-full h-full bg-gradient-to-r from-slate-800 to-transparent'></div>*/}
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="mb-8 max-w-3xl text-center text-5xl font-bold text-dark-text dark:text-white-text md:mx-8">
            Meet our team of designers and software engineers
          </h2>
          <p className="mb-8 max-w-lg text-center text-black/30 dark:text-white/30 md:mx-5 lg:text-lg">
            Fermentum tellus nec volutpat non enim consequat adcsddipiscing
            euismod. Mi et tortor dolor nec eu
          </p>
        </div>
      </section>
      <div className="relative col-span-full bg-gradient-to-r from-white via-black/30 to-white pt-[1px] dark:from-black dark:via-white/30 dark:to-black">
        <section className="flex  flex-col gap-16 bg-light-bg py-16 dark:bg-dark-bg">
          <div className="flex flex-row justify-between">
            <div className="span text-8xl font-bold text-light-gray-200 dark:text-gray-200">
              Almas
            </div>
            <div className="span text-8xl font-bold text-light-gray-200 dark:text-gray-200">
              Danya
            </div>
            <div className="span text-8xl font-bold text-light-gray-200 dark:text-gray-200">
              Mary
            </div>
            <div className="span text-8xl font-bold text-light-gray-200 dark:text-gray-200">
              Vova
            </div>
          </div>
          <div className="flex w-[500px] flex-col gap-6">
            <h3 className="text-4xl font-bold text-black/60 dark:text-white/60">
              We are team of{" "}
              <span className="text-black dark:text-white">2 engineers</span>{" "}
              and{" "}
              <span className="text-black dark:text-white">2 designers</span>
            </h3>
            <p className="text-xl text-black dark:text-white">
              Fermentum tellus nec volutpat non enim consequat adcsddipiscing
              euismod. Mi et tortor dolor nec eu rtor dolor nec eur tor dolor
              nec eu
            </p>
          </div>
          <div className="flex flex-row justify-between gap-6">
            {Array(4).fill(<MemberCard></MemberCard>)}
          </div>
        </section>
      </div>

      <div className="col-span-full h-full overflow-clip">
        <div className="relative flex flex-col">
          <h2 className="mb-8 text-4xl font-bold ">Locations</h2>
          <Location.Wrapper>
            {Array(4).fill(
              <Location.Point
                name="Almas Saparov"
                address="Uralsk, Kazakhstan"
              />
            )}
          </Location.Wrapper>
        </div>
        <p className="text-behind pointer-events-none select-none lg:hidden">
          AROUND THE WORLD
        </p>
      </div>

      <img src="./Logo BG.svg" alt="logo" className="col-span-full -mx-8" />
    </>
  );
};

export default Team;
