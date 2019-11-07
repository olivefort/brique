var budy = document.getElementById('budy');
for(j=1;j<10;j++){
    var newLine = document.createElement('div');
    newLine.setAttribute('id', 'l'+j);
    budy.appendChild(newLine);
    if(j%2 != 0){
        for(i=1;i<10;i++){
            var NewDiv = document.createElement('div');
            NewDiv.setAttribute('id', 'l1b'+i);
            newLine.appendChild(NewDiv);
            var myImg = document.createElement('img');
            myImg.src = 'img/l1b'+i+'.png';
            NewDiv.appendChild(myImg);
        }
    }else{
        for(i=1;i<10;i++){
            var NewDiv = document.createElement('div');
            NewDiv.setAttribute('id', 'l2b'+i);
            newLine.appendChild(NewDiv);
            var myImg = document.createElement('img');
            myImg.src = 'img/l2b'+i+'.png';
            NewDiv.appendChild(myImg);
        }
    }
}