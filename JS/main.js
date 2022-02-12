function infoBtn() {
    const buyerInfo = document.getElementById('buyer-details-input');
    // console.log(buyerInfo.value);
    const showInfo = document.getElementById('buyer-info');
    showInfo.innerText = buyerInfo.value + new Date();
    buyerInfo.value = '';
    return showInfo;
}

function addItemBtn() {
    const tableInfo = document.getElementById('info-table');
    const itemNameInput = document.getElementById('item-name-input');
    const itemName = itemNameInput.value;
    const itemPriceInput = document.getElementById('item-price-input');
    const itemPrice = parseInt(itemPriceInput.value);
    const itemQuantityInput = document.getElementById('item-quantity-input');
    const itemQuantity = parseInt(itemQuantityInput.value);

    // console.log('name', itemName, 'price', itemPrice, 'quantity', itemQuantity);
    const totalPrice = itemPrice * itemQuantity;

    /* <tr>
      <th >1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
     </tr> */

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    th.innerText = itemName;
    td1.innerText = itemPrice;
    td2.innerText = itemQuantity;
    td3.innerText = totalPrice;

    td3.classList.add('item-total');
    console.log(td3);
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tableInfo.appendChild(tr);
    total()
}



function total() {

    const subtotal = calcSubTotal()
    const subtotalToDisplay = document.getElementById("sub-total");
    subtotalToDisplay.innerText = subtotal
    let tax = subtotal * 0.03;
    let discount = subtotal * 0.1;
    document.getElementById('tax').innerText = tax.toFixed(2)
    document.getElementById('discounts').innerText = discount.toFixed(2)
    document.getElementById('grand-total').innerText = subtotal + tax - discount
    document.getElementById('grand-total-2').innerText = subtotal + tax - discount

}

function calcSubTotal() {
    let totalValue = 0;
    let costs = document.getElementsByClassName("item-total");
    for (let i = 0; i < costs.length; i++) {
        let element = costs[i];
        let price = parseFloat(element.innerText);
        totalValue = totalValue + price;
    }
    console.log(totalValue);
    return totalValue;
}