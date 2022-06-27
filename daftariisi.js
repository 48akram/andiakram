function oc_list_kategori() {
   var a = document.getElementById("akram-playlist");
   var b = window.getComputedStyle(a).getPropertyValue("display");
   var c = document.getElementById("bdown");
   var d = document.getElementById("bup");
   
   if(b === 'none') {
    a.style.display="block";
    c.style.display="none";
    d.style.display="inline-block";
   } else {
    a.style.display="none";
    c.style.display="inline-block";
    d.style.display="none";
   }
 }

function coba(x) {
  var a = document.getElementById(x);
 	var b = a.getAttribute("id");
 	var c = document.getElementById(b+"1");
  var e = document.getElementById("jkategori");
  var d = window.getComputedStyle(c).getPropertyValue("line-height");
  var all1 = document.getElementsByClassName('xxx');
  var all2 = document.getElementsByClassName('yyy');  
	
  for (var i = 0; i < all1.length; i++) {
  	  all1[i].style.backgroundColor = "var(--xxx-bg)";
      a.style.backgroundColor = "var(--shomai-bg)";
	}  
  	for (var i = 0; i < all2.length; i++) {
  		all2[i].style.display = "none";
      c.style.display = "block";
  }
  var stil = window.getComputedStyle(c).getPropertyValue("height");
  if(stil === "0px"){
    alert("Afwan... Belum ada postingan dalam kategori " + a.innerHTML + ".");
  }
  e.innerHTML =  a.innerHTML;
}
  
function dfisi(disi) {
  var x = document.getElementById(disi);
  var y = x.getAttribute("id");
  var z = document.getElementsByClassName("shomai");
                      
  for(var i=0; i < z.length; i++){
    z[i].style.backgroundColor = "var(--daftarisi-nav)";
    x.style.backgroundColor = "var(--shomai-bg)";
  }
                      
  if(y === "b-tgl"){
    document.getElementById("isi-kategori").style.display = "none";
    document.getElementById("isi-tgl").style.display = "block";
  } else{
    document.getElementById("isi-kategori").style.display = "block";
    document.getElementById("isi-tgl").style.display = "none";
  }
}
/* Javascript untuk membuat sitemap otomatis di blogger 
by www.tirailangit.com */

var numposts = 100;
var standardstyling = true;

function startpost(json){
  for (var i = 0; i < numposts; i++){
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    
    if (i == json.feed.entry.length) break;
    
    for (var k = 0; k < entry.link.length; k++){
      if (entry.link[k].rel == 'alternate'){
        posturl = entry.link[k].href;break;
      }
    }
        
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    
    document.write(posttitle);
  }
  
  if (standardstyling) document.write('</li>');
}

function finished(){
  document.write('<br /><br /><a href="http://www.tirailangit.com/2016/12/cara-membuat-daftar-isi-per-kategori-di.html" style="font-size: 10 px; text-decoration:none; color: #616469;" target="_blank" title="Cara Membuat Sitemap Per-Kategori Di Blogger">Sitemap</a>');
}
