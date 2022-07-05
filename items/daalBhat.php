<?php
    session_start();
    if(!isset($_SESSION['is_login'])){
        header("Location: ../index.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="item.css">
    <title>Daal Bhat</title>
</head>
<body>
    <div class="header">
        <a href="../dashboard.php"><img src="https://ik.imagekit.io/dzz/easycanteen/tr:w-300/logo_CYI5nkEOi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654571525480" alt="logo"></a>
        <a href="cart.php"><span class="green-text"><i class="fa-solid fa-cart-shopping cart-icon"></i></span></a>
    </div>
    <div class="container">
        <div class="item">
            <img src="https://ik.imagekit.io/dzz/easycanteen/tr:w-300/dal-bhat-recipe-local-food-260nw-583966321_WdRXfgEjs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654779704877" alt="Rice">

            <div class="item-details">
                <p><span class="theme-text">Item </span>: <span class="itemName">Daal Bhat</span></p>
                
                <p><span class="theme-text">Price </span>: Rs. <span class="itemPrice">70</span></p>
                <p><span class="theme-text">Qty </span>: <span class="itemQty">1</span><button id="addQty" type="button">+</button><button id="subQty" type="button">-</button></p>
                <p><span class="theme-text">Total </span>: Rs. <span class="totalPrice">70</span></p>
            </div>

            <p><button type="button" id="add-to-cart" class="general-btn">Add to Cart</button></p>
            <p><button type="button" id="go-to-cart" class="general-btn">Go to Cart</button></p> 
            
            <div class="modal">
                <i class="fa-solid fa-circle-check check-icon"></i>
                <div class="modal-text">Item has been added to cart</div>
                <button class="modal-btn" type="button">Okay</button>
            </div>
            <div id="overlay"></div>
        </div>
    </div>
    <script src="item.js"></script>
</body>
</html>