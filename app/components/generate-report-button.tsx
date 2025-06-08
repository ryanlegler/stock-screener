'use client';

import { useState } from 'react';
import { generateReport } from '../lib/actions/generate-report';

export function GenerateReportButton() {
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
            disabled={isGenerating}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
            {isGenerating ? 'Generating...' : 'Generate New Report'}
        </button>
    );
}
