import Input from '@/frontend/components/elements/Input';
import { WithClassName } from '@/frontend/types/UI';
import { Table } from '@tanstack/react-table';
import { ButtonHTMLAttributes } from 'react';

type TableSearchProps<TData> = WithClassName & {
    table: Table<TData>;
    input: ButtonHTMLAttributes<HTMLInputElement>;
    label?: string;
};

const TableSearch = <TData,>({
    className,
    table,
    input,
    label,
}: TableSearchProps<TData>) => {
    return (
        <Input
            className={className}
            type="text"
            label={label || 'Search...'}
            {...input}
        />
    );
};

export default TableSearch;
