import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaGithub } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiAstro, SiMongodb } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const iconsClass = 'h-16 w-16';

const skills = [
  { name: 'React', icon: <FaReact className={iconsClass} /> },
  { name: 'NextJS', icon: <RiNextjsFill className={iconsClass} /> },
  { name: 'HTML', icon: <FaHtml5 className={iconsClass} /> },
  { name: 'Css', icon: <FaCss3 className={iconsClass} /> },
  { name: 'JS', icon: <FaJsSquare className={iconsClass} /> },
  { name: 'Astro', icon: <SiAstro className={iconsClass} /> },
  { name: 'SQL', icon: <TbSql className={iconsClass} /> },
  { name: 'MongoDB', icon: <SiMongodb className={iconsClass} /> },
  { name: 'GitHub', icon: <FaGithub className={iconsClass} /> },
];

const Skills = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
          {skills.map((skill, index) => {
            return (
              <div
                className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
                key={index}
              >
                <span>{skill.icon}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
