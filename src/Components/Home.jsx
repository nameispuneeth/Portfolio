    import { useState, useRef, useEffect } from "react"
    import { FolderClosed, } from 'lucide-react';

    export default function Home() {
        const commands = new Map();
        const terminalRef = useRef(null);
        const [theme, setTheme] = useState("theme1");
        const [commandRunning, setCommandRunning] = useState(false);
        const [projectsFolderOpen, setprojectsFolderOpen] = useState(false);
        const [fullScreen, setFullScreen] = useState(false);
        const date = useRef(new Date().toString());
        const [commandsHistory, setCommandHistory] = useState([]);
        const [currCommand, setcurrCommand] = useState("");
        const [currInd, setcurrInd] = useState(commandsHistory.length - 1);
        const commandsDesc = new Map();
        commandsDesc.set("nameiz", "Print author name.");
        commandsDesc.set("whoami", "Show quick intro of Puneeth.");
        commandsDesc.set("edu-logs", "List education details.");
        commandsDesc.set("git contact", "Show contact info.");
        commandsDesc.set("npm get coding-profiles", "Fetch coding profiles.");
        commandsDesc.set("sudo apt skills", "Display technical skills.");
        commandsDesc.set("cd projects", "Open projects directory.");
        commandsDesc.set("resume --fetch", "Download or view resume.");
        commandsDesc.set("clear", "Clear terminal screen.");
        const [history, setHistory] = useState(`Last Updated On : ${date}\nRun \`--help\` to view all commands\n`);

        const themeBg={
            theme1: "bg-black text-white",
            theme2: "bg-gray-900 text-indigo-300",
            theme3: "bg-[#473a2e] text-orange-500",
            theme4: "bg-emerald-950 text-green-500", 
            theme5: "bg-gray-300 text-gray-950",
        }

        const inputTheme={
            theme1: "text-white caret-white",
            theme2: "text-purple-400 caret-blue-400",
            theme3: "text-gray-300 caret-white",
            theme4: "text-green-600 caret-white", 
            theme5: "text-black caret-black",
        }
        const PreText={
            theme1: "text-white ",
            theme2: "text-indigo-700",
            theme3: "text-gray-700 ",
            theme4: "text-green-700 ", 
            theme5: "text-black ",
        }
        const HeaderTheme={
            theme1: "bg-gray-800 ",
            theme2: "bg-[#2a1a4a]",
            theme3: "bg-orange-950",
            theme4: "bg-black", 
            theme5: "bg-gray-500 ",
        }

        const projectsMap = new Map();
        commands.set("nameiz", `
            <pre style="font-family: monospace; font-variant-ligatures: none;">
 ____                        _   _     
|  _ \\ _   _ _ __   ___  ___| |_| |__  
| |_) | | | | '_ \\ / _ \\/ _ \\ __| '_ \\ 
|  __/| |_| | | | |  __/  __/ |_| | | |
|_|    \\__,_|_| |_|\\___|\\___|\\__|_| |_|
            </pre>
            `);

        projectsMap.set("codebite", "\t----------------------\n" + "\t CodeBite - OnlineIDE\n" + "\t----------------------\n" + "\t CodeBite Is An OnlineIDE with AI Integrated, where user can run code in browser directly without installing any package.It features AI integration for coding assistance and supports saving, updating, and deleting your files.It is build for the speed and simplicity.No Downloads,No Setup,just code and run.\n" + "Live Demo : <a href='https://codebite-onlineide-puneeth.vercel.app' target='_blank' class='text-blue-400 underline'>CodeBite</a>\n" + "GitHub : <a href='https://github.com/nameispuneeth/OnlineIDE' target='_blank' class='text-blue-400 underline'>CodeBite</a>\n" + "Features : \n\t> Real Time Code Execution With I/O Operations.\n\t> Supports Upto 7 Languages.\n\t> AI-Powered Coding Assistance.\n\t> Save,Update,Download and Delete Files.\n\t> User authentication & security using JWT and bcrypt\n\t> Clean & Minimal Interface\n" + "TechStack : \n\t Frontend : ReactJS,TailWind CSS \n\t Backend : Node.js,Express.js\n\t Authentication and Email : JWT,Bcrypt,NodeMailer \n\t DataBase : MongoDB \n\t Code Execution : Judge0 API")
        projectsMap.set("civiq",
            "\t------------------------------\n" +
            "\t Civiq - Issue Reporting App\n" +
            "\t------------------------------\n" +
            "-> Civiq is a web app to report civic issues like potholes, garbage, and other public concerns.\n" +
            "-> Users can submit issues with images and auto-captured location (longitude & latitude).\n" +
            "-> And admin can assign these issues to respective department employees and changes status from pending to inprogress.\n" +
            "-> Then these employees finish their alloted issues and updates admin where he again chnages status from inprogress to completed.\n" +
            "-> Issues move through states: Pending → InProgress → Finished, with role-based control.\n\n" +

            "Team Project : Puneeth (Backend + Some Frontend), Jaweed (Most Frontend)\n" +
            "Live Demo : <a href='https://civiqconnectbypj.vercel.app/' target='_blank' class='text-blue-400 underline'>Civiq</a>\n" +
            "Github : <a href='https://github.com/nameispuneeth/Hackathon' target='_blank' class='text-blue-400 underline'>Civiq</a>\n" +
            "Features : \n" +
            "\t> User can report issues with images and location\n" +
            "\t> Admin can assign issues to employees and approve completion\n" +
            "\t> Employees can view assigned issues and mark them finished\n" +
            "\t> Users can rate issues after completion\n" +
            "\t> Admin has analytics & filtering of issues by status\n" +
            "\t> Admin can manage employees and departments\n" +
            "\t> Role-based access control and secure login with JWT\n" +
            "TechStack : \n" +
            "\t Frontend : ReactJS, Tailwind CSS, Material UI\n" +
            "\t Backend : Node.js, Express.js\n" +
            "\t Database : MongoDB\n" +
            "\t APIs : GeoLocation API For auto-location, Cloudinary API For Image upload & preview\n" +
            "Future Enhancements : \n" +
            "-> Integrating AI to set a priority to issues where admin can assign based on the priority.\n" +
            "-> Adding Chat Feature Between Admin and Employee"
        );
        projectsMap.set("gpa-calc",
            "\t----------------------\n" +
            "\t GPA Calculator - CGPA\n" +
            "\t----------------------\n" +
            "\t A web application designed to help students calculate their Cumulative Grade Point Average (CGPA) and Semester Grade Point Average (SGPA) efficiently.Users can input course details, including grades and credits, to compute their GPA and CGPA instantly.\n" +
            "\nLive Demo: <a href='https://gpa-calculator-puneeth.vercel.app/' target='_blank' class='text-blue-400 underline'>GPA Calculator</a>\nGithub : <a href='https://github.com/nameispuneeth/GPA_Calculator' target='_blank' class='text-blue-400 underline'>GPA Calculator</a>" +
            "\nFeatures: \n" +
            "\t> Calculate SGPA and CGPA based on user inputs.\n" +
            "\t> Add multiple semesters and courses.\n" +
            "\t> Automatic grade point computation.\n" +
            "\t> Graphical Representaion of SGPAs using charts. \n" +
            "\t> Clean, responsive, and user-friendly interface.\n" +
            "\nTechStack : " +
            "ReactJS, Tailwind CSS, Chart.js"
        );
        projectsMap.set("currency-converter",
            "\t----------------------\n" +
            "\t Currency Converter \n" +
            "\t----------------------\n" +
            "\tThe Currency Converter is a web application that allows users to convert between various international currencies in real-time.It uses <b>two APIs</b> — one for <b>real-time exchange rates</b> and another for <b>fetching country flags</b> to enhance the user experience.\n" +
            "\nLive Demo: <a href='https://currency-convertor-puneeth.vercel.app/' target='_blank' class='text-blue-400 underline'>Currency Converter</a>\nGithub : <a href='https://github.com/nameispuneeth/GPA_Calculator' target='_blank' class='text-blue-400 underline'>GPA Calculator</a>" +
            "\nFeatures: \n" +
            "\t> Real-time currency conversion using live data.\n" +
            "\t> Automatic flag updates for selected currencies.\n" +
            "\t> Fast, responsive, and mobile-friendly interface.\n" +
            "\t> Graphical Representaion of SGPAs using charts. \n" +
            "\t>Easy and intuitive dropdown-based currency selection.\n" +
            "\nTechStack : \n" +
            "\tFrontend → HTML, CSS, JavaScript<br>" +
            "\tAPIs → ExchangeRate API & Flags API<br>" +
            "\tDeployment → Vercel<br>"
        );
        // commands.set("nameiz", `\n\t---------------------\n\t|\t\t\t\t\t|\n\t|\tPuneeth Kumar\t|\n\t|\t\t\t\t\t|\n------------------------------\n`)
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
        commands.set("sudo apt skills",
            "<b>Skills :</b>\n" +
            "<b>Languages : </b> C++, Python, JavaScript\n" +
            "<b>Frontend : </b>HTML, ReactJS, ReactNative, CSS, TailWind CSS, Bootstrap\n" +
            "<b>Backend : </b> Node.js, Express.js\n" +
            "<b>Databases : </b> MongoDB, MySQL\n" +
            "<b>Tools : </b> Git, GitHub, Rest APIs, Vercel, Netlify, JWT, Bcrypt\n"
        )
        commands.set("cd projects", ">>> Switching To Projects Directory.....<br/>" + `> Located 4 Repositories : <br/>\t<b class='text-green-500'>1.codebite<br/>\t2.civiq<br>\t3.gpa-calc<br/>\t4.currency-converter</b><br/>` + ">>> Run Project Name For Details");
        commands.set("resume --fetch", "\n>>> Fetching Resume.... \n\n0.00s\t<b class='text-green-500'>[.....................]</b>\t0%");

        useEffect(() => {
            const fetchLastCommitDate = async () => {
                try{
                const response = await fetch("https://api.github.com/repos/nameispuneeth/portfolio/commits");
                const data = await response.json();
                date.current = new Date(data[0].commit.author.date).toString();
                setHistory(`Last Updated On : ${date.current}\nRun \`--help\` to view all commands\n`);
                }catch(e){
                    date.current=new Date().toString();
                }
            }
            fetchLastCommitDate();
        }, [])


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
                    if (text.includes("\n0.00s\t<b class='text-green-500'>[.....................]</b>\t0%")) {
                        setCommandRunning(true);
                        setHistory(prev => prev.replace("\n0.00s\t<b class='text-green-500'>[.....................]</b>\t0%", ""));
                        animateResumeProgress();
                        setTimeout(() => setCommandRunning(false), 2000);
                    } else {
                        setCommandRunning(false);
                    }
                }
            }, speed);
        };
        const animateResumeProgress = () => {
            const totalDots = 23;
            let filled = 0;

            setHistory(prev =>
                prev +
                "<div class='flex sm:gap-8 gap-4 mt-0'>" +
                "<p id='fetch-time'>0.00 sec</p>" +
                "<p class='text-green-500' id='progress-bar'>[.......................]</p>" +
                "<p id='progress-perc'>0%</p>" +
                "</div>"
            );

            const interval = setInterval(() => {
                filled++;
                const perc = Math.round((filled / totalDots) * 100);
                const time = (filled * 0.05).toFixed(2);
                const progress = `[${"#".repeat(filled)}${".".repeat(totalDots - filled)}]`;

                setHistory(prev => {
                    const pattern = /<div class='flex sm:gap-8 gap-4 mt-0'>.*?<\/div>/gs;
                    const matches = [...prev.matchAll(pattern)];
                    if (matches.length === 0) return prev;

                    const lastMatch = matches[matches.length - 1];
                    return (
                        prev.slice(0, lastMatch.index) +
                        `<div class='flex sm:gap-8 gap-4 mt-0'>
                    <p id='fetch-time'>${time} sec</p>
                    <p class='text-green-500' id='progress-bar'>${progress}</p>
                    <p id='progress-perc'>${perc}%</p>
                </div>` +
                        prev.slice(lastMatch.index + lastMatch[0].length)
                    );
                });

                if (filled >= totalDots) {
                    setHistory(prev => prev + `
                        <div class="mt-0 p-3 min-w-32 max-w-40 flex justify-center items-center gap-4 border-2 border-white rounded">
                          <div class="flex gap-2 items-center mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file">
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                              <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                            </svg>
                            <p class="text-center m-0 leading-none">Resume</p>
                          </div>
                        
                          <a href="https://drive.google.com/file/d/1NVG4ROv3WdPbfLqjiQRtGlMk2K7BaISC/view" target="_blank" rel="noopener noreferrer"
                             class="flex items-center justify-center leading-none"
                             aria-label="Download resume">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line">
                              <path d="M12 17V3"/>
                              <path d="m6 11 6 6 6-6"/>
                              <path d="M19 21H5"/>
                            </svg>
                          </a>
                        </div><br/>>>> Resume Fetch Successful\n`);
                        
                    clearInterval(interval);
                }
            }, 50);
        };
    

        return (
            <div className={`flex flex-col justify-center items-center min-h-screen bg-[#3B3B3F] ${fullScreen ? 'p-0' : 'p-4'}`}>
                <div className={`${themeBg[theme]} w-full font-mono shadow-2xl rounded-lg
    ${fullScreen ? 'w-full min-h-screen m-0' : 'm-2 sm:w-[60%] w-[90%] h-auto min-h-[36rem]'}`}>
                    <div className={`${HeaderTheme[theme]} w-full mb-2 flex items-center justify-between p-1 rounded-md`}>
                        <div className="flex gap-2">
                            <div className="ml-1 bg-red-500 rounded-full w-3 h-3 cursor-pointer"></div>
                            <div className="bg-yellow-500 rounded-full w-3 h-3 cursor-pointer" onClick={() => setFullScreen(false)}></div>
                            <div className="bg-green-500 rounded-full w-3 h-3 cursor-pointer" onClick={() => setFullScreen(true)}></div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FolderClosed size={16} color="white" className="hidden md:block" />
                            <h1 className="text-center text-white text-sm md:text-base sm:mr-2">puneeth -- portfolio -- bash</h1>
                        </div>
                        <div className="hidden md:block">
                            <select
                                onChange={(e) => setTheme(e.target.value)}
                                className="bg-[#1e1e1e] text-gray-200 border border-gray-600 rounded-lg px-4 hover:border-blue-400 focus:border-blue-500 focus:ring focus:ring-blue-400/40 outline-none transition-all duration-200 cursor-pointer"
                            >
                                <option value="theme1">Terminal Dark</option>
                                <option value="theme2">Neon Blue</option>
                                <option value="theme4">Matrix Green</option>
                                <option value="theme5">Terminal Light</option>

                            </select>
                        </div>
                        <div className="md:hidden"></div>
                    </div>
                    <div className="p-2 text-left mb-10 overflow-y-auto" style={{ scrollBehavior: 'smooth' }} ref={terminalRef}                >
                        <pre className={`${PreText[theme]} whitespace-pre-wrap mb-6`} dangerouslySetInnerHTML={{ __html: history }}
                        ></pre>
                        {!commandRunning &&
                            <div className="flex gap-1 mt-4">
                                <h1>{`C:\\Users\\Puneeth>${projectsFolderOpen ? 'Projects>' : ''}`}</h1>
                                <input type="text" autoFocus className={`bg-transparent ${inputTheme[theme]} outline-none font-medium thick-caret w-full ml-1`} value={currCommand} onChange={(e) => setcurrCommand(e.target.value)} onKeyDown={(e) => {
                                    const text = e.target.value.trim();
                                    if (e.key === "Enter") {
                                        if (text === "clear") {
                                            setHistory(`Last Updated On : ${date.current}\nRun \`--help\` to view all commands\n`);
                                        }
                                        else if(text==""){
                                            const newCmd = `\nC:\\Users\\Puneeth>${projectsFolderOpen ? 'Projects>' : ''} ${text}\n`
                                            setHistory(prev => prev + newCmd);
                                        }
                                        else if (text === "--help" || text=="ls") {
                                            let curr = history;
                                            curr += `\nC:\\Users\\Puneeth>${projectsFolderOpen ? 'Projects>' : ''} ${e.target.value}\n`;
                                            setHistory(curr);
                                            curr = "<table key=>";

                                            for (let [cmd, desc] of commandsDesc) {
                                                curr += `<tr><td>${cmd}<td><td> \t </td><td>${desc}</td></tr>`
                                            }

                                            curr += "</table>"
                                            setHistory(prev => prev + curr);
                                        }
                                        else if (text == "cd projects") {
                                            setprojectsFolderOpen(true);
                            
                                            setHistory(prev => prev + `\nC:\\Users\\Puneeth>${projectsFolderOpen ? 'Projects>' : ''} ${text}\n`);
                                            setCommandRunning(true);
                                            TypeWriter(`\n${commands.get(text)}\n`, 10);

                                        } else if (text == "cd.." || text == "cd ..") {
                                            const newCmd = `\nC:\\Users\\Puneeth>${projectsFolderOpen ? 'Projects>' : ''} ${text}\n`
                                            setHistory(prev => prev + newCmd);
                                            setprojectsFolderOpen(false);
                                        } else if (projectsMap.has(text)) {
                                            let newCmd = `\nC:\\Users\\Puneeth>${projectsFolderOpen ? 'Projects>' : ''} ${text}\n`
                                            if (projectsFolderOpen) {
                                                setHistory(prev => prev + newCmd);
                                                setCommandRunning(true);
                                                TypeWriter(`\n${projectsMap.get(text)}\n`, 10);
                                            } else {
                                                newCmd += `No Such File Found In Current Directory\n`
                                                setHistory(prev => prev + newCmd);
                                            }
                                        }
                                        else if (text !== "") {
                                            if (commands.has(text)) {
                                                setHistory(prev => prev + `\nC:\\Users\\Puneeth>${projectsFolderOpen ? 'Projects>' : ''} ${text}\n`);
                                                setCommandRunning(true);
                                                TypeWriter(`\n${commands.get(text)}\n`, 10);
                                            } else {
                                                setHistory(prev => prev + `\nC:\\Users\\Puneeth>${projectsFolderOpen ? 'Projects>' : ''} ${text}\nCommand Not Found\n`);
                                            }
                                        }
                                        let tempArr = commandsHistory;
                                        tempArr.push(e.target.value);
                                        setCommandHistory(tempArr);
                                        setcurrInd(tempArr.length);
                                        e.target.value = "";
                                        setcurrCommand("");
                                    } else if (e.key == "ArrowDown") {
                                        if (currInd + 1 < commandsHistory.length) {
                                            setcurrCommand(commandsHistory[currInd + 1]);
                                            setcurrInd(currInd + 1);
                                        } else if (currInd + 1 == commandsHistory.length) {
                                            setcurrCommand("");
                                            setcurrInd(commandsHistory.length)
                                        }

                                    }
                                    else if (e.key == "ArrowUp") {
                                        if (currInd - 1 >= 0) {
                                            setcurrCommand(commandsHistory[currInd - 1]);
                                            setcurrInd(currInd - 1);
                                        }

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