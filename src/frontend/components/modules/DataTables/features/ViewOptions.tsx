'use client';

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { RxMixerHorizontal } from 'react-icons/rx';
import { Table } from '@tanstack/react-table';

import { Button } from '@/frontend/components/elements/Button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/frontend/components/elements/Dropdown';
import { WithClassName } from '@/frontend/types/UI';
import { cn } from '@/frontend/lib/utils';

type ViewOptionsProps<TData> = WithClassName & {
    table: Table<TData>;
};

const ViewOptions = <TData,>({ className, table }: ViewOptionsProps<TData>) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className={cn('ml-auto hidden h-8 lg:flex', className)}
                >
                    <RxMixerHorizontal className="mr-2 h-4 w-4" />
                    View
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            typeof column.accessorFn !== 'undefined' &&
                            column.getCanHide()
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                    column.toggleVisibility(!!value)
                                }
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        );
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ViewOptions;
