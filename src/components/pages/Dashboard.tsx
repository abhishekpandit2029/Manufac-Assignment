import { useState, useEffect } from "react";
import { IDataSource } from "../../interfaces/main";
import { data } from "../datasource/Data";
import TableComponent, { ElementTuple } from "../main/TableComponent";
import "../../index.css"

type TableMappingType = {
    head: string[];
    rowData: ElementTuple[];
};

export default function Dashboard() {
    const [results, setResults] = useState<Array<{
        Year: string,
        Highest: number | null,
        Lowest: number | null
    }>>();

    const AccessData: IDataSource[] = data?.map((item) => ({
        country_name: item["Country"],
        year: item["Year"],
        crop_name: item["Crop Name"],
        crop_production: item["Crop Production (UOM:t(Tonnes))"],
        yield_of_crops: item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"],
        area_under_cultivation: item["Area Under Cultivation (UOM:Ha(Hectares))"]
    })) || [];

    const TableMapping: TableMappingType[] = [
        {
            head: ["Year", "Crop with Maximum Production in that Year", "Crop with Minimum Production in that Year"],
            rowData: results?.map(item => [item.Year, item.Highest, item.Lowest] as ElementTuple) || []
        },
        {
            head: ["Crop", "Average Yield of the Crop between 1950 - 2020", "Average Cultivation Area of the Crop between 1950 - 2020"],
            rowData: AccessData?.map(item => [item.crop_name, item.yield_of_crops, item.area_under_cultivation] as ElementTuple) || []
        },
    ];

    useEffect(() => {
        function extractYear(yearString: string): string {
            const match = yearString.match(/(\d{4})$/);
            return match ? match[1] : yearString;
        }

        function groupByYear(data: IDataSource[]) {
            return data.reduce((acc, entry) => {
                const year = extractYear(entry.year);
                if (!acc[year]) {
                    acc[year] = [];
                }
                acc[year].push(entry);
                return acc;
            }, {} as Record<string, IDataSource[]>);
        }

        function findHighLowByYear(data: IDataSource[]) {
            const groupedData = groupByYear(data);
            const result = [];

            for (const year in groupedData) {
                const entries = groupedData[year];

                let maxProduction = -Infinity;
                let minProduction = Infinity;

                entries.forEach(entry => {
                    const production = typeof entry.crop_production === 'string'
                        ? entry.crop_production
                        : entry.crop_production.toString();
                    if (production !== "" && !isNaN(parseFloat(production))) {
                        const productionValue = parseFloat(production);

                        if (productionValue > maxProduction) {
                            maxProduction = productionValue;
                        }

                        if (productionValue < minProduction) {
                            minProduction = productionValue;
                        }
                    }
                });

                result.push({
                    Year: year,
                    Highest: maxProduction === -Infinity ? null : maxProduction,
                    Lowest: minProduction === Infinity ? null : minProduction
                });
            }

            return result;
        }

        const results = findHighLowByYear(AccessData);
        setResults(results);
    }, []);

    return (
        <div className="initial-body">
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Indian Agriculture Data Analysis: Crop Production and Yield Statistics (1950-2020)</h2>

            <>
                {
                    TableMapping?.map((item, index) => (
                        <div className="table-div" key={index}>
                            <div className="scroll-wrapper">
                                <div className="scroll-inner">
                                    <TableComponent head={item.head} rowData={item.rowData} />
                                    <p>Scroll to view more.</p>
                                </div>
                            </div>
                            <p className="scroll-text">Scroll to view more.</p>
                        </div>
                    ))
                }
            </>
        </div>
    );
}


