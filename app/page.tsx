'use client'

import React, { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

export default function Home() {
  const [data, setData] = useState<string>('');

  const inputHandle :ChangeEventHandler<HTMLInputElement> = (event) => {
    setData(event.currentTarget.value)
    console.log(data);
  }
  const [words, setWords] = useState<string[]>([]);

  const keyDownHandle :KeyboardEventHandler<HTMLInputElement> = (event) =>{
    console.log(event.key);
    if(data !== '' && event.key === 'Enter'){
      setWords((prevWords) => [...prevWords, data]);
    }
  }

  return (
    <div className="_container h-screen bg-black">
        <title>English Helper</title>
        <link rel="icon" href="D:\Projects\React\english-site\public\logo.png" />

        <div className="_header h-[12%] bg-purple-300">
            <li className="flex p-8 gap-x-10 text-lg">
                <a href="1" className="">MyBrand</a>
                <a href="dictionary">Dictionary</a>
                <a href="3">Translator</a>
                <a href="4">Game</a>
            </li>
        </div>

        <div className="_boddy h-[88%] bg-violet-200 flex items-center ">
          <div className="_translate_container w-[60%] h-[60%] mx-auto mb-20">
              <div className="_data_format_input_output grid grid-cols-2 gap-x-1.5">
                  <div className="_first_label p-1.5 text-center">Write your word</div>
                  <div className="_second_labe p-1.5 text-center">Translate this word</div>
                  <textarea className="_left_label h-[407%] p-4 text-lg rounded-l-3xl resize-none overflow-hidden outline-none flex-grow" />
                  <textarea className="_right_label h-[407%] p-4 text-lg rounded-r-3xl resize-none overflow-hidden outline-none" readOnly />
              </div>
          </div>
        </div>
    </div>
  )
}

{/*<input value={data} onChange={inputHandle} onKeyDown={keyDownHandle} className="w-[300px]" placeholder="Enter the data"></input>
          {words.map((element) => (<h1>{element}</h1>))}*/}