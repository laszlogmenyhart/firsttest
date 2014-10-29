/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
//id:"BLOKK,sorsz,szekcio"
var content = {
	eloadasok:{
		helyszin:"nagyterem",
		lista:[
			{
				id:"111",
				cim:"Az internetfüggőség két évtizede",
				eloado:"Demetrovics Zsolt, ELTE",
				idopont:"CS 14:10"
			},
			{
				id:"121",
				cim:"A drónok már a spájzban vannak",
				eloado:"Geda Gábor",
				idopont:"CS 15:00"
			},
			{
				id:"131",
				cim:"MESTER  online programozási feladatbank",
				eloado:"Horváth Gyula",
				idopont:"CS 15:45"
			},
			{
				id:"211",
				cim:"Információbiztonság",
				eloado:"Zala Mihály",
				idopont:"CS 16:20"
			},
			{
				id:"221",
				cim:"SULINET+ sávszélesség-emelés a közoktatásban",
				eloado:"Stefán Péter",
				idopont:"CS 17:00"
			},
			{
				id:"231",
				cim:"???",
				eloado:"Dézsi János",
				idopont:"CS 17:30"
			},
			{
				id:"711",
				cim:"???",
				eloado:"Turcsányi-Szabó Márta",
				idopont:"SZ 10:30"
			},
			{
				id:"721",
				cim:"Számítógépes gondolkodás: Hazai és európai körkép",
				eloado:"Bíró Piroska - Csernoch Mária",
				idopont:"SZ 11:00"
			}
		]
	},
	szekcio1:{
		helyszin:"kisterem1",
		lista:[
			{
				id:"112",
				cim:"Elso S1 eloadas cime",
				eloado:"elso S1 eloado",
				idopont:"CS 12:00"
			},
			{
				id:"122",
				cim:"Masodik S1 eloadas cime",
				eloado:"masodik S1 eloado",
				idopont:"CS 12:30"
			},
			{
				id:"212",
				cim:"Oktatási és vizsgáztatási segédletek okostelefonos alkalmazáson keresztül",
				eloado:"Sárkány Rita, Németh Tamás",
				idopont:"P 11:00"
			}
		]
	},
	szekcio2:{
		helyszin:"kisterem2",
		lista:[
			{
				id:"113",
				cim:"Elso S2 eloadas cime",
				eloado:"elso S2 eloado",
				idopont:"CS 12:00"
			},
			{
				id:"123",
				cim:"Masodik S2 eloadas cime",
				eloado:"masodik S2 eloado",
				idopont:"CS 12:30"
			}
		]
	},
	szekcio3:{
		helyszin:"kisterem3",
		lista:[
			{
				id:"214",
				cim:"Szoftverfejlesztés gyerekeknek, gyerekekkel",
				eloado:"Dr. Lénárd András",
				idopont:"P 9:00"
			},
			{
				id:"224",
				cim:"Mobil tanulás az alsó tagozaton",
				eloado:"Vitéz Gyöngyvér",
				idopont:"P 9:30"
			}
		]
	},
	infodidact:{
		helyszin:"kisterem4",
		lista:[
			{
				id:"115",
				cim:"Informatikai kompetenciák: A valós világ modellezése",
				eloado:"Szlávi Péter, Zsakó László",
				idopont:"CS 16:30"
			},
			{
				id:"125",
				cim:"A magyar és a brit informatika kerettanterv 2012-es megújítása",
				eloado:"Mahler Attila",
				idopont:"CS 17:00"
			},
			{
				id:"215",
				cim:"Az összegzés ereje",
				eloado:"Dr. Gregorics Tibor",
				idopont:"P 9:00"
			}
		]
	}
};

var page="";
var lista=[];
var elsoElem=0;
var listazva="";
var db=3;

var saveNickname = function() {
	var nickname=document.getElementById("nickname").value;
	if (nickname=="") {
			document.getElementById("nicknameError").setAttribute('style', 'display:block;');
	} else {
		window.localStorage.infoera2014_nickname=nickname;
		document.getElementById("page2").setAttribute('style', 'display:none;');
		document.getElementById("pageMain").setAttribute('style', 'display:block;');
	}
};

var nextFrom = function(fromId) {
	if (fromId=='page1') {
		if (!((window.localStorage.infoera2014_closed!==undefined) && (window.localStorage.infoera2014_closed=="TRUE"))) {
			document.getElementById("page1").setAttribute('style', 'display:none;');
			if (window.localStorage.infoera2014_nickname === undefined) {
				document.getElementById("page2").setAttribute('style', 'display:block;');
			} else {
				document.getElementById("pageMain").setAttribute('style', 'display:block;');
			}
		}
	}
}

var down = function() {
	if (elsoElem<lista.length-1) {
		elsoElem++;
	}
	showItems();
};

var up = function() {
	if (elsoElem>0) {
		elsoElem--;
	}
	showItems();
};

var showItems = function() {
	var listaelemek="";
	var fgv="erdekel";
	if (listazva=="my") {
		fgv="showRate";		
	}
	for (i=0;i<lista.length;i++) {
		if ((i>=elsoElem) && (i<elsoElem+db)) {
			var elem="";
			elem=elem+"<div class=\"item\">";
			elem=elem+"<div>";
			elem=elem+lista[i].cim+"<br/>";
			elem=elem+lista[i].eloado+"<br/>";
			elem=elem+lista[i].idopont+" "+lista[i].helyszin+"<br/>";
			elem=elem+"</div>";
			if (fgv=="erdekel") {
				//eldontes tetel: benne van-e a listamban
				var j=0;
				while ((j<mylist.length) && (mylist[j].id!=lista[i].id)) {
					j++;
				}
				if (j==mylist.length) {
					elem=elem+"<div><a href='#' onclick='"+fgv+"("+i+");'>Érdekel</a></div>";
				} else {
					elem=elem+"<div>&nbsp;</div>";
				}
			} else {
				elem=elem+"<div>";
				//eldontes tetel: ertekeltek listajaban benne van-e
				var r=[];
				if (window.localStorage.infoera2014_rate!==undefined) {
					r=JSON.parse(window.localStorage.infoera2014_rate);
				}
				var j=0;
				while ((j<r.length) && (r[j].id!=lista[i].id)) {
					j++;
				}
				if (j==r.length) {
					elem=elem+"<a href='#' onclick='"+fgv+"("+i+");'>Értékel</a>&nbsp;";
				}
				elem=elem+"<a href='#' onclick='megsemErdekel("+i+");'>Töröl</a>";
				elem=elem+"</div>";
			}
			elem=elem+"</div>";
			listaelemek=listaelemek+elem;
		}
	}
	document.getElementById("listItems").innerHTML=listaelemek;
};

var megsemErdekel = function(i) {
	//console.log("torolniAListabol-"+JSON.stringify(mylist[i].id));
	var newmylist=[];
	for (e in mylist) {
		if (mylist[e].id!=mylist[i].id) {
			newmylist.push(mylist[e]);
		}
	}
	mylist=newmylist;
	window.localStorage.infoera2014_mylist=JSON.stringify(mylist);
	showList(listazva);
};

var erdekel = function(i) {
	//console.log("erdekel-"+i);
	var newmylist=[];
	var e=0;
	while ((e<mylist.length) && (mylist[e].id<lista[i].id)) {
		newmylist.push(mylist[e]);
		e++;
	};
	newmylist.push(lista[i]);
	while (e<mylist.length) {
		newmylist.push(mylist[e]);
		e++;
	}
	mylist=newmylist;
	window.localStorage.infoera2014_mylist=JSON.stringify(mylist);
	showList(listazva);
};

var showList = function(listaId) {
	listazva=listaId;
	lista=[];
	if (listazva=="my") {
		for (i in mylist) {
			//console.log(mylist[i]);
			lista.push(mylist[i]);
		}
	} else {
		for (i in content[listaId].lista) {
			//console.log(content[listaId].lista[i]);
			var e=content[listaId].lista[i];
			e.helyszin=content[listaId].helyszin;
			lista.push(e);
		}
	}
	elsoElem=0;
	showItems();
	document.getElementById("listTitle").innerHTML="";
	if (listazva=="my") {
		document.getElementById("listTitle").innerHTML="Amik érdekelnek";
	} else if (listazva=="eloadasok") {
		document.getElementById("listTitle").innerHTML="Előadások";
	} else if (listazva=="szekcio1") {
		document.getElementById("listTitle").innerHTML="1. szekció";
	} else if (listazva=="szekcio2") {
		document.getElementById("listTitle").innerHTML="2. szekció";
	} else if (listazva=="szekcio3") {
		document.getElementById("listTitle").innerHTML="3. szekció";
	} else if (listazva=="infodidact") {
		document.getElementById("listTitle").innerHTML="INFODIDACT";
	}
	document.getElementById("pageMain").setAttribute('style', 'display:none;');
	document.getElementById("pageList").setAttribute('style', 'display:block;');
};

var showRate = function(fromId) {
	page=fromId;
	var elem="";
	if (page=="pageMain") {
		elem=elem+"<div>konferenciát összességében.</div>";
		document.getElementById("page_rate_button").innerHTML="A konferencia vége";
		document.getElementById("pageMain").setAttribute('style', 'display:none;');
	} else {
		elem=elem+"<div class=\"item\"><div>";
		elem=elem+mylist[fromId].cim+"<br/>";
		elem=elem+mylist[fromId].eloado+"<br/>";
		elem=elem+mylist[fromId].idopont+"<br/>";
		elem=elem+"előadást.";
		elem=elem+"</div></div>";
		document.getElementById("page_rate_button").innerHTML="Ment";
		document.getElementById("pageList").setAttribute('style', 'display:none;');
	}
	document.getElementById("topicRate").value="5";
	document.getElementById("performerRate").value="5";
	document.getElementById("comment").value="";
	document.getElementById("item").innerHTML=elem;
	document.getElementById("pageRate").setAttribute('style', 'display:block;');
};

var visszaRate = function () {
	document.getElementById("pageRate").setAttribute('style', 'display:none;');
	if (page=="pageMain") {
		document.getElementById("pageMain").setAttribute('style', 'display:block;');
	} else {
		document.getElementById("pageList").setAttribute('style', 'display:block;');
	}
};

var saveRate = function () {
	document.getElementById("pageRate").setAttribute('style', 'display:none;');
	var r=[];
	if (window.localStorage.infoera2014_rate!==undefined) {
		r=JSON.parse(window.localStorage.infoera2014_rate);
	}
	//console.log(r);
	var e={};
	if (page=="pageMain") {
		e.id="infoera2014";
		e.topicRate=document.getElementById("topicRate").value;
		e.performerRate=document.getElementById("performerRate").value;
		e.comment=document.getElementById("comment").value;
		window.localStorage.infoera2014_closed="TRUE";
		document.getElementById("page1").setAttribute('style', 'display:block;');
		document.getElementById("varjukvissza").setAttribute('style', 'display:block;');
	} else {
		e.id=mylist[page].id;
		e.cim=mylist[page].cim;
		e.eloado=mylist[page].eloado;
		e.idopont=mylist[page].idopont;
		e.topicRate=document.getElementById("topicRate").value;
		e.performerRate=document.getElementById("performerRate").value;
		e.comment=document.getElementById("comment").value;
		document.getElementById("pageList").setAttribute('style', 'display:block;');
	}
	r.push(e);
	window.localStorage.infoera2014_rate=JSON.stringify(r);
	if (page!="pageMain") {
		showList(listazva);
	}
	if (page=="pageMain") {
		var rating="user="+window.localStorage.infoera2014_nickname+"&rate="+window.localStorage.infoera2014_rate;
		//console.log("AJAXcallTo -> http://157.181.166.134/infoera2014/saveRate.php?"+rating);
		$.ajax({ 
		url: 'http://157.181.166.134/infoera2014/saveRate.php',
		type: "POST",
		data: rating,
		async: true,
	  	success: function(response){
			console.log("success");
	  	}
	})
	}
};

var visszaList = function() {
	document.getElementById("pageMain").setAttribute('style', 'display:block;');
	document.getElementById("pageList").setAttribute('style', 'display:none;');
};

var ment =function(ertek){
	window.localStorage.infoera2014.mezo=ertek;
};

var kiir =function(){
	document.getElementById("aaa").value=window.localStorage.infoera2014.mezo;
};