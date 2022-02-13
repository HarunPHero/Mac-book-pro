//memory charge
const freeMemory = document.getElementById('free-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 00


})
const costMemory = document.getElementById('cost-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 80;


})
//storage charge
const freeStorage = document.getElementById('free-storage').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 00;


})
const CostStorage = document.getElementById('cost-storage').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 80;


})
const CostStorage2 = document.getElementById('cost-storage2').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 160;


})

//delivary charge
const freeDelivary = document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('charge').innerText = 00

})
const costDelivary = document.getElementById('cost-delivery').addEventListener('click', function () {
    document.getElementById('charge').innerText = 20;


})
function generate(total, main, generateTotal, changeTotal,promo){
    document.getElementById('total').style.display = total;
    
    document.getElementById('main').style.display = main;
    document.getElementById('generate-total').style.display = generateTotal;
    document.getElementById('change-total').style.display = changeTotal;
    document.getElementById('promo').style.display = promo;

}
document.getElementById('generate-total').addEventListener('click', function () {
    updateTotal();
    generate('block', 'none', 'none', 'block', 'block')
    
})
document.getElementById('change-total').addEventListener('click', function () {
    location.reload();
    generate('none', 'block', 'block', 'none', 'none');
    
})


const updateTotal = () => {


    const deliveryCost = document.getElementById('charge').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const grandTotal = document.getElementById('grandTotal');
    const grandTotalNum = parseInt(grandTotal.innerText)

    grandTotal.innerText = grandTotalNum + parseInt(deliveryCost) + parseInt(storageCost) + parseInt(memoryCost);

    document.getElementById('promo-btn').addEventListener('click', function () {
        const promo = document.getElementById('promo-text').value
       
        if (promo == 'Mamun') {
            const grandTotalNum = grandTotal.innerText
           const discount = grandTotalNum - Math.round(grandTotalNum/2)
           grandTotal.innerText = discount;
           promoStyle('promo-btn', 'promo-text', 'mail')
          


        }
        else {
            alert('wrong promo code given')
            document.getElementById('mail').style.display = "block"
        }
    })
}
function promoStyle(id1, id2, id3){
    document.getElementById(id1).style.display = "none"
    document.getElementById(id2).style.display = "none"
    document.getElementById(id3).style.display = "none"
}




