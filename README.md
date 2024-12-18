<h1>Просмотр метрик производительности приложения</h1>
<h2>Установка</h2>
<code>yarn add metrics-sevice-helper</code>
or
<code>npm i metrics-sevice-helper</code>
<h2>Пример использования</h2>
<code>showMetrics("mark" | "measure" | "navigation" | "resource" | "paint" | "layout-shift" | "longtask" | "first-input")</code>
<h2>Значения, передаваемые в метод showMetrics</h2>
<ul>
    <li>"mark" - Это временные метки, которые можно использовать для измерения производительности на различных этапах выполнения кода.</li>
    <li>"measure" - Эти записи представляют собой измерения времени между двумя метками.</li>
    <li>"navigation" - Записи, которые содержат информацию о навигации на странице. Они описывают время, затраченное на загрузку страницы, включая время ответа и другие параметры.</li>
    <li>"resource" - Записи, касающиеся загружаемых ресурсов, таких как изображения, стили CSS, JavaScript и т.д. Эти записи отслеживают время загрузки и выполнения каждого конкретного ресурса.</li>
    <li>"paint" - Записи, связанные с событиями отрисовки. Включает в себя такие показатели, как "first-paint" и "first-contentful-paint", которые информируют о том, когда контент начал отображаться.</li>
    <li>"layout-shift" - Записи, содержащие информацию о сдвигах в макете, происходящих на странице. Это полезный критерий для оценки стабильности пользовательского интерфейса и минимизации сдвигов, которые могут повлиять на пользовательский опыт.</li>
    <li>"longtask" - Записи, которые представляют собой задачи, выполняющиеся дольше 50 миллисекунд. Это помогает выявлять задачи, которые могут замедлить отклик страницы.</li>
    <li>"first-input" - Записи, которые представляют первое взаимодействие пользователя с веб-страницей (например, нажатие кнопки или ввод текста). Это помогает измерить время, прошедшее до первого взаимодействия.</li>
</ul>