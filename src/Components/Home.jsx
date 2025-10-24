import { useState } from "react"
import { FolderClosed } from 'lucide-react';

export default function Home() {
    const commands = new Map();
    commands.set("about",
        "\tHello! This is Puneeth Kumar, currently pursuing my 3rd year of Computer Science Engineering at RGUKT-RK Valley.\nI'm passionate about coding, problem-solving, and building cross-platform applications. I love working with technologies like React Native, JavaScript, and C++.\n" +
        "Over the past year, I've consistently participated in coding contests on LeetCode and GeeksforGeeks, completed multiple 30-day POTD streaks, and built several small projects while learning development.\n" +
        "My focus is on mastering DSA, improving problem-solving skills, and creating impactful software products.\n" +
        "Type 'projects' to see what I've built, or 'skills' to know the technologies I work with!"
    );
    const [fullScreen, setFullScreen] = useState(false);
    const date = new Date().toUTCString();

    const [history, setHistory] = useState(`Last Login : ${date}\n`);
    return (
        <div className={`flex flex-col justify-center items-center min-h-screen bg-[#3B3B3F] ${fullScreen ? 'p-0' : 'p-4'}`}>
            <div className={`bg-black w-full text-white font-mono shadow-2xl rounded-lg
  ${fullScreen ? 'w-full h-screen m-0' : 'm-2 sm:w-[60%] w-[90%] h-auto min-h-[24rem]'}`}>
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
                <div className="p-2 text-left mb-10">
                    <pre className="whitespace-pre-wrap">{history}</pre>
                    <div className="flex gap-1 mt-4">
                        <h1>{'C:\\Users\\Puneeth> '}</h1>
                        <input type="text" className="bg-transparent outline-none caret-white text-white font-medium thick-caret w-full" onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if (e.target.value === "clear") {
                                    setHistory(`Last Login : ${date}\n`);
                                    e.target.value = "";
                                }
                                else if (e.target.value.trim() !== "") {
                                    const currcommand = e.target.value.trim();
                                    const curr = history;
                                    if (commands.has(currcommand)) {
                                        curr += `\nC:\\Users\\Puneeth> ${e.target.value}\n${commands.get(currcommand)}\n`;
                                    } else {
                                        curr += `\nC:\\Users\\Puneeth> ${e.target.value}\nCommand Not Found\n`;
                                    }
                                    setHistory(curr);
                                    e.target.value = "";
                                }
                            }
                        }}
                        ></input>
                    </div>
                </div>
            </div>

        </div>
    )
}