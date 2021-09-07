var Links = {
  setColor:function (color_)
  {
    // var aList = document.querySelectorAll('a');
    // var aLen = aList.length;
    // for(let i = 0; i < aLen; i++)
    // {
    //   aList[i].style.color = color_;
    // }

    $('a').css('color', color_);
  }
}
var Body = {
  setColor:function (color_)
  {
    // document.querySelector('body').style.color = color_;
    $('body').css('color', color_);
  },
  setBackgroundColor:function (color_)
  {
    // document.querySelector('body').style.backgroundColor = color_;
    $('body').css('backgroundColor', color_);
  }
}

function nightDayhandler(thisButton)
{
  if(thisButton.value == 'night')
  {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    thisButton.value = 'day';

    Links.setColor('powderblue');
    // document.getElementById('active').style.color = 'lightpink';
    $('#active').css('color','lightpink');
  }
  else
  {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    thisButton.value = 'night';

    Links.setColor('black');
    // document.getElementById('active').style.color = 'red';
    $('#active').css('color','red');
  }
}
