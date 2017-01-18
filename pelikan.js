
/*
 ____      _ _ _                   _ ____  
|  _ \ ___| (_) | ____ _ _ __     | / ___| 
| |_) / _ \ | | |/ / _` | '_ \ _  | \___ \ 
|  __/  __/ | |   < (_| | | | | |_| |___) |
|_|   \___|_|_|_|\_\__,_|_| |_|\___/|____/ 

lib v1.0 by p-rogulski'2017

[description] 
 PelikanJs - create a coponent based on object definition
*/


function CssAttributes(){
    this.defineProperty=function (propertyName, value) {
        this[propertyName.toUpperCase()] = value;
    }
}


function ComponentStruct(id) {
    this.id = id;
    var attrs=new Css_attributes();
    this.defineCssProperty=function(propertyName, value){
        return attrs.defineProperty.call(attrs,propertyName, value);
    }
}



function Component(id) {
    this.struct=new ComponentStruct(id);
    this.Dispatcher=function(){
        this.eventsQueue=[];
        
        this.registerEvent=function(name,handler){

        }

        this.unregisterEvent=function(name,handler){

        }


    }
 
}

function componentsStack() {

    this.registerComponent = function (component) {
    }


    this.unregisterComponent = function (componentID) {

    }

}