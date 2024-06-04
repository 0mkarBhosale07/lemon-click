import { InfoCard } from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import { Omkar } from "@/components/Omkar";
import GetLink from "@/components/GetLink";

export default function Home() {
  return (
    <main className="lg:px-10 px-2 pt-5">
      <Navbar />
      <div className="hero-1 text-center mt-16 md:mt-32">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text">
            Create Your
          </h1>
        </div>
        <div className="mt-2">
          <h1 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-[#007f5f] via-[#aacc00]  to-[#ffff3f] inline-block text-transparent bg-clip-text">
            &ldquo;Lemon Click&rdquo;
          </h1>
        </div>
        <div className="mt-4">
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text">
            Links Effortlessly!
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
        <div className="title text-center mt-10 text-3xl font-bold">
          Features
        </div>
        <div className="bg-[#feeafa] mt-2 px-5 rounded-md lg:mx-40 py-5">
          <InfoCard />
        </div>
      </div>

      <footer className="mt-10 flex items-center justify-center mb-2">
        <h1 className="text-lg font-bold ">Developed with ❤️ by</h1>
        <Omkar />
      </footer>
    </main>
  );
}
