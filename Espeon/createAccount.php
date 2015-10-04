<?php
/*
session_start();
if (!isset($_SESSION['userID']))
	header("Location:indextest.php");
*/
?>
<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <title>ThunderPunch</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <meta name="viewport" content="width=device-width, initial-scale=1">


  <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
  <link href="//fonts.googleapis.com/css?family=Open+Sans:400,600,300" rel="stylesheet" type="text/css">
	
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">

	<link rel="icon" type="image/png" href="images/favicon.png">



	<script src="jquery-2.1.3.min.js"></script>
	 <style>
	 body {
	
		width:100%;
	 }
	.values {
		background-image: url('../images/values-bg.jpg');
		background-size: cover;
		color: #fff;
		padding-bottom: 5rem;
	}
	
	.frontPage{
		background-color:rgba(0,0,0,.5);
		box-shadow: 16px 16px 6px rgba(0,0,0,.8);
		color:white;
		padding: 32px;
		-webkit-border-radius: 16px;
		-moz-border-radius: 16px;
		border-radius: 16px;
	}
	
	.hero {
		background-image: url('images/jogging.jpg');
		background-size: cover;
		padding-bottom: 5rem;
	}
	.section {
		text-align: right;
	}
	.options{
		text-align:center;
	}
	
  </style>
</head>
<body>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
	
		<div class = "row heading">
			<div class = "container">
				<div style = "margin-top:2%"class = "two columns offset-by-ten">
					<button class="button button-primary" ><a href="indextest.php" style="color:#FFFFFF"> Log In </a></button> 
				</div>
			</div>
		</div>
		
		<div class = "row">
			<div class="one-half column offset-by-three" style="margin-top:5%">
				<div>
					<h4> New to ThunderPunch? </h4>
					<h6> Create an account to access all the amazing features that ThunderPunch has to offer. You will be able to track your life progress and complete goals easier, all you need is to sign up!</h6>
				</div>
				<form id = "login" method="POST">
					<div class="row">
						<div class="two columns">
							<label>Username</label>
							<input type="text" placeholder="Username" id="createUser"></input>
						</div>
						<div class="picture">
						</div>
					</div>
					<div class="row">
						<div class="two columns">
							<label>Password</label>
							<input type="password" placeholder="Password" id="createPass"></input>
						</div>
					</div>
					<div class="row">
						<div class="three columns">
							<label>Confirm Password</label>
							<input type="password" placeholder="Password" id="createPass"></input>
						</div>
					</div>
					<div class="row">
						<div class="twelve columns">
							<button class="button button-primary" id="createAccount">Create Account</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	
</body>
</html>