// JavaScript for toggling the dropdown menu
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu_icon");
    const dropdownMenu = document.getElementById("dropdown_menu");

    menuIcon.addEventListener("click", function () {
        // Toggle the visibility of the dropdown menu
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });

    // Optional: Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});


let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
// desktop setup code here...
var time = gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
        // markers:,
    }
})

time.to("#fanta",{
    top:"110%",
    left:"5%",
    rotate:"360deg",
},'orange')


time.to("#orange",{
    top:"110%",
    left:"5%",
},'orange')

time.to("#orange_splash",{
   width:"20%",
    top:"150%",
    rotate:"360deg",
    // right:"20%"
    left:"25%"
},'orange')

time.to("#orange",{
    top:"110%",
    right:"50%",
},'orange')


var time = gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
        // markers:,
    }
})

time.to("#fanta",{
    top:"110%",
    left:"5%",
    rotate:"360deg",
},'orange')


time.to("#orange",{
    top:"110%",
    left:"5%",
},'orange')

time.to("#orange_splash",{
   width:"20%",
    top:"150%",
    rotate:"360deg",
    // right:"20%"
    left:"25%"
},'orange')

time.to("#orange",{
    top:"110%",
    right:"50%",
},'orange')
});

mm.add("(max-width: 799px)", () => {
// mobile setup code here...
var time = gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
        // markers:,
    }
})

time.to("#fanta",{
    top:"110%",
    left:"5%",
    rotate:"360deg",
},'orange')


time.to("#orange",{
    top:"110%",
    left:"5%",
},'orange')

time.to("#orange_splash",{
   width:"20%",
    top:"150%",
    rotate:"360deg",
    // right:"20%"
    left:"25%"
},'orange')

time.to("#orange",{
    top:"110%",
    right:"50%",
},'orange')


var time = gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
        // markers:,
    }
})

time.to("#fanta",{
    top:"110%",
    left:"5%",
    rotate:"360deg",
},'orange')


time.to("#orange",{
    top:"110%",
    left:"5%",
},'orange')

time.to("#orange_splash",{
   width:"20%",
    top:"150%",
    rotate:"360deg",
    // right:"20%"
    left:"25%"
},'orange')

time.to("#orange",{
    top:"110%",
    right:"50%",
},'orange')
});


let mm2 = gsap.matchMedia();

mm2.add("(min-width: 800px)", () => {
// desktop setup code here...

var time1 = gsap.timeline({
scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}
})

time1.from("#lime_slice",{
rotate:"-90deg",
left:"-50%",
top:"110%"
},'ca')

time1.from("#sprite",{
rotate:"-90deg",
left:"-100%",
top:"110%"
},'ca')

time1.from("#lime_slice1",{
rotate:"90deg",
left:"150%",
top:"110%",

},'ca')

time1.from("#sprite1",{
rotate:"90deg",
left:"100%",
top:"110%"
},'ca')

time1.to("#orange",{
width:"20%",
left:"39%",
top:"210%",
rotate:"360deg",

},'ca')

time1.to("#fanta",{
width:"26%",
 rotate:"360deg",
left:"36%",
top:"215%",
rotate:"-360deg"
},'ca')



});

mm2.add("(max-width: 799px)", () => {
// mobile setup code here...

//   var time1 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".three",
//         start:"0% 95%",
//         end:"50% 50%",
//         scrub:true,
//         // markers:true,
//     }
// })

// time1.from("#lime_slice",{
//     rotate:"-90deg",
//     left:"-50%",
//     top:"110%"
// },'ca')

// time1.from("#sprite",{
//     rotate:"-90deg",
//     left:"-100%",
//     top:"110%"
// },'ca')

// time1.from("#lime_slice1",{
//     rotate:"90deg",
//     left:"150%",
//     top:"110%",

// },'ca')

// time1.from("#sprite1",{
//     rotate:"90deg",
//     left:"100%",
//     top:"110%"
// },'ca')

// time1.to("#orange",{
//     width:"20%",
//     left:"39%",
//     top:"210%",
//     rotate:"360deg",

// },'ca')

// time1.to("#fanta",{
//     width:"26%",
//      rotate:"360deg",
//     left:"36%",
//     top:"215%",
//     rotate:"-360deg"
// },'ca')



});



// var time1 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".three",
//         start:"0% 95%",
//         end:"50% 50%",
//         scrub:true,
//         // markers:true,
//     }
// })

// time1.from("#lime_slice",{
//     rotate:"-90deg",
//     left:"-50%",
//     top:"110%"
// },'ca')

// time1.from("#sprite",{
//     rotate:"-90deg",
//     left:"-100%",
//     top:"110%"
// },'ca')

// time1.from("#lime_slice1",{
//     rotate:"90deg",
//     left:"150%",
//     top:"110%",

// },'ca')

// time1.from("#sprite1",{
//     rotate:"90deg",
//     left:"100%",
//     top:"110%"
// },'ca')

// time1.to("#orange",{
//     width:"20%",
//     left:"39%",
//     top:"210%",
//     rotate:"360deg",

// },'ca')

// time1.to("#fanta",{
//     width:"26%",
//      rotate:"360deg",
//     left:"36%",
//     top:"215%",
//     rotate:"-360deg"

   
// },'ca')

