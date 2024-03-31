//Inject Blockly
var options = {
    plugins: {
        'blockDragger': MultiselectBlockDragger // Required to work
    },
    useDoubleClick: false,
    bumpNeighbours: false,
    multiFieldUpdate: true,
    multiselectIcon: {
      hideIcon: false,
      weight: 3,
      enabledIcon: 'resources/multiselect on.svg',
      disabledIcon: 'resources/multiselect off.svg',
    },
    multiselectCopyPaste: {
      crossTab: true,
      menu: true,
    },
    zoom:
        {controls: true,
            wheel: true,
            startScale: 0.8,
            maxScale: 1.5,
            minScale: 0.5,
            scaleSpeed: 1.1,
            pinch: true},
    grid:
        {spacing: 30,
            length: 2,
            colour: '#5c5c5c',
            snap: true},
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos',
    theme: 'dark'
}

var workspace = Blockly.inject('blocklyDiv', options);
const multiselectPlugin = new Multiselect(workspace);
multiselectPlugin.init(options);

//Inject Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' }});
require(["vs/editor/editor.main"], () => {
  monaco.editor.create(document.getElementById('monacoEditor'), {
    value: ``,
    language: 'javascript',
    theme: 'vs-dark',
    readOnly: true
  });
});
setTimeout(function(){changeEditor()},500);
setTimeout(function(){changeEditor()}, 600);

//Inform user about security threats
console.clear();
console.log("%cStop!", "color: red; font-size: 30px; font-weight: bold");
console.log("Don't paste any code here you don't understand, as it might be an attempt to hack your accounts.\nIf you know what you're doing, this console can be used for debugging and testing code.");

//Make <body> visible
setTimeout(function(){jQuery('body').css('opacity', '1');},1000);

//Special Functions
window.onbeforeunload = function()
{
    return "...";
}
function getCode() {
    return Blockly.JavaScript.workspaceToCode(workspace);
}
function runCodeWithConsole() {
    var result = eval(getCode());
    if (($("#console").html().match(/\<br\>/g) || []).length > 23) { $("#console").html(""); }
    if (result != undefined) { $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span>" + result + "<br>"); console.push(result);}
}

var console_open = true;
function changeConsole() {
    console_open = !console_open;
    if (console_open){
        $("#canvasContainer").attr("hidden", true);
        $('#console').removeAttr('hidden');
    }
    else{
        $("#console").attr("hidden", true);
        $('#canvasContainer').removeAttr('hidden');
    }
}

var blockly_open = true;
function changeEditor() {
    blockly_open = !blockly_open;
    if (blockly_open){
        $("#monacoEditor").attr("hidden", true);
        $('#blocklyDiv').removeAttr('hidden');
        $("#editorChanger").html("JavaScript");
    }
    else{
        $("#blocklyDiv").attr("hidden", true);
        $('#monacoEditor').removeAttr('hidden');
        $("#editorChanger").html("Blocks");
        monaco.editor.getModels()[0].setValue((getCode()).substring(0, getCode().length - 1));
    }
}

function downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
function downloadDataURL(filename, dataurl) {
    var element = document.createElement('a');
    element.setAttribute('href', dataurl);
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
function handle_file_select( evt ) {
    //console.log( "[Event] file chooser" );

    let fl_files = evt.target.files; // JS FileList object

    // use the 1st file from the list
    let fl_file = fl_files[0];

    let reader = new FileReader(); // built in API

    let display_file = ( e ) => { // set the contents of the <textarea>
        //console.log( '. . got: ', e.target.result.length, e );
        loadedJson = JSON.parse(e.target.result);
        Blockly.serialization.workspaces.load(loadedJson, Blockly.getMainWorkspace());
        };

    let on_reader_load = ( fl ) => {
        //console.log( '. file reader load', fl );
        return display_file; // a function
        };

    // Closure to capture the file information.
    reader.onload = on_reader_load( fl_file );

    // Read the file as text.
    reader.readAsText( fl_file );
}
document.getElementById('actual-btn').addEventListener('change', handle_file_select, false);



function myBrowser() {
    try {
        let has = (input) => navigator.userAgent.includes(input);
        if (has("Firefox")) return "Firefox";
        if (has("SamsungBrowser")) return "Samsung Internet";
        if ((has("Opera") || has("OPR")) && has("GX")) return "Opera GX";
        if (has("Opera") || has("OPR")) return "Opera";
        if (has("Trident")) return "Internet Explorer";
        if (has("Edge")) return "Edge Legacy";
        if (has("Edg")) return "Edge";
        if (has("YaBrowser") || has("YaSearchBrowser")) return "Yandex";
        if (has("Miui")) return "Mi Browser";
        if (has("UBrowser")) return "Uc Browser";
        if (has("Chrome")) return "Chrome";
        if (has("Safari")) return "Safari";
        return "not detected";
    } catch (err) {
        return "not detected";
    }
}
function myPageInfo(type) {
    if (type == "title"){
        return document.title;
    }
    else if (type == "URL"){
        return window.location.href;
    }
    else if (type == "domain name"){
        return window.location.hostname;
    }
    else if (type == "path"){
        return window.location.pathname;
    }
    else if (type == "protocol"){
        return window.location.protocol;
    }
}
function setPageInfo(type, value) {
    if (type == "title"){
        document.title = value;
    }
    else if (type == "URL"){
        window.location.href = value;
    }
    else if (type == "domain name"){
        window.location.hostname = value;
    }
    else if (type == "path"){
        window.location.pathname = value;
    }
    else if (type == "protocol"){
        window.location.protocol = value;
    }
}
var newWindow;
function openNewWindow(type, input, width, height, left, top) {
    if (type == "URL"){
      window.open(input, "", `width=${width},height=${height},left=${left},top=${top}`);
    }
    if (type == "HTML"){
      newWindow = window.open("", "", `width=${width},height=${height},left=${left},top=${top}`);
      newWindow.document.write(input);
    }
}
function playSound(source) {
    var audio = new Audio(source);
    audio.play();
}
function searchRequestUrl(request, name) {
    if (name == "Google"){
        return "https://www.google.com/search?q=" + request;
    }
    else if (name == "Bing"){
        return "https://www.bing.com/search?q=" + request;
    }
    else if (name == "Yahoo"){
        return "https://search.yahoo.com/search?p=" + request;
    }
    else if (name == "Yandex"){
        return "https://yandex.com/search/?text=" + request;
    }
    else if (name == "DuckDuckGo"){
        return "https://duckduckgo.com/?t=h_&q=" + request;
    }
}

function getPitch(pitch) {
    if (pitch == 0) {return "C3"}
    else if (pitch == 1) {return "D3"}
    else if (pitch == 2) {return "E3"}
    else if (pitch == 3) {return "F3"}
    else if (pitch == 4) {return "G3"}
    else if (pitch == 5) {return "A3"}
    else if (pitch == 6) {return "B3"}
    else if (pitch == 7) {return "C4"}
    else if (pitch == 8) {return "D4"}
    else if (pitch == 9) {return "E4"}
    else if (pitch == 10) {return "F4"}
    else if (pitch == 11) {return "G4"}
    else if (pitch == 12) {return "A4"}
}

var console = [];

function clearConsole(){
    $("#console").html("");
    console = [];
}

function writeConsole(input){
    $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span>" + input + "<br>");
    console.push(input);
}

function colorwriteConsole(input, color){
    $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: " + color + "'>" + input + "<br>");
    console.push(input);
}

function forceDeleteTimers(){
    //This function may sometimes clear timers that you don't want to clear!
    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
}

const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

var canvas_position;
window.addEventListener("mousemove", (e) => {
    var rect = canvas.getBoundingClientRect();
    canvas_position = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
    };
})

var canvas_mouse = false;
canvas.onmousedown = function() { 
    canvas_mouse = true;
}
canvas.onmouseup = function() {
    canvas_mouse = false;
}