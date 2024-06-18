import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/UnaiGonzalezGarces' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/unai-gonzalez-858b35273/',
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
