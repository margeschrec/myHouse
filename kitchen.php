<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        Help Yourself
    </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css" />
</head>

<body>
    <div class="container-fluid" id="kitchenBg">
    </div>
    <div class="indexImgs" id="blinds">
        <img src="../img/blinds.png" class="img-fluid">
    </div>
    <div class="indexImgs" id="blinds02">
        <a href="yard.php">
        <img src="../img/blinds_02.png" class="img-fluid">
        </a>
    </div>
    <div class="indexImgs" id="kitchenFridge" onclick="FridgeDoorCloseUp()">
        <img src="../img/kitchen_fridge.png" class="img-fluid">
    </div>
    <img id="fridgeFront" src="../img/kitchen_fridge_front.jpg" class="img-fluid fridgeDisplay" onmouseover="showPostIt()" onclick="hideFridgeDoor()">
    <div id="fridgePostIt" class="fridgeDisplay">
        <img src="../img/kitchen_fridge_note.png">
    </div>
    <div id="diaryPages" class="fridgeDisplay">
        <p></p>
    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/kitchen.js"></script>
</body>

</html>
