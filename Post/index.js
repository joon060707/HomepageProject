var data;
var alllist=new Array();
var pos=0;
var maxpos=0;
var size;

readjson("list.json");

function readjson(file){
    var f=new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange=function(){
        if (f.readyState === 4 && f.status == "200"){
            data=JSON.parse(f.responseText);
            size=parseInt(document.getElementById("lsize").innerHTML);
            makelist(data, size);
        }
    };
    f.send();
}

function makelist(data, size){
    var plist=["name", "datestr", "datelong", "link"];
    for(i=0; i<data.doclist.length; i++){
        var tlist=new Array();
        for(j=0; j<plist.length; j++){
            tlist[j]=data.doclist[i][plist[j]];
        }
        alllist[i]=tlist;
    }
    alllist.sort((left, right) => right[2]-left[2]);        //내림차순       // 값이 양수면 자리바꿈.
    // alllist.sort((left, right) => left[2]-right[2]);        //오름차순
    maxpos=(data.doclist.length - data.doclist.length%size)/size;
//     maxpos=(data.doclist.length - (data.doclist.length+1)%(size+1))/size;
    setlist();
}

function setlist(){
    for(k=0; k<size; k++){
        var list=document.getElementById("list");
        var title;
        var date;
        var href;
        if(alllist[k+pos*size]==undefined){
            title="";
            date="";
            href="";
            list.childNodes[k*2+1].style="display: none;";
        } else{
            title=alllist[k+pos*size][0];
            date=alllist[k+pos*size][1];
            href=alllist[k+pos*size][3];
        }
            list.childNodes[k*2+1].childNodes[1].childNodes[0].childNodes[0].innerHTML=title;      //tbody.tr[k].td.a.p.innerHTML
            list.childNodes[k*2+1].childNodes[3].innerHTML=date;
            list.childNodes[k*2+1].childNodes[1].childNodes[0].href=href;
    }
    console.log(pos+"/"+maxpos);
    document.getElementById("pages").innerHTML=(pos+1)+"/"+(maxpos+1);
}

function next(){
    if(maxpos>pos){
        pos++;
        for(k=0; k<size; k++)   list.childNodes[k*2+1].style="display: table-row;";
        setlist();
    } else alert("마지막 목록입니다.");
}

function prev(){
    if(0<pos){
        pos--;
        for(k=0; k<size; k++)   list.childNodes[k*2+1].style="display: table-row;";
        setlist();
    } else alert("처음 목록입니다.");
}
