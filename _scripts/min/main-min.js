function initVars(){$showNav=$("nav span#nav"),$nav=$("nav > ul")}function showNav(){$showNav.click(function(){return $nav.toggleClass("expanded"),!1})}function placeholderSupported(){return test=document.createElement("input"),"placeholder"in test}function initPlaceholders(){0<$("input[placeholder]").length&&(placeholderSupported()||($("input[placeholder]").focus(function(){var a=$(this);a.val()===a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder"))}).blur(function(){var a=$(this);""!==a.val()&&a.val()!==a.attr("placeholder")||(a.addClass("placeholder"),a.val(a.attr("placeholder")))}).blur(),$("input[placeholder]").parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var a=$(this);a.val()===a.attr("placeholder")&&a.val("")})})))}function firstLoad(){initVars(),showNav(),initPlaceholders(),placeholderSupported()}var $showNav,$nav;$(function(){firstLoad()});