(function(open) {
    XMLHttpRequest.prototype.open = function(m, u, a, us, p) {
        this.addEventListener('readystatechange', function() {
            console.log(this.response);
        }, false);

        open.call(this, m, u, a, us, p);
    };
})(XMLHttpRequest.prototype.open)
