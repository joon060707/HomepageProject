var data;
    readjson("apps.json");
    // readjson("https://raw.githubusercontent.com/joon060707/playground/main/pg1/apps.json");
    // 반드시 인터넷에 올라간 파일이어야 함.

function readjson(file){
    var f=new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange=function(){
        if (f.readyState === 4 && f.status == "200"){
            data=JSON.parse(f.responseText);
            setvalue(data, 0);
            document.getElementById("app01").style="color: red; font-weight: bold; font-size: 25px;";
        }
    };
    f.send();
}

function setvalue(data, position){
    var plist=["title", "info1", "info2", "date", "ver", "count"];
    var imglist=["appico", "sc1", "sc2", "sc3", "sc4"];
    var linklist=["ps", "blog"];
    var applist=["app01","app02","app03","app04","app05","app06","app07","app08"];
    var colorlist=["red","orange","brown","skyblue","skyblue","green","orange","gray"];

    for(h=0; h<applist.length; h++){
        document.getElementById(applist[h]).style="color: "+colorlist[h]+";";
    }
    document.getElementById(applist[position]).style="color: "+colorlist[position]+"; font-weight: bold; font-size: 25px;";
    for(i=0; i<plist.length; i++){
        document.getElementById(plist[i]).innerHTML=data.data[position][plist[i]];
    }
    document.getElementById("appico").src=data.data[position].appico;
    for(j=1; j<imglist.length; j++){
        document.getElementById(imglist[j]).src=data.data[position].scr[j-1];
        document.getElementById(imglist[j]).parentNode.href=data.data[position].scr[j-1];
    }
    for(k=0; k<linklist.length; k++){
        document.getElementById(linklist[k]).href=data.data[position].link[k];
    }


}



