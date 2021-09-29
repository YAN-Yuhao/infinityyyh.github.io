var e,i=0;
e = document.getElementById("click");
i=0;
e.onclick=function(){
    if(i==0){
        alert("你吼辣么大声干什么吗？");
        i++;
    }
    else if(i==1){
        alert("辣你去物管啊！");
        i++;
    }
    else if(i==2){
        alert("你再骂？");
        i++;
    }
    else{
        alert("NMSL！！！");
        i=0;
    }
    return false;
}