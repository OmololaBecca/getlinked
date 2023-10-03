const textCollapseDiv = document.getElementById("text-collapse-div")
// console.log(textCollapseDiv.children)


textCollapseDiv.addEventListener('click', e =>{
    for(let collapsediv = 0; collapsediv < textCollapseDiv.children.length; collapsediv++ ){
        let div = textCollapseDiv.children[collapsediv]
        console.log(div)
        console.log(e.target)
        // if (div === e.target){
        //     console.log("hello")
        // }else{
        //     console.log("no")
        // }
    }
})