window.onload=function(){
    var docname=document.getElementById("docname").innerHTML;
    var cur=document.getElementById(docname);
    cur.style.backgroundImage="url(../Sources/Images/select.svg)";
    cur.style.backgroundPosition="0% 100%";
    cur.childNodes[0].style.color="black";

    if(document.getElementById("st2")!=null){
        var st=document.getElementById("st2");
        st.style.color="black";
        st.style.letterSpacing="5px";
    }
}

menulist=function(){
    var list= document.getElementById("mlist");
    if(list.style.display=="none") list.style.display="block";
    else list.style.display="none";
}
