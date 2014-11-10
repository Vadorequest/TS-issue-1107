///<reference path='lib/def/defLoader.d.ts'/>
define(["require", "exports", './Cli'], function (require, exports, cli) {
    var Cli = cli.Cli;
    /**
     * Tool to manage Sails tasks.
     */
    var Sails = (function () {
        function Sails() {
        }
        /**
         * Run sails.
         */
        Sails.lift = function () {
            Cli.windows('cd webservice && sails lift', [], function (command, args) {
                console.log('Sails webservice is starting...');
            }, function (command, args, env) {
                console.error('WEBSERVICE ------------- Sails webservice could not be started automatically, probably due the UNIX environment. ---------------');
                console.error('WEBSERVICE ------------- You need to start the sails webservice manually: "cd webservice && sails lift" ---------------');
            });
        };
        return Sails;
    })();
    exports.Sails = Sails;
});
//# sourceMappingURL=Sails.js.map