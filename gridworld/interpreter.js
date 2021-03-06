/**
 * @file Interface to JS-Interpreter
 */
 
(function (module, exports, Interpreter, Blockly) {
    var defaultWait = 10;
    
    var isRunning;
    var isPaused;
    var game;
    // var collisionHandler;
    // var featureHandler;
    var activeTerp;
    var finishedCallback;

    /** Create environment with "pretty" versions of movements commands to hide 
     * synchronization logic in generated code */
    var baseCode = 
        // Walking (absolute)
        "function walkNorth() {\n" +
        "walk('n');\n" +
        "wait();\n" +
        "}\n" +
        "function walkSouth() {\n" +
        "walk('s');\n" +
        "wait();\n" +
        "}\n" +
        "function walkEast() {\n" +
        "walk('e');\n" +
        "wait();\n" +
        "}\n" +
        "function walkWest() {\n" +
        "walk('w');\n" +
        "wait();\n" +
        "}\n" +
        // Walking (relative)
        "function walkForward() {\n" +
        "walkForwardInternal();\n" +
        "wait();\n" +
        // "if (!t) reportCollision();\n" +
        // "else reportFeatures();\n" +
        "}\n" +
        // Facing (absolute)
        "function faceNorth() {\n" +
        "setFacing('n');\n" +
        "}\n" +
        "function faceEast() {\n" +
        "setFacing('e');\n" +
        "}\n" +
        "function faceSouth() {\n" +
        "setFacing('s');\n" +
        "}\n" +
        "function faceWest() {\n" +
        "setFacing('w');\n" +
        "}\n" +
        // Facing (relative)
        "function turnRight() {\n" +
        "turn(1);\n" +
        "}\n" +
        "function turnLeft() {\n" +
        "turn(-1);\n" +
        "}\n";
        
    /** Setup interface with Phaser layer
     * @param {object} terp - JS-Interpreter
     * @param {object} scope - Scope object for JS terp
     */
    var initEnv = function (terp, scope) {
        // walk
        var wrapper = function (dir) {
            return terp.createPrimitive(game.walk(dir.toString()));
        };
        terp.setProperty(scope, 'walk',
            terp.createNativeFunction(wrapper));
        // reportCollision
        wrapper = function () {
            return game.collision.dispatch();
        };
        terp.setProperty(scope, 'reportCollision',
            terp.createNativeFunction(wrapper));
        // reportFeatures
        wrapper = function () {
            var f = game.getFeatureProperties();
            if (Object.keys(f).length > 0) {
                game.features.dispatch(f);
            }
        };
        terp.setProperty(scope, 'reportFeatures',
            terp.createNativeFunction(wrapper));
        // wait
        wrapper = function () {
            isPaused = true;
            game.actionFinish.addOnce(function () {
                setTimeout(step, 0);
            });
        };
        terp.setProperty(scope, 'wait',
            terp.createNativeFunction(wrapper));
        // highlightBlock
        wrapper = function(id) {
            id = id ? id.toString() : '';
            Blockly.mainWorkspace.highlightBlock(id);
        };
        terp.setProperty(scope, 'highlightBlock',
            terp.createNativeFunction(wrapper));
        // setFacing
        wrapper = function (dir) {
            game.setFacing(dir.toString());
        };
        terp.setProperty(scope, 'setFacing',
            terp.createNativeFunction(wrapper));
        // turn
        wrapper = function (num) {
            game.turn(num.toNumber());
        };
        terp.setProperty(scope, 'turn',
            terp.createNativeFunction(wrapper));
        // walkForwardInternal
        wrapper = function () {
            return terp.createPrimitive(game.walkForward());
        };
        terp.setProperty(scope, 'walkForwardInternal',
            terp.createNativeFunction(wrapper));
    };

/** Import game object into module
 * @param {object} g - Singleton game object
 */
exports.init = function (g) {
    game = g;
};

/** Execute one cycle of JS interpreter */
var step = function () {
    if (!isRunning) {
        if (finishedCallback) {
            finishedCallback(false);
        }
        return;
    }
    isPaused = false;
    if (activeTerp.step()) {
        if (!isPaused) {
            setTimeout(step, defaultWait);
        }
    } else if (finishedCallback) {
        finishedCallback(true);
    }
};

/** Create and start instace of JS Interpreter
 * @param {string} code - Code to run
 * @param {function} cb - Callback to run when interpreter terminates
 */
exports.start = function (code, cb) {
    finishedCallback = cb;
    isRunning = true;
    activeTerp = new Interpreter(baseCode + code, initEnv);
    setTimeout(step ,0);
};

/** Pause interpreter. Resumable. */
exports.pause = function () {
    isPaused = true;
};

/** Resume interpreter */
exports.resume = function () {
    setTimeout(step, 0);
};

/** Stop interpreter. Finished callback will run. */
exports.stop = function () {
    isRunning = false;
};
 
})(module, exports, Interpreter, Blockly);