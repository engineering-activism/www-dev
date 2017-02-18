import React from 'react';
import {render} from 'react-dom';


// Get JSON helper function
var getJSON = function(url, successHandler, errorHandler) {
    var xhr = typeof XMLHttpRequest != 'undefined'
        ? new XMLHttpRequest()
        : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', url, true);
    xhr.onreadystatechange = function() {
        var status;
        var data;
        if (xhr.readyState == 4) { // `DONE`
            status = xhr.status;
            if (status == 200) {
                data = JSON.parse(xhr.responseText);
                successHandler && successHandler(data);
            } else {
                errorHandler && errorHandler(status);
            }
        }
    };
    xhr.send();
};

// React Classes

var MaterialItem = function (props){
    // make thumbnail
    var thumbnail = "";
    if (props.m.thumbnail !== undefined){
        thumbnail = <img src={props.m.thumbnail} alt={props.m.thumbnail}/>;
    }

    return (
        <li className="material-item">
            <a href={props.m.link}>
                <span className="thumbnail">{thumbnail}</span>
                <span className="title">{props.m.title}</span>
                <span className="notes">{props.m.notes}</span>
            </a>
        </li>
    );
}

var Materials = function (props) {
    var items = props.materials.map(function(m){
        return <MaterialItem m={m}/>;
    });

    return (
        <ul className="materials">
            {items}
        </ul>
    );
}


// Main

var main = function (){
    // get materials list and info from json file 
    // and render it in <div id="react-materials"/>
    getJSON("/materials/materials.json", function(data){
        var materialsDiv = document.getElementById("react-materials");
        render(<Materials materials={data.materials}/>, materialsDiv);
    }); 
}


document.addEventListener("DOMContentLoaded", main);
