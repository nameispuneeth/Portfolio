import { useState } from "react"
import { FolderClosed } from 'lucide-react';

export default function Home() {
    const commands=new Map();
    
    const [fullScreen, setFullScreen] = useState(false);
    const date = new Date().toUTCString();

    const [history, setHistory] = useState(`Last Login : ${date}`);
    return (
        <div className={`flex flex-col justify-center items-center h-screen bg-[#3B3B3F] ${fullScreen ? 'p-0' : 'p-4'}`}>
            <div className={`bg-black h-full w-full ${fullScreen ? 'w-[100%]' : 'm-2 sm:w-[60%] w-[90%]'} text-white font-mono shadow-2xl rounded-lg`}>
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
                <div className="p-2 text-left">
                    <pre>{history}</pre>
                    <div className="flex gap-1">
                        <h1>{'C:\\Users\\Puneeth> '}</h1>
                        <input type="text" className="bg-transparent outline-none caret-white text-white font-medium thick-caret" onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if (e.target.value === "clear") {
                                    setHistory(`Last Login : ${date}`);
                                    e.target.value = "";
                                }
                                else if (e.target.value.trim() !== "") {
                                    const curr = history;
                                    curr += `\nC:\\Users\\Puneeth> ${e.target.value}`;
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