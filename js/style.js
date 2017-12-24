
(function($) {
    $.expr[":"].Contains = function(a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    function filterList(header, list) {
        //@header 头部元素
        //@list 无需列表
        //创建一个搜素表单
        var form = $("<form>").attr({
            "class":"filterform",
            action:"#"
        }), input = $("<input>").attr({
            "class":"filterinput",
            type:"text"
        });
        $(form).append(input).appendTo(header);
        $(input).change(function() {
            var filter = $(this).val();
            if (filter) {
                $matches = $(list).find("a:Contains(" + filter + ")").parent();
                $("li", list).not($matches).slideUp();
                $matches.slideDown();
            } else {
                $(list).find("li").slideDown();
            }
            return false;
        }).keyup(function() {
            $(this).change();
        });
    }
    $(function() {
        filterList($("#form"), $("#nav-list"));
    });
})(jQuery);


$(function(){

    rightInfo();

    $(window).resize(function(){
        rightInfo();
    })
});

function rightInfo(){
    var window_width = $(window).width();

    var right_info = $(".right_info");

    if(window_width > 610){
        right_info.width(window_width - 300);
    }else {
        right_info.width(window_width);
    }

}


$(function(){
    //限制字符个数
    $(".sub-title").each(function(){

        var maxwidth= 20;
        if($(this).text().length>maxwidth){ $(this).text($(this).text().substring(0,maxwidth)); $(this).html($(this).html()+'…');
        }
    });
});


//订阅卡片模式切换
$(function(){
    $(".select-schema ul li input").click(function(){

        var sub_img = $(".sub-img");
        var sub_intro = $(".sub-intro");

        if($(".card-pattern").is(":checked")){
            sub_img.css({"display":"block"});
            sub_intro.css({"display":"block"});
        }

        if($(".img-pattern").is(":checked")){
            sub_intro.css({"display":"none"});
            sub_img.css({"display":"block"});
        }

        if($(".word-pattern").is(":checked")){
            sub_img.css({"display":"none"});
            sub_intro.css({"display":"block"});
        }
    })

});


var si_isOk;
var su_isOk;
//登录注册表单验证

$(".si-userName").blur(function(){

    if($(this).val()==""){
        $(this).next("span").html("用户名不能为空");
        si_isOk = 1;
    }else{
        $(this).next("span").html("");
    }
});

$(".si-password").blur(function(){
    if($(this).val()==""){
        $(this).next("span").html("密码名不能为空");
        si_isOk = 1;
    }else{
        $(this).next("span").html("");
    }
});

$(".su-userName").blur(function(){

    if($(this).val()==""){
        $(this).next("span").html("用户名不能为空");
        su_isOk = 1;
    }else{
        $(this).next("span").html("");
    }
});

$(".su-password").blur(function(){
    if($(this).val()==""){
        $(this).next("span").html("密码名不能为空");
        su_isOk = 1;
    }else{
        $(this).next("span").html("");
    }
});

$(".su2-password").blur(function(){
    if($(this).val()==""){
        $(this).next("span").html("密码名不能为空");
        su_isOk = 1;
    }
    else if($(this).val()!=$(".su-password").val()){
        $(this).next("span").html("密码不一致");
        su_isOk = 1;
    }
    else{
        $(this).next("span").html("");
    }
});

$(".si-submit").click(function(){
    if(si_isOk == 1) {
        return false;
    }
});

$(".su-submit").click(function(){
    if(su_isOk == 1){
        return false;
    }
});



//添加订阅窗口
$(".add-sub").click(function(){
    $(".add-window").show(500);
});

$(".window-close").click(function(){
    $(".add-window").hide(500);
});


//删除订阅
$(".tree-ul1 .tree-ul2 .tree-ul3 .sub-delete").click(function(){
    $(this).parent().remove();
});

$(".tree-ul1 .tree-ul2 .sub-delete").click(function(){
    $(this).parent().remove();
});

$(".tree-ul1 .sub-delete").click(function(){
    $(this).parent().remove();
});
