import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">About Us</h1>
      </div>
      <main className="container mx-auto px-4 py-10">
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">Our Mission</h2>
          <p className="text-white leading-relaxed">
            At <span className="font-semibold">Lemon Click</span>, our mission
            is to bridge the gap between content creators and their audiences by
            providing innovative tools that simplify content sharing and enhance
            user experience. We aim to ensure that your audience can
            effortlessly engage with your content, whether it's liking,
            commenting, or subscribing, without unnecessary redirections or
            sign-in hassles.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">Who We Are</h2>
          <p className="text-white leading-relaxed">
            We are a team of tech enthusiasts and digital strategists passionate
            about creating solutions that cater to the unique needs of content
            creators. We understand the challenges you face in reaching and
            engaging with your audience across various social media platforms.
            Our goal is to make this process as smooth and efficient as
            possible.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">What We Do</h2>
          <div className="mb-4">
            <h3 className="text-xl text-white font-semibold mb-2">
              1. Open in App Links:
            </h3>
            <p className="text-white leading-relaxed">
              One of our standout features is the creation of "open in app"
              links. These special links ensure that when your audience clicks
              on a shared link from any social media platform, they are
              redirected straight to the appropriate app, bypassing the default
              web browsers. This means no more lost viewers due to sign-in
              prompts or clunky web interfaces. Instead, your audience can
              instantly engage with your content on platforms like YouTube,
              enhancing their experience and increasing your chances of gaining
              likes, comments, and subscribers.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-white font-semibold mb-2">
              2. Bio Links:
            </h3>
            <p className="text-white leading-relaxed">
              We also offer a service to create comprehensive bio links. These
              are customizable pages where you can consolidate all your
              important links in one place, similar to Linktree. Whether you’re
              sharing your latest videos, blog posts, social media profiles, or
              any other type of content, our bio links make it easy for your
              audience to find everything they need in one convenient location.
            </p>
          </div>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-white leading-relaxed">
            <li>
              <span className="font-semibold">User-Centric Approach:</span> Our
              solutions are designed with both content creators and their
              audiences in mind. We prioritize ease of use and seamless
              functionality to ensure a smooth experience for everyone.
            </li>
            <li>
              <span className="font-semibold">Innovative Solutions:</span> We
              constantly innovate and update our services to keep up with the
              evolving needs of content creators and the ever-changing social
              media landscape.
            </li>
            <li>
              <span className="font-semibold">Reliability:</span> With{" "}
              <span className="font-semibold">Lemon Click</span>, you can trust
              that your audience will have a reliable and efficient way to
              access and engage with your content, leading to better retention
              and growth.
            </li>
          </ul>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl text-white font-bold mb-4">Our Vision</h2>
          <p className="text-white leading-relaxed">
            We envision a digital world where content creators can effortlessly
            connect with their audiences, free from technical barriers. Our
            vision is to become the go-to platform for creators seeking to
            optimize their content sharing and maximize their reach and
            engagement.
          </p>
          <p className="text-white leading-relaxed mt-4">
            Thank you for choosing{" "}
            <span className="font-semibold">Lemon Click</span> as your trusted
            partner in content creation and sharing. Together, let’s create a
            more connected and engaged digital community.
          </p>
        </section>
      </main>
      <div className="my-2">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
