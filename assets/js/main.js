var breakpoints = {
    sm: '(max-width: 600px)',
    md: '(min-width: 601px) and (max-width: 1024px)',
    lg: '(min-width: 1026px)'
};


Object.keys(breakpoints).forEach(function(breakpoint) {
    var mql = window.matchMedia(breakpoints[breakpoint]);

    if (mql.matches) {
        // alert(breakpoint);
        // window.location.reload();
    }

    mql.addListener(function(mql) {
        if (mql.matches) {
            // alert(breakpoint);
            window.location.reload();
        }
    });
});