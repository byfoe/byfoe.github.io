   $(document).ready(function () {
            let ekrah = $('.ekrah').wrapInner('<div></div>'),
                min = 20,
                max = 70,
                minMove = 10,
                maxMove = 20;

            startAnimation(ekrah);

            ekrah.on('animationend webkitAnimationEnd oAnimationEnd', 'span:last-child', e => {
                startAnimation(ekrah);
            });

            //Set CSS vars & generate spans if needed
            function setCSSVars(elem, min, max, minMove, maxMove) {
                let width = Math.ceil(elem.width()),
                    text = elem.text();
                for (let i = 1; i < width; i++) {
                    let num = Math.floor(Math.random() * (max - min + 1)) + min,
                        numMove = Math.floor(Math.random() * (maxMove - minMove + 1)) + minMove,
                        dir = (i % 2 == 0) ? 1 : -1,
                        spanCurrent = elem.find('span:eq(' + i + ')'),
                        span = spanCurrent.length ? spanCurrent : $('<span />');
                    span.css({
                        '--x': i - 1 + 'px',
                        '--move-y': num * dir + 'px',
                        '--move-y-s': ((i % 2 == 0) ? num * dir - numMove : num * dir + numMove) + 'px',
                        '--delay': i * 10 + 'ms'
                    });
                    if (!spanCurrent.length) {
                        elem.append(span.text(text));
                    }
                }
            }

            //Start animation
            function startAnimation(elem) {
                elem.removeClass('start');
                setCSSVars(elem, min, max, minMove, maxMove);
                void elem[0].offsetWidth;
                elem.addClass('start');
            }
        });

var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);
