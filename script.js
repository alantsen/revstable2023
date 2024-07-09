document.addEventListener('DOMContentLoaded', function() {
    // Revenue Breakdown data
    const revenueBreakdown = [
        { name: 'Payments', value: 486.2, color: '#260987' },
        { name: 'FX, Wealth & Crypto', value: 394.5, color: '#1cc7c5' },
        { name: 'Subscriptions', value: 243.6, color: '#4834d4' },
        { name: 'Interest Income', value: 499.6, color: '#22e2e0' },
        { name: 'Other Income', value: 88.5, color: '#6e5cbf' },
        { name: 'Other Fee Income', value: 85.4, color: '#7deef3' }
    ];

    // Function to create pie chart
    function createPieChart(data, elementId) {
        const total = data.reduce((sum, item) => sum + item.value, 0);
        let cumulativePercentage = 0;
        const pieChart = document.getElementById(elementId) || document.querySelector('.pie-chart');

        const gradientParts = data.map(item => {
            const startPercentage = cumulativePercentage;
            const endPercentage = startPercentage + (item.value / total) * 100;
            cumulativePercentage = endPercentage;
            return `${item.color} ${startPercentage}% ${endPercentage}%`;
        });

        pieChart.style.background = `conic-gradient(${gradientParts.join(', ')})`;
    }

    // Create main revenue breakdown chart
    createPieChart(revenueBreakdown);

    // Create other breakdown charts (you would need to define data for these)
    const paymentsBreakdown = [
        { name: 'Card Interchange', value: 340.3, color: '#260987' },
        { name: 'ATM Fees', value: 97.2, color: '#1cc7c5' },
        { name: 'Other Payment Services', value: 48.7, color: '#4834d4' }
    ];
    createPieChart(paymentsBreakdown, 'payments-chart');

    // Add similar calls for other breakdown charts
});
