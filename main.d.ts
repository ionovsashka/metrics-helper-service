type MetricsName =
    | "mark"
    | "measure"
    | "navigation"
    | "resource"
    | "paint"
    | "layout-shift"
    | "longtask"
    | "first-input";

export function showMetrics(metric: MetricsName): void;
export function disconnect(observer: PerformanceObserver): void;