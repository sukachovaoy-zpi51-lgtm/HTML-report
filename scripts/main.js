$(document).ready(function() {

    // Tabs functionality
$(function () {

    var $firstTab = $('.tabs__item').first();
    var firstTabId = $firstTab.data('tab');

    $firstTab.addClass('tabs__item--active');
    $('.tabs-content__item[data-tab-content="' + firstTabId + '"]').addClass('tabs-content__item--active');

    $('.tabs__item').on('click', function () {
        var tabId = $(this).data('tab');

        $('.tabs__item').removeClass('tabs__item--active');
        $(this).addClass('tabs__item--active');

        $('.tabs-content__item').removeClass('tabs-content__item--active');
        var $activeContent = $('.tabs-content__item[data-tab-content="' + tabId + '"]');
        $activeContent.addClass('tabs-content__item--active');

        var $firstInnerTab = $activeContent.find('.inner-tabs__item').first();
        if ($firstInnerTab.length) {
            var innerTabId = $firstInnerTab.data('inner-tab');

            $activeContent.find('.inner-tabs__item').removeClass('inner-tabs__item--active');
            $firstInnerTab.addClass('inner-tabs__item--active');

            $activeContent.find('.inner-tabs-content__item').removeClass('inner-tabs-content__item--active');
            $activeContent
                .find('.inner-tabs-content__item[data-inner-tab-content="' + innerTabId + '"]')
                .addClass('inner-tabs-content__item--active');
        }
    });



    $('.tabs-content').on('click', '.inner-tabs__item', function () {
        var innerTabId = $(this).data('inner-tab');

        var $parent = $(this).closest('.tabs-content__item');

        $parent.find('.inner-tabs__item').removeClass('inner-tabs__item--active');
        $(this).addClass('inner-tabs__item--active');

        $parent.find('.inner-tabs-content__item').removeClass('inner-tabs-content__item--active');
        $parent
            .find('.inner-tabs-content__item[data-inner-tab-content="' + innerTabId + '"]')
            .addClass('inner-tabs-content__item--active');
    });
});

    // Set current year in footer

    $('#year').text(new Date().getFullYear())
}); 