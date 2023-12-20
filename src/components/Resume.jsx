import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <section className="resume">
            <p className='resume-text'>
                My Resume
            </p>
            <Link to='https://drive.google.com/file/d/1gqErcRBljgyDRabp_IpzX7icW3Slu1zq/view?usp=drive_link' target='_blank' className='btn'>
                Link
            </Link>
        </section>
    );
};

export default Resume;