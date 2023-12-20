import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I'm
                <span className='font-bold mx-2 text-white'>Aditya</span>
                <img src="https://user-images.githubusercontent.com/74038190/241763891-7bb1e704-6026-48f9-8435-2f4d40101348.gif" className="inline h-8" />
                <br />
                A Software Programmer from
                <span className='font-semibold mx-2 text-white'>India</span>
                <img src="https://media.tenor.com/d39zhmpSHT4AAAAj/umm.gif" className="inline h-6" />
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                Worked on many Technologies <br /> and picked up many skills along the way
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                Learn more
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                Made many projects over the time. <br /> Want to take a Look at them?
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                Visit portfolio
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>
                Need some help ? <br/> I'm just a few clicks away
            </p>

            <Link to='/contact' className='neo-brutalism-white neo-btn'>
                Contact me
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;