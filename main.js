

let articals = document.querySelectorAll('.products .box figure');


function showText(x) {

    articals.forEach(element => {
        element.classList.remove('active');
    });

    //articals[0].parentElement.
    x.parentElement.classList.add('active');
    //console.log(x.parentElement)
}








