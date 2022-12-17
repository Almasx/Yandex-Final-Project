import previewImg from '../../assets/img/project-preview.png'
import userImg from '../../assets/icons/User.png'
import githubImg from '../../assets/icons/github.svg'
const ProjectCard = () => {
    return (
        <div className="w-[100%] h-[480px] border border-gray rounded-md p-4 relative">
            <img className="bg-light-gray rounded-md w-[100%] h-[50%] shadow-black-left-top" src={previewImg} alt="poject-preview" />
                <div className="flex rounded-xl bg-dark-bg opacity-80 absolute right-16 top-6 py-1 px-3">
                    <img src={userImg} alt=""/>
                    <span className="text-white ml-2">Almas Saparov</span>
                </div>
                <img src={githubImg} alt="" className="flex rounded-2xl p-1 bg-dark-bg opacity-80 items-center justify-center absolute right-6 top-6 w-8 h-8"/>
            <div className='h-[50%]'>
                <div className="flex justify-between items-center">
                    <span className="text-white text-3xl leading-[60px]">Project to show around</span>
                    <span className="text-white opacity-30">21/11/2022 | Hackathon</span>
                </div>
                <div className="flex">
                    <span className="text-white opacity-60 border rounded-md border-gray py-2 px-4 mr-2">Next JS</span>
                    <span className="text-white opacity-60 border rounded-md border-gray py-2 px-4 mr-2">React</span>
                    <span className="text-white opacity-60 border rounded-md border-gray py-2 px-4 mr-2">tRPC</span>
                    <span className="text-white opacity-60 border rounded-md border-gray py-2 px-4 mr-2">Tailwind CSS</span>
                </div>
                <span className="text-white opacity-60">Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas.</span>
            </div>
        </div>
    ); 
};

export default ProjectCard;
