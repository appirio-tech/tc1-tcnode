/*
 * Copyright (C) 2010 TopCoder Inc., All Rights Reserved.
 */

// the readable string of each month
var monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// the readable string of each day
var dayString = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
                "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
                "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];

/**
 * Use AJAX to get rss feed, and render the data to html page.
 * @param rssUrl the URL of the rss feed
 * @param renderFunc the render function that render the rss data to html page, the rss data is grouped by year
 * @param categoryFilter the allowed categories to filter the rss items(joined by ;), if categoryFilter is
 * null,empty or undefined, then all categories are allowed
 * @param maxPastMonth the allowed max past month to filter the rss items, if maxPastMonth is null,zero or undefined,
 * then all items are allowed
 */
function getRssArticles(rssUrl, renderFunc, categoryFilter, maxPastMonth) {
    if (categoryFilter) {
        categoryFilter = categoryFilter.split(";");
    }
    // send ajax request
    $.ajax({
        url: rssUrl,
        success: function(data) {
            var articles = new Array();
            var years = new Array();
            $(data).find("item").each(function() {
                var title = $(this).find("title").text();
                var link = $(this).find("link").text();
                var categories = $(this).find("category");
                var description = $(this).find("description").text();
                var pubDate = new Date(Date.parse($(this).find("pubDate").text()));
                var newslink = $(this).find("custom_fields > news_link").text();
                var provider_logo = $(this).find("custom_fields > provider_logo").text();
                var provider_name = $(this).find("custom_fields > provider_name").text();
                if (categoryFilter) {
                    // filter the items by category
                    var find = false;
                    for (var i = 0; i < categories.length; i++) {
                        if ($.inArray($(categories[i]).text(), categoryFilter) != -1) {
                            find = true;
                            break;
                        }
                    }
                    if (find == false) {
                        return;
                    }
                }
                if (!link && !newslink) {
                    // The news_link will be a link to an external site that hosts the article if it is not hosted on TC.
                    // For either, if they don't exist you can assume you shouldn't display the element
                    return;
                }
                if (maxPastMonth) {
                    // filter the items by max past month
                    if (new Date().getTime() - pubDate.getTime() > maxPastMonth * 30 * 24 * 60 * 60 * 1000) {
                        return;
                    }
                }
                if (!articles[pubDate.getFullYear()]) {
                    // group the rss items by year
                    articles[pubDate.getFullYear()] = new Array();
                    years.push(pubDate.getFullYear());
                }
                articles[pubDate.getFullYear()].push({title: title,
                                link: link,
                                description: description,
                                pubDate: pubDate,
                                newslink: newslink,
                                provider_logo: provider_logo,
                                provider_name: provider_name});
            });
            // render the rss items to page
            renderFunc(articles, years);
        },
        dataType: "xml"
    });
}

// Render the rss items to press release tab page in press room
function renderReleaseArchive(articles, years) {
    $('#loading').hide();
    for (var yi = 0; yi < years.length; yi++) {
        var year = years[yi];
        var pr_subheader = $('<div class="pr_subheader"><h2><span/></h2></div>');
        pr_subheader.find("span").text(year);
        var dl = $('<dl/>');
        for (var i = 0; i < articles[year].length; i++) {
            var article = articles[year][i];
            var link = "";
            if (!article.newslink) {
                link = article.link;
            } else {
                link = article.newslink;
            }
            var aElem = $("<a/>").attr('href', encodeURI(link)).text(article.title);
            var dateElem = $("<small/>").css('margin-left', '10px').text(
                '[' + monthString[article.pubDate.getMonth()] + ' ' + dayString[article.pubDate.getDate() - 1] + ']');
            aElem.append('<br/>').append(dateElem);
            dl.append($('<dd/>').append(aElem));
        }
        var pr_box = $('<div class="pr_box"><div class="pr_box2"><div class="pr_boxcontent"><div class="pr_newsarchive"/>'
                    + '<p class="pr_backtop"><a href="#pr_top">Back to Top</a></p><div class="pr_clear"/></div></div></div>');
        pr_box.find(".pr_newsarchive").append(dl);
        $('#pr_content').append(pr_subheader).append(pr_box);
    }
}

// Render the rss items to articles archive tab page in press room
function renderArticlesArchive(articles, years) {
    $('#loading').hide();
    for (var yi = 0; yi < years.length; yi++) {
        var year = years[yi];
        var pr_subheader = $('<div class="pr_subheader"><h2><span/></h2></div>');
        pr_subheader.find("span").text(year);
        var dl = $('<dl/>');
        for (var i = 0; i < articles[year].length; i++) {
            var article = articles[year][i];
            var link = "";
            if (!article.newslink) {
                link = article.link;
            } else {
                link = article.newslink;
            }
            var provider_name = "";
            if (article.provider_name) {
                provider_name = " - " + article.provider_name;
            }
            var aElem = $("<a/>").attr('href', encodeURI(link)).text(article.title);
            var dateElem = $("<small/>").css('margin-left', '10px').text(
                '[' + monthString[article.pubDate.getMonth()] + ' ' + dayString[article.pubDate.getDate() - 1] + provider_name + ']');
            aElem.append('<br/>').append(dateElem);
            dl.append($('<dd/>').append(aElem));
        }
        var pr_box = $('<div class="pr_box"><div class="pr_box2"><div class="pr_boxcontent"><div class="pr_newsarchive"/>'
                    + '<p class="pr_backtop"><a href="#pr_top">Back to Top</a></p><div class="pr_clear"/></div></div></div>');
        pr_box.find(".pr_newsarchive").append(dl);
        $('#pr_content').append(pr_subheader).append(pr_box);
    }
}

// Render the rss items to current news page in press room
function renderCurrentNews(articles, years) {
    $('#loading').hide();
    for (var yi = 0; yi < years.length; yi++) {
        var year = years[yi];
        var pr_subheader = $('<div class="pr_subheader"><h2><span/></h2></div>');
        pr_subheader.find("span").text(year);
        var pr_boxcontent = $('<div/>').addClass('pr_boxcontent');
        for (var i = 0; i < articles[year].length; i++) {
            var article = articles[year][i];
            var pr_newsitem = $('<div/>').addClass('pr_newsitem');
            var logo = "";
            var link = "";
            if (!article.newslink) {
                logo = "http://www.topcoder.com/i/pressroom/topcoder_logo.png";
                link = article.link;
            } else {
                logo = article.provider_logo;
                link = article.newslink;
            }
            if (logo) {
                var img = $('<img/>').attr({border: '0', alt: 'Logo', src: encodeURI(logo)});
                var aEle = $('<a/>').attr({href: encodeURI(link), target: '_blank'}).append(img);
                pr_newsitem.append($('<div/>').addClass('pr_img').append(aEle));
            }
            var pr_headlines = $('<div/>').addClass('pr_headlines');
            var titleElem = $('<a/>').attr({href: encodeURI(link), 'target': '_blank'}).text(article.title);
            var pElem = $('<p/>').append(article.description);
            var dateStr = '[' + monthString[article.pubDate.getMonth()] + ' ' + dayString[article.pubDate.getDate() - 1] + ']';
            var dateElem = $('<small/>').append($('<a/>').attr('href', encodeURI(link)).text(dateStr));
            pElem.append(dateElem);
            pr_headlines.append($('<h3/>').append(titleElem)).append(pElem);
            pr_newsitem.append(pr_headlines).append('<div class="pr_clear"/>');
            pr_boxcontent.append(pr_newsitem);
        }
        pr_boxcontent.append('<p class="pr_backtop"><a href="#pr_top">Back to Top</a></p><div class="pr_clear"/>');
        var pr_box = $('<div class="pr_box"><div class="pr_box2"></div></div>');
        pr_box.find('.pr_box2').append(pr_boxcontent);
        $('#pr_content').append(pr_subheader).append(pr_box);
    }
}
