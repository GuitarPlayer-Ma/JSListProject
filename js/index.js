

function $(id){
    return typeof id === 'string' ? document.getElementById(id):id;
}

window.onload = function(){
    // 拿到所有的li标签和li对应内容的div
    var titles = $('tab-header').getElementsByTagName('li');
    var divs = $('tab-content').getElementsByTagName('div');
    // 判断
    if(titles.length != divs.length) return;

    for(var i=0; i<titles.length; i++){
        var li = titles[i];
        li.id = i;
        li.onmousemove = function(){
            for(var j=0; j<divs.length; j++){
                titles[j].className = '';
                divs[j].style.display = 'none';
            }
            this.className = 'select';
            divs[this.id].style.display = 'block';
        }
    }
}