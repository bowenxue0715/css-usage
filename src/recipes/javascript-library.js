/* 
    RECIPE: JS LIBRARY
    -------------------------------------------------------------
    Author: Bowen Xue
    Description: This recipe looks for JS libraries used in a list of MS websites.
        ex, <script src="url">
*/

void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push( function JSLibrary( element, results) {
        if(element.nodeName == 'SCRIPT') {
            var srcValue = element.getAttribute('src');
            if (srcValue != null && srcValue !== undefined && srcValue != "")
            {
                results[srcValue] = results[srcValue] || { count: 0 };
                results[srcValue].count++;
            }
        }
        return results;
    });
}();

