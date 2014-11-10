///<reference path='lib/def/defLoader.d.ts'/>

//import cli = require('./../App/Cli');
import cli = require('./Cli');
var Cli = cli.Cli;

/**
 * Tool to manage Sails tasks.
 */
export class Sails {

    /**
     * Run sails.
     */
    static lift(){
        Cli.windows('cd webservice && sails lift', [], function(command, args){
            console.log('Sails webservice is starting...');

        }, function(command, args, env){
            console.error('WEBSERVICE ------------- Sails webservice could not be started automatically, probably due the UNIX environment. ---------------');
            console.error('WEBSERVICE ------------- You need to start the sails webservice manually: "cd webservice && sails lift" ---------------');
        });
    }
}