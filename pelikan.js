/*
 ____      _ _ _                   _ ____  
|  _ \ ___| (_) | ____ _ _ __     | / ___| 
| |_) / _ \ | | |/ / _` | '_ \ _  | \___ \ 
|  __/  __/ | |   < (_| | | | | |_| |___) |
|_|   \___|_|_|_|\_\__,_|_| |_|\___/|____/ 

lib v1.0 by p-rogulski'2017

[description] 
 PelikanJs - create a component based on object definition
*/

var Pelikan = (function () {

    var eventManager = function () {
        var eventQueue = [];

        this.registerEvent = function (name, handler) {
            eventQueue[name] = handler;
        }

        this.unregisterEvent = function (name) {
            delete eventQueue[name];
        }

        this.triggerEvent = function (name, args) {
            var fun = eventQueue[name];
            if (args) {
                fun.applay(null, args);
                return;
            }
            fun();
        }
    }

    var component = function (id, cssAttributesObj) {
        this.id = id;
        this.cssAttributesObj = cssAttributesObj;
        this.events = new eventManager();
    }

    var componentBuilder = {
       createComponent:function(componentId, css) {
            return new component(id, css);
        }
    }

    var componentManager = function () {
        var components = [];

        this.registerComponent = function (id, componentObj) {
            components[id] = componentObj;
        }

        this.unregisterComponent = function (id) {
            delete components[id];
        }

        this.getComponent(id) = function (id) {
            return components[id];
        }

        this.getComponents = function () {
            return components;
        }
    }




    function Pelikan(componentId) {
        this.addComponent = function () {

        }

        this.removeComponent = function () {

        }

        this.getComponent

    }

    return Pelikan;
});
