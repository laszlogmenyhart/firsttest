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

var content = {
	eloadasok:{
		helyszin:"nagyterem",
		lista:[
			{
				cim:"Elso eloadas cime",
				eloado:"elso eloado",
				idopont:"CS 12:00"
			},
			{
				cim:"Masodik eloadas cime",
				eloado:"masodik eloado",
				idopont:"CS 12:30"
			}
		]
	},
	szekcio1:{
		helyszin:"kisterem1",
		lista:[
			{
				cim:"Elso S1 eloadas cime",
				eloado:"elso S1 eloado",
				idopont:"CS 12:00"
			},
			{
				cim:"Masodik S1 eloadas cime",
				eloado:"masodik S1 eloado",
				idopont:"CS 12:30"
			}
		]
	},
	szekcio2:{
		helyszin:"kisterem2",
		lista:[
			{
				cim:"Elso S2 eloadas cime",
				eloado:"elso S2 eloado",
				idopont:"CS 12:00"
			},
			{
				cim:"Masodik S2 eloadas cime",
				eloado:"masodik S2 eloado",
				idopont:"CS 12:30"
			}
		]
	},
	infodidact:{
		helyszin:"kisterem3",
		lista:[
			{
				cim:"Elso ID eloadas cime",
				eloado:"elso ID eloado",
				idopont:"CS 12:00"
			},
			{
				cim:"Masodik ID eloadas cime",
				eloado:"masodik ID eloado",
				idopont:"CS 12:30"
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
		fgv="showRate"
	}
	for (i=0;i<lista.length;i++) {
		if ((i>=elsoElem) && (i<=elsoElem+db)) {
			var elem="";
			elem=elem+"<a href='#' onclick='"+fgv+"("+i+");'><div>";
			elem=elem+lista[i].cim+"<br/>";
			elem=elem+lista[i].eloado+"<br/>";
			elem=elem+lista[i].idopont+"<br/>";
			elem=elem+"</div></a>";
			listaelemek=listaelemek+elem;
		}
	}
	document.getElementById("listItems").innerHTML=listaelemek;
};

var erdekel = function(i) {
	//console.log("erdekel-"+i);
	mylist.push(lista[i]);
	window.localStorage.infoera2014_mylist=JSON.stringify(mylist);
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
			lista.push(content[listaId].lista[i]);
		}
	}
	elsoElem=0;
	showItems();
	document.getElementById("pageMain").setAttribute('style', 'display:none;');
	document.getElementById("pageList").setAttribute('style', 'display:block;');
};

var showRate = function(fromId) {
	page=fromId;
	if (page=="pageMain") {
		document.getElementById("page_rate_button").innerHTML="Befejezés";
		document.getElementById("pageMain").setAttribute('style', 'display:none;');
	} else {
		document.getElementById("page_rate_button").innerHTML="Ment";
		document.getElementById("pageList").setAttribute('style', 'display:none;');
	}
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
	if (page=="pageMain") {
		//TODO: elmenteni a szerverre
		window.localStorage.infoera2014_closed="TRUE";
		document.getElementById("page1").setAttribute('style', 'display:block;');
		document.getElementById("varjukvissza").setAttribute('style', 'display:block;');
	} else {
		var r=[];
		if (window.localStorage.infoera2014_rate!==undefined) {
			r=JSON.parse(window.localStorage.infoera2014_rate);
		}
		//console.log(r);
		e={};
		e.cim=mylist[page].cim;
		e.eloado=mylist[page].eloado;
		e.idopont=mylist[page].idopont;
		r.push(e);
		window.localStorage.infoera2014_rate=JSON.stringify(r);
		document.getElementById("pageList").setAttribute('style', 'display:block;');
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