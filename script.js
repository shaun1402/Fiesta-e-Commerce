//let productsInCart=[];
$(document).ready(function(){
    
    $(".button").click(function(){
        //console.log("hii")
        //const product_photo= document.querySelector("#crt").src;
        const imageElement = document.getElementById("crt");
        // Get the src attribute of the image element
        const imageUrl = imageElement.src;
        const product_name= document.querySelector(".product_1").innerHTML;
      const product_quantity=document.querySelector(".qnt").innerHTML;
      const total=document.querySelector(".price").innerHTML;
      const priceValue = parseFloat(total);
       const sbtotal= priceValue*product_quantity;
        //$(this).hide();
        let productsToCart={
            IMAGE: imageUrl,
            PRODUCT: product_name,
            QUANTITY: product_quantity,
            SUBTOTAL: sbtotal
        }
        //updateproductsInCart(productsToCart);
        for (let i = 0; i < productsToCart.length; i++) {
            var markup = `<tr>
                            <td>${productsToCart[i].IMAGE}</td>
                            <td>${productsToCart[i].PRODUCT}</td>
                            <td>${productsToCart[i].QUANTITY}</td>
                            <td>${productsToCart[i].SUBTOTAL}</td>
                            </tr>`
            $("#tbody").append(markup);

        }
    });
  });