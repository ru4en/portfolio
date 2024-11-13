import data from "../../../public/data.json";

const WHOAMI = () => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-white dark:bg-black shadow-lg overflow-hidden text-black dark:text-white pt-20 max-h-content min-h-screen">
            <div className="absolute inset-0 opacity-100
                [background-image:linear-gradient(to_right,_rgba(0,0,0,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,0,0,0.1)_1px,_transparent_1px)] 
                [background-size:20px_20px] 
                dark:[background-image:linear-gradient(to_right,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.1)_1px,_transparent_1px)] 
                dark:[background-size:25px_25px]"></div>
                <img src={data.about.image} alt="Ruben Lopes" className="w-40 h-40 rounded-full m-9 shadow-lg dark:shadow-none hover:scale-105 transition duration-300 transform hover:ring-4 ring-green-500 dark:hover:ring-green-500" />
            <div className="relative z-10">
               <h1 className="text-4xl font-bold text-center">WHOAMI</h1>
                <p className="text-lg text-center m-9 color-green-500 dark:text-green-500">
                    {data.about.description}
                </p>
            </div>
        </div>
    );
};

export default WHOAMI;
