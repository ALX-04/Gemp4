
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );
	lay.SetBackColor( "black" );
  hey = app.CreateLayout( "Linear", "VCenter,FillXY" );
  hey.SetBackColor( "black" );
  hey.SetVisibility( "hide" );
  tayo=app.CreateLayout("linear","VCenter,FillXY");
	tayo.SetBackColor("black");
  tayo.SetVisibility( "hide" );
  
	//create Button 
  cek = app.CreateButton( "Cek Gempa Terkini", 0.7, -1, "Custom" );
  cek.SetStyle( "#EEE8A", "#008080", 10 );
  cek.SetFontFile( "Misc/font.ttf" );
  cek.SetTextColor( "black" );
  cek.SetTextShadow( 2, 0, 1, "#A0522D" );
	cek.SetOnTouch(cek_OnTouch);
	lay.AddChild(cek);


  txt = ("<font color='white'><center><h2><b>© ALDI LINALDA</b></h2></center>");
	version= app.CreateText( txt, 0.8, -1, "Html,Link" );
	version.SetTextSize( 10 );
  version.SetFontFile("Misc/font2.ttf" );
	version.SetMargins( 0,0.0,0,0 );
	version.SetTextColor( "White");
	lay.AddChild( version );

	read = app.CreateButton( "Touch Me  !!!!!",0.5,-1,"Custom");
	read.SetStyle( "#aaaaaa", "red", 10 );
  read.SetFontFile( "Misc/font.ttf" );
  read.SetTextShadow( 2, 0, 1, "#A0522D" );
	read.SetOnTouch(read_OnTouch);
	lay.AddChild(read);

  player = app.CreateMediaPlayer();
	//Load a file (can be ogg or mp3).
	player.SetFile( "Snd/sabyan.mp3" );

   
	site = "http://data.bmkg.go.id/autogempa.xml"
	request = new XMLHttpRequest();
	request.open("GET", site, false);
	request.send();
	var e=request.response;
	       t=new DOMParser;
	       n=t.parseFromString(e,"application/xml");
	
	tanggal=n.getElementsByTagName("Tanggal")[0].textContent;
	jam=n.getElementsByTagName("Jam")[0].textContent;	       
	lintang=n.getElementsByTagName("Lintang")[0].textContent;	       
	bujur=n.getElementsByTagName("Bujur")[0].textContent;	       
	magnitude=n.getElementsByTagName("Magnitude")[0].textContent;	       
	kedalaman=n.getElementsByTagName("Kedalaman")[0].textContent;	       
	wilayah1=n.getElementsByTagName("Wilayah1")[0].textContent;
	wilayah2=n.getElementsByTagName("Wilayah2")[0].textContent;
	wilayah3=n.getElementsByTagName("Wilayah3")[0].textContent;
	wilayah4=n.getElementsByTagName("Wilayah4")[0].textContent;
	wilayah5=n.getElementsByTagName("Wilayah5")[0].textContent;
	potensi=n.getElementsByTagName("Potensi")[0].textContent;
  append = "Tanggal : "+tanggal+"\nJam : "+jam+"\nLintang : "+lintang+"\nBujur : "+bujur+"\nMagnitude : "+magnitude+"\nKedalaman : "+kedalaman+"\nWilayah : "+wilayah1+"\nPotensi : "+potensi;
	log = app.CreateTextEdit("",0.90,0.3,"Left");
	log.SetTextColor( "#22ff22" );
	log.SetTextSize( 15 );
	log.SetEnabled( false);
	hey.AddChild( log );
	log.SetText( append );

  	
	web = app.CreateWebView( 0.9, 0.1 );
	web.SetOnProgress( web_OnProgess );
	web.SetBackColor( "Black" );
	hey.AddChild( web );
	
  var html = "<html>";
  html += "<body>";
	html += "</td>";
	html += '<td><marquee class="z"style="color:cyan; font-size:20px;font-family:electrolize;text-shadow: 0px 0px 5px aqua; direction:left;"scrollamount="5px">-= SMK KAPIN JAKARTA=-</marquee>';
	html += "</td></tr>";
  html += '<marquee behaviour="alternate"direction="down"scrollamount="5"scrolldelay="20"><marquee behaviour="alternate"direction="left"scrollamount="5"scrolldelay="20"><FONT COLOR="red"><FONT SIZE="4">XII ~ TKJ </FONT></marquee>';
  html += '<center><FONT COLOR="blue">   Aldi Linalda</FONT><center>';
  html += "</body>";
  html += "</html>";
	web.LoadHtml( html, "file:///Sys/" );
	
	clear= app.CreateButton( "Kembali", 0.4, -1, "Custom" );
  clear.SetStyle( "#EEE8A", "#008080", 10 );
  clear.SetTextShadow( 2, 0, 1, "#A0522D" );
	clear.SetOnTouch(clear_OnTouch);
	hey.AddChild(clear);

  txt = ("<h2><b><FONT COLOR='red'> Indonesia</FONT><FONT COLOR='white'>Berduka</FONT></h2></b>");
	version= app.CreateText( txt, 0.8, -1, "Html,Link" );
	version.SetTextSize( 20 );
  version.SetFontFile("Misc/font.ttf" );
	version.SetMargins( 0,0.0,0,0 );
	tayo.AddChild( version );
	
	web = app.CreateWebView( 0.9, 0.6);
	web.SetOnProgress( web_OnProgess );
	web.SetBackColor( "Black" );
	tayo.AddChild( web );
	
  var html = "<html>";
  html += "<body>";
  html +='<p align="center"><img src="http://bestanimations.com/Flags/Asia/indonesia/indonesia-flag-waving-animated-gif-15.gif" border="0" weight="150" height="250" alt="ALX-04" /></a></p>';
  html += '<style type="text/css">body { background-image: url(http://1.bp.blogspot.com/-6CsOJUHaxzU/UO7H1jfxWGI/AAAAAAAACHo/Wa2ajy8IgF0/s1600/storm.gif); background-color:transparent; }</style>';
	html += '<td><marquee class="z"style="color:white; font-size:20px;font-family:electrolize;text-shadow: 0px 0px 5px aqua; direction:left;"scrollamount="5px">-= SMK KAPIN JAKARTA=-</marquee>';
  html += "</body>";
  html += "</html>";
	web.LoadHtml( html, "file:///Sys/" );
	
	
	text = ( "<a href='http://data.bmkg.go.id/autogempa.xml '>http://data.bmkg.go.id</a>" );
	version = app.CreateText( text, 0.8, -1, "Html,Link" );
	version.SetTextSize( 20 );
  version.SetFontFile("Misc/font.ttf" );
	version.SetMargins( 0,0.0,0,0 );
	version.SetTextColor( "Red" );
	tayo.AddChild( version );
	
	back = app.CreateButton( "Kembali", 0.4, -1, "Custom" );
  back.SetStyle( "#EEE8A", "#008080", 10 );
  back.SetTextShadow( 2, 0, 1, "#A0522D" );
	back.SetOnTouch(back_OnTouch);
	tayo.AddChild(back);

	
	//Add layout to app.	
	app.AddLayout( lay );
	app.AddLayout( tayo );
  app.AddLayout( hey );
}
//function button
function cek_OnTouch(){
  hey.Animate( "SlideFromTop" );

  app.Vibrate( "0,100,30,100,50,300" );
  app.ShowPopup( "Please Wait" );
  lay.SetBackColor( "red" );
	lay.SetBackColor( "black" );
  hey.SetBackground( "Img/gem.png" );
	
  lay.SetBackground( "Img/bg.png" );
  app.WriteFile( "/sdcard/GempaTerkini.txt", append);
  app.ShowPopup("Log Succesfully Saved > /sdcard/GempaTerkini.txt","Bottom");
}
function web_OnProgess( progress )
{
	app.Debug( "progress = " + progress );
	if( progress==100 ) app.HideProgress();
}
function clear_OnTouch(){
 app.Vibrate( "0,100,30,100,50,300" );
 hey.Animate( "SlideToTop" );
}
function read_OnTouch(){
 tayo.Animate("SlideFromBottom");
	player.SeekTo( 0 );
	player.Play();
}
function back_OnTouch(){
 tayo.Animate("SlideToBottom");
}