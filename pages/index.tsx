import type {NextPage} from "next";
import Layout from "../components/base/Layout";
import ToggleSwitch from "../components/buttons/ToggleSwitch";
import ResetButton from "../components/buttons/ResetButton";
import {get_length, get_space_length, get_new_line_length} from "../lib/wasm.pkg/wasm_bg";
import React, {useState} from "react";
import ResultTable from "../components/tables/ResultTable";
import {getStrLen, getSpaceLen, getNewLineLen} from "../lib/js.pkg/utils";
import Image from "next/image";

type CountResult = {
    strLen: number;
    strLenDuration: number;
    spaceLen: number;
    spaceLenDuration: number;
    newLineLen: number;
    newLineLenDuration: number;
}

const getResult = (text: string, isWasm: boolean): CountResult => {
    let strLen: number;
    let spaceLen: number;
    let newLineLen: number;

    performance.clearMarks();
    performance.clearMeasures();

    if (isWasm) {
        performance.mark("getStrLen:start");
        strLen = get_length(text);
        performance.mark("getStrLen:end");

        performance.mark("getSpaceLen:start");
        spaceLen = get_space_length(text);
        performance.mark("getSpaceLen:end");

        performance.mark("getNewLineLen:start");
        newLineLen = get_new_line_length(text);
        performance.mark("getNewLineLen:end");
    }
    else {
        performance.mark("getStrLen:start");
        strLen = getStrLen(text);
        performance.mark("getStrLen:end");

        performance.mark("getSpaceLen:start");
        spaceLen = getSpaceLen(text);
        performance.mark("getSpaceLen:end");

        performance.mark("getNewLineLen:start");
        newLineLen = getNewLineLen(text);
        performance.mark("getNewLineLen:end");
    }

    // measure
    performance.measure(
        "getStrLen",
        "getStrLen:start",
        "getStrLen:end"
    );
    performance.measure(
        "getSpaceLen",
        "getSpaceLen:start",
        "getSpaceLen:end"
    );
    performance.measure(
        "getNewLineLen",
        "getNewLineLen:start",
        "getNewLineLen:end"
    );

    const measureResults = performance.getEntriesByType("measure");
    const strLenDuration = measureResults[0].duration;
    const spaceLenDuration = measureResults[1].duration;
    const newLineLenDuration = measureResults[2].duration;

    return {
        strLen,
        strLenDuration,
        spaceLen,
        spaceLenDuration,
        newLineLen,
        newLineLenDuration
    };
};

const initializeResult = () => {
    return {
        strLen: 0,
        strLenDuration: 0,
        spaceLen: 0,
        spaceLenDuration: 0,
        newLineLen: 0,
        newLineLenDuration: 0
    };
}

const Home: NextPage = () => {

    const [inputText, setInputText] = useState("");

    const [isWasm, setIsWasm] = useState(true);
    const changeCountType = React.useCallback(() => {
        setIsWasm(!isWasm);
        setResult(getResult(inputText, !isWasm));
    }, [isWasm, inputText]);

    const [result, setResult] = useState<CountResult>(initializeResult());
    const getLength = (text: string) => {
        setInputText(text);
        setResult(getResult(text, isWasm));
    };

    const resetText = React.useCallback(() => {
        setInputText("");
        setResult(initializeResult());
    }, []);

    return (
        <Layout title="mojheep - 文字数カウント">
            <h1 className="hidden">
                mojheep!
            </h1>
            <div className="m-2 inline-flex">
                <div className="inline-flex items-center">
                    <Image src="/mojheep.svg" alt="mojheep" width={300} height={90} />
                </div>
                <div className="ml-2 inline-flex items-center">
                    <Image src="/sleep_sheep.svg" alt="sleep sheep" width={80} height={80} />
                </div>
            </div>
            <div className="m-2">
                <span>
                    文字数をチェックしたいテキストを以下のテキストフィールドに入力してください。
                </span>
            </div>
            <div>
                <textarea
                    id="textArea"
                    placeholder="＠・ｴ・＠メェー"
                    className="rounded-md border-2 resize w-full h-56 p-2"
                    value={inputText}
                    onChange={(event) => getLength(event.target.value)}
                >
                </textarea>
            </div>
            <div className="w-full text-left mt-2">
                <ToggleSwitch isWasm={isWasm} onClick={changeCountType} />
                <div className="float-right">
                    <ResetButton onClick={resetText} />
                </div>
            </div>
            <div className="mt-4 ml-2 mr-2">
                <ResultTable result={result}/>
            </div>
        </Layout>
    );
};

export default Home;
