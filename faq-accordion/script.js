


const collapseShow = document.querySelectorAll('.collapse'); 
const paragraph = document.querySelectorAll('p'); 


collapseShow.forEach( (collapse, i) =>{
    collapse.addEventListener('click', function(){
        paragraph[i].classList.toggle('hide'); 
        if(paragraph[i].classList.contains('hide')){
            collapse.setAttribute('src', './assets/images/icon-plus.svg'); 
        }else{
            collapse.setAttribute('src', './assets/images/icon-minus.svg'); 
        }
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