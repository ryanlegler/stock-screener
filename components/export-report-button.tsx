'use client';

import { useState } from 'react';
import { generateReport } from '@/app/lib/api/generate-report';
import { cn } from '@/lib/utils';
import { MAX_TOP_SYMBOLS } from '@/app/constants';

export function ExportReportButton({
    className,
    disabled,
    label,
    symbols,
}: {
    className?: string;
    disabled?: boolean;
    label?: string;
    symbols: string[];
}) {
    const handleExport = async () => {
        // download a text file with the symbols
        const blob = new Blob([symbols.join('\n')], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'symbols.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <button
            onClick={handleExport}
            disabled={disabled}
            className={cn(
                'cursor-pointer rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-800 disabled:bg-gray-800 disabled:text-gray-500',
                className
            )}
        >
            {label || 'Export Report'}
        </button>
    );
}
