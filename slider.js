const left = document.querySelector(".Left");
const right = document.querySelector(".Right");
const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".image");
const bottom =  document.querySelector(".bottom");

let sliderno = 1;

const lenght = image.length;
        //0
        //1000
        //2000
        //3000

        for(let i = 0; i < lenght; i++){
            const div = document.createElement("div");
            div.className = "button";
            bottom.appendChild(div);
        }
        
        const buttons = document.querySelectorAll(".button");
        
        buttons[0].style.backgroundColor = "white";   
        
        const resetbg = () =>{
            buttons.forEach((button) =>{
                button.style.backgroundColor = "transparent";   
        
            })
        };
        
        buttons.forEach((button,i ) => {
            button.addEventListener("click", () =>{
                resetbg()
                slider.style.transform = `translateX(-${i*1000}px)`;
                sliderno = i+1;
                button.style.backgroundColor = "white"; 
        
            })
        });

const changeColor = () =>{
    resetbg();
    buttons[sliderno-1].style.backgroundColor = "white"; 
}        

const nextSlide = () => {
    slider.style.transform = `translateX(-${sliderno * 1000}px)`;
    sliderno++;
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(sliderno-2) * 1000}px)`;
    sliderno--;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    sliderno=1;
}

const getLastSlide = () => {
    slider.style.transform =`translateX(-${(lenght-1) * 1000}px)`;
    sliderno = lenght ;
}
//when you click on right arrow 
right.addEventListener("click",()=>{
    sliderno < lenght ? nextSlide() : getFirstSlide() ;//ternary operator
    changeColor();
    })
//when you click on left arrow
left.addEventListener("click",()=>{
       
        sliderno > 1 ? prevSlide() : getLastSlide() ;//ternary operator
        changeColor();
        })



