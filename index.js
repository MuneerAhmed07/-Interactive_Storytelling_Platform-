// Face Challenge
document.querySelector('#ch_btn').addEventListener('click', () => {
    document.querySelector('.face_ch').classList.toggle('fac_active');
});

// Accept help
document.querySelector('#accept_btn').addEventListener("click", () => {
    document.querySelector('.accept_para').classList.toggle('accept_active');
    document.querySelector('.decline_para').classList.remove('decline_active');
})

// Decline Help
document.querySelector('#decline_btn').addEventListener("click", () => {
    document.querySelector('.decline_para').classList.toggle('decline_active');
    document.querySelector('.accept_para').classList.remove('accept_active');
})

// trap 
document.querySelector('#trap_btn').addEventListener("click", () => {
    document.querySelector('.trap_para').classList.toggle('trap_active');
    document.querySelector('.proceed_para').classList.remove('proceed_active');
})

// proceed 
document.querySelector('#proceed_btn').addEventListener("click", () => {
    document.querySelector('.proceed_para').classList.toggle('proceed_active');
    document.querySelector('.trap_para').classList.remove('trap_active');
})

// Continue Alone
document.querySelector('#continue_alone_btn').addEventListener("click", () => {
    document.querySelector('.continue_alone_para').classList.toggle('continue_active');
    document.querySelector('.taking_alies_para').classList.remove('alies_active');
})

// taking Alies for Help
document.querySelector('#taking_alies_btn').addEventListener("click", () => {
    document.querySelector('.taking_alies_para').classList.toggle('alies_active');
    document.querySelector('.continue_alone_para').classList.remove('continue_active');
})