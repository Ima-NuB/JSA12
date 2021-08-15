//B1:
const student = (name, age, address) => {
    const info = {
        name: name,
        age: age,
        address: address,
    }
    console.log(info)
}

student('Khoa', 15, "Trung Hòa, Cầu Giấy")

//B2:
var smartPhones = [
{ name: 'iphone', price: 649 },
{ name: 'Galaxy S6', price: 576 },
{ name: 'Galaxy Note 5', price: 489 }
];

// for(let a of smartPhones){
    for(let b = 0; b <= 2; b++){
        let price = smartPhones[b].price;
        console.log(smartPhones[b].name+' có giá là: '+price );
    }
// }

//B3:
function foo(x, y, z){
    console.log(x, y, z)
}
// chuyển thành
const foo = (x, y, z) => console.log(x, y, z)



function foo(){
    alert('Hello')
}
// chuyển thành
const foo = () => alert('Hello')



function foo(a, b){
    let m = a+b*100;
    return m;
}
// chuyển thành
const foo = (a, b) => {
    let m = a+b*100;
    return m;
}

