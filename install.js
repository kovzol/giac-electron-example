var fs_node = require('fs');
var fs = require('file-system');
var child_process = require('child_process');

function spawnSync(cmd, args, opt) {
    var isWindows = /^win/.test(process.platform);

    if ( isWindows ) {
        if ( !args ) args = [];
        args.unshift(cmd.replace(/[/]/g, "\\"));
        args.unshift('/c');
        cmd = process.env.comspec;
    }

    return child_process.spawnSync(cmd, args, opt);
}

var cmd = spawnSync("node_modules/.bin/electron-rebuild");
fs.mkdir('build', [0755], function(err) {});
var giac_node_bin_folder = 'node_modules/giac/bin/';
fs_node.readdirSync(giac_node_bin_folder).forEach(file => {
  console.log("Copying " + giac_node_bin_folder + file + "/giac.node to the build folder");
  fs.copyFile(giac_node_bin_folder + file + '/giac.node', 'build/giac.node', function(err) {
    console.err("Cannot copy file");
    });
})
