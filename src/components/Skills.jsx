import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section className="align-element py-24" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
