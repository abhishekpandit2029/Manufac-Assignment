import { Table } from '@mantine/core';

type ElementTuple = [number | string | null, number | string | null, number | string | null];

type ElementArray = ElementTuple;

interface ITableProps {
    head: string[];
    rowData: ElementArray[]
}

export default function TableComponent(props: ITableProps) {
    const { head, rowData } = props

    return <Table stickyHeader withTableBorder withColumnBorders withRowBorders data={{
        head,
        body: rowData,
    }} />;
}