$(document).ready(() => {
  $("#carouselButton").click(() => {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#myCarousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else {
      $("#myCarousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });
});

$(document).ready(() => {
  $("#loginModalBtn").click(() => {
    $("#loginModal").modal("show");
    $("loginModal").children(
      $(".close").click(() => {
        $("#loginModal").modal("hide");
      })
    );
  });
});

$(document).ready(() => {
  $("#reserveModalBtn").click(() => {
    $("#reserveModal").modal("show");
    $("reserveModal").children(
      $(".close").click(() => {
        $("#reserveModal").modal("hide");
      })
    );
  });
});
