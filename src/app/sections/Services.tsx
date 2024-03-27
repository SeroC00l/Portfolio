import { Code } from "../components/icons/Code";
import { Api } from "../components/icons/Api";
import { Android } from "../components/icons/Android";

export function Services() {
  return (
    <section className="bg-gray-800 min-h-screen flex flex-col justify-center items-center py-8 md:py-16 px-4 md:px-8">
      <h2 className="text-4xl text-white font-bold mb-8">
        Our <span className="text-homeColor  font-bold">Services</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-10  ">
        <div className="bg-gray-700 border-2 border-[#444] rounded-3xl p-8 w-full md:w-auto max-w-md text-center transition-all duration-300 ease-in-out hover:border-homeColor  hover:scale-105">
          <Code />
          <h3 className="text-2xl text-white mb-2">Web Development</h3>
          <p className="text-sm text-left text-white">
            I offer web development services that focus on creating innovative
            and efficient web applications tailored to meet your business needs.
            With my expertise in React, HTML, CSS, JavaScript, and other web
            development technologies, I can build intuitive and user-friendly
            applications that drive business success. Whether you need a new
            website, an e-commerce platform, or a custom web application, I can
            provide high-quality and scalable solutions that meet your
            requirements. Let's work together to bring your ideas to life and
            create a unique online presence for your business.
          </p>
        </div>
        <div className="bg-gray-700 border-2 border-[#444] rounded-3xl p-8 w-full md:w-auto max-w-md text-center transition-all duration-300 ease-in-out hover:border-homeColor  hover:scale-105">
          <Api />
          <h3 className="text-2xl text-white mb-2">Backend Development</h3>
          <p className="text-sm text-left text-white">
            I offer backend development services using various technologies,
            including Node.js and Python. I have experience designing and
            implementing scalable and secure backend solutions that support a
            range of web applications, from e-commerce sites to social media
            platforms. My expertise extends to database management, with
            proficiency in SQL and MongoDB, and I am committed to delivering
            robust and efficient backend systems that meet my clients' business
            needs.
          </p>
        </div>
        <div className="bg-gray-700 border-2 border-[#444] rounded-3xl p-8 w-full md:w-auto max-w-md text-center transition-all duration-300 ease-in-out hover:border-homeColor  hover:scale-105">
          <Android />
          <h3 className="text-2xl text-white mb-2">Mobile App Development</h3>
          <p className="text-sm text-left text-white">
            I can create innovative and efficient mobile applications using
            React Native and Flutter, two of the most popular mobile app
            development frameworks in the market. I have experience developing a
            range of mobile applications, including social media apps,
            e-commerce platforms, and healthcare apps. My focus is on creating
            intuitive and user-friendly interfaces that provide a seamless user
            experience. I can work with you to develop a custom mobile
            application that meets your specific needs and exceeds your
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
