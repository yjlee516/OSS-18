// 페이지 로드 시 URL 파라미터를 확인하고 clickGroupButton 함수를 호출하는 함수
window.onload = function() {
    const id = getParameterByName('id');
    if (id) {
        clickGroupButton(id);
    } else {
        clickGroupButton('group-a')
    }
}

// URL 파라미터에서 id 값을 가져오는 함수
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 해당 그룹 ID에 해당하는 버튼을 찾아 클릭해주는 함수
function clickGroupButton(groupId) {
    const button = document.querySelector('.tab button[onclick="openGroup(event, \'' + groupId + '\')"]');
    
    if (button) {
        button.click();
    } else {
        console.log("그룹 버튼을 찾을 수 없습니다.");
    }
}

// 페이지에 그룹별 표를 보여주는 함수
function openGroup(event, groupName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(groupName).style.display = "block";
    event.currentTarget.className += " active";
}