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

// careers
function carTab(e) {
    const carId = e.id;
    const carGet = document.getElementById(carId);
    const carSplit = carId.split('-');
    const carContent = carSplit[0] + '-' + carSplit[1] + '-content-' + carSplit[3];
    console.log(carContent)
    const carContentGet = document.getElementById(carContent);

    if(!carGet.classList.contains('active')) {
        carReset();
        carGet.classList.add('active');
        carContentGet.classList.add('active');
    } else {
        carReset();
    }


}

function carReset() {
    const carList =  document.getElementsByClassName('careers_our-control');
    const carListContent =  document.getElementsByClassName('careers_our-content');

    for (let i = 0; i < carList.length; i++) {
        carList[i].classList.remove('active');
        carListContent[i].classList.remove('active');
    }
}

ScrollReveal().reveal('.home_start-about-title', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.home_start-about-desc', { delay: 500, distance: '50px'});
ScrollReveal().reveal('.home_start-about-ac', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.home_start-our-title', { delay: 500, distance: '50px'});
ScrollReveal().reveal('.home_start-our-list', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.desc', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.card-info', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.card-title', { delay: 500, distance: '50px'});
ScrollReveal().reveal('.card-desc', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.home_field-title', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.home_field-item', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.home_achi-header', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.root-item', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.home_brand-item', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.root_contact-title', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.root_contact-desc', { delay: 500, distance: '50px'});
ScrollReveal().reveal('.root_contact-ac', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.odc_banner-left', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.odc_banner-right', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.odc_pick-nav', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.odc_pick-item', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.odc_team-grid', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.odc_offshore-row', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.odc_offshore-list', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.odc_tech-left', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.odc_tech-box', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.dev_service-row', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.dev_service-list', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.dev_cloud-header', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.dev_cloud-row', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.cases_header-title', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.cases_header-desc', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.careers_about-left', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.careers_about-right', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.careers_header', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.careers_join-row', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.careers_our-item', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.contact_header', { delay: 600, distance: '50px'});
ScrollReveal().reveal('.contact_left', { delay: 400, distance: '50px'});
ScrollReveal().reveal('.contact_right', { delay: 600, distance: '50px'});