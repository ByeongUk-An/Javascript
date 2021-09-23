// $(".tab-button")
//   .eq(0)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(0).addClass("active");
//     $(".tab-content").eq(0).addClass("show");
//   });

// $(".tab-button")
//   .eq(1)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(1).addClass("active");
//     $(".tab-content").eq(1).addClass("show");
//   });

// $(".tab-button")
//   .eq(2)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(2).addClass("active");
//     $(".tab-content").eq(2).addClass("show");
//   });

// for (let i = 0; i < 2; i++) {
//   $(".tab-button")
//     .eq(i)
//     .click(function () {
//       $(".tab-button").removeClass("active");
//       $(".tab-content").removeClass("show");
//       $(".tab-button").eq(i).addClass("active");
//       $(".tab-content").eq(i).addClass("show");
//     });
// }

function tabopen(i) {
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(i).addClass("active");
  $(".tab-content").eq(i).addClass("show");
}

$(".list").click(function (e) {
  // console.log(e.target.dataset.id);
  tabopen(e.target.dataset.id);
});
