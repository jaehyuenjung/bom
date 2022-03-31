import Layout from "@components/layout";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CompoentDetail: NextPage = () => {
    return (
        <Layout seoTitle="Component Detail">
            <div className="w-36 aspect-square bg-gray-500 rounded-full" />

            <Chart
                options={{
                    chart: {
                        id: "basic-bar",
                    },
                    xaxis: {
                        categories: [
                            1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                            1999,
                        ],
                    },
                }}
                series={[
                    {
                        name: "series-1",
                        data: [30, 40, 45, 50, 49, 60, 70, 91],
                    },
                ]}
                type="bar"
            />
        </Layout>
    );
};

export default CompoentDetail;
