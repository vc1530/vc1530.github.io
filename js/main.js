$(function () {

    $(".project").mouseover(function() { 
        const desc = $(this).find(".project-desc"); 
        desc.css("background-color", "var(--sinbad"); 
        desc.css("color", "white"); 
        const img = $(this).find("img.project-img"); 
        img.css("filter", "blur(4px)")
        img.css("-webkit-filter", "blur(4px)");
        const icon = $(this).find(".img-container i"); 
        icon.css("display", "block"); 
    })

    $(".project").mouseout(function() { 
        const desc = $(this).find(".project-desc"); 
        desc.css("background-color", "var(--almond"); 
        desc.css("color", "black"); 
        const img = $(this).find("img.project-img"); 
        img.css("filter", "none")
        img.css("-webkit-filter", "none"); 
        const icon = $(this).find(".img-container i"); 
        icon.css("display", "none"); 
    })

  })