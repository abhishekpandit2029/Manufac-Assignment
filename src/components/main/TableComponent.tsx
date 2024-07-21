import { Table } from '@mantine/core';

type ElementTuple = [number | string, number | string, number | string];

type ElementArray = ElementTuple;

interface ITableProps {
    head: string[];
    rowData: ElementArray[]
}

export default function TableComponent(props: ITableProps) {
    const { head, rowData } = props

    return <Table stickyHeader data={{
        head,
        body: rowData,
    }} />;
}