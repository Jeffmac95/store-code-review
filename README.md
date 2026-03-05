# 🛒Assignment 9: Store-Code-Review

## ❗Description
In this assignment I reviewed the supplied code, added comments to describe how the website is structured and how the website works. I also have a suggestion for improvement.

## 🎨 Improvement Suggestion
I would choose to improve semantic HTML structure. I noticed that the HTML used mostly <div> elements for their containers, but in a few places used the <section> element. These elements are basically the same thing and you should stick to using one unless theres a specific reason to use the other. This can be confusing for accessability purposes like screen readers, or even other developers who may have to add things to the web page in the future.

## 🧠 What I learned
I learned that it is a lot harder to add comments/documenting the code after the project is complete or this far along.

## 🛠️ Improvement Implementation
These two sections are now divs.

    <!-- this card is for the receipt container -->
    <div class="card">
      <!-- this div tells the customer about inactivity -->
      <div class="receipt-head">
        <h2>Receipt</h2>
        <span class="small-note">Tip: do nothing for 15 seconds to see the inactivity reset message.</span>
      </div>
      <pre id="receipt" class="receipt">Ready.</pre>
    </div>

    <div class="card">
      <h2>Shop Items</h2>
      <!-- this paragraph gives the user instructions on how to shop -->
      <p class="hint">Enter quantities, then calculate or print your receipt. Inactivity resets after 15 seconds.</p>

      <!-- this is the parent div for grocery items with their prices and inputs for quantities -->
      <div class="grid">
        <!-- this div contains all the information on MILK -->
        <div class="item">
          <!-- this div contains item name and price -->
          <div class="item-info">
            <div class="item-name">Milk</div>
            <div class="item-price">$3.50</div>
          </div>
          <!-- this input is where users enter quantity for MILK -->
          <!-- upon key press startTimer gets called from script.js -->
          <input type="number" id="milk" value="0" min="0" oninput="startTimer()" />
        </div>

        <!-- this div contains all the information on BREAD -->
        <div class="item">
          <!-- this div contains item name and price -->
          <div class="item-info">
            <div class="item-name">Bread</div>
            <div class="item-price">$2.25</div>
          </div>
          <!-- this input is where users enter quantity for BREAD -->
          <!-- upon keypress startTimer gets called from script.js -->
          <input type="number" id="bread" value="0" min="0" oninput="startTimer()" />
        </div>

        <!-- this div contains all the information on EGGS -->
        <div class="item">
          <!-- this div contains item name and price -->
          <div class="item-info">
            <div class="item-name">Eggs</div>
            <div class="item-price">$4.10</div>
          </div>
          <!-- this input is where users enter quantity for EGGS -->
          <!-- upon keypress startTimer gets called from script.js -->
          <input type="number" id="eggs" value="0" min="0" oninput="startTimer()" />
        </div>

        <!-- this div contains all the information on RICE -->
        <div class="item">
          <!-- this div contains item name and price -->
          <div class="item-info">
            <div class="item-name">Rice</div>
            <div class="item-price">$6.00</div>
          </div>
          <!-- this input is where users enter quantity for RICE -->
          <!-- upon keypress startTimer gets called from script.js -->
          <input type="number" id="rice" value="0" min="0" oninput="startTimer()" />
        </div>

        <!-- this div contains all the information on APPLES -->
        <div class="item">
          <!-- this div contains item name and price -->
          <div class="item-info">
            <div class="item-name">Apples</div>
            <div class="item-price">$2.80</div>
          </div>
          <!-- this input is where users enter quantity for APPLES -->
          <!-- upon keypress startTimer gets called from script.js -->
          <input type="number" id="apples" value="0" min="0" oninput="startTimer()" />
        </div>

        <!-- this div contains all the information on CHICKEN -->
        <div class="item">
          <!-- this div contains the item name and price -->
          <div class="item-info">
            <div class="item-name">Chicken</div>
            <div class="item-price">$9.50</div>
          </div>
          <!-- this input is where users enter quantity for CHICKEN -->
          <!-- upon keypress startTimer gets called from script.js -->
          <input type="number" id="chicken" value="0" min="0" oninput="startTimer()" />
        </div>
      </div>

      <!-- this div contains all call to actions and the total price -->
      <div class="actions">
        <!-- this button calculates the total. upon click it calls calculateTotal from script.js -->
        <button class="btn primary" onclick="calculateTotal()">Calculate Total</button>

        <!-- this button displays the receipt. upon click it calls printReceipt from script.js -->
        <button class="btn" onclick="printReceipt()">Print Receipt</button>

        <!-- this button resets users cart. upon click it calls resetCart and you can pass a message youd like the user to see. see script.js -->
        <button class="btn danger" onclick="resetCart('Cart reset.')">Reset Cart</button>

        <!-- this div contains the total cart price information -->
        <div class="total-box">
          <span class="total-label">Total</span>
          <!-- this span contains the total price -->
          <span id="total" class="total-value">$0.00</span>
        </div>
      </div>
    </div>