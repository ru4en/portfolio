import data from "../../../public/data.json";
import Tag from '../Common/Tag';

const Technologies = () => {
    return (
        <>
            {data.skills.map(({ name }, index) => (
                <Tag key={index} tag={name} />
            ))}
        </>
    );
};

const TechnologiesSection = () => {
    return (
        <div className="dark:bg-gray-950 dark:text-white flex flex-col items-center space-y-4 shadow-md py-4 bg-gray-100">
            <h2 className="text-2xl font-semibold">{'</ Technologies >'}</h2>
            <p>Here are some of the technologies I have experience with.</p>
            <div className="container">
            <div className="flex flex-wrap justify-center p-5 gap-x-3 gap-y-2">
                <Technologies />
            </div>
            </div>
        </div>
    );
};

export default TechnologiesSection;
