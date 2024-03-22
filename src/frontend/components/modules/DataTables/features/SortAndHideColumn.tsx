import { RxCaretSort } from 'react-icons/rx';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { IoMdEyeOff } from 'react-icons/io';

import { Column } from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import { Button } from '@/frontend/components/elements/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/elements/Dropdown';

type DataTableColumnHeaderProps<TData, TValue> =
    React.HTMLAttributes<HTMLDivElement> & {
        column: Column<TData, TValue>;
        title: string;
        wrapperClassName?: string;
    };

const SortAndHideColumn = <TData, TValue>({
    column,
    title,
    className,
    wrapperClassName,
}: DataTableColumnHeaderProps<TData, TValue>) => {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>;
    }

    return (
        <div className={cn('flex items-center space-x-2', wrapperClassName)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className={cn('-ml-3 h-8', className)}
                    >
                        <span>{title}</span>
                        {column.getIsSorted() === 'desc' ? (
                            <MdArrowDropDown className="ml-2 h-6 w-6" />
                        ) : column.getIsSorted() === 'asc' ? (
                            <MdArrowDropUp className="ml-2 h-6 w-6" />
                        ) : (
                            <RxCaretSort className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem
                        onClick={() => column.toggleSorting(false)}
                    >
                        <MdArrowDropUp className="mr-2 h-5 w-5 text-neutral-800/50" />
                        Ascending
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => column.toggleSorting(true)}
                    >
                        <MdArrowDropDown className="mr-2 h-5 w-5 text-neutral-800/50" />
                        Descending
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Button
                            className="w-full justify-start"
                            variant="ghost"
                            size="sm"
                            onClick={() => column.toggleVisibility(false)}
                        >
                            <IoMdEyeOff className="mr-2 h-4 w-4 text-neutral-800/50" />
                            Hide
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default SortAndHideColumn;
