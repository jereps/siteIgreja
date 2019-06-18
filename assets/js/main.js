var breakpoints = {
    xs: '(max-width: 600px)',
    sm: '(min-width: 601px) and (max-width: 749px)',
    md: '(min-width: 750px) and (max-width: 979px)',
    lg: '(min-width: 980px) and (max-width: 1179px)',
    xl: '(min-width: 1180px) and (max-width: 1235px)',
    xlm: '(min-width: 1260px) and (max-width: 1400px)',
    sxl: '(min-width: 1410px) and (max-width: 1490px)',
    xxl: '(min-width: 1512px)'
};


Object.keys(breakpoints).forEach(function (breakpoint) {
    var mql = window.matchMedia(breakpoints[breakpoint]);

    if (mql.matches) {
        console.log(breakpoint);
        // alert(breakpoint);
        // window.location.reload();
    }

    mql.addListener(function (mql) {
        if (mql.matches) {
            console.log(breakpoint);
            window.location.reload();
        }
    });
});