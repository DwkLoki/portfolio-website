import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { FiGitlab } from "react-icons/fi";

export default function ProjectItem(props) {
    const {title, subTitle, desc, techStack, link, image} = props.projectItem

    return (
        <>
            <div className='flex my-24'>
                <div className={image === 'mockup-project3.png' ? 'w-3/5' : 'w-2/5'}>
                    <a href={link.preview} target='_blank' rel='noreferrer noopener'>
                        <h3 className='text-3xl font-medium w-fit'>
                            {title}
                        </h3>
                        <div className='text-xl'>{subTitle}</div>
                    </a>
                    <div className='my-3 text-gray-500'>
                        <p>
                            {desc}
                        </p>
                        <br />
                        <div className='text-black font-medium'>TECH STACK & TOOLS:</div>
                        <p>
                            {techStack}
                        </p>
                    </div>
                    <div className='flex space-x-5 my-6 text-xl'>
                        {
                            link.gitlab &&
                            <a href={link.gitlab} target='_blank' rel='noreferrer noopener'>
                                <FiGitlab />
                            </a>
                        }
                        {
                            link.github &&
                            <a href={link.github} target='_blank' rel='noreferrer noopener'>
                                <FiGithub />
                            </a>
                        }
                        {
                            link.preview &&
                            <a href={link.preview} target='_blank' rel='noreferrer noopener'>
                                <FiExternalLink />
                            </a>
                        }
                    </div>
                </div>
                <div className={image === 'mockup-project3.png' ? 'w-2/5' : 'w-3/5'}>
                    <a href={link.preview} target='_blank' rel='noreferrer noopener'>
                        <img src={`./images/${image}`} alt='mockup project jalin' />
                    </a>
                </div>
            </div>
        </>
    )
}