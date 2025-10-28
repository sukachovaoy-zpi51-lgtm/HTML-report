$(document).ready(function() {
    $('.tabs__item').on('click', function() {
        var tabId = $(this).data('tab'); // Наприклад: "tab1"

        $('.tabs__item').removeClass('tabs__item--active');
        $(this).addClass('tabs__item--active');

        $('.tabs-content__item').removeClass('tabs-content__item--active');
        $('.tabs-content__item[data-tab-content="' + tabId + '"]').addClass('tabs-content__item--active');
    });
});