function getStyle(elem, prop) {
    if (elem.currentStyle) {
        return elem.currentStyle[prop];
    } else if (getComputedStyle) {
        return getComputedStyle(elem, false)[prop];
    } else {
        return elem.style[prop];
    }
}

function addEvent(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, handler)
    } else {
        elem['on' + type] = handler;
    }
}


function $(args) {
    return new MyJQuery(args);
}

function MyJQuery(args) {
    this.elements = [];
    switch (typeof args) {
        case 'function':
            window.addEventListener('load', args, false);
            break;
        case 'string':
            var firstLetter = args.charAt(0);
            switch (firstLetter) {
                case '#'://#xxx
                    this.elements.push(document.getElementById(args.substring(1)));
                    break;
                case '.':
                    this.elements = document.getElementsByClassName(args.substring(1));
                    break;
                default:
                    this.elements = document.getElementsByTagName(args);
            }
            break;
        case 'object':
            this.elements.push(args);
            break;
    }
}
MyJQuery.prototype.addClass = function (clsName) {
    for (var i = 0; i < this.elements.length; i++) {
        var re = new RegExp('\\b' + clsName + '\\b', 'g');
        if (!re.test(this.elements[i].className)) {
            this.elements[i].className += ' ' + clsName;
            MyJQuery.trim
            this.elements[i].className = (this.elements[i].className);
        }
    }
    return this;
};

MyJQuery.prototype.width = function (length) {
    if (length) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style.width = length + 'px';
        }
        return this;
    }
    return getStyle(this.elements[0], 'width');

};

MyJQuery.prototype.click = function (fn) {
    for (var i = 0; i < this.elements.length; i++) {
        addEvent(this.elements[i], 'click', fn);
    }
};

MyJQuery.prototype.on = function (type, selector, fn) {
    if (typeof selector == 'string') {
        for (var i = 0; i < this.elements.length; i++) {
            addEvent(this.elements[i], type, function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                switch (selector.charAt(0)) {
                    case '.'://.aa
                        if (target.className == selector.substring(1)) {
                            fn.call(target);
                        }
                        break;
                }
            });
        }
    } else {
        for (var i = 0; i < this.elements.length; i++) {
            addEvent(this.elements[i], type, fn);
        }
    }

};

MyJQuery.trim = function (str) {
    var re = /^\s+|\s+$/g; // _abc_
    return str.replace(re, '');
};














