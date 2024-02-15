const preVoucherForm = document.forms.pre_voucher_form;
const voucherForm = document.forms.voucher_form;
const checksModalBtn = document.getElementById('triggerChecksModal');
let preVoucherData = {};

const sendPreVoucherData = (e) => {
    e.preventDefault();

    checksModalBtn.setAttribute('data-bs-toggle','modal');
    checksModalBtn.setAttribute('data-bs-target','#checksModal');
    checksModalBtn.click();

    preVoucherData = {
        brandName: preVoucherForm['brand-name'].value,
        siteCategory: preVoucherForm['site-category'].value,
        userEmail: preVoucherForm['user-email'].value
    };

    const fetchOpt = {
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(preVoucherData)
    }

    fetch('https://urban-web.cyclic.app/urban-web/email/pre-voucher', fetchOpt)
        .then(res=>res.json())
        .then(console.log)
        .catch(console.log)
}

const sendVoucherData = (e) => {
    
    checksModalBtn.removeAttribute('data-bs-toggle');
    checksModalBtn.removeAttribute('data-bs-target');
    
    const voucherFormData = new FormData(voucherForm);

    for (const field in preVoucherData) {
        voucherFormData.append(field,preVoucherData[field]);
    }

    e.preventDefault();
    const fetchOpt = {
        method: 'POST', 
        body: voucherFormData
    }

    fetch('https://urban-web.cyclic.app/urban-web/email/voucher', fetchOpt)
        .then(res=>res.json())
        .then(console.log)
        .catch(console.log)
}


preVoucherForm.addEventListener('submit', sendPreVoucherData);

voucherForm.addEventListener('submit', sendVoucherData);