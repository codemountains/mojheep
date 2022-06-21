type ResultTableProps = {
    result: {
        strLen: number;
        strLenDuration: number;
        spaceLen: number;
        spaceLenDuration: number;
        newLineLen: number;
        newLineLenDuration: number;
    };
}

const ResultTable = ({result}: ResultTableProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-sm text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">項目名</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            カウント結果
                        </th>
                        <th scope="col" className="px-6 py-3">
                            処理時間（ミリ秒）
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            文字数（改行・空白含む）
                        </th>
                        <td className="px-6 py-4 font-bold text-lg">
                            {result.strLen}
                        </td>
                        <td className="px-6 py-4 font-bold text-lg">
                            {result.strLenDuration.toFixed(20)}
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            空白数（全角・半角）
                        </th>
                        <td className="px-6 py-4 font-bold text-lg">
                            {result.spaceLen}
                        </td>
                        <td className="px-6 py-4 font-bold text-lg">
                            {result.spaceLenDuration.toFixed(20)}
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            行数
                        </th>
                        <td className="px-6 py-4 font-bold text-lg">
                            {result.newLineLen}
                        </td>
                        <td className="px-6 py-4 font-bold text-lg">
                            {result.newLineLenDuration.toFixed(20)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;
