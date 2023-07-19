'use client'

import React, {useEffect, useState} from "react";

export default function Home() {

    const [title, setTitle] = useState('Panda Translate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setTitle('Panda Translate');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="_container h-screen">
            <title>{title}</title>
            <link rel="icon" href="app/panda.ico" />

            <div className='_header first-color h-[10%] p-4 pl-6 flex items-center'>
                <div className="_elemets_line flex gap-x-10 text-xl">
                    <a href="1">Translate</a>
                    <a href="2">Dictionary</a>
                    <a href="3">Game</a>
                </div>
            </div>

            <div className="_boddy second-color h-[80%] flex items-center">
                <div className="_translate_container w-[60%] h-[60%] mx-auto mb-20">
                    <div className="_information_line grid grid-cols-10 gap-x-2.5 mb-1 text-center items-center">
                        <div className="_left_col"></div>
                        <div className="_middle_left_col col-span-3"></div>
                        <div className="_center_col col-span-2 flex text-sm">
                            <div className="_left_label w-[45%]">
                                <button>ENG</button>
                            </div>
                            <div className="_switch_elemements_symbol w-[10%]">
                                <button>↔</button>
                            </div>
                            <div className="_right_label w-[45%]">
                                <button>UKR</button>
                            </div>
                        </div>
                        <div className="_middle_right_col col-span-3"></div>
                        <div className="_right_col"></div>
                    </div>

                    <div className="_textarea_middle_line w-[100%] h-[80%] flex gap-x-1.5">
                        <div className="_left_textarea_write w-[50%]">
н                        </div>
                        <div className="_right_textarea_read w-[50%]">
                            <textarea className="overflow-hidden w-[100%] h-[100%] p-4 rounded-2xl outline-none resize-none" readOnly placeholder="Translate the words"/>
                        </div>
                    </div>
                    <div>
                        <button className="_button bg-gray-100"></button>
                    </div>
                </div>
            </div>

            <div className="_footer fourth-color h-[10%]">
            </div>

        </div>
    )
}

{/*<input value={data} onChange={inputHandle} onKeyDown={keyDownHandle} className="w-[300px]" placeholder="Enter the data"></input>
          {words.map((element) => (<h1>{element}</h1>))}*/}