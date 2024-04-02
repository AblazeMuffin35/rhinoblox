Blockly.Blocks['logic_null_test'] = {
    init: function() {
      this.appendValueInput("ONE")
          .setCheck(null);
      this.appendValueInput("TWO")
          .setCheck(null)
          .appendField("??");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(210);
   this.setTooltip("Tests if the first value is null / undefined.");
   this.setHelpUrl("https://en.wikipedia.org/wiki/Null_coalescing_operator#JavaScript");
    }
};
javascript.javascriptGenerator.forBlock['logic_null_test'] = function(block, generator) {
    var value_one = generator.valueToCode(block, 'ONE', javascript.Order.ATOMIC);
    var value_two = generator.valueToCode(block, 'TWO', javascript.Order.ATOMIC);
    var code = `(${value_one} ?? ${value_two})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['logic_undefined'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("undefined");
      this.setOutput(true, null);
      this.setColour(210);
   this.setTooltip("Returns undefined.");
   this.setHelpUrl("https://www.w3schools.com/jsref/jsref_undefined.asp");
    }
};
javascript.javascriptGenerator.forBlock['logic_undefined'] = function(block, generator) {
    var code = 'undefined';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_alert'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .appendField("alert");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_alert'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `window.alert(${value_text});\n`;
    return code;
};
  
Blockly.Blocks['web_confirm'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .appendField("confirm");
      this.setOutput(true, "Boolean");
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_confirm'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `window.confirm(${value_text})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_prompt'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("prompt");
      this.appendValueInput("DEFAULT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("with default");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_prompt'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var value_default = generator.valueToCode(block, 'DEFAULT', javascript.Order.ATOMIC);
    var code = `window.prompt(${value_text}, ${value_default})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("current time");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_time'] = function(block, generator) {
    var code = 'new Date()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_browser'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("my browser");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_browser'] = function(block, generator) {
    var code = 'myBrowser()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_language'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("my preferred language");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_language'] = function(block, generator) {
    var code = 'navigator.language';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_online'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("online");
      this.setOutput(true, "Boolean");
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_online'] = function(block, generator) {
    var code = 'navigator.onLine';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_connectioninfo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("connection")
          .appendField(new Blockly.FieldDropdown([["ECT","effectiveType"], ["RTT","rtt"], ["downlink","downlink"]]), "TYPE");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_connectioninfo'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `eval('navigator.connection.${dropdown_type}')`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_screeninfo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("screen")
          .appendField(new Blockly.FieldDropdown([["width","width"], ["height","height"], ["available width","availWidth"], ["available height","availHeight"]]), "TYPE");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_screeninfo'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `eval('screen.${dropdown_type}')`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_pageinfo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("page")
          .appendField(new Blockly.FieldDropdown([["title","title"], ["URL","URL"], ["domain name","domain name"], ["path","path"], ["protocol","protocol"]]), "TYPE");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_pageinfo'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `myPageInfo("${dropdown_type}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_setpageinfo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set page")
          .appendField(new Blockly.FieldDropdown([["title","title"], ["URL","URL"], ["domain name","domain name"], ["path","path"], ["protocol","protocol"]]), "TYPE");
      this.appendValueInput("VALUE")
          .setCheck(null)
          .appendField("to");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_setpageinfo'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var code = `setPageInfo("${dropdown_type}", ${value_value});\n`;
    return code;
};

Blockly.Blocks['web_opentab'] = {
    init: function() {
      this.appendValueInput("URL")
          .setCheck(null)
          .appendField("open new tab with");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_opentab'] = function(block, generator) {
    var value_url = generator.valueToCode(block, 'URL', javascript.Order.ATOMIC);
    var code = `window.open(${value_url}, "_blank");\n`;
    return code;
};

Blockly.Blocks['web_replacetab'] = {
    init: function() {
      this.appendValueInput("URL")
          .setCheck(null)
          .appendField("replace this tab with");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_replacetab'] = function(block, generator) {
    var value_url = generator.valueToCode(block, 'URL', javascript.Order.ATOMIC);
    var code = `window.open(${value_url}, "_self");\n`;
    return code;
};

Blockly.Blocks['web_reload'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("reload this page");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_reload'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = 'location.reload();\n';
    return code;
};

Blockly.Blocks['web_window'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("open new window with")
          .appendField(new Blockly.FieldDropdown([["URL","URL"], ["HTML","HTML"]]), "TYPE");
      this.appendValueInput("INPUT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
      this.appendValueInput("WIDTH")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("width:");
      this.appendValueInput("HEIGHT")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("height:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_window'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_height = generator.valueToCode(block, 'HEIGHT', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `openNewWindow("${dropdown_type}", ${value_input}, ${value_width}, ${value_height}, ${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['web_windowstatement'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("open new window with HTML")
      this.appendValueInput("INPUT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
      this.appendValueInput("WIDTH")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("width:");
      this.appendValueInput("HEIGHT")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("height:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.appendStatementInput("STATEMENT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("and then close it");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_windowstatement'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_height = generator.valueToCode(block, 'HEIGHT', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var statements_statement = generator.statementToCode(block, 'STATEMENT');
    var code = `openNewWindow("HTML", ${value_input}, ${value_width}, ${value_height}, ${value_x}, ${value_y});\n${statements_statement}newWindow.close();\n`;
    return code;
};

Blockly.Blocks['web_sound'] = {
    init: function() {
      this.appendValueInput("SOUND")
          .setCheck(null)
          .appendField("play sound");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_sound'] = function(block, generator) {
    var value_sound = generator.valueToCode(block, 'SOUND', javascript.Order.ATOMIC);
    var code = `playSound(${value_sound})\n`;
    return code;
};

Blockly.Blocks['web_search'] = {
    init: function() {
      this.appendValueInput("REQUEST")
          .setCheck(null)
          .appendField("search");
      this.appendDummyInput()
          .appendField("in")
          .appendField(new Blockly.FieldDropdown([["Google","Google"], ["Bing","Bing"], ["Yahoo","Yahoo"], ["Yandex","Yandex"], ["DuckDuckGo","DuckDuckGo"]]), "ENGINE");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_search'] = function(block, generator) {
    var value_request = generator.valueToCode(block, 'REQUEST', javascript.Order.ATOMIC);
    var dropdown_engine = block.getFieldValue('ENGINE');
    var code = `searchRequestUrl(${value_request}, "${dropdown_engine}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['site_mainhtml'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("website with title:")
          .appendField(new Blockly.FieldTextInput("Website"), "TITLE");
      this.appendStatementInput("HEAD")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("head:");
      this.appendStatementInput("BODY")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("body:");
      this.setOutput(true, "String");
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_mainhtml'] = function(block, generator) {
    var text_title = block.getFieldValue('TITLE');
    var statements_head = generator.statementToCode(block, 'HEAD');
    var statements_body = generator.statementToCode(block, 'BODY');
    var code = `"<!DOCTYPE html><html lang='en'><!-- This website was made with RhinoBlox. --><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>${text_title}</title>${statements_head}</head><body>${statements_body}</body></html>"`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['site_script'] = {
    init: function() {
      this.appendStatementInput("SCRIPT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("script:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_script'] = function(block, generator) {
    var statements_script = generator.statementToCode(block, 'SCRIPT');
    var code = `<script>${statements_script}</script>`.replace(/\n/g, '');
    return code;
};

Blockly.Blocks['site_style'] = {
    init: function() {
      this.appendStatementInput("STYLE")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("style:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_style'] = function(block, generator) {
    var statements_style = generator.statementToCode(block, 'STYLE');
    var code = `<style>${statements_style}</style>`.replace(/\n/g, '');
    return code;
};

Blockly.Blocks['site_element'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("HTML element:")
          .appendField(new Blockly.FieldDropdown([["a","a"], ["abbr","abbr"], ["address","address"], ["area","area"], ["article","article"], ["aside","aside"], ["audio","audio"], ["b","b"], ["base","base"], ["bdi","bdi"], ["bdo","bdo"], ["blockquote","blockquote"], ["body","body"], ["br","br"], ["button","button"], ["canvas","canvas"], ["caption","caption"], ["cite","cite"], ["code","code"], ["col","col"], ["colgroup","colgroup"], ["data","data"], ["datalist","datalist"], ["dd","dd"], ["del","del"], ["details","details"], ["dfn","dfn"], ["dialog","dialog"], ["div","div"], ["dl","dl"], ["dt","dt"], ["em","em"], ["embed","embed"], ["fieldset","fieldset"], ["figcaption","figcaption"], ["figure","figure"], ["footer","footer"], ["form","form"], ["h1","h1"], ["h2","h2"], ["h3","h3"], ["h4","h4"], ["h5","h5"], ["h6","h6"], ["head","head"], ["header","header"], ["hgroup","hgroup"], ["hr","hr"], ["html","html"], ["i","i"], ["iframe","iframe"], ["img","img"], ["input","input"], ["ins","ins"], ["kbd","kbd"], ["label","label"], ["legend","legend"], ["li","li"], ["link","link"], ["main","main"], ["map","map"], ["mark","mark"], ["menu","menu"], ["meta","meta"], ["meter","meter"], ["nav","nav"], ["noscript","noscript"], ["object","object"], ["ol","ol"], ["optgroup","optgroup"], ["option","option"], ["output","output"], ["p","p"], ["param","param"], ["picture","picture"], ["pre","pre"], ["progress","progress"], ["q","q"], ["rp","rp"], ["rt","rt"], ["ruby","ruby"], ["s","s"], ["samp","samp"], ["script","script"], ["section","section"], ["select","select"], ["small","small"], ["source","source"], ["span","span"], ["strong","strong"], ["style","style"], ["sub","sub"], ["summary","summary"], ["sup","sup"], ["table","table"], ["tbody","tbody"], ["td","td"], ["template","template"], ["textarea","textarea"], ["tfoot","tfoot"], ["th","th"], ["thead","thead"], ["time","time"], ["title","title"], ["tr","tr"], ["track","track"], ["u","u"], ["ul","ul"], ["var","var"], ["video","video"], ["wbr","wbr"]]), "ELEMENT");
      this.appendStatementInput("INNER")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_element'] = function(block, generator) {
    var dropdown_element = block.getFieldValue('ELEMENT');
    var statements_inner = generator.statementToCode(block, 'INNER');
    var code = `<${dropdown_element}>${statements_inner}</${dropdown_element}>`;
    return code;
};

Blockly.Blocks['site_elementproperties'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("HTML element:")
          .appendField(new Blockly.FieldDropdown([["a","a"], ["abbr","abbr"], ["address","address"], ["area","area"], ["article","article"], ["aside","aside"], ["audio","audio"], ["b","b"], ["base","base"], ["bdi","bdi"], ["bdo","bdo"], ["blockquote","blockquote"], ["body","body"], ["br","br"], ["button","button"], ["canvas","canvas"], ["caption","caption"], ["cite","cite"], ["code","code"], ["col","col"], ["colgroup","colgroup"], ["data","data"], ["datalist","datalist"], ["dd","dd"], ["del","del"], ["details","details"], ["dfn","dfn"], ["dialog","dialog"], ["div","div"], ["dl","dl"], ["dt","dt"], ["em","em"], ["embed","embed"], ["fieldset","fieldset"], ["figcaption","figcaption"], ["figure","figure"], ["footer","footer"], ["form","form"], ["h1","h1"], ["h2","h2"], ["h3","h3"], ["h4","h4"], ["h5","h5"], ["h6","h6"], ["head","head"], ["header","header"], ["hgroup","hgroup"], ["hr","hr"], ["html","html"], ["i","i"], ["iframe","iframe"], ["img","img"], ["input","input"], ["ins","ins"], ["kbd","kbd"], ["label","label"], ["legend","legend"], ["li","li"], ["link","link"], ["main","main"], ["map","map"], ["mark","mark"], ["menu","menu"], ["meta","meta"], ["meter","meter"], ["nav","nav"], ["noscript","noscript"], ["object","object"], ["ol","ol"], ["optgroup","optgroup"], ["option","option"], ["output","output"], ["p","p"], ["param","param"], ["picture","picture"], ["pre","pre"], ["progress","progress"], ["q","q"], ["rp","rp"], ["rt","rt"], ["ruby","ruby"], ["s","s"], ["samp","samp"], ["script","script"], ["section","section"], ["select","select"], ["small","small"], ["source","source"], ["span","span"], ["strong","strong"], ["style","style"], ["sub","sub"], ["summary","summary"], ["sup","sup"], ["table","table"], ["tbody","tbody"], ["td","td"], ["template","template"], ["textarea","textarea"], ["tfoot","tfoot"], ["th","th"], ["thead","thead"], ["time","time"], ["title","title"], ["tr","tr"], ["track","track"], ["u","u"], ["ul","ul"], ["var","var"], ["video","video"], ["wbr","wbr"]]), "ELEMENT");
      this.appendDummyInput()
          .appendField("properties:")
          .appendField(new Blockly.FieldTextInput(""), "PROPERTIES");
      this.appendStatementInput("INNER")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_elementproperties'] = function(block, generator) {
    var dropdown_element = block.getFieldValue('ELEMENT');
    var text_properties = block.getFieldValue('PROPERTIES');
    var statements_inner = generator.statementToCode(block, 'INNER');
    var code = `<${dropdown_element} ${text_properties}>${statements_inner}</${dropdown_element}>`;
    return code;
};

Blockly.Blocks['site_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("plain text:")
          .appendField(new Blockly.FieldTextInput(""), "TEXT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_text'] = function(block, generator) {
    var text_text = block.getFieldValue('TEXT');
    var code = text_text;
    return code;
};

Blockly.Blocks['site_break'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("line break");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_break'] = function(block, generator) {
    var code = '<br>';
    return code;
};

Blockly.Blocks['site_selector'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("style properties for")
          .appendField(new Blockly.FieldDropdown([["class","."], ["id","#"], ["element",""]]), "TYPE")
          .appendField(new Blockly.FieldTextInput(""), "NAME");
      this.appendStatementInput("PROPERTIES")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_selector'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var text_name = block.getFieldValue('NAME');
    var statements_properties = generator.statementToCode(block, 'PROPERTIES');
    var code = `${dropdown_type}${text_name}{${statements_properties}}`;
    return code;
};

Blockly.Blocks['types_typeof'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("type of");
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_typeof'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
    var code = `typeof ${value_name}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_tostring'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to string");
      this.setOutput(true, "String");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_tostring'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `String(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_tonumber'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to number");
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_tonumber'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `Number(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_toboolean'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to boolean");
      this.setOutput(true, "Boolean");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_toboolean'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `Boolean(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_strictlyequals'] = {
    init: function() {
      this.appendValueInput("INPUT1")
          .setCheck(null);
      this.appendValueInput("INPUT2")
          .setCheck(null)
          .appendField("===");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_strictlyequals'] = function(block, generator) {
    var value_input1 = generator.valueToCode(block, 'INPUT1', javascript.Order.ATOMIC);
    var value_input2 = generator.valueToCode(block, 'INPUT2', javascript.Order.ATOMIC);
    var code = `${value_input1} === ${value_input2}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['music_pitch_field'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(new FieldPitch('7'), 'PITCH');
      this.setOutput(true, null);
      this.setColour(190);
      this.setTooltip("A musical note.");
      this.setHelpUrl("https://en.wikipedia.org/wiki/Musical_note");
    },
};
javascript.javascriptGenerator.forBlock['music_pitch_field'] = function(block, generator) {
    var pitch = block.getFieldValue('PITCH');
    var code = `getPitch(${pitch})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['music_play'] = {
    init: function() {
      this.appendValueInput("SPEED")
          .setCheck(null)
          .appendField("play");
      this.appendValueInput("PITCH")
          .setCheck(null)
          .appendField("note");
      this.appendDummyInput()
          .appendField("on synth")
          .appendField(new Blockly.FieldTextInput("synth"), "SYNTH");
      this.appendValueInput("TIME")
          .setCheck(null)
          .appendField("after");
      this.appendDummyInput()
          .appendField("seconds");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_play'] = function(block, generator) {
    var value_speed = generator.valueToCode(block, 'SPEED', javascript.Order.ATOMIC);
    var value_pitch = generator.valueToCode(block, 'PITCH', javascript.Order.ATOMIC);
    var text_synth = block.getFieldValue('SYNTH');
    var value_time = generator.valueToCode(block, 'TIME', javascript.Order.ATOMIC);
    var code = `${text_synth}.triggerAttackRelease(${value_pitch}, "${value_speed}n", now + ${value_time});\n`;
    return code;
};

Blockly.Blocks['music_create_synth'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create")
          .appendField(new Blockly.FieldDropdown([["synth","Synth"], ["poly-synth","PolySynth"], ["mono-synth","MonoSynth"], ["duo-synth","DuoSynth"], ["FM synth","FMSynth"], ["AM synth","AMSynth"], ["metal synth","MetalSynth"], ["membrane synth","MembraneSynth"]]), "TYPE")
          .appendField(new Blockly.FieldTextInput("synth"), "SYNTH");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_create_synth'] = function(block, generator) {
    var text_synth = block.getFieldValue('SYNTH');
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `const ${text_synth} = new Tone.${dropdown_type}().toDestination();\nvar now = Tone.now();\n`;
    return code;
};

Blockly.Blocks['music_create_synth_extended'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create")
          .appendField(new Blockly.FieldDropdown([["sine","sine"], ["square","square"], ["triangle","triangle"], ["sawtooth","sawtooth"]]), "OSCILLATOR")
          .appendField(new Blockly.FieldDropdown([["synth","Synth"], ["mono-synth","MonoSynth"], ["FM synth","FMSynth"], ["AM synth","AMSynth"], ["metal synth","MetalSynth"], ["membrane synth","MembraneSynth"]]), "TYPE")
          .appendField(new Blockly.FieldTextInput("synth"), "SYNTH");
      this.appendValueInput("VOLUME")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("volume:");
      this.appendValueInput("A")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("attack:");
      this.appendValueInput("D")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("decay:");
      this.appendValueInput("S")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("sustain:");
      this.appendValueInput("R")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("release:");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_create_synth_extended'] = function(block, generator) {
    var dropdown_oscillator = block.getFieldValue('OSCILLATOR');
    var dropdown_type = block.getFieldValue('TYPE');
    var text_synth = block.getFieldValue('SYNTH');
    var value_volume = generator.valueToCode(block, 'VOLUME', javascript.Order.ATOMIC);
    var value_a = generator.valueToCode(block, 'A', javascript.Order.ATOMIC);
    var value_d = generator.valueToCode(block, 'D', javascript.Order.ATOMIC);
    var value_s = generator.valueToCode(block, 'S', javascript.Order.ATOMIC);
    var value_r = generator.valueToCode(block, 'R', javascript.Order.ATOMIC);
    var code = `const ${text_synth} = new Tone.${dropdown_type}({volume: ${value_volume}, oscillator:{type:'${dropdown_oscillator}'}, envelope:{attack: ${value_a}, decay: ${value_d}, sustain: ${value_s}, release: ${value_r}}}).toDestination();\nvar now = Tone.now();\n`;
    return code;
};

Blockly.Blocks['music_transpose'] = {
    init: function() {
      this.appendValueInput("PITCH")
          .setCheck(null)
          .appendField("transpose");
      this.appendValueInput("SEMITONES")
          .setCheck("Number")
          .appendField("by");
      this.appendDummyInput()
          .appendField("semitones");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(190);
   this.setTooltip("Transposes a note by a number of semitones.");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_transpose'] = function(block, generator) {
    var value_pitch = generator.valueToCode(block, 'PITCH', javascript.Order.ATOMIC);
    var value_semitones = generator.valueToCode(block, 'SEMITONES', javascript.Order.ATOMIC);
    var code = `Tone.Frequency(Tone.Midi(${value_pitch}).transpose(${value_semitones}), "midi").toNote()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['objects_object'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("resources/{ char.png", 8, 20, { alt: "{", flipRtl: "TRUE" }))
          .appendField(new Blockly.FieldTextInput(""), "OBJECT")
          .appendField(new Blockly.FieldImage("resources/} char.png", 8, 20, { alt: "}", flipRtl: "TRUE" }));
      this.setOutput(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['objects_object'] = function(block, generator) {
    var text_object = block.getFieldValue('OBJECT');
    var code = `{${text_object}}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['music_create_custom_synth'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create ")
          .appendField(new Blockly.FieldDropdown([["synth","Synth"], ["poly-synth","PolySynth"], ["mono-synth","MonoSynth"], ["duo-synth","DuoSynth"], ["FM synth","FMSynth"], ["AM synth","AMSynth"], ["metal synth","MetalSynth"], ["membrane synth","MembraneSynth"]]), "NAME")
          .appendField(new Blockly.FieldTextInput("synth"), "SYNTH");
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("with");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_create_custom_synth'] = function(block, generator) {
    var dropdown_name = block.getFieldValue('NAME');
    var text_synth = block.getFieldValue('SYNTH');
    var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
    var code = `const ${text_synth} = new Tone.${dropdown_name}(${value_name}).toDestination();\nvar now = Tone.now();\n`;
    return code;
};

Blockly.Blocks['test_try'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("try");
      this.appendStatementInput("TRY")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("catch")
          .appendField(new Blockly.FieldVariable("error"), "ERROR");
      this.appendStatementInput("CATCH")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_try'] = function(block, generator) {
    var statements_try = generator.statementToCode(block, 'TRY');
    var variable_error = generator.nameDB_.getName(block.getFieldValue('ERROR'), Blockly.Variables.NAME_TYPE);
    var statements_catch = generator.statementToCode(block, 'CATCH');
    var code = `try{\n${statements_try}}\ncatch(error){\n${statements_catch}}\n`;
    return code;
};

Blockly.Blocks['test_inline_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("inline function");
      this.appendStatementInput("FUNCTION")
          .setCheck(null);
      this.appendValueInput("RETURN")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("return");
      this.setOutput(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_inline_function'] = function(block, generator) {
    var statements_function = generator.statementToCode(block, 'FUNCTION');
    var value_return = generator.valueToCode(block, 'RETURN', javascript.Order.ATOMIC);
    var code = `(function(){\n${statements_function}return ${value_return}})\n()\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['test_clear'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("clear console");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_clear'] = function(block, generator) {
    var code = 'clearConsole();\n';
    return code;
};

Blockly.Blocks['test_write'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("write");
      this.appendDummyInput()
          .appendField("on console");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_write'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `writeConsole(${value_input});\n`;
    return code;
};

Blockly.Blocks['test_colorwrite'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("write");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .appendField("on console with color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_colorwrite'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var code = `colorwriteConsole(${value_input}, ${value_color});\n`;
    return code;
};

Blockly.Blocks['test_getconsole'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("get console");
      this.setOutput(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_getconsole'] = function(block, generator) {
    var code = 'console';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['site_property'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set property")
          .appendField(new Blockly.FieldDropdown([["align-content","align-content"], ["align-items","align-items"], ["align-self","align-self"], ["all","all"], ["animation","animation"], ["animation-delay","animation-delay"], ["animation-direction","animation-direction"], ["animation-duration","animation-duration"], ["animation-fill-mode","animation-fill-mode"], ["animation-iteration-count","animation-iteration-count"], ["animation-name","animation-name"], ["animation-play-state","animation-play-state"], ["animation-timing-function","animation-timing-function"], ["backdrop-filter","backdrop-filter"], ["backface-visibility","backface-visibility"], ["background","background"], ["background-attachment","background-attachment"], ["background-blend-mode","background-blend-mode"], ["background-clip","background-clip"], ["background-color","background-color"], ["background-image","background-image"], ["background-origin","background-origin"], ["background-position","background-position"], ["background-repeat","background-repeat"], ["background-size","background-size"], ["block-size","block-size"], ["border","border"], ["border-block","border-block"], ["border-block-color","border-block-color"], ["border-block-end","border-block-end"], ["border-block-end-color","border-block-end-color"], ["border-block-end-style","border-block-end-style"], ["border-block-end-width","border-block-end-width"], ["border-block-start","border-block-start"], ["border-block-start-color","border-block-start-color"], ["border-block-start-style","border-block-start-style"], ["border-block-start-width","border-block-start-width"], ["border-block-style","border-block-style"], ["border-block-width","border-block-width"], ["border-bottom","border-bottom"], ["border-bottom-color","border-bottom-color"], ["border-bottom-left-radius","border-bottom-left-radius"], ["border-bottom-right-radius","border-bottom-right-radius"], ["border-bottom-style","border-bottom-style"], ["border-bottom-width","border-bottom-width"], ["border-collapse","border-collapse"], ["border-color","border-color"], ["border-end-end-radius","border-end-end-radius"], ["border-end-start-radius","border-end-start-radius"], ["border-image","border-image"], ["border-image-outset","border-image-outset"], ["border-image-repeat","border-image-repeat"], ["border-image-slice","border-image-slice"], ["border-image-source","border-image-source"], ["border-image-width","border-image-width"], ["border-inline","border-inline"], ["border-inline-color","border-inline-color"], ["border-inline-end","border-inline-end"], ["border-inline-end-color","border-inline-end-color"], ["border-inline-end-style","border-inline-end-style"], ["border-inline-end-width","border-inline-end-width"], ["border-inline-start","border-inline-start"], ["border-inline-start-color","border-inline-start-color"], ["border-inline-start-style","border-inline-start-style"], ["border-inline-start-width","border-inline-start-width"], ["border-inline-style","border-inline-style"], ["border-inline-width","border-inline-width"], ["border-left","border-left"], ["border-left-color","border-left-color"], ["border-left-style","border-left-style"], ["border-left-width","border-left-width"], ["border-radius","border-radius"], ["border-right","border-right"], ["border-right-color","border-right-color"], ["border-right-style","border-right-style"], ["border-right-width","border-right-width"], ["border-spacing","border-spacing"], ["border-start-end-radius","border-start-end-radius"], ["border-start-start-radius","border-start-start-radius"], ["border-style","border-style"], ["border-top","border-top"], ["border-top-color","border-top-color"], ["border-top-left-radius","border-top-left-radius"], ["border-top-right-radius","border-top-right-radius"], ["border-top-style","border-top-style"], ["border-top-width","border-top-width"], ["border-width","border-width"], ["bottom","bottom"], ["box-decoration-break","box-decoration-break"], ["box-shadow","box-shadow"], ["box-sizing","box-sizing"], ["break-after","break-after"], ["break-before","break-before"], ["break-inside","break-inside"], ["caption-side","caption-side"], ["caret-color","caret-color"], ["@charset","@charset"], ["clear","clear"], ["clip","clip"], ["clip-path","clip-path"], ["color","color"], ["column-count","column-count"], ["column-fill","column-fill"], ["column-gap","column-gap"], ["column-rule","column-rule"], ["column-rule-color","column-rule-color"], ["column-rule-style","column-rule-style"], ["column-rule-width","column-rule-width"], ["column-span","column-span"], ["column-width","column-width"], ["columns","columns"], ["content","content"], ["counter-increment","counter-increment"], ["counter-reset","counter-reset"], ["cursor","cursor"], ["direction","direction"], ["display","display"], ["empty-cells","empty-cells"], ["filter","filter"], ["flex","flex"], ["flex-basis","flex-basis"], ["flex-direction","flex-direction"], ["flex-flow","flex-flow"], ["flex-grow","flex-grow"], ["flex-shrink","flex-shrink"], ["flex-wrap","flex-wrap"], ["float","float"], ["font","font"], ["font-family","font-family"], ["font-feature-settings","font-feature-settings"], ["font-kerning","font-kerning"], ["font-language-override","font-language-override"], ["font-optical-sizing","font-optical-sizing"], ["font-size","font-size"], ["font-size-adjust","font-size-adjust"], ["font-stretch","font-stretch"], ["font-style","font-style"], ["font-synthesis","font-synthesis"], ["font-variant","font-variant"], ["font-variant-caps","font-variant-caps"], ["font-variant-east-asian","font-variant-east-asian"], ["font-variant-ligatures","font-variant-ligatures"], ["font-variant-numeric","font-variant-numeric"], ["font-variant-position","font-variant-position"], ["font-variation-settings","font-variation-settings"], ["font-weight","font-weight"], ["gap","gap"], ["grid","grid"], ["grid-area","grid-area"], ["grid-auto-columns","grid-auto-columns"], ["grid-auto-flow","grid-auto-flow"], ["grid-auto-rows","grid-auto-rows"], ["grid-column","grid-column"], ["grid-column-end","grid-column-end"], ["grid-column-gap","grid-column-gap"], ["grid-column-start","grid-column-start"], ["grid-gap","grid-gap"], ["grid-row","grid-row"], ["grid-row-end","grid-row-end"], ["grid-row-gap","grid-row-gap"], ["grid-row-start","grid-row-start"], ["grid-template","grid-template"], ["grid-template-areas","grid-template-areas"], ["grid-template-columns","grid-template-columns"], ["grid-template-rows","grid-template-rows"], ["hanging-punctuation","hanging-punctuation"], ["height","height"], ["hyphens","hyphens"], ["image-orientation","image-orientation"], ["image-rendering","image-rendering"], ["inline-size","inline-size"], ["inset","inset"], ["inset-block","inset-block"], ["inset-block-end","inset-block-end"], ["inset-block-start","inset-block-start"], ["inset-inline","inset-inline"], ["inset-inline-end","inset-inline-end"], ["inset-inline-start","inset-inline-start"], ["isolation","isolation"], ["justify-content","justify-content"], ["justify-items","justify-items"], ["justify-self","justify-self"], ["left","left"], ["letter-spacing","letter-spacing"], ["line-break","line-break"], ["line-height","line-height"], ["list-style","list-style"], ["list-style-image","list-style-image"], ["list-style-position","list-style-position"], ["list-style-type","list-style-type"], ["margin","margin"], ["margin-block","margin-block"], ["margin-block-end","margin-block-end"], ["margin-block-start","margin-block-start"], ["margin-bottom","margin-bottom"], ["margin-inline","margin-inline"], ["margin-inline-end","margin-inline-end"], ["margin-inline-start","margin-inline-start"], ["margin-left","margin-left"], ["margin-right","margin-right"], ["margin-top","margin-top"], ["mask","mask"], ["mask-border","mask-border"], ["mask-border-mode","mask-border-mode"], ["mask-border-outset","mask-border-outset"], ["mask-border-repeat","mask-border-repeat"], ["mask-border-slice","mask-border-slice"], ["mask-border-source","mask-border-source"], ["mask-border-width","mask-border-width"], ["mask-clip","mask-clip"], ["mask-composite","mask-composite"], ["mask-image","mask-image"], ["mask-mode","mask-mode"], ["mask-origin","mask-origin"], ["mask-position","mask-position"], ["mask-repeat","mask-repeat"], ["mask-size","mask-size"], ["mask-type","mask-type"], ["max-block-size","max-block-size"], ["max-height","max-height"], ["max-inline-size","max-inline-size"], ["max-width","max-width"],["min-block-size","min-block-size"], ["min-height","min-height"], ["min-inline-size","min-inline-size"], ["min-width","min-width"], ["mix-blend-mode","mix-blend-mode"], ["object-fit","object-fit"], ["object-position","object-position"], ["offset","offset"], ["offset-anchor","offset-anchor"], ["offset-block","offset-block"], ["offset-block-end","offset-block-end"], ["offset-block-start","offset-block-start"], ["offset-inline","offset-inline"], ["offset-inline-end","offset-inline-end"], ["offset-inline-start","offset-inline-start"], ["offset-path","offset-path"], ["offset-position","offset-position"], ["opacity","opacity"], ["order","order"], ["orphans","orphans"], ["outline","outline"], ["outline-color","outline-color"], ["outline-offset","outline-offset"], ["outline-style","outline-style"], ["outline-width","outline-width"], ["overflow","overflow"], ["overflow-anchor","overflow-anchor"], ["overflow-block","overflow-block"], ["overflow-inline","overflow-inline"], ["overflow-wrap","overflow-wrap"], ["overflow-x","overflow-x"], ["overflow-y","overflow-y"], ["overscroll-behavior","overscroll-behavior"], ["overscroll-behavior-block","overscroll-behavior-block"], ["overscroll-behavior-inline","overscroll-behavior-inline"], ["overscroll-behavior-x","overscroll-behavior-x"], ["overscroll-behavior-y","overscroll-behavior-y"], ["padding","padding"], ["padding-block","padding-block"], ["padding-block-end","padding-block-end"], ["padding-block-start","padding-block-start"], ["padding-bottom","padding-bottom"], ["padding-inline","padding-inline"], ["padding-inline-end","padding-inline-end"], ["padding-inline-start","padding-inline-start"], ["padding-left","padding-left"], ["padding-right","padding-right"], ["padding-top","padding-top"], ["page-break-after","page-break-after"], ["page-break-before","page-break-before"], ["page-break-inside","page-break-inside"], ["perspective","perspective"], ["perspective-origin","perspective-origin"], ["place-content","place-content"], ["place-items","place-items"], ["place-self","place-self"], ["pointer-events","pointer-events"], ["position","position"], ["quotes","quotes"], ["resize","resize"], ["right","right"], ["rotate","rotate"], ["row-gap","row-gap"], ["ruby-align","ruby-align"], ["ruby-merge","ruby-merge"], ["ruby-position","ruby-position"], ["scale","scale"], ["scroll-behavior","scroll-behavior"], ["scroll-margin","scroll-margin"], ["scroll-margin-block","scroll-margin-block"], ["scroll-margin-block-end","scroll-margin-block-end"], ["scroll-margin-block-start","scroll-margin-block-start"], ["scroll-margin-bottom","scroll-margin-bottom"], ["scroll-margin-inline","scroll-margin-inline"], ["scroll-margin-inline-end","scroll-margin-inline-end"], ["scroll-margin-inline-start","scroll-margin-inline-start"], ["scroll-margin-left","scroll-margin-left"], ["scroll-margin-right","scroll-margin-right"], ["scroll-margin-top","scroll-margin-top"], ["scroll-padding","scroll-padding"], ["scroll-padding-block","scroll-padding-block"], ["scroll-padding-block-end","scroll-padding-block-end"], ["scroll-padding-block-start","scroll-padding-block-start"], ["scroll-padding-bottom","scroll-padding-bottom"], ["scroll-padding-inline","scroll-padding-inline"], ["scroll-padding-inline-end","scroll-padding-inline-end"], ["scroll-padding-inline-start","scroll-padding-inline-start"], ["scroll-padding-left","scroll-padding-left"], ["scroll-padding-right","scroll-padding-right"], ["scroll-padding-top","scroll-padding-top"], ["scroll-snap-align","scroll-snap-align"], ["scroll-snap-stop","scroll-snap-stop"], ["scroll-snap-type","scroll-snap-type"], ["scrollbar-color","scrollbar-color"], ["scrollbar-width","scrollbar-width"], ["shape-image-threshold","shape-image-threshold"], ["shape-margin","shape-margin"], ["shape-outside","shape-outside"], ["tab-size","tab-size"], ["table-layout","table-layout"], ["text-align","text-align"], ["text-align-last","text-align-last"], ["text-combine-upright","text-combine-upright"], ["text-decoration","text-decoration"], ["text-decoration-color","text-decoration-color"], ["text-decoration-line","text-decoration-line"], ["text-decoration-skip-ink","text-decoration-skip-ink"], ["text-decoration-style","text-decoration-style"], ["text-emphasis","text-emphasis"], ["text-emphasis-color","text-emphasis-color"], ["text-emphasis-position","text-emphasis-position"], ["text-emphasis-style","text-emphasis-style"], ["text-indent","text-indent"], ["text-justify","text-justify"], ["text-orientation","text-orientation"], ["text-overflow","text-overflow"], ["text-rendering","text-rendering"], ["text-shadow","text-shadow"], ["text-transform","text-transform"], ["text-underline-offset","text-underline-offset"], ["text-underline-position","text-underline-position"], ["top","top"], ["transform","transform"], ["transform-box","transform-box"], ["transform-origin","transform-origin"], ["transform-style","transform-style"], ["transition","transition"], ["transition-delay","transition-delay"], ["transition-duration","transition-duration"], ["transition-property","transition-property"], ["transition-timing-function","transition-timing-function"], ["translate","translate"], ["unicode-bidi","unicode-bidi"], ["user-select","user-select"], ["vertical-align","vertical-align"], ["visibility","visibility"], ["white-space","white-space"], ["widows","widows"], ["width","width"], ["will-change","will-change"], ["word-break","word-break"], ["word-spacing","word-spacing"], ["word-wrap","word-wrap"], ["writing-mode","writing-mode"], ["z-index","z-index"]]), "TYPE")
          .appendField("to")
          .appendField(new Blockly.FieldTextInput(""), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_property'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var text_value = block.getFieldValue('VALUE');
    var code = `${dropdown_type}: ${text_value};`;
    return code;
};

Blockly.Blocks['canvas_clear'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("clear canvas");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_clear'] = function(block, generator) {
    var code = 'clearCanvas();\n';
    return code;
};

Blockly.Blocks['canvas_draw_fillrect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw filled rectangle");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("X1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start x:");
      this.appendValueInput("Y1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start y:");
      this.appendValueInput("X2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end x:");
      this.appendValueInput("Y2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_draw_fillrect'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_x1 = generator.valueToCode(block, 'X1', javascript.Order.ATOMIC);
    var value_y1 = generator.valueToCode(block, 'Y1', javascript.Order.ATOMIC);
    var value_x2 = generator.valueToCode(block, 'X2', javascript.Order.ATOMIC);
    var value_y2 = generator.valueToCode(block, 'Y2', javascript.Order.ATOMIC);
    var code = `context.fillStyle = ${value_color};\ncontext.fillRect(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
    return code;
};

Blockly.Blocks['canvas_draw_strokerect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw stroke rectangle");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("WIDTH")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("line width:");
      this.appendValueInput("X1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start x:");
      this.appendValueInput("Y1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start y:");
      this.appendValueInput("X2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end x:");
      this.appendValueInput("Y2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_draw_strokerect'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_x1 = generator.valueToCode(block, 'X1', javascript.Order.ATOMIC);
    var value_y1 = generator.valueToCode(block, 'Y1', javascript.Order.ATOMIC);
    var value_x2 = generator.valueToCode(block, 'X2', javascript.Order.ATOMIC);
    var value_y2 = generator.valueToCode(block, 'Y2', javascript.Order.ATOMIC);
    var code = `context.strokeStyle = ${value_color};\ncontext.lineWidth = ${value_width};\ncontext.strokeRect(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
    return code;
};

Blockly.Blocks['canvas_draw_clearrect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw clear rectangle");
      this.appendValueInput("X1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start x:");
      this.appendValueInput("Y1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start y:");
      this.appendValueInput("X2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end x:");
      this.appendValueInput("Y2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_draw_clearrect'] = function(block, generator) {
    var value_x1 = generator.valueToCode(block, 'X1', javascript.Order.ATOMIC);
    var value_y1 = generator.valueToCode(block, 'Y1', javascript.Order.ATOMIC);
    var value_x2 = generator.valueToCode(block, 'X2', javascript.Order.ATOMIC);
    var value_y2 = generator.valueToCode(block, 'Y2', javascript.Order.ATOMIC);
    var code = `context.clearRect(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
    return code;
};

Blockly.Blocks['loops_interval'] = {
    init: function() {
      this.appendValueInput("TIME")
          .setCheck(null)
          .appendField("create interval")
          .appendField(new Blockly.FieldTextInput("interval"), "NAME")
          .appendField("for");
      this.appendDummyInput()
          .appendField("milliseconds");
      this.appendStatementInput("FUNCTION")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['loops_interval'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var value_time = generator.valueToCode(block, 'TIME', javascript.Order.ATOMIC);
    var statements_function = generator.statementToCode(block, 'FUNCTION');
    var code = `const ${text_name} = setInterval(function(){${statements_function}}, ${value_time});\n`;
    return code;
};

Blockly.Blocks['loops_stop_interval'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("stop interval")
          .appendField(new Blockly.FieldTextInput("interval"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['loops_stop_interval'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var code = `clearInterval(${text_name});\n`;
    return code;
};

Blockly.Blocks['loops_timeout'] = {
    init: function() {
      this.appendValueInput("TIME")
          .setCheck(null)
          .appendField("create timeout")
          .appendField(new Blockly.FieldTextInput("timeout"), "NAME")
          .appendField("for");
      this.appendDummyInput()
          .appendField("milliseconds");
      this.appendStatementInput("FUNCTION")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['loops_timeout'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var value_time = generator.valueToCode(block, 'TIME', javascript.Order.ATOMIC);
    var statements_function = generator.statementToCode(block, 'FUNCTION');
    var code = `const ${text_name} = setTimeout(function(){${statements_function}}, ${value_time});\n`;
    return code;
};

Blockly.Blocks['loops_stop_timeout'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("stop timeout")
          .appendField(new Blockly.FieldTextInput("timeout"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['loops_stop_timeout'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var code = `clearTimeout(${text_name});\n`;
    return code;
};

Blockly.Blocks['canvas_movecontext'] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck(null)
          .appendField("move to x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .appendField("y:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_movecontext'] = function(block, generator) {
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.moveTo(${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['canvas_drawline'] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck(null)
          .appendField("draw line to x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .appendField("y:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_drawline'] = function(block, generator) {
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.lineTo(${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['canvas_drawpath'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw filled path");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendStatementInput("COMMANDS")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("close path")
          .appendField(new Blockly.FieldCheckbox("FALSE"), "CLOSE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_drawpath'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var statements_commands = generator.statementToCode(block, 'COMMANDS');
    var checkbox_close = block.getFieldValue('CLOSE') === 'TRUE';
    if(!checkbox_close){ var code = `context.fillStyle = ${value_color};\ncontext.beginPath();\n${statements_commands}context.fill();\n`; }
    else{ var code = `context.fillStyle = ${value_color};\ncontext.beginPath();\n${statements_commands}context.closePath();\ncontext.fill();\n`; }
    return code;
};

Blockly.Blocks['canvas_drawstrokepath'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw stroke path");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("WIDTH")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("line width:");
      this.appendStatementInput("COMMANDS")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("close path")
          .appendField(new Blockly.FieldCheckbox("FALSE"), "CLOSE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_drawstrokepath'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var statements_commands = generator.statementToCode(block, 'COMMANDS');
    var checkbox_close = block.getFieldValue('CLOSE') === 'TRUE';
    if(!checkbox_close){ var code = `context.lineWidth = ${value_width};\ncontext.strokeStyle = ${value_color};\ncontext.beginPath();\n${statements_commands}context.stroke();\n`; }
    else{ var code = `context.lineWidth = ${value_width};\ncontext.strokeStyle = ${value_color};\ncontext.beginPath();\n${statements_commands}context.closePath();\ncontext.stroke();\n`; }
    return code;
};

Blockly.Blocks['canvas_fillcircle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw filled circle");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("RADIUS")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("radius:");
      this.appendValueInput("X")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_fillcircle'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_radius = generator.valueToCode(block, 'RADIUS', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.fillStyle = ${value_color};\ncontext.beginPath();\ncontext.arc(${value_x},${value_y},${value_radius},0,2*Math.PI);\ncontext.fill();\n`;
    return code;
};

Blockly.Blocks['canvas_strokecircle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw stroke circle");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("WIDTH")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("line width:");
      this.appendValueInput("RADIUS")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("radius:");
      this.appendValueInput("X")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_strokecircle'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_radius = generator.valueToCode(block, 'RADIUS', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.lineWidth = ${value_width};\ncontext.strokeStyle = ${value_color};\ncontext.beginPath();\ncontext.arc(${value_x},${value_y},${value_radius},0,2*Math.PI);\ncontext.stroke();\n`;
    return code;
};

Blockly.Blocks['canvas_changebg'] = {
    init: function() {
      this.appendValueInput("COLOR")
          .setCheck(null)
          .appendField("change background color to");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_changebg'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var code = `$("#canvasContainer").css("background-color",${value_color});\n`;
    return code;
};

Blockly.Blocks['canvas_getbg'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("background color");
      this.setOutput(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_getbg'] = function(block, generator) {
    var code = `rgb2hex($("#canvasContainer").css("background-color"))`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_getmousex'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mouse x");
      this.setOutput(true, "Number");
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_getmousex'] = function(block, generator) {
    var code = `Math.round(canvas_position.x)`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_getmousey'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mouse y");
      this.setOutput(true, "Number");
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_getmousey'] = function(block, generator) {
    var code = `Math.round(canvas_position.y)`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['advanced_addeventlistener'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("add event listener")
          .appendField(new Blockly.FieldDropdown([["abort","abort"], ["animationcancel","animationcancel"], ["animationend","animationend"], ["animationiteration","animationiteration"], ["animationstart","animationstart"], ["auxclick","auxclick"], ["blur","blur"], ["cancel","cancel"], ["canplay","canplay"], ["canplaythrough","canplaythrough"], ["change","change"], ["click","click"], ["close","close"], ["contextmenu","contextmenu"], ["cuechange","cuechange"], ["dblclick","dblclick"], ["drag","drag"], ["dragend","dragend"], ["dragenter","dragenter"], ["dragexit","dragexit"], ["dragleave","dragleave"], ["dragover","dragover"], ["dragstart","dragstart"], ["drop","drop"], ["durationchange","durationchange"], ["emptied","emptied"], ["ended","ended"], ["error","error"], ["focus","focus"], ["focusin","focusin"], ["focusout","focusout"], ["formdata","formdata"], ["gotpointercapture","gotpointercapture"], ["input","input"], ["invalid","invalid"], ["keydown","keydown"], ["keypress","keypress"], ["keyup","keyup"], ["load","load"], ["loadeddata","loadeddata"], ["loadedmetadata","loadedmetadata"], ["loadend","loadend"], ["loadstart","loadstart"], ["lostpointercapture","lostpointercapture"], ["mousedown","mousedown"], ["mouseenter","mouseenter"], ["mouseleave","mouseleave"], ["mousemove","mousemove"], ["mouseout","mouseout"], ["mouseover","mouseover"], ["mouseup","mouseup"], ["pause","pause"], ["play","play"], ["playing","playing"], ["pointercancel","pointercancel"], ["pointerdown","pointerdown"], ["pointerenter","pointerenter"], ["pointerleave","pointerleave"], ["pointermove","pointermove"], ["pointerout","pointerout"], ["pointerover","pointerover"], ["pointerup","pointerup"], ["progress","progress"], ["ratechange","ratechange"], ["reset","reset"], ["resize","resize"], ["scroll","scroll"], ["securitypolicyviolation","securitypolicyviolation"], ["seeked","seeked"], ["seeking","seeking"], ["select","select"], ["selectionchange","selectionchange"], ["selectstart","selectstart"], ["stalled","stalled"], ["submit","submit"], ["suspend","suspend"], ["timeupdate","timeupdate"], ["toggle","toggle"], ["touchcancel","touchcancel"], ["touchend","touchend"], ["touchmove","touchmove"], ["touchstart","touchstart"], ["transitioncancel","transitioncancel"], ["transitionend","transitionend"], ["transitionrun","transitionrun"], ["transitionstart","transitionstart"], ["volumechange","volumechange"], ["waiting","waiting"], ["wheel","wheel"]]), "type")
          .appendField(new Blockly.FieldVariable("event"), "var")
          .appendField("for")
          .appendField(new Blockly.FieldDropdown([["document","document"], ["window","window"]]), "NAME");
      this.appendStatementInput("CODE")
          .setCheck(null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['advanced_addeventlistener'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('type');
    var variable_var = generator.nameDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var dropdown_name = block.getFieldValue('NAME');
    var statements_code = generator.statementToCode(block, 'CODE');
    var code = `${dropdown_name}.addEventListener("${dropdown_type}", (${variable_var}) => {\n${statements_code}});\n`;
    return code;
};

Blockly.Blocks['web_download'] = {
    init: function() {
      this.appendValueInput("DATA")
          .setCheck(null)
          .appendField("download data URL");
      this.appendValueInput("FILE")
          .setCheck("String")
          .appendField("as");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_download'] = function(block, generator) {
    var value_data = generator.valueToCode(block, 'DATA', javascript.Order.ATOMIC);
    var value_file = generator.valueToCode(block, 'FILE', javascript.Order.ATOMIC);
    var code = `downloadDataURL(${value_file}, ${value_data});\n`;
    return code;
};

Blockly.Blocks['canvas_image'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("canvas as data URL");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_image'] = function(block, generator) {
    var code = 'canvas.toDataURL()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_copy'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck("String")
          .appendField("copy");
      this.appendDummyInput()
          .appendField("to clipboard");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_copy'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `navigator.clipboard.writeText(${value_text});\n`;
    return code;
};

Blockly.Blocks['canvas_filltext'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw filled text");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("CONTENT")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("content:");
      this.appendValueInput("FONT")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("font:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_filltext'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_content = generator.valueToCode(block, 'CONTENT', javascript.Order.ATOMIC);
    var value_font = generator.valueToCode(block, 'FONT', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.fillStyle = ${value_color};\ncontext.font = ${value_font};\ncontext.fillText(${value_content},${value_x},${value_y});\n`;
    return code;
};

Blockly.Blocks['canvas_stroketext'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw stroke text");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("WIDTH")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("line width:");
      this.appendValueInput("CONTENT")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("content:");
      this.appendValueInput("FONT")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("font:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_stroketext'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_content = generator.valueToCode(block, 'CONTENT', javascript.Order.ATOMIC);
    var value_font = generator.valueToCode(block, 'FONT', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.lineWidth = ${value_width};\ncontext.strokeStyle = ${value_color};\ncontext.font = ${value_font};\ncontext.strokeText(${value_content},${value_x},${value_y});\n`;
    return code;
};

Blockly.Blocks['advanced_flipdisplay'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("resources/flip display.png", 35, 35, { alt: "", flipRtl: "FALSE" }))
          .appendField("change display");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['advanced_flipdisplay'] = function(block, generator) {
    var code = "changeConsole();\n";
    return code;
};

Blockly.Blocks['canvas_mousedown'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mouse down?");
      this.setOutput(true, "Boolean");
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_mousedown'] = function(block, generator) {
    var code = 'canvas_mouse';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_drawimage'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw image");
      this.appendValueInput("URL")
          .setCheck(null)
          .appendField("URL:");
      this.appendValueInput("X")
          .setCheck(null)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_drawimage'] = function(block, generator) {
    var value_url = generator.valueToCode(block, 'URL', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `var img = new Image;\nimg.src = ${value_url};\ncontext.drawImage(img, ${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['types_dataurl'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to data URL");
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_dataurl'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `('data:text/plain;charset=UTF-8,' + encodeURIComponent(${value_text}))`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_date'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to date");
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_date'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `Date.parse(${value_text})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};