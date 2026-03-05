// declare a timer (number)
let timer;

// Prices (fixed, easy)
const PRICE_MILK = 3.50;
const PRICE_BREAD = 2.25;
const PRICE_EGGS = 4.10;
const PRICE_RICE = 6.00;
const PRICE_APPLES = 2.80;
const PRICE_CHICKEN = 9.50;

// startTimer definition
function startTimer() {
  // reset the timer
  clearTimeout(timer);

  // call resetCart every 15 seconds
  timer = setTimeout(function () {
    resetCart("Cart reset due to inactivity.");
  }, 15000);
}

// read quantity definition. pass a item id
function readQty(id) {
  // gets the value of the grocery item id and stores it in v
  let v = Number(document.getElementById(id).value);
  // if there is no value in the item id, set it to 0
  if (!document.getElementById(id).value) v = 0;
  // if v is not a number or less than 0, set it to 0
  if (isNaN(v) || v < 0) v = 0;

  // set the items id to value of v
  document.getElementById(id).value = v;
  // return v
  return v;
}

// deifnition for setting total. pass total price in
function setTotal(amount) {
  // selects element with the id 'total' and displays price passed in. fixed to 2 decimals
  document.getElementById("total").textContent = "$" + amount.toFixed(2);
}

// definition for calculating the total
function calculateTotal() {
  // start the inactivity timer
  startTimer();

  // declaring grocery items, passing their id, and setting their value. (quantity of item).
  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");

  // taking the quantity of each item, calculating the price, and storing the sum in variable 'total'
  let total =
    milk * PRICE_MILK +
    bread * PRICE_BREAD +
    eggs * PRICE_EGGS +
    rice * PRICE_RICE +
    apples * PRICE_APPLES +
    chicken * PRICE_CHICKEN;

    // set the total. (sum of items prices)
  setTotal(total);

  // checking if all quantities are equal to 0
  if (milk + bread + eggs + rice + apples + chicken === 0) {
    // if carts sum is 0, display a message to the user their cart is empty
    document.getElementById("receipt").textContent = "Cart is empty.";
  } else {
    // total is greater than 0, display a message telling the user their total was calculated successfully and can now print their receipt
    document.getElementById("receipt").textContent = "Total calculated. Click Print Receipt.";
  }
}

// definition for formatting the date. pass in a new Date
function formatDateTime(d) {
  // this variable stores the formatting for date.getFullYear (4 digit number)
  const yyyy = d.getFullYear();
  // this variable stores the month and is formatted to show 2 0s at the beginning. being parsed into a string
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  // this variable stores the day and is formatted to show 2 0s at the beginning. being parsed into a string
  const dd = String(d.getDate()).padStart(2, "0");

  // this variable stores hours by using Date's getHours (number)
  let h = d.getHours();
  // this variable determines if its am or pm (24h clock)
  const ampm = h >= 12 ? "PM" : "AM";
  // get the remainder of dividing by 12
  h = h % 12;
  // if h is 0 set it to 12
  if (h === 0) h = 12;

  // variable for final hour formatted
  const hh = String(h).padStart(2, "0");
  // varibale for the final minute formatted
  const min = String(d.getMinutes()).padStart(2, "0");

  // finally return the fully formatted date and time
  return `${yyyy}-${mm}-${dd} ${hh}:${min} ${ampm}`;
}

// deifnition for print receipt
function printReceipt() {
  // start the inactivity timer
  startTimer();

  // get quantities of items and store them
  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");

  //  checking if all quantities equal 0
  if (milk + bread + eggs + rice + apples + chicken === 0) {
    // if all quantities are 0, set total price to 0
    setTotal(0);
    // display a message to user that their cart is empty
    document.getElementById("receipt").textContent = "Cart is empty.";
    return;
  }

  // calculating the total for each item and storing them in variables
  let milkLine = milk * PRICE_MILK;
  let breadLine = bread * PRICE_BREAD;
  let eggsLine = eggs * PRICE_EGGS;
  let riceLine = rice * PRICE_RICE;
  let applesLine = apples * PRICE_APPLES;
  let chickenLine = chicken * PRICE_CHICKEN;

  // store sum of all items in a variable called total
  let total = milkLine + breadLine + eggsLine + riceLine + applesLine + chickenLine;
  // set the total to be the sum of users cart
  setTotal(total);

  // declaring new Date in a variable called now
  const now = new Date();
  // call to format the default date returned, to our formatted version
  const when = formatDateTime(now);

  // receipt header. company name and date/time
  let text = "";
  text += "Green Basket Grocery\n";
  text += "Date/Time: " + when + "\n";
  text += "-----------------------------\n";

  // if quantity is greater than 0, display it on the receipt
  if (milk > 0) text += "Milk x" + milk + " = $" + milkLine.toFixed(2) + "\n";
  if (bread > 0) text += "Bread x" + bread + " = $" + breadLine.toFixed(2) + "\n";
  if (eggs > 0) text += "Eggs x" + eggs + " = $" + eggsLine.toFixed(2) + "\n";
  if (rice > 0) text += "Rice x" + rice + " = $" + riceLine.toFixed(2) + "\n";
  if (apples > 0) text += "Apples x" + apples + " = $" + applesLine.toFixed(2) + "\n";
  if (chicken > 0) text += "Chicken x" + chicken + " = $" + chickenLine.toFixed(2) + "\n";

  // display users total
  text += "-----------------------------\n";
  text += "FINAL TOTAL: $" + total.toFixed(2) + "\n";
  text += "Thank you for shopping!\n";

  // display fully formatted receipt text
  document.getElementById("receipt").textContent = text;
}

// definiton of resetting the cart. pass in a message (string)
function resetCart(message) {
  // reset all items values (quantities) to 0
  document.getElementById("milk").value = 0;
  document.getElementById("bread").value = 0;
  document.getElementById("eggs").value = 0;
  document.getElementById("rice").value = 0;
  document.getElementById("apples").value = 0;
  document.getElementById("chicken").value = 0;

  // reset the total to 0
  setTotal(0);
  // display the message you passed in
  document.getElementById("receipt").textContent = message;

  // restart the inactivity timer
  startTimer();
}
