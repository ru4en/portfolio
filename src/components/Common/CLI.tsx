
import data from '../../../public/data.json';


const downloadPDF = (pdfUrl: string, fileName: string): void => {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = pdfUrl;
    link.click();
};

const CLI = (command: string, navigate: Function): string => {
    const args = command.split(' ');

    const goto = (args: string[]): string => {
        let response = '';
        if (args.length > 1) {
            switch (args[1]) {
                case 'about':
                    navigate('/about-me');
                    response += `> goto /about-me\nNavigating to the About Me page...\n`;
                    break;
                case 'projects':
                    navigate('/projects');
                    response += `> goto /projects\nNavigating to the Projects page...\n`;
                    break;
                case 'contact':
                    navigate('/contact');
                    response += `> goto /contact\nNavigating to the Contact page...\n`;
                    break;
                case 'github':
                    navigate('/github');
                    response += `> goto /github\nNavigating to the GitHub page...\n`;
                    break;
                case 'linkedin':
                    navigate('/linkedin');
                    response += `> goto /linkedin\nNavigating to the LinkedIn page...\n`;
                    break;
                case 'admin':
                    navigate('/admin');
                    response += `> goto /admin\nNavigating to the Admin page...\n`;
                    break;
                default:
                    response += `> goto ${args[1]}\nError: Section not found. Please try 'about', 'projects', or 'contact'.\n`;
                    break;
            }
        } else {
            response += `> goto\nPlease specify a section to navigate to: 'about', 'projects', or 'contact'.\n`;
        }
        return response;
    };

    let result = '';

    switch (args[0]) {
        case 'help':
            result += `
    > help
    Available commands:
    - help: Display this help message
    - whoami: Display information about me
    - ls: Display a list of my projects and skills
    - contact: Display contact information
    - clear: Clear the terminal screen
    - goto <section>: Navigate to a specific section (about, projects, contact, github, linkedin)
    - curl cv: Download the CV\n
    `;
            break;
        case 'whoami':
            result += `
    > whoami
    I'm a software engineer based in London, UK. I enjoy building web applications and learning new technologies. I'm currently looking for new opportunities, so feel free to get in touch!\n`;
            break;
        case 'ls':
            if (args[1] === 'projects') {
                result += `
    > ls projects
    `;
                data.projects.forEach((project, index) => {
                    result += `
    ${index + 1}. ${project.title} - ${project.description}
    `;
                }
                );
            }
            else if (args[1] === 'skills') {
                result += `
    > ls skills
    `;
                data.skills.forEach((skill, index) => {
                    result += `
    ${index + 1}. ${skill.name} - ${skill.level}/10
    `;
                }
                );
            }
            else {
                result += `
    > ls
    - projects
    - skills`;
            }
            break;
        case 'contact':
            result += `        
    > contact
    You can contact me at:
    - Email: 
    - LinkedIn: 
    - GitHub: github.com/ru4en\n`;
            break;
        case 'curl':
            if (args[1] === 'cv') {
                result += `
    > curl cv
    Downloading CV...
    [==============================] 100%
    CV downloaded successfully. Open the file using your preferred PDF viewer.\n`;
                downloadPDF('/cv.pdf', 'Ruben_Lopes_CV.pdf');
            }
            break;
        case 'goto':
            result += goto(args);
            break;
        case 'sudo':
            navigate('/admin');
            break;
        default:
            result += `\n> ${command}\nError: Command not found. Type 'help' for a list of available commands.\n`;
            break;
    }

    return result;
};

export default CLI;
