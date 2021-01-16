function copyurl(){
    var url=document.getElementById("urls");
    url.select();
    url.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("글 주소가 복사되었습니다.");
}

