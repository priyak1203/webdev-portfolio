import SectionTitle from './SectionTitle';
import aboutImg from '../assets/about.svg';
const About = () => {
  return (
    <section className="bg-white py-24" id="about">
      <div className="align-element grid gap-16 items-center md:grid-cols-2">
        <img src={aboutImg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
