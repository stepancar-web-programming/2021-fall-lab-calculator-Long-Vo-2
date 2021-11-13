const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry); // Cumulative Layout Shift: 0.1s <- 0.25s
            getFID(onPerfEntry); // First Input Delay: 0.1s <- 0.3s
            getFCP(onPerfEntry); // First Contentful Paint: 1.8s <- 3.0s
            getLCP(onPerfEntry); // Largest Contentful Paint 2.5s <- 4.0s
            getTTFB(onPerfEntry); // Time to First Byte: 0.2s <- 0.5s
        });
    }
};

export default reportWebVitals;
