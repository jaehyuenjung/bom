import Layout from "@components/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Layout seoTitle="Home">
            <h1 className="font-bold text-lg ">List of History</h1>
            <div className="space-y-10">
                <div className="py-5">
                    <label className="font-bold">제품별</label>
                    <table className=" table-auto shadow-md overflow-x-auto rounded-md w-full">
                        <thead className="border-b-2 border-indigo-300">
                            <tr className="font-bold uppercase text-gray-400">
                                <th className="px-6 py-4">
                                    <input type="checkbox" />
                                </th>
                                <th className="px-6 py-4">제품번호</th>
                                <th className="px-6 py-4">상태</th>
                                <th className="px-6 py-4">수량</th>
                                <th className="px-6 py-4">주문일</th>
                                <th className="px-6 py-4">납기일</th>
                            </tr>
                        </thead>
                        <tbody className="group">
                            <tr className="group-even:bg-slate-200 cursor-pointer">
                                <td className="px-6 py-4">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-6 py-4">abcd</td>
                                <td className="px-6 py-4">
                                    <div className="inline-block p-1 rounded-full bg-green-300" />{" "}
                                    완료
                                </td>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">
                                    {new Date().toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date().toLocaleDateString()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="float-right flex justify-between space-x-2 mt-4">
                        <div className="px-4 py-2 cursor-pointer bg-gray-800 rounded-md text-white text-sm">
                            편집
                        </div>
                        <div className="px-4 py-2 cursor-pointer bg-gray-800 rounded-md text-white text-sm">
                            숨기기
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <label className="font-bold">부품별</label>
                    <table className=" table-auto shadow-md overflow-x-auto rounded-md w-full">
                        <thead className="border-b-2 border-indigo-300">
                            <tr className="font-bold uppercase text-gray-400">
                                <th className="px-6 py-4">
                                    <input type="checkbox" />
                                </th>
                                <th className="px-6 py-4">제품번호</th>
                                <th className="px-6 py-4">상태</th>
                                <th className="px-6 py-4">수량</th>
                                <th className="px-6 py-4">주문일</th>
                                <th className="px-6 py-4">납기일</th>
                            </tr>
                        </thead>
                        <tbody className="group">
                            <tr className="group-even:bg-slate-200 cursor-pointer">
                                <td className="px-6 py-4">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-6 py-4">abcd</td>
                                <td className="px-6 py-4">
                                    <div className="inline-block p-1 rounded-full bg-green-300" />{" "}
                                    완료
                                </td>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">
                                    {new Date().toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date().toLocaleDateString()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="float-right flex justify-between space-x-2 mt-4">
                        <div className="px-4 py-2 cursor-pointer bg-gray-800 rounded-md text-white text-sm">
                            편집
                        </div>
                        <div className="px-4 py-2 cursor-pointer bg-gray-800 rounded-md text-white text-sm">
                            숨기기
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
