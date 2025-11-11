$(".show-btn").on("click", function () {
  const $card = $(this).closest(".card");
  const $inner = $card.find(".inner");

  $inner.stop(true, true).slideDown(200);
  $inner.find("p").show();

  if ($inner.find(".clear-btn").length === 0) {
    $inner.append('<button class="clear-btn">Sabai Hataun</button>');
  }

  $(this).attr("aria-expanded", "true");
});

$(".card")
  .on("mouseenter", function () {
    $(this).css("background", "#eef6ff");
  })
  .on("mouseleave", function () {
    $(this).css("background", "#f5f7fb");
  })
  .on("mousedown", function () {
    $(this).css("background", "#ffeaea");
  })
  .on("mouseup", function () {
    $(this).css("background", "#eaffea");
  });

let clickTimer = null;
const singleBump = 2;
const doubleBump = 6;

function bumpFont($el, px) {
  const cur = parseFloat($el.css("font-size")) || 16;
  $el.css("font-size", cur + px + "px");
}

$(document).on("click", ".grow", function () {
  const $t = $(this);
  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => bumpFont($t, singleBump), 220);
});

$(document).on("dblclick", ".grow", function () {
  const $t = $(this);
  clearTimeout(clickTimer);
  bumpFont($t, doubleBump);
});

$(document).on("click", ".clear-btn", function (e) {
  e.preventDefault();
  e.stopPropagation();
  const $card = $(this).closest(".card");

  $card.slideUp(180, function () {
    $card.remove();
  });
});
