console.log('SPART custom script - v1.6');

function labeltoPlaceholder(sel) {

    var inputs = document.querySelectorAll(sel);

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var labelElement = input.closest('.smartcapture-controls').children[0].querySelector('label');
        if(labelElement) {
            var label = labelElement.textContent;
            label = label.replace(' *', '');
            input.setAttribute('placeholder', label);
            labelElement.style.display = 'none';
        }
    
    }

};

labeltoPlaceholder('input[type="text"]');
labeltoPlaceholder('input[type="email"]');

function removeNativeCss(){
    var nativeCss = document.querySelector('link#smartcapture-stylesheet');
    if(nativeCss) {
        nativeCss.remove();
    }
};

window.addEventListener("load", (event) => {
    removeNativeCss();
});


(function(){
    var forms = document.querySelectorAll('form[id*="smartcapture"]');
    
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function() {
            dataLayer.push({
                'event': 'salesforce_submit'
            });
        });
    }
})();
