// nav mb 
const mavMb = () => {
    const header_navmb = document.getElementById('header_navmb');
    const navMbControl = document.getElementById('header_navmb-control');

    navMbControl.onclick = () => {
        if (!header_navmb.checked) {
            navMbControl.classList.add('opa');
        } else {
            navMbControl.classList.remove('opa');
        }
    }
}
mavMb();

function odcTab(e) {
    const odcTabId = e.id;
    const odcTabGet = document.getElementById(odcTabId);
    const odcSplit = odcTabId.split('-');
    const odcPannel = odcSplit[0] + '-' + odcSplit[1] + '-pannel-' + odcSplit[2];
    const odcPannelGet = document.getElementById(odcPannel);
    
    if(!odcTabGet.classList.contains('active')) {
        odcReset();
        odcTabGet.classList.add('active');
        odcPannelGet.classList.add('active'); 
    } 
}

function odcReset() {
    const odcCNav = document.getElementsByClassName('odc_team-nav-item');
    const odcCPannel = document.getElementsByClassName('odc_team-pannel-item');
    
    for (var i = 0; i < odcCNav.length; i++) {
        odcCNav[i].classList.remove('active');
        odcCPannel[i].classList.remove('active');
    }

}