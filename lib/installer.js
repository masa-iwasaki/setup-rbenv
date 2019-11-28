"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const exec = __importStar(require("@actions/exec"));
function intallRbenv(options) {
    return __awaiter(this, void 0, void 0, function* () {
        yield exec.exec('sudo', ['git', 'clone', 'https://github.com/rbenv/rbenv.git', options.rbenvRoot]);
        // TODO: Add README that PATH should be set by users
        // await exec.exec('export', ['PATH="$HOME/.rbenv/bin:$PATH"']);
    });
}
exports.intallRbenv = intallRbenv;
;
function installRubyBuild(options) {
    return __awaiter(this, void 0, void 0, function* () {
        // from https://github.com/rbenv/ruby-build/wiki
        const packages = [
            "libreadline6-dev",
            "zlib1g-dev",
            "libncurses5-dev",
            "libffi-dev",
            "libgdbm5",
            "libgdbm-dev"
        ];
        const rubyBuildInstallPath = `${options.rbenvRoot}/plugins/ruby-build`;
        yield exec.exec('sudo', ['apt-get', 'update']);
        yield exec.exec('sudo', ['apt-get', 'install', '-y', ...packages]);
        yield exec.exec('sudo', ['git', 'clone', 'https://github.com/rbenv/ruby-build.git', rubyBuildInstallPath]);
        yield exec.exec('sudo', ['chown', '-R', options.rbenvRootOwner, options.rbenvRoot]);
    });
}
exports.installRubyBuild = installRubyBuild;
;
