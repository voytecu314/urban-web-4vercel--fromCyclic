            document.getElementById('add-description-btn').addEventListener('click', (e) => {
                    const customerDescriptionBox = document.getElementById('customer-description-box');
                    const toggleShowHide = customerDescriptionBox.style.display === 'block' ? 'none': 'block';

                    customerDescriptionBox.style.display=toggleShowHide;
                    
                    e.target.textContent = toggleShowHide === 'block' ? 'Hide description' : 'Add description';
            });
            
            document.getElementById('add-files-btn').addEventListener('click', (e) => {
                    const customerDescriptionBox = document.getElementById('customer-description-box');
                    const uuid = crypto.randomUUID().slice(0,3);
                    const div = document.createElement('div');
                    div.classList.add('d-flex');
                    div.classList.add('file-container');
                    div.innerHTML = 
                        `<input type="file" name="customer-file" id="customer-file-${uuid}" class="form-control" accept="audio/*,video/*,image/*">
                        <button type="button" class="btn btn-secondary" onclick="this.parentElement.remove()"><i class="bi bi-trash"></i></button>`;
                    div.firstElementChild.addEventListener('change',validateFileSize);
                    customerDescriptionBox.insertAdjacentElement('afterend', div);
            });

            document.getElementById('select-palette').addEventListener('change',(e)=>{
                const select = e.target;
                const selectedValue = select.value;
                const palettes = {
                    classy: ['#5f6366','#4d6d9a','#86b3d1','#99ced3','#edb5bf'],
                    eclectic: ['#644d36','#474853','#86b3d1','#aaa0a0','#8e8268'], 
                    flat: ['#00887a','#ffccbc','#ffffff','#d3e3fc','#77a6f7'],
                    modern: ['#19181a','#479761','#cebc81','#a16e83','#b19f9e'], 
                    rich: ['#f78888','#f3d250','#ececec','#90ccf4','#5da2d5'],
                    clean: ['#17252a','#2b7a78','#3aafa9','#def2f1','#feffff'],
                    vibrant: ['#f8e9a1','#f76c6c','#a8d0e6','#374785','#24305e'],
                    youthful:['#a64ac9','#fccd04','#ffb48f','#f5e6cc','#17e9e0'],
                    pinkPastels: ['#a1c3d1','#b39bc8','#f0ebf4','#b39bc8','#a1c3d1'],
                    cheerful: ['#fbe8a6','#f4976c','#303c6c','#b4dfe5','#d2fdff'],
                };
                palettes[selectedValue].reduce((input,color)=>{
                    input.value=color;
                    return input.nextElementSibling;
                },select.nextElementSibling);
            });

            function validateFileSize(e) {
                if(e.target.files[0].size > 4999999){
                    const fileInputContainer = this.parentElement;
                    fileInputContainer.classList.add('size-popup');
                    setTimeout(()=>{fileInputContainer.classList.remove('size-popup')},2500)
                    this.value = '';
                } else {
                    console.log('FILE OK');
                } 
            }