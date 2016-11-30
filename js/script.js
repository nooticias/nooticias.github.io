jQuery(document).ready(function ($) {
    $('.content-link a, nav .cekurte a, footer .cekurte a').on('click', function() {
        ga('send', 'event', 'button', 'click', $(this).data('ga-label'));
    });

    $('.related_posts article div a').on('click', function() {
        ga('send', 'event', 'button', 'click', 'Posts Relacionados ' + $(this).parent().parent().find('header h1').text());
    });
});
