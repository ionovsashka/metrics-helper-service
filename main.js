let performanceObserve

/**
 * Устанавливает слежение за метриками сайта.
 *
 * @param metric Метрика.
 */
function showMetrics(metric) {
    performanceObserve = new PerformanceObserver(
    (performanceEntryList) => {
        const performanceEntries = performanceEntryList.getEntries();

        performanceEntries.forEach((performanceEntry, index) => {
            const performanceEntryType = performanceEntry.entryType;

            switch (performanceEntryType) {
                case "paint":
                case "mark": {
                    console.log(`Название: ${performanceEntry.name}\nВремя: ${performanceEntry.startTime} мс`);
                    break;
                }
                case "measure": {
                    const previousEventName = performanceEntries[index - 1]?.name;

                    console.log(
                        previousEventName
                            ? `Время между метками  ${performanceEntry.name} и ${previousEventName}: ${performanceEntry.duration} мс`
                            : `Время выполнения первой метки ${performanceEntry.name}: ${performanceEntry.duration} мс`,
                    );
                    break;
                }
                case "navigation":
                case "longtask": {
                    console.log(`Название: ${performanceEntry.name}\nВремя: ${performanceEntry.duration} мс`);
                    break;
                }
                case "resource": {
                    console.log(
                        `Название ресурса: ${performanceEntry.name}\nТип ресураса:${performanceEntry.initiatorType}\nОткуда выполняется загрузка:${performanceEntry.deliveryType}\nВремя: ${performanceEntry.duration} мс`,
                    );

                    break;
                }
                case "layout-shift": {
                    console.log(
                        `Значение: ${performanceEntry.value}\nОбъекты, вызывающие смещение:`,
                        performanceEntry.sources.map(
                            (source) => source.node,
                        )
                    );
                    break;
                }
                case "first-input": {
                    console.log(
                        `Название: ${performanceEntry.name}\nВремя задержки:${performanceEntry.duration} мс\nОбъект, над которым было выполнено первое действие:`,
                        performanceEntry.target,
                    );
                    break;
                }
                default: {
                    console.log("Не удается обработать заданную группу метрик. Проверьте корректность названия.")
                    break;
                }
            }
        });
    });

    performanceObserve.observe({ type: metric, buffered: true }); // Свойство buffered позволяет получить информацию о событиях возникших до этапа инициализации observer'а
}

function disconnect() {
    performanceObserve.disconnect()
}

module.exports = {
    showMetrics,
    disconnect,
};