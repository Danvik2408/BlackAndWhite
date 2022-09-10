blackTheme.onclick = function(){
    document.body.style.color="white";
    document.body.style.backgroundColor="black";

}
whiteTheme.onclick = function(){
    document.body.style.color="black";
    document.body.style.backgroundColor="white";

}
ChangeTextColor.onclick = function(){
    palitra.style.display = 'flex';
}
red.onclick = function(){
    text.style.color = 'red';
    palitra.style.display = 'none';
}
green.onclick = function(){
    text.style.color = 'green';
    palitra.style.display = 'none';
}
blue.onclick = function(){
    text.style.color = 'blue';
    palitra.style.display = 'none';
}
orange.onclick = function(){
    text.style.color = 'orange';
    palitra.style.display = 'none';
}
pink.onclick = function(){
    text.style.color = 'pink';
    palitra.style.display = 'none';
}
black.onclick = function(){
    text.style.color = 'black';
    body.style.backgroundColor = 'white';
    palitra.style.display = 'none';
}
white.onclick = function(){
    text.style.color = 'white';
    document.body.style.color='black';
    palitra.style.display = 'none';
}
otherColor.oninput = function(){
    text.style.color = otherColor.value;
}

function getRandomColor(){
    let r = '#'+Math.floor(Math.random()*16777216).toString(16)
    return r
}

RandomBg.onclick = function(){
    document.body.style.backgroundColor = getRandomColor()
}
ChangeFontSize.onclick = function(){
    FontSize.style.display = 'flex'
    FontFamily.style.display = 'none';
}
px14.onclick = function(){
    text.style.fontSize = '14px';
    FontSize.style.display = 'none'
    
}
px16.onclick = function(){
    text.style.fontSize = '16px';
    FontSize.style.display = 'none'

}
px24.onclick = function(){
    text.style.fontSize = '24px';
    FontSize.style.display = 'none'

}
px32.onclick = function(){
    text.style.fontSize = '32px';
    FontSize.style.display = 'none'

}
px40.onclick = function(){
    text.style.fontSize = '40px';
    FontSize.style.display = 'none'

}
px48.onclick = function(){
    text.style.fontSize = '48px';
    FontSize.style.display = 'none'

}
px56.onclick = function(){
    text.style.fontSize = '56px';
    FontSize.style.display = 'none'

}
px64.onclick = function(){
    text.style.fontSize = '64px';
    FontSize.style.display = 'none'

}
ChangeFontFamily.onclick = function(){
    FontFamily.style.display = 'flex';
    FontSize.style.display = 'none';
}
Montserrat.onclick = function(){
    text.style.fontFamily = 'monospace';
    FontFamily.style.display = 'none';
}
Arial.onclick = function(){
    text.style.fontFamily = 'Arial'
    FontFamily.style.display = 'none';

}
sansSerif.onclick = function(){
    text.style.fontFamily = 'Sans-serif'
    FontFamily.style.display = 'none';

}
inputText.onclick = function(){
    text.innerText = YourText.value;
    FontFamily.style.display = 'none';
    FontSize.style.display = 'none'
}