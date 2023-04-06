var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
// Activatable Mixin
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObject = /** @class */ (function () {
    function SmartObject() {
    }
    SmartObject.prototype.getData = function () {
        console.log(this.isActive + " : " + this.isDisposed);
    };
    return SmartObject;
}());
applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
smartObj.activate();
smartObj.dispose();
smartObj.getData();
smartObj.deactivate();
smartObj.getData();
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, 
            //@ts-ignore
            Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
