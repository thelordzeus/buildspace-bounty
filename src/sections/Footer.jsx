import logo from "../assets/buildspacelogo.png";
import { AiOutlineLink, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-black px-6 min-[400px]:px-12 md:px-24 lg:px-8 pt-16 mx-auto">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img className="h-12 w-12" src={logo} alt="buildspace logo" />
            <p className="text-white">buildspace</p>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white tracking-wide leading-relaxed italic subpixel-antialiased">
              "This is a website that displays available bounties for users to
              complete. Built with React and utilizing Sanity CMS for the
              backend, it allows the owner to easily publish bounties and
              leaderboard data through the Sanity Studio. The website also
              features interactive charts created with Chart.js, making it easy
              for users to track their progress and compete for prizes."
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            By Arnav
          </p>
          <div className="flex">
            <a
              href="https://thelordzeus.vercel.app/"
              className=" text-white flex space-x-2"
            >
              <AiOutlineLink className="text-lg" />
              <p className="mr-1 text-white">Portfolio website</p>
            </a>
          </div>
          <div className="flex">
            <a
              href="https://github.com/thelordzeus"
              className=" text-white flex space-x-2"
            >
              <AiFillGithub className="text-lg" />
              <p className="mr-1 text-white">Github Profile</p>
            </a>
          </div>
          <div className="flex">
            <a
              href="https://twitter.com/iamlordzeus"
              className=" text-white flex space-x-2"
            >
              <AiOutlineTwitter className="text-lg" />
              <p className="mr-1 text-white">Twitter</p>
            </a>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            By Kevin
          </p>
          <div className="flex">
            <a
              href="https://www.kevinpaul.xyz/"
              className=" text-white flex space-x-2"
            >
              <AiOutlineLink className="text-lg" />
              <p className="mr-1 text-white">Portfolio website</p>
            </a>
          </div>
          <div className="flex">
            <a
              href="https://github.com/itaintkevin"
              className=" text-white flex space-x-2"
            >
              <AiFillGithub className="text-lg" />
              <p className="mr-1 text-white">Github Profile</p>
            </a>
          </div>
          <div className="flex">
            <a
              href="https://twitter.com/it_aint_kevin"
              className=" text-white flex space-x-2"
            >
              <AiOutlineTwitter className="text-lg" />
              <p className="mr-1 text-white">Twitter</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">
          © Copyright 2023 Buildspace. All rights reserved.
        </p>
      </div>
    </div>
  );
};
