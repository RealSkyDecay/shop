const products = [
    {
      name: "candyOne",
      price: 1000,
      description: "Candy",
      type: "chocolate",
      image:
        "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
    },
    {
      name: "candyTwo",
      price: 1200,
      description: "Candy",
      type: "gummy",
      image:
        "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
    },
    {
      name: "candyThree",
      price: 2300,
      description: "Candy",
      type: "chocolate",
      image:
        "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
    },
    {
      name: "candyFour",
      price: 550,
      description: "Candy",
      type: "gummy",
      image:
        "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
    },
    {
      name: "candyFive",
      price: 3200,
      description: "Candy",
      type: "chocolate",
      image:
        "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
     
  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }
  const UsersData = [
    {
      fname: "Tuvshin",
      lname: "Bat-Erdene",
      email: "ihatechina83@gmail.com",
      password: "Nest12345678",
      secretQ: "fav color?",
      secretAns: "purple",
    },
    {
      fname: "nest",
      lname: "nestee",
      email: "nest@gmail.com",
      password: "Nest12345678",
      secretQ: "name?",
      secretAns: "nest",
    },
  ];
  
  function Signup() {
    let passOne = document.getElementById("passOne").value;
    let passTwo = document.getElementById("passTwo").value;
    if (passOne.length >= 8) {
      if (passOne === passTwo) {
        if (passOne != passOne.toLowerCase()) {
          console.log("pass ok");
          Adduser(passOne);
        } else {
          alert("should have one upper case");
        }
      } else {
        alert("password doesnt match");
      }
    } else {
      alert("too short pass");
    }
  }
  
  function Adduser(password) {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let secQ = document.getElementById("secretQuestion").value;
    let secA = document.getElementById("secretAnswer").value;
  
    let newUser = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      secretQ: secQ,
      secretAns: secA,
    };
    UsersData.push(newUser);
  }
  
  function Login() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;
  
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email && UsersData[i].password == pass) {
        console.log("user found and ready to go next page");
        window.location.replace("./iduk.html");
      }
    }
  }
  
  function Forgot() {
    let email = document.getElementById("forgotEmail").value;
  
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email) {
        document.getElementById("secQ").innerHTML = UsersData[i].secretQ;
      } else {
        alert("no user found");
      }
    }
  }
  function Check() {
    let email = document.getElementById("forgotEmail").value;
    let answer = document.getElementById("secAns").value;
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email) {
        if (UsersData[i].secretAns == answer) {
          document.getElementById("pas").innerHTML = UsersData[i].password;
        } else {
          alert("wrong answer");
        }
      } else {
        alert("no user found1");
      }
    }
  }