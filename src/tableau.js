var viz;

function declareViz(viz_id, url) {
    var containerDiv = document.getElementById(viz_id);
    var options = {
        hideTabs: true,
        hideToolbar: false,
        onFirstInteractive: function(d) {
            console.log("Viz is now interactive");
        }
    }
    var new_viz = new tableau.Viz(containerDiv, url, options);
    return new_viz;
}
function initViz() {
    viz = declareViz("vizContainer", "http://public.tableau.com/views/RegionalSampleWorkbook/College");
}