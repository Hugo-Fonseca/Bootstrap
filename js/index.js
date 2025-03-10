//TOAST//
document.addEventListener("DOMContentLoaded", function () {
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');

    if (toastTrigger && toastLiveExample) {
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show();
        });
    }
});

//TOOLTIPS//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const exampleEl = document.getElementById('example');
//const tooltip = new bootstrap.Tooltip(exampleEl, options);//
const tooltip = new bootstrap.Tooltip('#example', {
    boundary: document.body // or document.querySelector('#boundary')
  })