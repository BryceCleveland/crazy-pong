<!DOCTYPE html>
<html lang="en-us">

<head>
<meta charset="utf-8">
<title>Crazy Pong!</title>
<link rel="stylesheet" href="css/crazypong.css" type="text/css" />
<title>Bryce Cleveland - Crazy Pong Web Project</title>
</head>

<body>

<div class="ball-container">
    <div id="ball" class="ball"></div>
    <div id="paddle" class="paddle"></div>
    <div id="paddle2" class="paddle2"></div>
    <div id="paddle3" class="paddle3"></div>
    <div id="paddle4" class="paddle4"></div>
</div>

<div class="infoContainer">
		<h2>Score:</h2>
	    <div id="greenScore"></div>
	    <div id="blueScore"></div>
	    <div id="redScore"></div>
	    <div id="orangeScore"></div>


	<h2>AI Difficulty:</h2>
	<form name="difficultyForm">
		<input type="radio" name="difficulty" value="easy" checked> Easy<br>
		<input type="radio" name="difficulty" value="medium"> Medium<br>
		<input type="radio" name="difficulty" value="hard"> Hard<br>
		<input type="radio" name="difficulty" value="impossible"> Impossible<br>
	</form>
	<button onclick="difficultyCheck()">Update Difficulty</button>
		<div id="orangeSpeed"></div>
		<div id="blueSpeed"></div>
		<div id="greenSpeed"></div>
</div>

<script type="text/javascript" src="js/crazyPongEngine.js"></script>
</body>
</html>
