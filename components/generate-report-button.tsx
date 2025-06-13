'use client';

import { useState } from 'react';
import { generateReport } from '@/app/lib/api/generate-report';
import { cn } from '@/lib/utils';
import { MAX_TOP_SYMBOLS } from '@/app/constants';

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
    const [reportsLoaded, setReportsLoaded] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

    const incrementReportsLoaded = () => {
        const interval = setInterval(() => {
            setReportsLoaded(prev => prev + 1);
        }, 1000);
        setIntervalId(interval);
    };

    const handleGenerate = async () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        setReportsLoaded(0);
        setIsGenerating(true);
        incrementReportsLoaded();
        try {
            const result = await generateReport();
            if (!result.success) {
                console.error('Failed to generate report:', result.error);
            }
        } catch (error) {
            console.error('Error generating report:', error);
        } finally {
            setIsGenerating(false);
            if (intervalId) {
                clearInterval(intervalId);
            }
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
            {isGenerating ? (
                <div className="flex items-center justify-center gap-2">
                    {' '}
                    <span className="animate-spin">⌛</span> Fetching Data {reportsLoaded} /{' '}
                    {MAX_TOP_SYMBOLS}
                </div>
            ) : (
                label || 'Generate New Report'
            )}
        </button>
    );
}
