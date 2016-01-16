google_png = chrome.extension.getURL("images/google.jpg")
bing_png = chrome.extension.getURL("images/bing.jpg")
yahoo_png = chrome.extension.getURL("images/yahoo.jpg")
num_png = chrome.extension.getURL("images/360.jpg")
sogou_png = chrome.extension.getURL("images/sogou.jpg")
youdao_png = chrome.extension.getURL("images/youdao1.jpg")
wrap_png = chrome.extension.getURL("images/wrap.jpg")
github_png = chrome.extension.getURL("images/github.gif")

Function.prototype.getMultilines = function () {
var lines = new String(this);
lines = lines.substring(lines.indexOf("/*")+3, lines.lastIndexOf("*/"));
return lines;
}

var lines = function(){
/*
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8"/>
	<style type="text/css">
		*{margin:0px; padding: 0px;}
		body {background-image: url('icon/wrap1.jpg');}
		a {text-decoration: none;color: rgb(105,74,44);}
		a:hover{color:rgb(179,199,146);}
		span {box-sizing:border-box;}
		.type-search{
			box-sizing:border-box;
			position:relative;
			float: left; 
			height: 40px;
			width: 230px;
			padding:0px 10px;
			border:1px solid #555;
		}
		.search-first input[type=search] {width:380px;height:50px;float:left;padding:0px 10px;
			border:1px solid #555;}
		#cont{
			color:rgb(105,74,44);
			width:75%;
			min-width: 500px;
			margin: 20px auto;
			padding:10px 50px;
		}

		.logo{ border:1px solid #555; border-radius:8px 0px 0px 8px;border-right: 0px;  background-position: center; background-color: #fff;background-repeat: no-repeat;}
		.go {border:1px solid #555; border-radius:0px 8px 8px 0px;border-left: 0px;background-color: #fff; text-align: center; }
		.first {line-height:50px;}
		.intro {height:35px; line-height: 35px;}
		.title {height:40px;width:200px; display: block; line-height:40px; clear:both;margin:40px auto 15px; }
		
		.span-first {position:relative;display:block;float:left;width:50px;height:50px;line-height:50px}
		.search-first {height:60px;width:500px; position:relative;margin:0px auto; margin-top: 10px;}
		

		.search {height:60px; width:360px;position: relative; float: left;margin-top: 10px;}
		.span {position:relative;display:block;float:left;width:40px;height:40px; line-height: 40px;}
		#line {width:720px;height:60px;margin:0px auto;}
		.chrome-logo{background-size:100%; background-image: url('icon/chrome.jpg');}
		.bing-logo {background-size:80%;  background-image: url('icon/bing.jpg');}
		.yahoo-logo {background-size:80%; background-image: url('icon/yahoo.jpg');}
		.haosou-logo {background-size:80%; background-image: url('icon/360.jpg');}
		.sogou-logo {background-size:80%; background-image: url('icon/sogou.jpg');}
		.youdao-logo {background-size:80%; background-image: url('icon/youdao.jpg');}
		.github-logo {background-size:80%; background-image: url('icon/github.gif');}
			


	</style>
</head>
<body>
<div id="cont">

	<!--<h2 class="intro">根据竞价结果，以下是我们为你提供的内容：</h2>->
	<!-- chrome -->
	<div id="chrome">
		<h3 class="title">若你可以XX，强烈推荐</h3>
		<div class="search-first">
			 <span class="logo span-first chrome-logo"></span><form method=get action="http://www.google.com/search" target="_blank"> <input name='q' type="search" placeholder="www.google.com"/><input class="span-first go" type=submit name=btnG value=">" /></form><!-- <span class="span-first go" ><a href="http://www.google.com"><h2>></h2></a></span>  -->
		</div>
	</div>
<h3 class="title">至少它们没有竞价排名</h3>
<div id="line">
	<!-- bing -->
	<div id="bing" >
		<div class="search">
			 <span class="logo span bing-logo"></span><form action="http://www.bing.com/search" target="_blank"> <input class="type-search" name="q" type="search" placeholder="www.bing.com"/><input class="span go" type=submit  value=">" /><!-- <span class="span go "><a href="http://www.bing.com"><h3>></h3></a></span> --></form>
		</div>
	</div>
	<!-- yahoo -->
	<div id="yahoo">
		<div class="search">
			 <span class="logo span yahoo-logo"></span><form action="http://www.yahoo.com.cn/search" target="_blank"> <input name="p" type="search" class="type-search" placeholder="www.yahoo.com"/><input class="span go" type=submit value=">" /></form><!-- <span class="span go"><a href="http://www.yahoo.com"><h3>></h3></a></span>  -->
		</div>
	</div>
</div>
	<!-- sogou -->
<h3 class="title">不推荐，但是若你执意</h3>
<div id="line">
	<div id="sogou">
		<div class="search">
			 <span class="logo span sogou-logo"></span><form action="http://www.sogou.com/web" target="_blank"> <input name='query'  type="search" class="type-search" placeholder="www.sogou.com"/><input class="span go" type=submit value=">" /></form><!-- <span class="span go"><a href="http://www.sogou.com"><h3>></h3></a></span>  -->
		</div>
	</div>
	<!-- 360 -->
	<div id="360">
		<div class="search">
			 <span class="logo span haosou-logo"></span><form action="http://www.haosou.com/s" target="_blank"> <input type="search" name='q' class="type-search" placeholder="www.haosou.com"/><input class="span go" type=submit value=">" /></form><!-- <span class="span go"><a href="http://www.haosou.com"><h3>></h3></a></span>  -->
		</div>
	</div>
	<!-- youdao -->
	<div id="youdao">
		<div class="search">
			 <span class="logo span youdao-logo"></span><form action="http://www.youdao.com/search" target="_blank"> <input class="type-search" type="search" name="q" placeholder="www.youdao.com"/><input class="span go" type=submit value=">" /></form><!-- <span class="span go"><a href="http://www.youdao.com"><h3>></h3></a></span>  -->
		</div>
	</div>
	<!-- github -->
	<div id="github">
		<div class="search">
			 <span class="logo span github-logo"></span><form action="http://github.com/telnetning" target="_blank"> <input class="type-search" type="search"  placeholder="follow my github" readonly=true/><input class="span go" type=submit value=">" /></form><!-- <span class="span go"><a href="http://www.youdao.com"><h3>></h3></a></span>  -->
		</div>
</div>

</div><!-- #cont -->
</body>
</html>
*/
};
console.log(lines.getMultilines());
var newDoc = document.open("text/html", "replace");
newDoc.write(lines.getMultilines());
document.close();

//img_node = document.getElementById("product").getElementsByTagName("img")
//alert(img_node.src)
//img_node[0].src = icon_png
//alert(img_node[0].src)
google_node = document.getElementsByClassName("chrome-logo")
google_node[0].style.backgroundImage= "url(" + google_png + ")"
bing_node = document.getElementsByClassName("bing-logo")
bing_node[0].style.backgroundImage= "url(" + bing_png + ")"
yahoo_node = document.getElementsByClassName("yahoo-logo")
yahoo_node[0].style.backgroundImage= "url(" +yahoo_png + ")"
num_node = document.getElementsByClassName("haosou-logo")
num_node[0].style.backgroundImage= "url(" + num_png + ")"
sogou_node = document.getElementsByClassName("sogou-logo")
sogou_node[0].style.backgroundImage= "url(" + sogou_png + ")"
youdao_node = document.getElementsByClassName("youdao-logo")
youdao_node[0].style.backgroundImage= "url(" + youdao_png + ")"
github_node = document.getElementsByClassName("github-logo")
github_node[0].style.backgroundImage= "url(" + github_png + ")"
body_node = document.getElementsByTagName("body")
body_node[0].style.backgroundImage= "url(" + wrap_png + ")"
