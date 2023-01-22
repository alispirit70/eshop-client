import React, {ReactNode} from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";
import styles from './Table.module.css'

type headerType = {
    name: string | number,
    title: string | number
}
type rowType = (string | number)[]

type propsType = {
    header: headerType[] | false,
    rows: rowType[],
    tableBorder?: boolean,
    tableStriped?: boolean,
    headerVariant?: 'light' | 'dark' | 'secondary',
}
const Table: React.FC<propsType> = ({
                                        header,
                                        rows,
                                        tableBorder,
                                        tableStriped,
                                        headerVariant = 'default',
                                    }) => {

    const attributes = {}
    const theadClass = (headerVariant: string): string => {
        switch (headerVariant) {
            case 'light':
                return styles.headerLight
                break;
            case 'dark':
                return styles.headerDark
                break;
            case 'secondary':
                return styles.headerSecondary
                break;
            default:
                return styles.headerDefault
        }
    }
    const getCells = (row: rowType): ReactNode => {
        return row.map(cell => <TableCell>{cell}</TableCell>);
    }
    return (
        <>
            <TableContainer component={Paper}>
                <MuiTable sx={{minWidth: 700}} aria-label="customized table" className={` ${tableStriped ? styles.TableStriped : ''}`}>
                    {!!header && <thead className={theadClass(headerVariant)}>
                    <tr>
                        {header.map(head => <th key={head.name}>{head.title}</th>
                        )}
                    </tr>
                    </thead>}
                    {rows.map((row, index) => <TableRow key={index}>
                            {getCells(row)}
                        </TableRow>
                    )}
                </MuiTable>
            </TableContainer>
        </>
    );
};

export default Table;