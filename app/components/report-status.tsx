'use client';

// Check if report is from a different day
function isReportStale(generatedAt: string): boolean {
    const reportDate = new Date(generatedAt);
    const now = new Date();
    return reportDate.toDateString() !== now.toDateString();
}

interface ReportStatusProps {
    generatedAt: string;
}

export function ReportStatus({ generatedAt }: ReportStatusProps) {
    const isStale = isReportStale(generatedAt);
    const date = new Date(generatedAt);
    const formattedDate = date.toLocaleString();

    return (
        <div className="text-sm">
            <span className="text-gray-400">Last updated: {formattedDate}</span>
            {isStale && <span className="ml-2 text-yellow-600">(Report is out of date)</span>}
        </div>
    );
}
