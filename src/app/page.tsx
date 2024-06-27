import { InfoCard } from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import { Omkar } from "@/components/Omkar";
import GetLink from "@/components/GetLink";
import Version from "@/components/Version";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AppSupport from "@/components/AppSupport";
import Count from "@/components/Count";
import { create } from "zustand";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";
import { pascifico } from "@/fonts";

export default function Home() {
  return (
    <main className="lg:px-10 px-2">
      <Navbar />
      {/* <div className="absolute dark:hidden top-0 z-[-2] h-screen w-screen rotate-180 transform bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div> */}
      {/* <div className="dark:relative h-full w-screen bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div> */}
      {/* UI update */}
      <div className="hero-1 text-center mt-14 md:mt-32">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text">
            <span className={`${pascifico.className} leading-relaxed`}>
              Create You&apos;r
            </span>
          </h1>
        </div>
        <div className="mt-2">
          <h1 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-[#007f5f] via-[#aacc00]  to-[#ffff3f] inline-block text-transparent bg-clip-text">
            &ldquo;Lemon Click&rdquo;
          </h1>
        </div>
        <div className="mt-4">
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text">
            <span className={`${pascifico.className} leading-loose`}>
              Links Effortlessly!
            </span>
          </h1>
        </div>
        <div className="para mt-5 md:mt-10 px-5 md:w-[600px] mx-auto ">
          <p className="text-lg md:text-xl font-semibold">
            Unlock the power of seamless app navigation with our intuitive link
            generator. Create custom{" "}
            <span className="text-green-400"> &ldquo;Open In App&rdquo;</span>{" "}
            links that direct users straight to your app with a single click.
            Boost engagement, improve user experience, and simplify the way your
            audience interacts with your content.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <GetLink />
        </div>
      </div>
      <div className="hero-2">
        <div className="icon-support mt-5">
          <h1 className=" text-center mt-10 text-2xl font-bold">
            Supported Services
          </h1>
          <div className="flex justify-center mt-5">
            <AppSupport />
          </div>
          <div className="my-5">
            <Count />
          </div>
        </div>
        <hr />
        {/* <div className="title text-center mt-10 text-3xl font-bold">
          Features
        </div>
        <div className="bg-[#feeafa] mt-2 px-5 rounded-md lg:mx-40 py-5">
          <InfoCard />
        </div> */}
      </div>
      <div className="beta mt-10">
        <p className="w-96 mx-auto text-center">
          Want to use features before release?
        </p>
        <Link href="/beta" className="flex justify-center mt-5">
          <Button variant="secondary">Join Beta</Button>
        </Link>
      </div>
      {/* <div className="version my-5 flex justify-center">
        
      </div> */}

      <div className="my-2">
        <Footer />
      </div>

      {/* <footer className=" flex items-center justify-center mb-2">
        <h1 className="text-lg font-bold ">Developed with ❤️ by</h1>
        <Omkar />
      </footer> */}
    </main>
  );
}
