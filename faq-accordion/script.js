


const collapseShow = document.querySelectorAll('.collapse'); 
const paragraph = document.querySelectorAll('p'); 


collapseShow.forEach( (collapse, i) =>{
    collapse.addEventListener('click', function(){

        /**
 * Toggles the 'hide' class on the paragraph element at the corresponding clicked button
 * If the 'hide' class is present after toggling, sets icon of that question to plus,
 * otherwise sets it to minus .
 */
        paragraph[i].classList.toggle('hide'); 
        if(paragraph[i].classList.contains('hide')){
            collapse.setAttribute('src', './assets/images/icon-plus.svg'); 
        }else{
            collapse.setAttribute('src', './assets/images/icon-minus.svg'); 
        }


    /**
 * Switch statement to handle different cases based on the value of clicked button index.
 * For each case, it loops through the 'paragraph' elements, adds the 'hide' class to all elements except the one with index equal to the case value,
 * and sets the 'src' attribute of the corresponding 'collapseShow' element to a specific image path.
 */
    switch (i) {
        case 0: 
            paragraph.forEach((p, i) =>{
                if(i !== 0){
                    paragraph[i].classList.add('hide');
                    collapseShow[i].setAttribute('src','./assets/images/icon-plus.svg' ) 
                }
            }); 
            break;
        case 1: 
            paragraph.forEach((p,i)=>{
                if(i !== 1){
                    paragraph[i].classList.add('hide'); 
                    collapseShow[i].setAttribute('src','./assets/images/icon-plus.svg' ) 

                }
            })
            break; 
        case 2: 
            paragraph.forEach((p,i)=>{
                if(i !== 2){
                    paragraph[i].classList.add('hide'); 
                    collapseShow[i].setAttribute('src','./assets/images/icon-plus.svg' ) 

                }
            })
            break;
        case 3: 
            paragraph.forEach((p,i)=>{
                if(i !== 3){
                    paragraph[i].classList.add('hide'); 
                    collapseShow[i].setAttribute('src','./assets/images/icon-plus.svg' ) 

                }
            })
          break;
        default:
            break;
    }
 }); 
})