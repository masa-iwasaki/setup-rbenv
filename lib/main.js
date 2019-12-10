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
const core = __importStar(require("@actions/core"));
const installer = __importStar(require("./installer"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (process.platform !== 'linux') {
                core.error(`Not a supported platform. Only Linux is supported.`);
            }
            let options = {
                rbenvRoot: "/home/runner/.rbenv",
                rbenvRootOwner: "runner"
            };
            let rbenvRoot = core.getInput('rbenv_root');
            let rbenvRootOwner = core.getInput('rbenv_root_owner');
            if (!!rbenvRoot) {
                options.rbenvRoot = rbenvRoot;
            }
            if (!!rbenvRootOwner) {
                options.rbenvRootOwner = rbenvRootOwner;
            }
            yield installer.intallRbenv(options);
            yield installer.installRubyBuild(options);
            core.exportVariable('RBENV_ROOT', options.rbenvRoot);
            core.addPath(`${options.rbenvRoot}/bin`);
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
