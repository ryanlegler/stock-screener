'use client';

import { useState } from 'react';
import { generateReport } from '@/app/lib/api/generate-report';

export function GenerateReportButton({ disabled }: { disabled: boolean }) {
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
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-800 disabled:bg-gray-800 disabled:text-gray-500"
        >
            {isGenerating ? 'Generating...' : 'Generate New Report'}
        </button>
    );
}
