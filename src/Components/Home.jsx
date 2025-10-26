import { useState ,useRef,useEffect} from "react"
import { FolderClosed } from 'lucide-react';

export default function Home() {
    const commands = new Map();
    const terminalRef = useRef(null);

    const [commandRunning, setCommandRunning] = useState(false);
    const [projectsFolderOpen,setprojectsFolderOpen]=useState(false);

    const [fullScreen, setFullScreen] = useState(false);
    const date = new Date().toUTCString();

    const [history, setHistory] = useState(`Last Updated On : ${date}\nRun \`--help\` to view all commands\n`);

    commands.set("nameiz", `\n\t---------------------\n\t|\t\t\t\t\t|\n\t|\tPuneeth Kumar\t|\n\t|\t\t\t\t\t|\n------------------------------\n`)
    commands.set("whoami", "Hey👋! I'm <b class='text-red-600'>Puneeth Kumar</b>, a passionate software developer currently pursuing my 3rd year in Computer Science Engineering at RGUKT-RKV. \nI’ve always loved messing around with code and spending late nights debugging it. I also love to solve coding problems on platforms like LeetCode and GeeksforGeeks and spending a hell of a time fixing bugs and tle issues, and have earned multiple badges along the way.\nI’m always eager to learn something new and build projects that are actually useful.")
    commands.set("edu-logs",
        "<br/><p class='text-base font-extrabold'>Education</p>" +
        "----------<br>" +
        "<b>B.Tech</b> : Computer Science Engineering - RGUKT-RK Valley (2023 - Present) - 8.35 CGPA\n" +
        "<b>PUC</b> : RGUKT-RK Valley (2021 - 2023) - 9.7 CGPA<br>" +
        "<b>Secondary Schooling</b> : Basavaraja Govt. High School (2016 - 2021) - 10.0 CGPA<br>" +
        "\nup to date, audited 3 degrees in 2s\n" +
        "0 education logs missed\n"
    );

    commands.set("git contact",
        ">>> Accessing contact directory......\n" +
        "Email: <a href='mailto:puneethkumarkaramala@gmail.com' class='text-blue-400 underline'>puneethkumarkaramala@gmail.com</a><br>" +
        "Phone: +917416558950<br>" +
        "GitHub: <a href='https://github.com/nameispuneeth' target='_blank' class='text-blue-400 underline'>nameispuneeth</a><br/>" +
        "LinkedIn: <a href='https://www.linkedin.com/in/puneeth0121/' target='_blank' class='text-blue-400 underline'>puneeth0121</a><br/>" +
        "X (Formerly Twitter) : <a href='https://x.com/nameizpuneeth' target='_blank' class='text-blue-400 underline'>nameizpuneeth</a><br/>" +
        ">>> Contact directory loaded successfully"
    );
    commands.set("npm get coding-profiles",
        ">>> Fetching Coding Profiles......\n" +
        "Leetcode: <a href='https://leetcode.com/nameispuneeth' target='_blank' class='text-blue-400 underline'>nameispuneeth</a><br>" +
        "GeeksForGeeks: <a href='https://www.geeksforgeeks.org/user/pun3eth_/' target='_blank' class='text-blue-400 underline'>pun3eth_</a><br/>" +
        "Coding Ninjas: <a href='https://www.naukri.com/code360/profile/puneethkumar' target='  _blank' class='text-blue-400 underline'>puneethkumar</a><br/>" +
        "Hacker Rank: <a href='https://www.hackerrank.com/profile/puneeth0121' target='  _blank' class='text-blue-400 underline'>puneeth0121</a><br/>" +
        ">>> Coding Profiles Fetched in <b class='text-green-500'>2580ms</b>."
    );
    commands.set("cd projects",">>> Switching To Projects Directory.....<br/>"+`> Located 4 Repositories : <br/>\t1.CodeBite<br/>\t2.Civiq<br>\t3.GPA Calculator<br/>\t4.Currency Convertor<br/>`+">>> Run Project Name For Details");
 commands.set("codebite","\t----------------------\n"+"\t CodeBite - OnlineIDE\n"+"\t----------------------\n"+"\t CodeBite Is An OnlineIDE with AI Integrated, where user can run code in browser directly without installing any package.It features AI integration for coding assistance and supports saving, updating, and deleting your files.It is build for the speed and simplicity.No Downloads,No Setup,just code and run.\n"+"Live Demo : <a href='https://codebite-onlineide-puneeth.vercel.app' target='_blank' class='text-blue-400 underline'>CodeBite</a>\n"+"Features : \n\t> Real Time Code Execution With I/O Operations.\n\t> Supports Upto 7 Languages.\n\t> AI-Powered Coding Assistance.\n\t> Save,Update,Download and Delete Files.\n\t> User authentication & security using JWT and bcrypt\n\t> Clean & Minimal Interface\n"+"TechStack : \n\t Frontend : ReactJS,TailWind CSS \n\t Backend : Node.js,Express.js\n\t Authentication and Email : JWT,Bcrypt,NodeMailer \n\t DataBase : MongoDB \n\t Code Execution : Judge0 API")
            useEffect(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, [history]);
      
    const TypeWriter = (text, speed = 20) => {
        let i = 0;
        const interval = setInterval(() => {
            setHistory(prev => prev + text.charAt(i));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                setCommandRunning(false);
            }
        }, speed);
    };



    return (
        <div className={`flex flex-col justify-center items-center min-h-screen bg-[#3B3B3F] ${fullScreen ? 'p-0' : 'p-4'}`}>
            <div className={`bg-black w-full text-white font-mono shadow-2xl rounded-lg
  ${fullScreen ? 'w-full min-h-screen m-0' : 'm-2 sm:w-[60%] w-[90%] h-auto min-h-[24rem]'}`}>
                <div className="bg-gray-800 w-full mb-2 flex items-center justify-between p-1 rounded-md">
                    <div className="flex gap-2">
                        <div className="ml-1 bg-red-500 rounded-full w-3 h-3 cursor-pointer"></div>
                        <div className="bg-yellow-500 rounded-full w-3 h-3 cursor-pointer" onClick={() => setFullScreen(false)}></div>
                        <div className="bg-green-500 rounded-full w-3 h-3 cursor-pointer" onClick={() => setFullScreen(true)}></div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <FolderClosed size={16} />
                        <h1 className="text-center">puneeth -- portfolio -- bash</h1>
                    </div>
                    <div></div>
                </div>
                <div className="p-2 text-left mb-10 overflow-y-auto" style={{ scrollBehavior: 'smooth' }}   ref={terminalRef}                >
                    <pre className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: history }}
                    ></pre>
                    {!commandRunning &&
                        <div className="flex gap-1 mt-4">
                            <h1>{'C:\\Users\\Puneeth> '}</h1>
                            <input type="text" autoFocus className="bg-transparent outline-none caret-white text-white font-medium thick-caret w-full" onKeyDown={(e) => {
                                const text = e.target.value.trim();
                                if (e.key === "Enter") {
                                    if (text === "clear") {
                                        setHistory(`Last Updated On : ${date}\nEnter --help to view all commands\n`);
                                    }
                                    else if (text === "--help") {
                                        let curr = history;
                                        curr += `\nC:\\Users\\Puneeth> ${e.target.value}\n`;
                                        setHistory(curr);
                                        curr = "";
                                        for (let keys of commands.keys()) {
                                            curr += `${keys}\n`;
                                        }
                                        setCommandRunning(true);
                                        TypeWriter(`\n${curr}`, 20);
                                    }
                                    else if (text !== "") {
                                        if (commands.has(text)) {
                                            setHistory(prev => prev + `\nC:\\Users\\Puneeth> ${text}\n`);
                                            setCommandRunning(true);
                                            TypeWriter(`\n${commands.get(text)}\n`, 10);
                                        } else {
                                            setHistory(prev => prev + `\nC:\\Users\\Puneeth> ${text}\nCommand Not Found\n`);
                                        }
                                    }
                                    e.target.value = "";

                                }
                            }}
                            ></input>
                        </div>
                    }
                </div>

            </div>

        </div>
    )
}