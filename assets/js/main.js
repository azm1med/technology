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