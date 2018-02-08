$(document).ready(function() {

  var w, h, vmin, body, stageWidth, stageHeight, numFaces, myDialDraggable;
  var spinnerVal = $('.percent');

  function init() {
    //reference to the stage
    body = document.body;
    container = document.createElement('div');
    container.className = 'container';
    body.appendChild(container);

    TweenMax.set(container, {
      width: '100%',
      height: 'auto'
    });

    h = window.innerHeight;
    w = window.innerWidth;
    vMin = Math.min(h, w);
    stageWidth = w;
    stageHeight = w;
    numFaces = 31;
    initialFace = 0;
    fullRotation = 360;
    rotationStep = fullRotation / numFaces;
    dialWidth = w / 2;
    dialHeight = w / 2;
    createDial();
    setDialDraggable();
  }

  function createDial() {
    dial = document.createElement('div');
    dial.className = 'dial';
    TweenMax.set(dial, {
      position: 'absolute',
      left: '50%',
      xPercent: -50,
      yPercent: -50,
      top: '50%',
      scale: .7
    });

    var dialNumContainer, dialNum;
    for (var i = 0; i < numFaces; i++) {
      dialNumContainer = document.createElement('div');
      dialNum = document.createElement('div');
      dialNum.className = 'dial-number';
      dialNumarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
        "25", "26", "27", "28", "29", "30", "31",
      ];
      dialNum.innerHTML = dialNumarray[i];

      TweenMax.set(dialNumContainer, {
        position: 'absolute',
        x: (vMin / 2) - (90 / 2),
        y: 20,
        width: 90,
        height: 90,
        rotation: rotationStep * i,
        textAlign: 'center'
      });

      TweenMax.set(dialNum, {
        position: 'absolute',
        width: 90,
        height: 90,
        // fontSize:20,
        textAlign: 'center',
      });

      dialNum.initRotation = rotationStep * i;
      dialNumContainer.appendChild(dialNum);
      dial.appendChild(dialNumContainer);

    }
    body.appendChild(dial);
    setNumberRotation();
    var $dialdiv = $('.dial > div');
    $(window).resize(function(e) {
      h = window.innerHeight;
      w = window.innerWidth;
      vMin = Math.min(h, w);
      TweenMax.to($dialdiv, 0, {
        x: (vMin / 2) - (90 / 2)
      });
      // console.log((vMin/2) - (90/2));
    });
  }


  function setDialDraggable() {
    myDialDraggable = Draggable.create(dial, {
      type: 'rotation',
      dragResistance: 0.4,
      maxDuration: 1,
      throwResistance: .2,
      // bounds:{minRotation:0, maxRotation:-360+13.8},
      throwProps: true,
      onDrag: setNumberRotation,
      onThrowUpdate: setNumberRotation,
      ease: Back.easeOut.config(3),
      snap: function(endValue) {
        return Math.round(endValue / rotationStep) * rotationStep;
      }

    })

  }

  function setNumberRotation() {
    var i = document.getElementsByClassName('dial-number').length,
      currNum;
    while (--i > -1) {
      currNum = document.getElementsByClassName('dial-number')[i];
      TweenMax.set(currNum, {
        // rotation:-dial._gsTransform.rotation - currNum.initRotation
      })
    }

    var currRot = dial._gsTransform.rotation;
    var absRot = currRot % 360;
    var charIndex = Math.ceil(Math.round((absRot - (rotationStep / 2)) / rotationStep));
    // console.log(dialNumarray[charIndex] );
    // console.log(charIndex);
    switch (charIndex) {

      //counting up from A-Z
      case 0:
        $('.dial>div:nth-of-type(1)').addClass("selected");
        $('.dial>div').not(':nth-of-type(1)').removeClass("selected");
        $('.letter:nth-of-type(1)').addClass("shown");
        $('.letter').not(':nth-of-type(1)').removeClass("shown");
        break;
      case -1:
        $('.dial>div:nth-of-type(2)').addClass("selected");
        $('.dial>div').not(':nth-of-type(2)').removeClass("selected");
        $('.letter:nth-of-type(2)').addClass("shown");
        $('.letter').not(':nth-of-type(2)').removeClass("shown");
        break;
      case -2:
        $('.dial>div:nth-of-type(3)').addClass("selected");
        $('.dial>div').not(':nth-of-type(3)').removeClass("selected");
        $('.letter:nth-of-type(3)').addClass("shown");
        $('.letter').not(':nth-of-type(3)').removeClass("shown");
        break;
      case -3:
        $('.dial>div:nth-of-type(4)').addClass("selected");
        $('.dial>div').not(':nth-of-type(4)').removeClass("selected");
        $('.letter:nth-of-type(4)').addClass("shown");
        $('.letter').not(':nth-of-type(4)').removeClass("shown");
        break;
      case -4:
        $('.dial>div:nth-of-type(5)').addClass("selected");
        $('.dial>div').not(':nth-of-type(5)').removeClass("selected");
        $('.letter:nth-of-type(5)').addClass("shown");
        $('.letter').not(':nth-of-type(5)').removeClass("shown");
        break;
      case -5:
        $('.dial>div:nth-of-type(6)').addClass("selected");
        $('.dial>div').not(':nth-of-type(6)').removeClass("selected");
        $('.letter:nth-of-type(6)').addClass("shown");
        $('.letter').not(':nth-of-type(6)').removeClass("shown");
        break;
      case -6:
        $('.dial>div:nth-of-type(7)').addClass("selected");
        $('.dial>div').not(':nth-of-type(7)').removeClass("selected");
        $('.letter:nth-of-type(7)').addClass("shown");
        $('.letter').not(':nth-of-type(7)').removeClass("shown");
        break;
      case -7:
        $('.dial>div:nth-of-type(8)').addClass("selected");
        $('.dial>div').not(':nth-of-type(8)').removeClass("selected");
        $('.letter:nth-of-type(8)').addClass("shown");
        $('.letter').not(':nth-of-type(8)').removeClass("shown");
        break;
      case -8:
        $('.dial>div:nth-of-type(9)').addClass("selected");
        $('.dial>div').not(':nth-of-type(9)').removeClass("selected");
        $('.letter:nth-of-type(9)').addClass("shown");
        $('.letter').not(':nth-of-type(9)').removeClass("shown");
        break;
      case -9:
        $('.dial>div:nth-of-type(10)').addClass("selected");
        $('.dial>div').not(':nth-of-type(10)').removeClass("selected");
        $('.letter:nth-of-type(10)').addClass("shown");
        $('.letter').not(':nth-of-type(10)').removeClass("shown");
        break;
      case -10:
        $('.dial>div:nth-of-type(11)').addClass("selected");
        $('.dial>div').not(':nth-of-type(11)').removeClass("selected");
        $('.letter:nth-of-type(11)').addClass("shown");
        $('.letter').not(':nth-of-type(11)').removeClass("shown");
        break;
      case -11:
        $('.dial>div:nth-of-type(12)').addClass("selected");
        $('.dial>div').not(':nth-of-type(12)').removeClass("selected");
        $('.letter:nth-of-type(12)').addClass("shown");
        $('.letter').not(':nth-of-type(12)').removeClass("shown");
        break;
      case -12:
        $('.dial>div:nth-of-type(13)').addClass("selected");
        $('.dial>div').not(':nth-of-type(13)').removeClass("selected");
        $('.letter:nth-of-type(13)').addClass("shown");
        $('.letter').not(':nth-of-type(13)').removeClass("shown");
        break;
      case -13:
        $('.dial>div:nth-of-type(14)').addClass("selected");
        $('.dial>div').not(':nth-of-type(14)').removeClass("selected");
        $('.letter:nth-of-type(14)').addClass("shown");
        $('.letter').not(':nth-of-type(14)').removeClass("shown");
        break;
      case -14:
        $('.dial>div:nth-of-type(15)').addClass("selected");
        $('.dial>div').not(':nth-of-type(15)').removeClass("selected");
        $('.letter:nth-of-type(15)').addClass("shown");
        $('.letter').not(':nth-of-type(15)').removeClass("shown");
        break;
      case -15:
        $('.dial>div:nth-of-type(16)').addClass("selected");
        $('.dial>div').not(':nth-of-type(16)').removeClass("selected");
        $('.letter:nth-of-type(16)').addClass("shown");
        $('.letter').not(':nth-of-type(16)').removeClass("shown");
        break;
      case -16:
        $('.dial>div:nth-of-type(17)').addClass("selected");
        $('.dial>div').not(':nth-of-type(17)').removeClass("selected");
        $('.letter:nth-of-type(17)').addClass("shown");
        $('.letter').not(':nth-of-type(17)').removeClass("shown");
        break;
      case -17:
        $('.dial>div:nth-of-type(18)').addClass("selected");
        $('.dial>div').not(':nth-of-type(18)').removeClass("selected");
        $('.letter:nth-of-type(18)').addClass("shown");
        $('.letter').not(':nth-of-type(18)').removeClass("shown");
        break;
      case -18:
        $('.dial>div:nth-of-type(19)').addClass("selected");
        $('.dial>div').not(':nth-of-type(19)').removeClass("selected");
        $('.letter:nth-of-type(19)').addClass("shown");
        $('.letter').not(':nth-of-type(19)').removeClass("shown");
        break;
      case -19:
        $('.dial>div:nth-of-type(20)').addClass("selected");
        $('.dial>div').not(':nth-of-type(20)').removeClass("selected");
        $('.letter:nth-of-type(20)').addClass("shown");
        $('.letter').not(':nth-of-type(20)').removeClass("shown");
        break;
      case -20:
        $('.dial>div:nth-of-type(21)').addClass("selected");
        $('.dial>div').not(':nth-of-type(21)').removeClass("selected");
        $('.letter:nth-of-type(21)').addClass("shown");
        $('.letter').not(':nth-of-type(21)').removeClass("shown");
        break;
      case -21:
        $('.dial>div:nth-of-type(22)').addClass("selected");
        $('.dial>div').not(':nth-of-type(22)').removeClass("selected");
        $('.letter:nth-of-type(22)').addClass("shown");
        $('.letter').not(':nth-of-type(22)').removeClass("shown");
        break;
      case -22:
        $('.dial>div:nth-of-type(23)').addClass("selected");
        $('.dial>div').not(':nth-of-type(23)').removeClass("selected");
        $('.letter:nth-of-type(23)').addClass("shown");
        $('.letter').not(':nth-of-type(23)').removeClass("shown");
        break;
      case -23:
        $('.dial>div:nth-of-type(24)').addClass("selected");
        $('.dial>div').not(':nth-of-type(24)').removeClass("selected");
        $('.letter:nth-of-type(24)').addClass("shown");
        $('.letter').not(':nth-of-type(24)').removeClass("shown");
        break;
      case -24:
        $('.dial>div:nth-of-type(25)').addClass("selected");
        $('.dial>div').not(':nth-of-type(25)').removeClass("selected");
        $('.letter:nth-of-type(25)').addClass("shown");
        $('.letter').not(':nth-of-type(25)').removeClass("shown");
        break;
      case -25:
        $('.dial>div:nth-of-type(26)').addClass("selected");
        $('.dial>div').not(':nth-of-type(26)').removeClass("selected");
        $('.letter:nth-of-type(26)').addClass("shown");
        $('.letter').not(':nth-of-type(26)').removeClass("shown");
        break;
      case -26:
        $('.dial>div:nth-of-type(27)').addClass("selected");
        $('.dial>div').not(':nth-of-type(27)').removeClass("selected");
        $('.letter:nth-of-type(27)').addClass("shown");
        $('.letter').not(':nth-of-type(27)').removeClass("shown");
        break;
      case -27:
        $('.dial>div:nth-of-type(28)').addClass("selected");
        $('.dial>div').not(':nth-of-type(28)').removeClass("selected");
        $('.letter:nth-of-type(28)').addClass("shown");
        $('.letter').not(':nth-of-type(28)').removeClass("shown");
        break;
      case -28:
        $('.dial>div:nth-of-type(29)').addClass("selected");
        $('.dial>div').not(':nth-of-type(29)').removeClass("selected");
        $('.letter:nth-of-type(29)').addClass("shown");
        $('.letter').not(':nth-of-type(29)').removeClass("shown");
        break;
      case -29:
        $('.dial>div:nth-of-type(30)').addClass("selected");
        $('.dial>div').not(':nth-of-type(30)').removeClass("selected");
        $('.letter:nth-of-type(30)').addClass("shown");
        $('.letter').not(':nth-of-type(30)').removeClass("shown");
        break;
      case -30:
        $('.dial>div:nth-of-type(31)').addClass("selected");
        $('.dial>div').not(':nth-of-type(31)').removeClass("selected");
        $('.letter:nth-of-type(31)').addClass("shown");
        $('.letter').not(':nth-of-type(31)').removeClass("shown");
        break;
        //Counting down from B-Z
      case 31:
        $('.dial>div:nth-of-type(1)').addClass("selected");
        $('.dial>div').not(':nth-of-type(1)').removeClass("selected");
        $('.letter:nth-of-type(1)').addClass("shown");
        $('.letter').not(':nth-of-type(1)').removeClass("shown");
        break;
      case 30:
        $('.dial>div:nth-of-type(2)').addClass("selected");
        $('.dial>div').not(':nth-of-type(2)').removeClass("selected");
        $('.letter:nth-of-type(2)').addClass("shown");
        $('.letter').not(':nth-of-type(2)').removeClass("shown");
        break;
      case 29:
        $('.dial>div:nth-of-type(3)').addClass("selected");
        $('.dial>div').not(':nth-of-type(3)').removeClass("selected");
        $('.letter:nth-of-type(3)').addClass("shown");
        $('.letter').not(':nth-of-type(3)').removeClass("shown");
        break;
      case 28:
        $('.dial>div:nth-of-type(4)').addClass("selected");
        $('.dial>div').not(':nth-of-type(4)').removeClass("selected");
        $('.letter:nth-of-type(4)').addClass("shown");
        $('.letter').not(':nth-of-type(4)').removeClass("shown");
        break;
      case 27:
        $('.dial>div:nth-of-type(5)').addClass("selected");
        $('.dial>div').not(':nth-of-type(5)').removeClass("selected");
        $('.letter:nth-of-type(5)').addClass("shown");
        $('.letter').not(':nth-of-type(5)').removeClass("shown");
        break;
      case 26:
        $('.dial>div:nth-of-type(6)').addClass("selected");
        $('.dial>div').not(':nth-of-type(6)').removeClass("selected");
        $('.letter:nth-of-type(6)').addClass("shown");
        $('.letter').not(':nth-of-type(6)').removeClass("shown");
        break;
      case 25:
        $('.dial>div:nth-of-type(7)').addClass("selected");
        $('.dial>div').not(':nth-of-type(7)').removeClass("selected");
        $('.letter:nth-of-type(7)').addClass("shown");
        $('.letter').not(':nth-of-type(7)').removeClass("shown");
        break;
      case 24:
        $('.dial>div:nth-of-type(8)').addClass("selected");
        $('.dial>div').not(':nth-of-type(8)').removeClass("selected");
        $('.letter:nth-of-type(8)').addClass("shown");
        $('.letter').not(':nth-of-type(8)').removeClass("shown");
        break;
      case 23:
        $('.dial>div:nth-of-type(9)').addClass("selected");
        $('.dial>div').not(':nth-of-type(9)').removeClass("selected");
        $('.letter:nth-of-type(9)').addClass("shown");
        $('.letter').not(':nth-of-type(9)').removeClass("shown");
        break;
      case 22:
        $('.dial>div:nth-of-type(10)').addClass("selected");
        $('.dial>div').not(':nth-of-type(10)').removeClass("selected");
        $('.letter:nth-of-type(10)').addClass("shown");
        $('.letter').not(':nth-of-type(10)').removeClass("shown");
        break;
      case 21:
        $('.dial>div:nth-of-type(11)').addClass("selected");
        $('.dial>div').not(':nth-of-type(11)').removeClass("selected");
        $('.letter:nth-of-type(11)').addClass("shown");
        $('.letter').not(':nth-of-type(11)').removeClass("shown");
        break;
      case 20:
        $('.dial>div:nth-of-type(12)').addClass("selected");
        $('.dial>div').not(':nth-of-type(12)').removeClass("selected");
        $('.letter:nth-of-type(12)').addClass("shown");
        $('.letter').not(':nth-of-type(12)').removeClass("shown");
        break;
      case 19:
        $('.dial>div:nth-of-type(13)').addClass("selected");
        $('.dial>div').not(':nth-of-type(13)').removeClass("selected");
        $('.letter:nth-of-type(13)').addClass("shown");
        $('.letter').not(':nth-of-type(13)').removeClass("shown");
        break;
      case 18:
        $('.dial>div:nth-of-type(14)').addClass("selected");
        $('.dial>div').not(':nth-of-type(14)').removeClass("selected");
        $('.letter:nth-of-type(14)').addClass("shown");
        $('.letter').not(':nth-of-type(14)').removeClass("shown");
        break;
      case 17:
        $('.dial>div:nth-of-type(15)').addClass("selected");
        $('.dial>div').not(':nth-of-type(15)').removeClass("selected");
        $('.letter:nth-of-type(15)').addClass("shown");
        $('.letter').not(':nth-of-type(15)').removeClass("shown");
        break;
      case 16:
        $('.dial>div:nth-of-type(16)').addClass("selected");
        $('.dial>div').not(':nth-of-type(16)').removeClass("selected");
        $('.letter:nth-of-type(16)').addClass("shown");
        $('.letter').not(':nth-of-type(16)').removeClass("shown");
        break;
      case 15:
        $('.dial>div:nth-of-type(17)').addClass("selected");
        $('.dial>div').not(':nth-of-type(17)').removeClass("selected");
        $('.letter:nth-of-type(17)').addClass("shown");
        $('.letter').not(':nth-of-type(17)').removeClass("shown");
        break;
      case 14:
        $('.dial>div:nth-of-type(18)').addClass("selected");
        $('.dial>div').not(':nth-of-type(18)').removeClass("selected");
        $('.letter:nth-of-type(18)').addClass("shown");
        $('.letter').not(':nth-of-type(18)').removeClass("shown");
        break;
      case 13:
        $('.dial>div:nth-of-type(19)').addClass("selected");
        $('.dial>div').not(':nth-of-type(19)').removeClass("selected");
        $('.letter:nth-of-type(19)').addClass("shown");
        $('.letter').not(':nth-of-type(19)').removeClass("shown");
        break;
      case 12:
        $('.dial>div:nth-of-type(20)').addClass("selected");
        $('.dial>div').not(':nth-of-type(20)').removeClass("selected");
        $('.letter:nth-of-type(20)').addClass("shown");
        $('.letter').not(':nth-of-type(20)').removeClass("shown");
        break;
      case 11:
        $('.dial>div:nth-of-type(21)').addClass("selected");
        $('.dial>div').not(':nth-of-type(21)').removeClass("selected");
        $('.letter:nth-of-type(16)').addClass("shown");
        $('.letter').not(':nth-of-type(21)').removeClass("shown");
        break;
      case 10:
        $('.dial>div:nth-of-type(22)').addClass("selected");
        $('.dial>div').not(':nth-of-type(22)').removeClass("selected");
        $('.letter:nth-of-type(22)').addClass("shown");
        $('.letter').not(':nth-of-type(22)').removeClass("shown");
        break;
      case 9:
        $('.dial>div:nth-of-type(23)').addClass("selected");
        $('.dial>div').not(':nth-of-type(23)').removeClass("selected");
        $('.letter:nth-of-type(23)').addClass("shown");
        $('.letter').not(':nth-of-type(23)').removeClass("shown");
        break;
      case 8:
        $('.dial>div:nth-of-type(24)').addClass("selected");
        $('.dial>div').not(':nth-of-type(24)').removeClass("selected");
        $('.letter:nth-of-type(24)').addClass("shown");
        $('.letter').not(':nth-of-type(24)').removeClass("shown");
        break;
      case 7:
        $('.dial>div:nth-of-type(25)').addClass("selected");
        $('.dial>div').not(':nth-of-type(25)').removeClass("selected");
        $('.letter:nth-of-type(25)').addClass("shown");
        $('.letter').not(':nth-of-type(25)').removeClass("shown");
        break;
      case 6:
        $('.dial>div:nth-of-type(26)').addClass("selected");
        $('.dial>div').not(':nth-of-type(26)').removeClass("selected");
        $('.letter:nth-of-type(26)').addClass("shown");
        $('.letter').not(':nth-of-type(26)').removeClass("shown");
        break;
      case 5:
        $('.dial>div:nth-of-type(27)').addClass("selected");
        $('.dial>div').not(':nth-of-type(27)').removeClass("selected");
        $('.letter:nth-of-type(27)').addClass("shown");
        $('.letter').not(':nth-of-type(27)').removeClass("shown");
        break;
      case 4:
        $('.dial>div:nth-of-type(28)').addClass("selected");
        $('.dial>div').not(':nth-of-type(28)').removeClass("selected");
        $('.letter:nth-of-type(28)').addClass("shown");
        $('.letter').not(':nth-of-type(28)').removeClass("shown");
        break;
      case 3:
        $('.dial>div:nth-of-type(29)').addClass("selected");
        $('.dial>div').not(':nth-of-type(29)').removeClass("selected");
        $('.letter:nth-of-type(29)').addClass("shown");
        $('.letter').not(':nth-of-type(29)').removeClass("shown");
        break;
      case 2:
        $('.dial>div:nth-of-type(30)').addClass("selected");
        $('.dial>div').not(':nth-of-type(30)').removeClass("selected");
        $('.letter:nth-of-type(25)').addClass("shown");
        $('.letter').not(':nth-of-type(30)').removeClass("shown");
        break;
      case 1:
        $('.dial>div:nth-of-type(31)').addClass("selected");
        $('.dial>div').not(':nth-of-type(31)').removeClass("selected");
        $('.letter:nth-of-type(31)').addClass("shown");
        $('.letter').not(':nth-of-type(31)').removeClass("shown");
        break;


      default:
        console.log("Showing nothing");
    }
  }
  init();
  var $arrows = $('.arrows');
  $('.dial').hover(function() {
    $('.dialShell').addClass('dialShadowShow');
    TweenMax.to([this], .5, {
      scale: .75,
      ease: Back.easeOut.config(1.7)
    });
  }, function() {
    $('.dialShell').removeClass('dialShadowShow');
    TweenMax.to([this], 1, {
      scale: .7,
      ease: Elastic.easeOut.config(1, 0.3)
    });
  });
});
