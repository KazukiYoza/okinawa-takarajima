// PCサイドメニュー
$(".sidebar > nav > ul > li").hover(function() {
    //マウスカーソルが重なった時の処理
    $(this).children('.nav-child').css('visibility', 'visible');
},
function() {
    //マウスカーソルが離れた時の処理
    $(this).children('.nav-child').css('visibility', 'hidden');
});

// 楽天検索ボックス
function Form_Load() {
    if (this.searchForm.sitem.value.length > 0) {
      target = document.getElementById("clear_button");
      target.style.visibility = "visible";
    }
  }

// SPハンバーガーメニュー
    $(function () {
        $('#nav-toggle').on('click', function() {
            $('body').toggleClass('open');
        });
        $('#navigation li').on({
            'mouseenter' : function(){
                var index = $(this).index();
                $('#nav-bg-wrap .nav-bg').eq(index).addClass('active');
                
            },
            'mouseleave' : function(){
                var index = $(this).index();
                $('#nav-bg-wrap .nav-bg').eq(index).removeClass('active');
            }
        });
    });

// SPカテゴリーアコーディオン
$('.cat__menu__item__link').on('click',function(){
    $(this).next('.cat__submenu').slideToggle(700);
    $(this).find('.fa-plus').toggleClass('open');
    return false;
});
