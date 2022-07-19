// Hello World ---------------------------------------

// const hello = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve(console.log ("Hello World"))
//         }, 3000)
//     })
// }
// hello ()

// Il fait froid -------------------------------------
// const itsCold = () => {
//     return new Promise((resolve, reject) => {
//         const temperature = 2

//         setTimeout (() => {
//             if (temperature <= 10) {
//                 resolve(console.log("Il fait froid"))
//             }
//             else {
//                 reject(console.log("Il fait chaud"))
//             }
//         }, 4000)
//     })
// }
// itsCold ()

// Ménage -------------------------------------------
const laundry = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log("J'ai fini la lessive"));
        }, 3000);
    });
};

const dishes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log("J'ai fini la vaisselle"));
        }, 1500);
    });
};

const waitForMyCleaning = async () => {
    try {
        console.log("Je commence la lessive");
        await laundry();
        setTimeout(async () => {
            console.log("Je commence à faire la vaisselle");
            await dishes();
            console.log("J'ai fini de faire le ménage");
        }, 1000);
    } catch (error) {
        console.log("je dois faire le ménage");
    }
};

waitForMyCleaning();
