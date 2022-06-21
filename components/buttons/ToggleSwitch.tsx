import Image from "next/image";
import React from "react";

type ToggleSwitchMemo = {
    isWasm: boolean;
    onClick: () => void;
}

const ToggleSwitch = React.memo<ToggleSwitchMemo>(
    function ToggleSwitchButton ({isWasm, onClick}) {
        const activeWasmDesign = " bg-white text-blue-700 rounded-full";
        const activeJsDesign = " bg-white text-gray-900 rounded-full";

        return (
            <div className="inline-flex">
                <div
                    className="bg-gray-100 text-sm text-gray-500 leading-none border-2 border-gray-300 rounded-full inline-flex">
                    <button
                        className={"inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-700 focus:text-blue-700 px-4 py-2 rounded-full" + (isWasm ? activeWasmDesign : "")}
                        onClick={onClick}
                    >
                        <Image src={"/wasm.svg"} alt="WebAssembly Logo" width={24} height={24}/>
                        <span className="ml-2">WebAssembly</span>
                    </button>
                    <button
                        className={"inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-gray-900 focus:text-gray-900 px-4 py-2 rounded-full" + (!isWasm ? activeJsDesign : "")}
                        onClick={onClick}
                    >
                        <Image src="/javascript.svg" alt="JavaScript Logo" width={24} height={24}/>
                        <span className="ml-2">JavaScript</span>
                    </button>
                </div>
                <div className="ml-3 text-sm font-medium  inline-flex items-center">
                    {isWasm ? "Rust" : "JavaScript"}で実装された処理で文字数をカウントします。
                </div>
            </div>
        );
    }
);

export default ToggleSwitch;
