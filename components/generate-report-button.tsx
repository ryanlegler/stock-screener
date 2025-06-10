'use client';

import { useState } from 'react';
import { generateReport } from '@/app/lib/api/generate-report';
import { cn } from '@/lib/utils';

export function GenerateReportButton({
    className,
    disabled,
    label,
}: {
    className?: string;
    disabled?: boolean;
    label?: string;
}) {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const result = await generateReport();
            if (!result.success) {
                console.error('Failed to generate report:', result.error);
            }
        } catch (error) {
            console.error('Error generating report:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <button
            onClick={handleGenerate}
            disabled={disabled || isGenerating}
            className={cn(
                'cursor-pointer rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-800 disabled:bg-gray-800 disabled:text-gray-500',
                className
            )}
        >
            {isGenerating ? 'Generating...' : label || 'Generate New Report'}
        </button>
    );
}
