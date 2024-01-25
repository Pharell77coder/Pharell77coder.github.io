<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="../core/Styles/app.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'>
    <meta name="author" content="Pharell">
    <link rel="icon" href="assets/favicon.ico">
</head>
<body>
    <div id="header" class="header">
        <h1>Portfolio</h1><div class="profile">
        <span class="fas fa-search"></span>
        <img class="profile-image-header" alt="miskine sa ne marche pas" src="../assets/profil.jpg">
        <p class="profile-name-header">Lorem ipsum</p></div>
    </div>
    <div id="nav">
        <ul>
            <li><a href="#Accueil">Accueil</a></li>
            <li><a href="#Competence">Competence</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        
    </div>
    <div class="main" id="main">
        <div class="section Accueil" id="Accueil">
            <h2>TITI Pharell</h2> 
            <h3>Etudiant</h3>
        </div>
        <div class="section Competence" id="Competence">
            <h2>Competence</h2>
        </div>
        <div class="section Portfolio" id="Portfolio">
            <h2>Portfolio</h2>
        </div>
        <div class="section About" id="About">
            <h2>About</h2>
        </div>
        <div class="section Contact" id="Contact">
            <h2>Contactez-Moi</h2>
            <form action="http://127.0.0.1:5500/action_page.php" novalidate="">
            <label for="email">Enter your email:</label>
            <input type="email" id="email" name="email" required=""><br><br>
            <input type="submit" value="Submit"></form>
        </div>
    </div>
    <div id="footer" class="footer">
        <p>avis de confidentialité du site Web</p> 
        <p>cookies</p> 
        <p>légal</p> 
        <p>lignes directrices pour la participation communautaire</p>
    </div>
    <script src="../core/Interactions/script.js"></script>
</body>
</html>