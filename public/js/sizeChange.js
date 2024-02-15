
document.getElementById('go-to-details').addEventListener('click',()=>{
    const webpageCategory = document.getElementById('webpage-category');
    const webpageDetails = document.getElementById('webpage-details');
    webpageDetails.classList.toggle('col-lg-4');
    webpageDetails.classList.toggle('col-lg-8');
    webpageCategory.classList.toggle('col-lg-8');
    webpageCategory.classList.toggle('col-lg-4');
})
