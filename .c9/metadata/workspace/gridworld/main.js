{"filter":false,"title":"main.js","tooltip":"/gridworld/main.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":40,"column":32},"end":{"row":40,"column":33},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":33},"end":{"row":40,"column":34},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":35},"end":{"row":40,"column":36},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":94,"column":38},"end":{"row":95,"column":0},"action":"insert","lines":["",""]},{"start":{"row":95,"column":0},"end":{"row":95,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":12},"end":{"row":95,"column":13},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":13},"end":{"row":95,"column":14},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":14},"end":{"row":95,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":15},"end":{"row":95,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":16},"end":{"row":95,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":17},"end":{"row":95,"column":18},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":18},"end":{"row":95,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":19},"end":{"row":95,"column":20},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":20},"end":{"row":95,"column":21},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":21},"end":{"row":95,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":22},"end":{"row":95,"column":23},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":23},"end":{"row":95,"column":25},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":24},"end":{"row":95,"column":26},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":25},"end":{"row":95,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":26},"end":{"row":95,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":27},"end":{"row":95,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":28},"end":{"row":95,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":29},"end":{"row":95,"column":30},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":32},"end":{"row":95,"column":33},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":0},"end":{"row":101,"column":0},"action":"remove","lines":["        var setupLevel = function () {","            level = game.setLevel(levelNo);","            var xml = '';","            for (var i=0, l=level.blocks.length; i<l; i++) {","                xml += '<block type=\"' + level.blocks[i] + '\"></block>';","            }","            Blockly.updateToolbox('<xml>' + xml + '</xml>');","            Blockly.mainWorkspace.clear();","            Blockly.mainWorkspace.maxBlocks = ('max_blocks' in level ?","                level.max_blocks + 1 : Infinity);","            Blockly.Xml.domToWorkspace(Blockly.mainWorkspace,","                defaultWorkspaceDom);","            ui.setGoal(level.goal);","            ui.toggleButton('gobutton', true);","            ui.toggleButton('nextbutton', false);","            ui.toggleButton('resetbutton', false);","        };","","        var resetLevel = function () {","            console.log('reset');","            level = game.setLevel(levelNo);","            ui.toggleButton('gobutton', true);","            ui.toggleButton('nextbutton', false);","            ui.toggleButton('resetbutton', false);","        };",""]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":8},"end":{"row":76,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":0},"end":{"row":73,"column":0},"action":"insert","lines":["        var setupLevel = function () {","            level = game.setLevel(levelNo);","            var xml = '';","            for (var i=0, l=level.blocks.length; i<l; i++) {","                xml += '<block type=\"' + level.blocks[i] + '\"></block>';","            }","            Blockly.updateToolbox('<xml>' + xml + '</xml>');","            Blockly.mainWorkspace.clear();","            Blockly.mainWorkspace.maxBlocks = ('max_blocks' in level ?","                level.max_blocks + 1 : Infinity);","            Blockly.Xml.domToWorkspace(Blockly.mainWorkspace,","                defaultWorkspaceDom);","            ui.setGoal(level.goal);","            ui.toggleButton('gobutton', true);","            ui.toggleButton('nextbutton', false);","            ui.toggleButton('resetbutton', false);","        };","","        var resetLevel = function () {","            console.log('reset');","            level = game.setLevel(levelNo);","            ui.toggleButton('gobutton', true);","            ui.toggleButton('nextbutton', false);","            ui.toggleButton('resetbutton', false);","        };",""]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"remove","lines":["    "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["    "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"remove","lines":["    "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":4},"action":"remove","lines":["    "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"remove","lines":["    "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":4},"action":"remove","lines":["    "]},{"start":{"row":55,"column":0},"end":{"row":55,"column":4},"action":"remove","lines":["    "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":4},"action":"remove","lines":["    "]},{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"remove","lines":["    "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":4},"action":"remove","lines":["    "]},{"start":{"row":59,"column":0},"end":{"row":59,"column":4},"action":"remove","lines":["    "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":4},"action":"remove","lines":["    "]},{"start":{"row":61,"column":0},"end":{"row":61,"column":4},"action":"remove","lines":["    "]},{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"remove","lines":["    "]},{"start":{"row":63,"column":0},"end":{"row":63,"column":4},"action":"remove","lines":["    "]},{"start":{"row":64,"column":0},"end":{"row":64,"column":4},"action":"remove","lines":["    "]},{"start":{"row":66,"column":0},"end":{"row":66,"column":4},"action":"remove","lines":["    "]},{"start":{"row":67,"column":0},"end":{"row":67,"column":4},"action":"remove","lines":["    "]},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"remove","lines":["    "]},{"start":{"row":69,"column":0},"end":{"row":69,"column":4},"action":"remove","lines":["    "]},{"start":{"row":70,"column":0},"end":{"row":70,"column":4},"action":"remove","lines":["    "]},{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"remove","lines":["    "]},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":6},"end":{"row":48,"column":0},"action":"insert","lines":["",""]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":0},"end":{"row":101,"column":0},"action":"remove","lines":["        var defaultWorkspaceDom = Blockly.Xml.textToDom(","            '<xml><block type=\"gridworld_start\" deletable=\"false\" ' +","            'moveble=\"false\" x=\"200\" y=\"10\"></block></xml>');",""]}]}],[{"group":"doc","deltas":[{"start":{"row":97,"column":8},"end":{"row":98,"column":8},"action":"remove","lines":["","        "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":14},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":4},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":4},"end":{"row":17,"column":0},"action":"insert","lines":["        var defaultWorkspaceDom = Blockly.Xml.textToDom(","            '<xml><block type=\"gridworld_start\" deletable=\"false\" ' +","            'moveble=\"false\" x=\"200\" y=\"10\"></block></xml>');",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"remove","lines":["    "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"remove","lines":["    "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"remove","lines":["    "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"remove","lines":["    "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["    "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"remove","lines":["    "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"remove","lines":["    "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["    "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["    "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":4},"action":"remove","lines":["    "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"remove","lines":["    "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":8},"end":{"row":82,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":9},"end":{"row":82,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":9},"end":{"row":82,"column":10},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":8},"end":{"row":82,"column":9},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":100,"column":0},"end":{"row":101,"column":0},"action":"remove","lines":["            console.log('Lv', level);",""]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":52},"end":{"row":83,"column":53},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":51},"end":{"row":83,"column":52},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":50},"end":{"row":83,"column":51},"action":"remove","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":49},"end":{"row":83,"column":50},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":48},"end":{"row":83,"column":49},"action":"remove","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":47},"end":{"row":83,"column":48},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":46},"end":{"row":83,"column":47},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":45},"end":{"row":83,"column":46},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":44},"end":{"row":83,"column":45},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":43},"end":{"row":83,"column":44},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":43},"end":{"row":83,"column":44},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":44},"end":{"row":83,"column":45},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":45},"end":{"row":83,"column":46},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":46},"end":{"row":83,"column":47},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":47},"end":{"row":83,"column":48},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":48},"end":{"row":83,"column":49},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":49},"end":{"row":83,"column":50},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":50},"end":{"row":83,"column":51},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":51},"end":{"row":83,"column":52},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":52},"end":{"row":83,"column":53},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":0},"end":{"row":79,"column":0},"action":"remove","lines":["","    var resetLevel = function () {","        console.log('reset');","        level = game.setLevel(levelNo);","        ui.toggleButton('gobutton', true);","        ui.toggleButton('nextbutton', false);","        ui.toggleButton('resetbutton', false);","    };",""]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":32},"end":{"row":47,"column":33},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":33},"end":{"row":47,"column":34},"action":"insert","lines":["&"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":34},"end":{"row":47,"column":35},"action":"insert","lines":["&"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":35},"end":{"row":47,"column":36},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":36},"end":{"row":47,"column":37},"action":"insert","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":37},"end":{"row":47,"column":38},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":38},"end":{"row":47,"column":39},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":39},"end":{"row":47,"column":40},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":40},"end":{"row":47,"column":41},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":41},"end":{"row":47,"column":42},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":42},"end":{"row":47,"column":43},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":43},"end":{"row":47,"column":44},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":44},"end":{"row":47,"column":45},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":45},"end":{"row":47,"column":46},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":46},"end":{"row":47,"column":47},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":0},"end":{"row":20,"column":4},"action":"remove","lines":["","    ","    //console.log('GI', Phaser, Interpreter);","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":39},"end":{"row":53,"column":0},"action":"insert","lines":["",""]},{"start":{"row":53,"column":0},"end":{"row":53,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":8},"end":{"row":53,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":9},"end":{"row":53,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":10},"end":{"row":53,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":11},"end":{"row":53,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":12},"end":{"row":53,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":13},"end":{"row":53,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":14},"end":{"row":53,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":15},"end":{"row":53,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":16},"end":{"row":53,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":17},"end":{"row":53,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":18},"end":{"row":53,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":19},"end":{"row":53,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":20},"end":{"row":53,"column":21},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":21},"end":{"row":53,"column":22},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":22},"end":{"row":53,"column":23},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":23},"end":{"row":53,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":24},"end":{"row":53,"column":25},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":26},"end":{"row":53,"column":27},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":26},"end":{"row":53,"column":27},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":26},"end":{"row":53,"column":27},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":54,"column":0},"action":"remove","lines":["        console.log(level);",""]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":9},"end":{"row":48,"column":9},"action":"remove","lines":[" else {","            console.log('Too bad');","        }"]}]}]]},"ace":{"folds":[],"scrolltop":360,"scrollleft":0,"selection":{"start":{"row":46,"column":9},"end":{"row":46,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":24,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1420931719774,"hash":"372e6b82a2570a4d2d1987d7f3ddd43a5bac02c0"}