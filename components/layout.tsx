import { NextPage } from "next";
import Head from "next/head";

interface LayoutProps {
    seoTitle: string;
    children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ seoTitle, children }) => {
    return (
        <div className="max-w-screen-lg min-h-screen mx-auto bg-gray-300 bg-opacity-40 pt-20 flex justify-center rounded-md">
            <Head>
                <title>{seoTitle} | BOM</title>
            </Head>
            <div className="bg-white w-full max-w-screen-lg px-2 h-12 justify-center text-lg font-medium fixed border-b border-gray-300 top-0 flex items-center rounded-md">
                <div className="flex justify-center items-center font-bold text-xl">
                    BOM
                </div>
                <div className="absolute flex right-5 items-center space-x-5">
                    <div className="px-4 py-2 cursor-pointer bg-gray-800 rounded-md text-white text-sm flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <span className="pl-1">Light</span>
                    </div>
                    <div className="px-4 py-2 cursor-pointer bg-gray-800 rounded-md text-white text-sm flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                        <span className="pl-1">Dark</span>
                    </div>
                </div>
            </div>
            <div className="w-[768px] flex flex-col bg-white rounded-md shadow-md px-12 py-8 ">
                {children}
            </div>
        </div>
    );
};

export default Layout;
