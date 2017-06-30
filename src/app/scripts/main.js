$(document).ready(function() {
  // $('.tab__header:first-child').find('.tab__title').attr('class', 'tab__title--active');
});

$('body').on('click', '.tabular__row', function(e) {
  $(this).toggleClass('open');
  if ($(e.target).hasClass('row')){
  };
  if ($(this).hasClass('open')){
    // $(this).find('.tabbed-section').hide();
  } else{
    // $(this).find('.tabbed-section').addClass('hidden');
  }
});

var previousIndex = 0;

$('body').on('click', '.tab__header', function() {
  var tabIndex = $(this).index('.tab__header');

  var tabLength = $(this).closest('.tab').find('.tab__header').length;
  var tabFinalIndex = tabLength - 1;
  var translateString = 'translateX('
  var scaleString = 'scaleX('

  var translateMathStart;

  if (previousIndex !== tabIndex) {

    if (tabIndex > previousIndex) {
      if (previousIndex === 0) {
        translateMathStart = 0;
        console.log('Translate Start: ' + translateMathStart);
      } else {
        translateMathStart = trimDecimal(previousIndex / tabLength);
        console.log('Translate Start: ' + translateMathStart);
      }
    } else if (tabIndex < previousIndex) {
      translateMathStart = trimDecimal(tabIndex / tabLength);
      console.log('Translate Start: ' + translateMathStart);
    } else if (tabIndex === 0) {
      translateMathStart = trimDecimal(tabIndex / tabLength);
      console.log('Translate Start: ' + translateMathStart);
    }

    var translateMathEnd = trimDecimal(tabIndex / tabLength);
    console.log('Translate End: ' + translateMathEnd);

    var scaleMathStart = (1 / tabLength) * (Math.abs((tabIndex - previousIndex)) + 1);
    console.log('Scale Start:' + scaleMathStart);

    var scaleMathEnd = 1 / tabLength;
    console.log('Scale End:' + scaleMathEnd);

    var styleStringStart = 'transform: ' + translateString + translateMathStart + '%) ' + scaleString + scaleMathStart + ')';
    var styleStringEnd = 'transform: ' + translateString + translateMathEnd + '%) ' + scaleString + scaleMathEnd + ')';

    //$('.tab__underline').attr('style', styleStringStart);
    $(this).closest('.tab').find('.tab__underline').attr('style', styleStringEnd);

    window.setTimeout(function() {
      //$('.tab__underline').attr('style', styleStringEnd);
    }, 200);

    $('.tab__title--active').attr('class', 'tab__title');
    $(this).find('.tab__title').attr('class', 'tab__title--active');

    previousIndex = tabIndex;
  }

  $(this).closest('.tab').find('.tab__underline').show();

  $target = "."+$(this).attr('data-tab');

  // Cancel the siblings
  $(this).closest(".tabContainer").find(".tabbed-section").addClass('hidden');
  // Active the thumb & panel
  $(this).closest(".tabContainer").find($target).removeClass('hidden');

  $('.violation-icon').tooltip()

  // $(this).closest(".tabular__row").addClass("open");
});

function trimDecimal(number) {
  number = +number.toFixed(2);

  if(number.toString().length > 2) {
    number = number.toString().slice(2, 4);
  }

  if(number.toString().length === 1 && number.toString() !== "0") {
    number = number.toString().concat("0");
  }

  return number;
}

