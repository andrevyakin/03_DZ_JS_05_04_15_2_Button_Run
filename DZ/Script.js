/**
 * Created by Andrey on 09.04.2015.
 */
/** 1.	Создать список из 10 пунктов, в скрипте реализовать функцию,
 *  которая будет поочередно с верху вниз менять задний фон пунктов меню
 *  и при достижении конца начинать сначала.
 *  Нужно менять не только задний фон, но и сам цвет фона.
 *  То есть на каждом пункту меню будет разный цвет.
 *  Все остальные пункты, на которых не происходит замена в данный момент, должны быто одного цвета.*/

var button = document.getElementById ("button");

var timer;
var count = 0;
var color;

var x = screen.availWidth;
var y = screen.availHeight;
var dirX = true;
var dirY = true;
var moveX = 0;
var moveY = 0;

function GetRandom (num)
{
    return Math.round(num*Math.random());
}

function GetRandomColor()
{
    var red = GetRandom (255);
    var green = GetRandom (255);
    var blue = GetRandom (255);
    var color = "rgb("+red+","+green+","+blue+")";
    return color;
}

function Show(){

    if(dirX && dirY)
    {
        moveX ++;
        button.style.marginLeft = moveX + "px";
        if (x - 130 == moveX)
            dirX = false;
    }

    if(!dirX && dirY)
    {
        moveY ++;
        button.style.marginTop = moveY + "px";
        if (y - 120 == moveY)
            dirY = false;
    }

    if (!dirX && !dirY)
    {
        moveX --;
        button.style.marginLeft = moveX + "px";
        if (!moveX)
            dirX = true;
    }

    if (dirX && !dirY)
    {
        moveY --;
        button.style.marginTop = moveY + "px";
        if (!moveY)
            dirY = true;
    }

    count++;

    if (count == 200)
        button.style.color = GetRandomColor();

    if (count == 400)
    {
        button.style.background = GetRandomColor();
        count = 0;
    }
}

function Clock ()
{
    if (!timer) {
        timer = window.setInterval('Show()', 5);
        button.firstChild.nodeValue = "Останови меня";
    }
    else
    {
        button.firstChild.nodeValue = "Запусти меня";
        Stop();
    }
}

function Stop ()
{
    window.clearInterval(timer);
    timer = null;
}