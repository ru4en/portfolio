
import data from "../../../public/data.json";


const WHOAMI = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen container mx-auto">
        <h1 className="text-4xl font-bold text-center">WHOAMI</h1>
        <p className="text-lg text-center mt-4">
            {data.about.description}
        </p>
        </div>
    );
    }

export default WHOAMI;

